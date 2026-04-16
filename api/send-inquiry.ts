import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed." });

  const { name, email, subject, message } = req.body as {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const { data, error } = await resend.emails.send({
    from: "SIARIA LABS <hello@siarialabs.com>",
    to: ["inbox@siarialabs.com"],
    reply_to: email,
    subject: `New Inquiry: ${subject} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111;">
        <h2 style="margin-bottom:4px;">New Inquiry from SIARIA LABS</h2>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0;" />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      </div>
    `,
  });

  if (error) {
    console.error("[send-inquiry] Resend error:", JSON.stringify(error));
    return res.status(500).json({ error: (error as { message?: string }).message ?? JSON.stringify(error) });
  }

  console.log("[send-inquiry] Email sent:", data);
  return res.status(200).json({ ok: true });
}
