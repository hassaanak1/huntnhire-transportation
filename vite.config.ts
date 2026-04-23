import path from "node:path";
import type { IncomingMessage, ServerResponse } from "node:http";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv, type Plugin } from "vite";

/* ─── body / response helpers ─────────────────────────────────────────────── */

function readBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve) => {
    let raw = "";
    req.on("data", (chunk: Buffer) => { raw += chunk.toString(); });
    req.on("end", () => {
      try { resolve(JSON.parse(raw) as Record<string, unknown>); }
      catch { resolve({}); }
    });
  });
}

function send(res: ServerResponse, status: number, data: unknown): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
}

/* ─── email HTML helpers ───────────────────────────────────────────────────── */

function emailRow(label: string, val: string | number | undefined): string {
  const cellBase = "padding:10px 0;border-bottom:1px solid #e5e7eb";
  return `<tr>
    <td style="${cellBase};color:#6b7280;width:160px;font-size:12px;text-transform:uppercase;letter-spacing:1px;vertical-align:top">${label}</td>
    <td style="${cellBase};font-weight:500">${String(val ?? "—")}</td>
  </tr>`;
}

function emailSection(title: string, rows: string): string {
  return `<h2 style="font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#6b7280;margin:24px 0 4px">${title}</h2>
    <table style="width:100%;border-collapse:collapse;margin-bottom:8px">${rows}</table>`;
}

function emailWrap(heading: string, inner: string): string {
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a1a">
    <div style="background:#111;padding:24px 32px;margin-bottom:24px">
      <h1 style="color:#c9a84c;margin:0;font-size:20px;letter-spacing:2px;text-transform:uppercase">HuntnHire — ${heading}</h1>
    </div>
    <div style="padding:0 32px 32px">${inner}</div>
  </div>`;
}

/* ─── Mailtrap sender ─────────────────────────────────────────────────────── */

async function mailtrap(
  token: string,
  payload: Record<string, unknown>,
): Promise<boolean> {
  try {
    const r = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!r.ok) console.error("[mailtrap]", await r.text());
    return r.ok;
  } catch (e) {
    console.error("[mailtrap] fetch error:", e);
    return false;
  }
}

/* ─── local API middleware plugin ─────────────────────────────────────────── */

function apiDevPlugin(env: Record<string, string>): Plugin {
  const token = env.MAILTRAP_API_TOKEN ?? "";
  const from = env.SENDER_EMAIL ?? "";
  const to = env.RECEIVER_EMAIL ?? "";

  if (!token || !from || !to) {
    console.warn(
      "[api] MAILTRAP_API_TOKEN / SENDER_EMAIL / RECEIVER_EMAIL missing from .env — forms will return 500 in dev",
    );
  }

  return {
    name: "api-dev-routes",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req as IncomingMessage).url?.split("?")[0];

        if (url !== "/api/contact" && url !== "/api/booking") return next();

        const body = await readBody(req as IncomingMessage);
        const s = res as unknown as ServerResponse;

        /* ── /api/contact ── */
        if (url === "/api/contact") {
          const { name, email, phone, subject, message } = body as {
            name?: string; email?: string; phone?: string;
            subject?: string; message?: string;
          };
          if (!name || !email || !subject || !message)
            return send(s, 400, { error: "Missing required fields" });

          const html = emailWrap("New Contact", `
            <table style="width:100%;border-collapse:collapse">
              ${emailRow("Name", name)}
              ${emailRow("Email", email)}
              ${phone ? emailRow("Phone", phone) : ""}
              ${emailRow("Subject", subject)}
            </table>
            <div style="margin-top:24px">
              <p style="color:#6b7280;font-size:13px;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Message</p>
              <div style="background:#f9fafb;border-left:3px solid #c9a84c;padding:16px 20px;white-space:pre-wrap;line-height:1.6">${message}</div>
            </div>
          `);

          const ok = await mailtrap(token, {
            from: { email: from, name: "HuntnHire Website" },
            to: [{ email: to }],
            reply_to: { email, name },
            subject: `Contact: ${subject} — ${name}`,
            html,
          });
          return send(s, ok ? 200 : 502, ok ? { success: true } : { error: "Failed to send email" });
        }

        /* ── /api/booking ── */
        if (url === "/api/booking") {
          const b = body as {
            fullName?: string; email?: string; phone?: string;
            eventDate?: string; eventType?: string;
            pickupTime?: string; pickupAddress?: string; stopsAddress?: string;
            destinationAddress?: string; dropoffTime?: string;
            passengers?: number; hoursNeeded?: number;
            vehicleNeeded?: string; specialRequests?: string;
          };
          if (
            !b.fullName || !b.email || !b.phone || !b.eventDate ||
            !b.eventType || !b.pickupTime || !b.pickupAddress ||
            !b.destinationAddress || !b.dropoffTime || !b.vehicleNeeded
          ) return send(s, 400, { error: "Missing required fields" });

          const hours = `${b.hoursNeeded ?? 1} hour${(b.hoursNeeded ?? 1) !== 1 ? "s" : ""}`;

          const html = emailWrap("New Booking Request", `
            ${emailSection("Client",
              emailRow("Full Name", b.fullName) +
              emailRow("Email", b.email) +
              emailRow("Phone", b.phone)
            )}
            ${emailSection("Event",
              emailRow("Event Type", b.eventType) +
              emailRow("Event Date", b.eventDate) +
              emailRow("Vehicle", b.vehicleNeeded) +
              emailRow("Passengers", b.passengers) +
              emailRow("Hours Needed", hours)
            )}
            ${emailSection("Trip",
              emailRow("Pickup Time", b.pickupTime) +
              emailRow("Pickup Address", b.pickupAddress) +
              (b.stopsAddress ? emailRow("Stops", b.stopsAddress) : "") +
              emailRow("Drop-off Time", b.dropoffTime) +
              emailRow("Destination", b.destinationAddress)
            )}
            ${b.specialRequests ? `
              <h2 style="font-size:13px;text-transform:uppercase;letter-spacing:2px;color:#6b7280;margin:24px 0 8px">Special Requests</h2>
              <div style="background:#f9fafb;border-left:3px solid #c9a84c;padding:14px 18px;white-space:pre-wrap;line-height:1.6">${b.specialRequests}</div>
            ` : ""}
            <p style="margin-top:24px;font-size:12px;color:#9ca3af">
              Reply to <a href="mailto:${b.email}" style="color:#c9a84c">${b.email}</a> or call
              <a href="tel:${b.phone}" style="color:#c9a84c">${b.phone}</a>.
            </p>
          `);

          const ok = await mailtrap(token, {
            from: { email: from, name: "HuntnHire Booking" },
            to: [{ email: to }],
            reply_to: { email: b.email, name: b.fullName },
            subject: `Booking: ${b.eventType} on ${b.eventDate} — ${b.fullName}`,
            html,
          });
          return send(s, ok ? 200 : 502, ok ? { success: true } : { error: "Failed to send email" });
        }

        next();
      });
    },
  };
}

/* ─── Vite config ─────────────────────────────────────────────────────────── */

export default defineConfig(({ mode }) => {
  // loadEnv with "" prefix loads ALL vars (not just VITE_) into the plugin
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      host: "0.0.0.0",
      port: 5173,
      allowedHosts: true,
      hmr: { overlay: false },
    },
    plugins: [react(), tailwindcss(), apiDevPlugin(env)],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
    },
  };
});
