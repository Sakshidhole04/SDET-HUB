import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

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

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  const { email } = await req.json();

  const supabaseClient = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  // Check if user exists
  const { data: user } = await supabaseClient
    .from('users')
    .select('name, email')
    .eq('email', email)
    .maybeSingle();

  // Always return success to prevent email enumeration attacks
  if (!user) {
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  const token = generateToken();
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

  await supabaseClient
    .from('users')
    .update({ reset_token: token, reset_token_expires: expiresAt })
    .eq('email', email);

  const resetUrl = `https://sakshidhole04.github.io/SDET-HUB/reset-password?token=${token}&email=${encodeURIComponent(email)}`;

  const brevoApiKey = Deno.env.get('BREVO_API_KEY')!;
  await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': brevoApiKey,
    },
    body: JSON.stringify({
      sender: { name: 'TestForge', email: 'dholesakshi46@gmail.com' },
      to: [{ email, name: user.name }],
      subject: '🔑 Reset your TestForge password',
      htmlContent: `
        <div style="font-family:system-ui,sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#faf8ff;border-radius:16px">
          <h2 style="color:#2d1f6e;margin-bottom:8px">🎓 TestForge</h2>
          <h3 style="color:#2d1f6e;font-weight:800;margin-bottom:16px">Password Reset Request</h3>
          <p style="color:#374151;line-height:1.7">Hi <strong>${user.name}</strong>,</p>
          <p style="color:#374151;line-height:1.7">You requested a password reset. Click the button below to set a new password:</p>
          <a href="${resetUrl}" style="display:inline-block;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;padding:13px 28px;border-radius:10px;text-decoration:none;font-weight:700;font-size:15px;margin:20px 0">Reset Password →</a>
          <p style="color:#9ca3af;font-size:13px;margin-top:24px;line-height:1.6">This link expires in <strong>1 hour</strong>. If you didn't request this, you can safely ignore this email.</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0"/>
          <p style="color:#c4b5fd;font-size:12px">TestForge · India's #1 Free SDET Learning Platform</p>
        </div>
      `,
    }),
  });

  return new Response(JSON.stringify({ success: true }), {
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
});
