import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    // E-Mail senden
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Kontakt <onboarding@resend.dev>', // TODO: Deine verifizierte Domain verwenden
      to: [process.env.CONTACT_EMAIL || 'adrian@abdullahu-adrian.de'], // Deine E-Mail-Adresse
      replyTo: email,
      subject: `Neue Nachricht von ${name} - Portfolio Kontakt`,
      html: `
        <h2>Neue Nachricht vom Portfolio</h2>
        <p><strong>Von:</strong> ${name}</p>
        <p><strong>E-Mail:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        Neue Nachricht vom Portfolio
        
        Von: ${name}
        E-Mail: ${email}
        
        Nachricht:
        ${message}
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Fehler beim Senden der E-Mail' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten' },
      { status: 500 }
    );
  }
}

