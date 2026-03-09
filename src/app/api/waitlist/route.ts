import { resend } from '@/lib/resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, source = 'hero' } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Add to Resend audience
    await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
      unsubscribed: false,
    });

    // Send welcome email
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: 'The vault opens April 1 — your free skill is inside 🔐',
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto;
                    background: #0b0a07; color: #e8e0d0; padding: 48px 40px;">
          <div style="font-family: monospace; font-size: 11px;
                      letter-spacing: 0.15em; color: #d4820a;
                      text-transform: uppercase; margin-bottom: 32px;">
            claudemddirectory.com
          </div>
          <h1 style="font-size: 28px; font-weight: 700;
                     line-height: 1.2; margin-bottom: 24px;
                     color: #f0a832;">
            You're in the vault.
          </h1>
          <p style="font-size: 17px; color: #9b9284;
                    line-height: 1.7; margin-bottom: 20px;">
            The claude.md directory opens <strong style="color: #e8e0d0;">
            April 1, 2026.</strong> You're on the early access list.
          </p>
          <p style="font-size: 17px; color: #9b9284;
                    line-height: 1.7; margin-bottom: 32px;">
            Early subscribers get the <strong style="color: #e8e0d0;">
            Solopreneur Skill Pack</strong> — 10 curated skills —
            free on launch day.
          </p>
          <div style="background: #1a1813; border: 1px solid #3d3830;
                      border-left: 3px solid #d4820a; border-radius: 4px;
                      padding: 24px; margin-bottom: 32px;">
            <div style="font-family: monospace; font-size: 10px;
                        color: #d4820a; letter-spacing: 0.15em;
                        text-transform: uppercase; margin-bottom: 12px;">
              // your free skill — no strings
            </div>
            <p style="font-size: 15px; color: #e8e0d0;
                      margin-bottom: 16px; line-height: 1.6;">
              <strong>weekly-linkedin-researcher</strong> — researches
              Claude Code automations with real ROI and drafts
              LinkedIn-ready posts. Install it in Claude Code today.
            </p>
            <a href="${process.env.NEXT_PUBLIC_APP_URL}#free-skill"
               style="display: inline-block; background: #d4820a;
                      color: #0b0a07; font-family: monospace;
                      font-size: 12px; font-weight: 700;
                      letter-spacing: 0.08em; text-transform: uppercase;
                      padding: 12px 24px; border-radius: 2px;
                      text-decoration: none;">
              Copy the Skill →
            </a>
          </div>
          <p style="font-size: 13px; color: #6b6455; line-height: 1.7;">
            See you April 1.<br/>
            — The claude.md directory team
          </p>
          <div style="margin-top: 40px; padding-top: 24px;
                      border-top: 1px solid #1a1813; font-family: monospace;
                      font-size: 10px; color: #3d3830;">
            claudemddirectory.com ·
            <a href="#" style="color: #3d3830;">unsubscribe</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: unknown) {
    const err = error as { statusCode?: number; message?: string };
    if (err?.statusCode === 422 || err?.message?.includes('already exists')) {
      return NextResponse.json({ success: true });
    }
    console.error('Waitlist error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
