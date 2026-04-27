import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    fullName,
    email,
    phone,
    eventDate,
    eventType,
    pickupTime,
    pickupAddress,
    stopsAddress,
    destinationAddress,
    dropoffTime,
    passengers,
    hoursNeeded,
    vehicleNeeded,
    specialRequests,
  } = (req.body ?? {}) as {
    fullName?: string;
    email?: string;
    phone?: string;
    eventDate?: string;
    eventType?: string;
    pickupTime?: string;
    pickupAddress?: string;
    stopsAddress?: string;
    destinationAddress?: string;
    dropoffTime?: string;
    passengers?: number;
    hoursNeeded?: number;
    vehicleNeeded?: string;
    specialRequests?: string;
  };

  if (
    !fullName ||
    !email ||
    !phone ||
    !eventDate ||
    !eventType ||
    !pickupTime ||
    !pickupAddress ||
    !destinationAddress ||
    !dropoffTime ||
    !vehicleNeeded
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const token = process.env.MAILTRAP_API_TOKEN;
  const senderEmail = process.env.SENDER_EMAIL;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!token || !senderEmail || !receiverEmail) {
    console.error("Missing Mailtrap environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 160px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">${label}</td>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 500;">${value}</td>
    </tr>`;

  const section = (title: string, rows: string) => `
    <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #6b7280; margin: 24px 0 4px;">${title}</h2>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">${rows}</table>`;

  const hoursLabel = `${hoursNeeded} hour${hoursNeeded !== 1 ? "s" : ""}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #111; padding: 24px 32px; margin-bottom: 24px;">
        <h1 style="color: #c9a84c; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">
          Hunt&Hire — New Booking Request
        </h1>
      </div>
      <div style="padding: 0 32px 32px;">
        ${section(
          "Client",
          row("Full Name", fullName) +
          row("Email", `<a href="mailto:${email}" style="color:#c9a84c;">${email}</a>`) +
          row("Phone", phone),
        )}
        ${section(
          "Event",
          row("Event Type", eventType) +
          row("Event Date", eventDate) +
          row("Vehicle", vehicleNeeded) +
          row("Passengers", String(passengers ?? "—")) +
          row("Hours Needed", hoursLabel),
        )}
        ${section(
          "Trip",
          row("Pickup Time", pickupTime) +
          row("Pickup Address", pickupAddress) +
          (stopsAddress ? row("Stops", stopsAddress) : "") +
          row("Drop-off Time", dropoffTime) +
          row("Destination", destinationAddress),
        )}
        ${specialRequests ? `
          <h2 style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; color: #6b7280; margin: 24px 0 8px;">Special Requests</h2>
          <div style="background: #f9fafb; border-left: 3px solid #c9a84c; padding: 14px 18px; white-space: pre-wrap; line-height: 1.6;">${specialRequests}</div>
        ` : ""}
        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
          Reply to <a href="mailto:${email}" style="color: #c9a84c;">${email}</a> or call
          <a href="tel:${phone}" style="color: #c9a84c;">${phone}</a> to confirm.
        </p>
      </div>
    </div>
  `;

  try {
    const mailtrapRes = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: senderEmail, name: "Hunt&Hire Booking" },
        to: [{ email: receiverEmail }],
        reply_to: { email, name: fullName },
        subject: `Booking: ${eventType} on ${eventDate} — ${fullName}`,
        html,
        headers: {
          "X-Priority": "1",
          "X-MSMail-Priority": "High",
          "Importance": "high",
        },
      }),
    });

    if (!mailtrapRes.ok) {
      const err = await mailtrapRes.text();
      console.error("Mailtrap error:", err);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Booking handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
