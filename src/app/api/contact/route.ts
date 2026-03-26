import { NextResponse } from 'next/server';

// Email notification via Resend (https://resend.com)
// Set RESEND_API_KEY in your .env.local to enable
// Alternatively, swap this for EmailJS, SendGrid, or any email service

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, ageRange, coverageInterest, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !ageRange || !coverageInterest) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      // Send email via Resend
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'HWG Website <leads@thehealthandwealthgroup.com>',
          to: ['carolyn@thehealthandwealthgroup.com'],
          subject: `New Lead: ${name} — ${coverageInterest}`,
          html: `
            <h2>New Lead from HWG Website</h2>
            <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
              <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;">${email}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${phone}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Age Range:</td><td style="padding: 8px;">${ageRange}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Coverage Interest:</td><td style="padding: 8px;">${coverageInterest}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Message:</td><td style="padding: 8px;">${message || 'N/A'}</td></tr>
            </table>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from HWG Landing Page</p>
          `,
        }),
      });
    } else {
      // Fallback: log the lead (replace with your preferred method)
      console.log('📩 New lead (no RESEND_API_KEY set):', { name, email, phone, ageRange, coverageInterest, message });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
