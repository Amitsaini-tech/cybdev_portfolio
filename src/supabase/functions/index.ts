import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Fix IDE error for Deno
declare const Deno: any;

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactPayload {
    name: string;
    email: string;
    subject: string;
    message: string;
}

Deno.serve(async (req: Request) => {
    if (req.method === "OPTIONS") {
        return new Response(null, {
            status: 200,
            headers: corsHeaders,
        });
    }

    try {
        const { name, email, subject, message }: ContactPayload = await req.json();

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: "Name, email, and message are required." }),
                {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

        const { error: dbError } = await fetch(`${supabaseUrl}/rest/v1/contact_submissions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apikey: supabaseKey,
                Authorization: `Bearer ${supabaseKey}`,
                Prefer: "return=minimal",
            },
            body: JSON.stringify({ name, email, subject, message }),
        }).then(async (res) => {
            if (!res.ok) {
                const body = await res.text();
                return { error: body };
            }
            return { error: null };
        });

        if (dbError) {
            console.error("Database insert error:", dbError);
            return new Response(
                JSON.stringify({ error: "Failed to save submission." }),
                {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                }
            );
        }

        const ownerEmail = "sainiamit3464@gmail.com";
        const resendApiKey = Deno.env.get("RESEND_API_KEY");

        if (resendApiKey) {
            const emailResponse = await fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${resendApiKey}`,
                },
                body: JSON.stringify({
                    from: "Portfolio Contact <onboarding@resend.dev>",
                    to: [ownerEmail],
                    subject: `New Contact: ${subject || "Portfolio Message"}`,
                    html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e5e7eb; padding: 32px; border-radius: 12px; border: 1px solid rgba(0,212,255,0.2);">
              <h2 style="color: #00d4ff; margin-bottom: 24px;">New Contact Form Submission</h2>
              <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; margin-bottom: 16px;">
                <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Name:</strong> ${name}</p>
                <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Email:</strong> ${email}</p>
                <p style="margin: 8px 0;"><strong style="color: #00d4ff;">Subject:</strong> ${subject || "N/A"}</p>
              </div>
              <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px;">
                <p style="color: #00d4ff; margin-bottom: 8px;"><strong>Message:</strong></p>
                <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
              <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">This message was sent from your portfolio contact form.</p>
            </div>
          `,
                }),
            });

            if (!emailResponse.ok) {
                console.error("Email send error:", await emailResponse.text());
            }
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "Thank you for reaching out! I will get back to you soon.",
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    } catch (err) {
        console.error("Edge function error:", err);
        return new Response(
            JSON.stringify({ error: "Internal server error." }),
            {
                status: 500,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    }
});
