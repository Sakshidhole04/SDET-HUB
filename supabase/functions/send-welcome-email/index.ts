import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email } = await req.json();
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'TestForge <onboarding@resend.dev>',
        to: [email],
        subject: `Welcome to TestForge, ${name}! 🎓`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f7ff;border-radius:16px;">
            <div style="text-align:center;margin-bottom:24px;">
              <h1 style="color:#7c3aed;font-size:28px;margin:0;">🎓 TestForge</h1>
              <p style="color:#7c6fa0;margin:4px 0 0;">Master SDET & Dev Skills. Free.</p>
            </div>
            <div style="background:#fff;border-radius:12px;padding:28px;border:1px solid rgba(196,181,253,0.3);">
              <h2 style="color:#2d1f6e;margin-top:0;">Welcome, ${name}! 🎉</h2>
              <p style="color:#4b4580;line-height:1.6;">
                Your TestForge account has been created successfully. You now have access to:
              </p>
              <ul style="color:#4b4580;line-height:2;">
                <li>✏️ <strong>SDET</strong> — Selenium, TestNG, and more</li>
                <li>☕ <strong>Java</strong> — Core Java & OOP</li>
                <li>🐍 <strong>Python</strong> — Python fundamentals</li>
                <li>🗄️ <strong>SQL</strong> — Database queries</li>
              </ul>
              <div style="text-align:center;margin-top:28px;">
                <a href="https://sakshidhole04.github.io/SDET-HUB/"
                   style="background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">
                  Start Learning →
                </a>
              </div>
            </div>
            <p style="text-align:center;color:#9ca3af;font-size:12px;margin-top:20px;">
              You received this because you signed up at TestForge.<br/>
              Account email: ${email}
            </p>
          </div>
        `,
      }),
    });

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
