# Resend Konfiguration

## Lokale Entwicklung

Die Umgebungsvariablen sind in `.env.local` gespeichert (wird nicht zu Git committed).

## Vercel Deployment

**WICHTIG:** Du musst die Umgebungsvariablen auch in Vercel setzen:

1. Gehe zu https://vercel.com/dashboard
2. Wähle dein Portfolio-Projekt aus
3. Gehe zu **Settings** → **Environment Variables**
4. Füge folgende Variablen hinzu:

   - **RESEND_API_KEY**: `re_NC5B73tV_21jGdhnSKaWNLk7CZV6XSGj8`
   - **CONTACT_EMAIL**: `adrian@abdullahu-adrian.de` (oder deine gewünschte E-Mail-Adresse)

5. Wähle für beide Variablen alle Environments (Production, Preview, Development)
6. Klicke auf **Save**
7. Trigger einen neuen Deployment (oder warte auf das nächste automatische Deployment)

## Domain-Verifizierung (Optional)

Für Produktion solltest du deine Domain in Resend verifizieren:

1. Gehe zu https://resend.com/domains
2. Füge `abdullahu-adrian.de` hinzu
3. Folge den DNS-Anweisungen zur Verifizierung
4. Aktualisiere dann `app/api/contact/route.ts`:
   - Ändere `from: 'Portfolio Kontakt <onboarding@resend.dev>'`
   - Zu: `from: 'Portfolio Kontakt <kontakt@abdullahu-adrian.de>'`

