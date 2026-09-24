import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      objective,
      portfolioSize,
      date,
      time,
      mode,
      notes,
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    const advisorEmail = process.env.ADVISOR_EMAIL || process.env.SMTP_USER || 'concierge@vikramadityaroy.com';

    // Advisor Notification HTML Template
    const advisorHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050814; color: #F8FAFC; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #0A1128; border: 1px solid #D4AF37; border-radius: 16px; overflow: hidden; }
          .header { background: linear-gradient(135deg, #070D20 0%, #0F172A 100%); padding: 24px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); text-align: center; }
          .header h1 { font-family: Georgia, serif; color: #D4AF37; margin: 0; font-size: 20px; letter-spacing: 1px; }
          .header p { color: #94A3B8; font-size: 11px; text-transform: uppercase; margin-top: 4px; font-mono: monospace; }
          .badge { display: inline-block; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #10B981; font-size: 10px; font-weight: bold; padding: 4px 10px; rounded: 20px; text-transform: uppercase; margin-bottom: 10px; }
          .content { padding: 24px; }
          .item { margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #1E293B; }
          .label { font-size: 11px; text-transform: uppercase; color: #94A3B8; letter-spacing: 0.5px; margin-bottom: 4px; }
          .value { font-size: 15px; color: #F8FAFC; font-weight: 600; }
          .value-gold { color: #D4AF37; font-weight: bold; }
          .value-emerald { color: #10B981; font-family: monospace; font-weight: bold; }
          .cta-box { background: #070D20; border: 1px solid #1E293B; border-radius: 12px; padding: 16px; margin-top: 20px; text-align: center; }
          .button { display: inline-block; background: linear-gradient(135deg, #E6CA65 0%, #D4AF37 50%, #C5A059 100%); color: #0A1128; font-weight: bold; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-size: 12px; text-transform: uppercase; margin-top: 10px; }
          .footer { padding: 16px; background: #040711; text-align: center; font-size: 10px; color: #64748B; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <span class="badge">● New HNW Strategy Mandate</span>
            <h1>Vikramaditya Roy | Private Wealth Office</h1>
            <p>Direct Executive Strategy Booking</p>
          </div>
          <div class="content">
            <div class="item">
              <div class="label">Client Full Name / Entity</div>
              <div class="value">${name}</div>
            </div>
            <div class="item">
              <div class="label">Contact Direct</div>
              <div class="value">
                <a href="mailto:${email}" style="color: #38BDF8; text-decoration: none;">${email}</a> | 
                <a href="tel:${phone}" style="color: #D4AF37; text-decoration: none;">${phone}</a>
              </div>
            </div>
            <div class="item">
              <div class="label">Selected Advisory Mandate</div>
              <div class="value-gold">${objective || 'HNW Portfolio Optimization & Alpha'}</div>
            </div>
            <div class="item">
              <div class="label">Deployable Portfolio Scale</div>
              <div class="value-emerald">${portfolioSize || '₹5 Cr – ₹15 Cr'}</div>
            </div>
            <div class="item">
              <div class="label">Scheduled Date & Time Slot</div>
              <div class="value" style="color: #FDE047;">${date}, ${time}</div>
            </div>
            <div class="item">
              <div class="label">Session Format / Location</div>
              <div class="value">${mode || 'Encrypted Video (Zoom / Google Meet)'}</div>
            </div>
            ${notes ? `
            <div class="item">
              <div class="label">Client Notes & Context</div>
              <div class="value" style="font-size: 13px; color: #CBD5E1;">${notes}</div>
            </div>` : ''}
            <div class="cta-box">
              <div class="label">Instant Action Touchpoint</div>
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(`Hi ${name}, confirming your Private Strategy Session with Vikramaditya Roy for ${date} at ${time}.`)}" class="button">
                Open WhatsApp Dialogue
              </a>
            </div>
          </div>
          <div class="footer">
            Confidential Fiduciary Ingestion • SEBI RIA INA00019482
          </div>
        </div>
      </body>
      </html>
    `;

    // Client Confirmation HTML Template
    const clientHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #050814; color: #F8FAFC; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #0A1128; border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 16px; overflow: hidden; }
          .header { background: #070D20; padding: 28px; border-bottom: 1px solid rgba(212, 175, 55, 0.2); text-align: center; }
          .header h1 { font-family: Georgia, serif; color: #D4AF37; margin: 0; font-size: 22px; }
          .header p { color: #94A3B8; font-size: 12px; margin-top: 6px; }
          .content { padding: 28px; font-size: 14px; line-height: 1.6; color: #E2E8F0; }
          .summary-card { background: #070D20; border: 1px solid #1E293B; border-radius: 12px; padding: 18px; margin: 20px 0; }
          .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px; }
          .footer { padding: 20px; background: #040711; text-align: center; font-size: 11px; color: #64748B; border-top: 1px solid #1E293B; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Vikramaditya Roy</h1>
            <p>Private Wealth & Multi-Family Office Advisory</p>
          </div>
          <div class="content">
            <p>Dear <strong>${name}</strong>,</p>
            <p>Your confidential private strategy review has been registered with Vikramaditya Roy's executive desk.</p>
            
            <div class="summary-card">
              <div style="color: #D4AF37; font-weight: bold; margin-bottom: 12px; font-size: 14px;">Session Reservation Summary</div>
              <div style="margin-bottom: 8px;"><strong>Mandate:</strong> ${objective}</div>
              <div style="margin-bottom: 8px;"><strong>Scheduled Time:</strong> <span style="color: #FDE047;">${date}, ${time}</span></div>
              <div style="margin-bottom: 8px;"><strong>Session Channel:</strong> ${mode}</div>
              <div><strong>Portfolio Bracket:</strong> ${portfolioSize}</div>
            </div>

            <p style="font-size: 13px; color: #94A3B8;">
              Our private office will send the encrypted video link and preliminary briefing dossier directly to your email and WhatsApp ahead of our scheduled call.
            </p>
            
            <p style="font-size: 12px; color: #D4AF37; margin-top: 24px;">
              Direct Priority Line: +91 (022) 6900-ROY | concierge@vikramadityaroy.com
            </p>
          </div>
          <div class="footer">
            Strict Non-Disclosure Protocol • SEBI Registered Investment Advisor (INA00019482) • CFA Charterholder
          </div>
        </div>
      </body>
      </html>
    `;

    // Send emails if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Send Email to Advisor
      await transporter.sendMail({
        from: `"Private Wealth Desk" <${smtpUser}>`,
        to: advisorEmail,
        replyTo: email,
        subject: `[New Strategy Mandate] ${name} - ${objective} (${portfolioSize})`,
        html: advisorHtml,
      });

      // 2. Send Confirmation Email to Client
      await transporter.sendMail({
        from: `"Vikramaditya Roy | Private Wealth Office" <${smtpUser}>`,
        to: email,
        subject: `Private Strategy Session Reserved - Vikramaditya Roy`,
        html: clientHtml,
      });

      return NextResponse.json({
        success: true,
        message: 'Emails dispatched successfully to both advisor and client.',
        mode: 'smtp',
      });
    }

    // If SMTP credentials not provided yet, log formatted lead and return success
    console.log('----------------------------------------------------');
    console.log('📌 [NEW STRATEGY MANDATE RECEIVED]');
    console.log(`Client: ${name} (${email}, ${phone})`);
    console.log(`Mandate: ${objective}`);
    console.log(`Portfolio: ${portfolioSize}`);
    console.log(`Schedule: ${date} at ${time}`);
    console.log(`Channel: ${mode}`);
    if (notes) console.log(`Notes: ${notes}`);
    console.log('----------------------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Booking logged successfully. Add SMTP credentials to .env.local to send live emails.',
      mode: 'logged',
    });
  } catch (error: any) {
    console.error('Error handling booking submission:', error);
    return NextResponse.json(
      { error: 'Failed to process booking submission.', details: error?.message },
      { status: 500 }
    );
  }
}
