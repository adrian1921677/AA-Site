import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Prüfe ob API Key gesetzt ist
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY ist nicht gesetzt');
      return NextResponse.json(
        { error: 'E-Mail-Service ist nicht konfiguriert. Bitte kontaktiere den Administrator.' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
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
    // Für Test-Modus: Verwende info@abdullahu-drive.de als Empfänger
    // Für Produktion: Verwende verifizierte Domain
    const contactEmail = process.env.CONTACT_EMAIL || 'info@abdullahu-drive.de';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    
    const { data, error } = await resend.emails.send({
      from: `Portfolio Kontakt <${fromEmail}>`,
      to: [contactEmail],
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
      console.error('Resend error:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { 
          error: 'Fehler beim Senden der E-Mail',
          details: error
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Nachricht erfolgreich gesendet' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Ein Fehler ist aufgetreten';
    return NextResponse.json(
      { 
        error: 'Ein Fehler ist aufgetreten',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

