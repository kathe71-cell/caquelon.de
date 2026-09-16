import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Datenschutz() {
  return (
    <>
      <SEOHead 
        title="Datenschutzerklärung (DSGVO) | caquelon.de"
        description="Datenschutzerklärung für caquelon.de. Wir informieren über die Verarbeitung personenbezogener Daten, Cookies und Ihre Rechte nach der DSGVO."
        keywords="Datenschutz, DSGVO, Cookies, personenbezogene Daten"
        canonical="https://caquelon.de/datenschutz"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

            <div className="space-y-8 prose prose-lg max-w-none">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">1. Datenschutz auf einen Blick</h2>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                <div className="bg-stone-50 p-6 rounded-xl my-4">
                  <p className="font-bold">Verantwortliche Stelle:</p>
                  <p>Jens Kathe – vollständige Anschrift und Kontaktdaten siehe <Link to="/impressum" className="text-red-900 underline">Impressum</Link>.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">3. Hosting</h2>
                <p>Diese Website wird auf Servern von Vercel Inc. gehostet. Der Anbieter erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>Diese Daten werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeitet. Unser berechtigtes Interesse liegt in der ordnungsgemäßen Bereitstellung und Stabilität unserer Website.</p>
                <div className="bg-stone-50 p-4 rounded-lg">
                  <p className="font-semibold">Hosting-Anbieter:</p>
                  <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                  <p>Datenschutzerklärung: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-red-900 underline">https://vercel.com/legal/privacy-policy</a></p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">4. Cookies & Einwilligungseinstellungen</h2>
                <p>Unsere Website verwendet Cookies. Dies sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.</p>
                
                <div className="my-6 p-6 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 m-0">Ihre Datenschutzeinstellungen</h3>
                    <p className="text-sm text-gray-600 m-0 mt-1">Hier können Sie Ihre Cookie- und Tracking-Präferenzen jederzeit einsehen und anpassen.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      window.dispatchEvent(new CustomEvent('open-cookie-settings'));
                    }}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-red-900 hover:bg-red-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shrink-0"
                  >
                    Einstellungen öffnen
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mt-4">Arten von Cookies:</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Technisch notwendige Cookies</h4>
                    <p>Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern z.B. Ihre Cookie-Einstellungen.</p>
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Analyse & Performance (optional)</h4>
                    <p>Diese Funktionen helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen aggregiert und pseudonymisiert gemessen werden.</p>
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold">Marketing & Partnerlinks (optional)</h4>
                    <p>Diese Cookies werden verwendet, um Verkäufe über Partnerlinks (z. B. Amazon PartnerNet) zuzuordnen.</p>
                    <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</p>
                  </div>
                </div>
                
                <p>Wir verwenden ein Cookie-Banner, um Ihre Einwilligung zur Speicherung bestimmter Cookies in Ihrem Browser einzuholen. Sie können dort zwischen verschiedenen Cookie-Kategorien wählen und Ihre Einstellungen jederzeit ändern.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">5. Affiliate-Programm (Amazon PartnerNet)</h2>
                <p>Wir sind Teilnehmer des Partnerprogramms von Amazon EU, das zur Bereitstellung eines Mediums für Websites konzipiert wurde, mittels dessen durch die Platzierung von Werbeanzeigen und Links zu Amazon.de Werbekostenerstattung verdient werden kann.</p>
                <p>Amazon setzt Cookies ein, um die Herkunft der Bestellungen nachvollziehen zu können. Unter anderem kann Amazon erkennen, dass Sie den Partnerlink auf dieser Website geklickt haben. Die Speicherung von „Amazon-Cookies" erfolgt auf Grundlage von Art. 6 lit. f DSGVO.</p>
                <div className="bg-red-50 p-6 rounded-xl my-4">
                  <p className="font-bold">Wichtiger Hinweis:</p>
                  <p>Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Wenn Sie über unsere Links bei Amazon einkaufen, entstehen Ihnen keine zusätzlichen Kosten. Sie unterstützen damit den Betrieb dieser Webseite.</p>
                </div>
                <p>Weitere Informationen zum Datenschutz bei Amazon finden Sie unter: <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" target="_blank" rel="noopener" className="text-blue-600 underline">https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010</a></p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-gray-900">6. Ihre Rechte als Betroffener</h2>
                <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Auskunft</strong> über Ihre bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
                  <li><strong>Berichtigung</strong> unrichtiger oder unvollständiger Daten (Art. 16 DSGVO)</li>
                  <li><strong>Löschung</strong> Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
                  <li><strong>Einschränkung</strong> der Datenverarbeitung (Art. 18 DSGVO)</li>
                  <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
                  <li><strong>Widerspruch</strong> gegen die Verarbeitung Ihrer Daten (Art. 21 DSGVO)</li>
                  <li><strong>Widerruf</strong> Ihrer Einwilligung zur Datenverarbeitung (Art. 7 Abs. 3 DSGVO)</li>
                </ul>
                <p>Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: jens@kathe.org</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900">7. Beschwerderecht bei der Aufsichtsbehörde</h2>
                <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren. Zuständig ist die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts oder unseres Firmensitzes.</p>
              </section>

              <section className="text-center bg-stone-50 p-6 rounded-xl">
                <p className="text-sm text-gray-500">
                  Stand dieser Datenschutzerklärung: {new Date().toLocaleString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}