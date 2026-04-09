import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

function generateToken(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 48; i++) {
    token += chars[Math.floor(Math.random() * chars.length)];
  }
  return token;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
    const SERVICE_KEY  = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const BREVO_KEY    = Deno.env.get('BREVO_API_KEY')!;

    // Lookup user via REST API
    const lookupRes = await fetch(
      `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(email)}&select=name,email&limit=1`,
      { headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}` } }
    );
    const users = await lookupRes.json();
    console.log('Lookup result:', JSON.stringify(users));

    // Always return success (don't reveal if email exists)
    if (!users || users.length === 0) {
      console.log('No user found for email:', email);
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const user = users[0];
    const token = generateToken();
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    // Update reset token in DB
    const updateRes = await fetch(
      `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(email)}`,
      {
        method: 'PATCH',
        headers: {
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ reset_token: token, reset_token_expires: expiresAt }),
      }
    );
    console.log('Update status:', updateRes.status);

    const resetUrl = `https://sakshidhole04.github.io/SDET-HUB/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

    // Send email via Brevo
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': BREVO_KEY },
      body: JSON.stringify({
        sender: { name: 'TestForge', email: 'dholesakshi46@gmail.com' },
        to: [{ email, name: user.name }],
        subject: '🔑 Reset your TestForge password',
        htmlContent: `
          <div style="font-family:Arial,sans-serif;max-width:520px;margin:0 auto;padding:32px;background:#f9f7ff;border-radius:16px;">
            <h1 style="color:#7c3aed;">🎓 TestForge</h1>
            <h2 style="color:#2d1f6e;">Password Reset Request</h2>
            <p style="color:#374151;line-height:1.7;">Hi <strong>${user.name}</strong>,</p>
            <p style="color:#374151;line-height:1.7;">Click the button below to reset your password. This link expires in <strong>1 hour</strong>.</p>
            <div style="text-align:center;margin:28px 0;">
              <a href="${resetUrl}" style="background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;">
                Reset Password →
              </a>
            </div>
            <p style="color:#9ca3af;font-size:13px;">If you didn't request this, you can safely ignore this email.</p>
          </div>
        `,
      }),
    });

    const emailData = await emailRes.json();
    console.log('Brevo response:', JSON.stringify(emailData));

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Error:', String(err));
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
