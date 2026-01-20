import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Verificar variables de entorno
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY no esta configurada");
      return NextResponse.json(
        { error: "Error de configuracion del servidor" },
        { status: 500 },
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("[v0] CONTACT_EMAIL no esta configurada");
      return NextResponse.json(
        { error: "Error de configuracion del servidor" },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { nombre, email, telefono, mensaje, fechas } = await request.json();

    // Validacion basica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 },
      );
    }

    console.log("[v0] Enviando email a:", process.env.CONTACT_EMAIL);

    const { data, error } = await resend.emails.send({
      from: "Casa Lia Web <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "casalia@example.com"],
      replyTo: email,
      subject: `Nueva consulta de ${nombre} - Casa Lia`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a45;">Nueva consulta desde Casa Lia</h2>
          <hr style="border: 1px solid #e5e5e5;" />
          
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefono:</strong> ${telefono || "No proporcionado"}</p>
          <p><strong>Fechas de interes:</strong> ${fechas || "No especificadas"}</p>
          
          <h3 style="color: #2d5a45;">Mensaje:</h3>
          <p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">${mensaje}</p>
          
          <hr style="border: 1px solid #e5e5e5;" />
          <p style="color: #666; font-size: 12px;">
            Este mensaje fue enviado desde el formulario de contacto de Casa Lia - Bosque Peralta Ramos
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[v0] Resend error:", error);
      return NextResponse.json(
        { error: "Error al enviar el mensaje" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[v0] Contact API error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 },
    );
  }
}
