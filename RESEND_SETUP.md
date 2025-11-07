# Resend Konfiguration

## Domain-Verifizierung ✅

Die Domain `abdullahu-adrian.de` ist erfolgreich bei Resend verifiziert!

## Lokale Entwicklung

Die Umgebungsvariablen sind in `.env.local` gespeichert (wird nicht zu Git committed).

## Vercel Deployment

**WICHTIG:** Du musst die Umgebungsvariablen auch in Vercel setzen:

1. Gehe zu https://vercel.com/dashboard
2. Wähle dein Portfolio-Projekt aus
3. Gehe zu **Settings** → **Environment Variables**
4. Füge folgende Variablen hinzu (oder aktualisiere sie):

   - **RESEND_API_KEY**: `re_NC5B73tV_21jGdhnSKaWNLk7CZV6XSGj8`
   - **RESEND_FROM_EMAIL**: `kontakt@abdullahu-adrian.de` (Absender-Adresse von deiner verifizierten Domain)
   - **CONTACT_EMAIL**: `Info@abdullahu-adrian.de` (Empfänger-Adresse für Kontaktformular-Nachrichten)

5. Wähle für alle Variablen alle Environments (Production, Preview, Development)
6. Klicke auf **Save**
7. Trigger einen neuen Deployment:
   - Gehe zu **Deployments**
   - Klicke auf die drei Punkte beim neuesten Deployment
   - Wähle **Redeploy**

## Funktionsweise

- **RESEND_FROM_EMAIL**: Die E-Mail-Adresse, die als Absender angezeigt wird (muss von deiner verifizierten Domain `abdullahu-adrian.de` sein)
- **CONTACT_EMAIL**: Die E-Mail-Adresse, an die alle Kontaktformular-Nachrichten gesendet werden

Nach dem Deployment sollte das Kontaktformular funktionieren und E-Mails an deine `CONTACT_EMAIL` senden.

