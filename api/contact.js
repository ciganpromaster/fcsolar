/**
 * FC Solar — Vercel Serverless Contact Form Handler
 * Replaces contact.php for Vercel deployment.
 *
 * Setup (one-time):
 *   1. Sign up free at https://resend.com
 *   2. In Vercel dashboard → Project → Settings → Environment Variables
 *      add: RESEND_API_KEY = re_xxxxxxxxxx  (from Resend dashboard)
 *   3. Optional: verify fotovoltikaslovensko.com in Resend to send FROM your domain
 */

export default async function handler(req, res) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const {
    name = '',
    email = '',
    phone = '',
    website = '',   // honeypot field — must be empty
  } = req.body || {};

  // Determine redirect origin (strip any existing query params)
  const referer = (req.headers.referer || '/').split('?')[0];
  const isEN = referer.includes('/en');

  // Honeypot: bots fill this field, humans don't see it
  if (website.trim()) {
    return res.redirect(302, referer + '?success=1');
  }

  // Basic validation
  if (!name.trim() || !email.includes('@')) {
    return res.redirect(302, referer + '?error=validation');
  }

  const subject = isEN
    ? `New solar enquiry from: ${name}`
    : `Nový dopyt o fotovoltaiku od: ${name}`;

  const phoneRow = phone.trim()
    ? `<tr><td style="padding:6px 12px;color:#6b7280;font-weight:600;">Telefón / Phone</td>
       <td style="padding:6px 12px;">${phone}</td></tr>`
    : '';

  const html = `
<!DOCTYPE html><html lang="sk"><head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0"
             style="background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08);">
        <tr>
          <td style="background:linear-gradient(135deg,#064e3b,#10b981);padding:28px 32px;">
            <h1 style="margin:0;color:#fff;font-size:22px;">FC Solar</h1>
            <p style="margin:4px 0 0;color:#a7f3d0;font-size:13px;">fotovoltikaslovensko.com</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 8px;color:#111827;font-size:18px;">
              ${isEN ? 'New enquiry from' : 'Nový dopyt od'}:
              <span style="color:#10b981;">${name}</span>
            </h2>
            <p style="margin:0 0 24px;color:#6b7280;font-size:14px;">
              ${isEN ? 'Submitted via fotovoltikaslovensko.com' : 'Odoslané cez fotovoltikaslovensko.com'}
            </p>
            <table width="100%" cellpadding="0" cellspacing="0"
                   style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:6px 12px;color:#6b7280;font-weight:600;width:160px;">Meno / Name</td>
                <td style="padding:6px 12px;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #e5e7eb;">
                <td style="padding:6px 12px;color:#6b7280;font-weight:600;">E-mail</td>
                <td style="padding:6px 12px;">
                  <a href="mailto:${email}" style="color:#10b981;">${email}</a>
                </td>
              </tr>
              ${phoneRow}
            </table>
            <p style="margin:24px 0 0;font-size:13px;color:#9ca3af;">
              ${isEN
      ? 'Reply directly to this email to reach the client.'
      : 'Odpovedzte priamo na tento e-mail — správa bude doručená klientovi.'}
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:11px;color:#9ca3af;text-align:center;">
              © 2026 FC Solar s.r.o. · fotovoltikaslovensko.com
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'FC Solar <info@fotovoltikaslovensko.com>',
        to: ['ahoj.projekty@gmail.com'],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (response.ok) {
      return res.redirect(302, referer + '?success=1');
    } else {
      const err = await response.json();
      console.error('Resend error:', err);
      return res.redirect(302, referer + '?error=mail');
    }
  } catch (err) {
    console.error('Handler error:', err);
    return res.redirect(302, referer + '?error=mail');
  }
}
