import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { createPageUrl } from '@/utils';

export default function Impressum() {
  return (
    <>
      <SEOHead 
        title="Impressum | caquelon.de"
        description="Impressum und rechtliche Hinweise für die Website caquelon.de, betrieben von Jens Kathe."
        keywords="Impressum, Kontakt, Anschrift, Rechtliches"
        canonical="https://caquelon.de/Impressum"
      />
      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 DDG</h2>
                <div className="bg-stone-50 p-6 rounded-xl">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-red-900 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Jens Kathe</p>
                      <p className="text-gray-700">Hansastraße 6</p>
                      <p className="text-gray-700">34119 Kassel</p>
                      <p className="text-gray-700">Deutschland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <Mail className="w-5 h-5 text-red-900" />
                    <a href="mailto:jens@kathe.org" className="text-red-900 hover:text-red-700 font-medium">
                      jens@kathe.org
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-red-900" />
                    <a href="tel:+491786652623" className="text-red-900 hover:text-red-700 font-medium">
                      +49 178 6652623
                    </a>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-stone-200">
                    <p className="text-gray-700 font-medium">
                      Kleinunternehmer nach §19 UStG
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
                <p className="text-gray-700">
                  Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Jens Kathe (Anschrift wie oben)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">EU-Streitschlichtung</h2>
                <p className="text-gray-700 mb-4">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-900 hover:text-red-700 underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                <p className="text-gray-700 mt-4">
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                <p className="text-gray-700">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Haftung für Inhalte</h3>
                    <p className="text-gray-700">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Haftung für Links</h3>
                    <p className="text-gray-700">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Urheberrecht</h3>
                    <p className="text-gray-700">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border-t pt-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Affiliate-Hinweis</h2>
                  <p className="text-gray-700 mb-2">
                    <strong>Wichtiger Hinweis zu unseren Amazon-Links:</strong>
                  </p>
                  <p className="text-gray-700 mb-4">
                    Als Amazon-Partner verdiene ich an qualifizierten Verkäufen. Wenn Sie über unsere Amazon-Links einkaufen, erhalten wir eine kleine Provision, ohne dass Ihnen dadurch zusätzliche Kosten entstehen. Diese Einnahmen helfen uns dabei, die Website zu betreiben und Ihnen weiterhin kostenlose Inhalte anzubieten.
                  </p>
                  <p className="text-gray-700">
                    Alle mit einem Sternchen (*) gekennzeichneten Links sind Affiliate-Links bzw. Werbung.
                  </p>
                </div>
              </section>

              <section className="text-center bg-stone-50 p-6 rounded-xl">
                <p className="text-sm text-gray-500">
                  Alle Angaben ohne Gewähr. Preise und Verfügbarkeit können sich ändern.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Letztes Update: {new Date().toLocaleString('de-DE', { month: 'long', year: 'numeric' })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}