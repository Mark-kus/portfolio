import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL;

export async function POST(request: NextRequest) {
  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Servicio de email no configurado. Contacta por email directo." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: "Mensaje muy corto" },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1a1a1a;">Nuevo mensaje desde el portfolio</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Asunto:</strong> ${subject}</p>
            </div>
            <div style="white-space: pre-wrap; line-height: 1.6;">${message}</div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e5e5;">
            <p style="color: #666; font-size: 14px;">Enviado desde el formulario de contacto en mark-kus.com</p>
          </div>
        `,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return NextResponse.json(
        { error: "Error al enviar el email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}