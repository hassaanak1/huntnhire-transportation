import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = (req.body ?? {}) as {
    name?: string;
    email?: string;
    phone?: string;
    subject?: string;
    message?: string;
  };

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const token = process.env.MAILTRAP_API_TOKEN;
  const senderEmail = process.env.SENDER_EMAIL;
  const receiverEmail = process.env.RECEIVER_EMAIL;

  if (!token || !senderEmail || !receiverEmail) {
    console.error("Missing Mailtrap environment variables");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
      <div style="background: #111; padding: 24px 32px; margin-bottom: 24px;">
        <h1 style="color: #c9a84c; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">
          HuntnHire — New Contact
        </h1>
      </div>
      <div style="padding: 0 32px 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${email}" style="color: #c9a84c;">${email}</a></td>
          </tr>
          ${phone ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Subject</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: 600;">${subject}</td>
          </tr>
        </table>
        <div style="margin-top: 24px;">
          <p style="color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Message</p>
          <div style="background: #f9fafb; border-left: 3px solid #c9a84c; padding: 16px 20px; white-space: pre-wrap; line-height: 1.6;">${message}</div>
        </div>
        <p style="margin-top: 32px; font-size: 12px; color: #9ca3af;">
          Reply directly to <a href="mailto:${email}" style="color: #c9a84c;">${email}</a> to respond.
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
        from: { email: senderEmail, name: "HuntnHire Website" },
        to: [{ email: receiverEmail }],
        reply_to: { email, name },
        subject: `Contact: ${subject} — ${name}`,
        html,
      }),
    });

    if (!mailtrapRes.ok) {
      const err = await mailtrapRes.text();
      console.error("Mailtrap error:", err);
      return res.status(502).json({ error: "Failed to send email" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
