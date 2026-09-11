
import React from 'react';
import { createPageUrl } from '@/utils';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import SocialShare from '../components/SocialShare';
import FloatingCTABar from '../components/FloatingCTABar';
import { ShieldCheck, Flame, Star, CheckCircle, CheckCircle2 } from 'lucide-react';

export default function Raclette() {
  return (
    <>
      <SEOHead 
        title="Raclette 2026: Der große Raclette-Grill & Käse Kaufberater"
        description="Raclette vs. Fondue im Vergleich: Entdecke die besten Raclette-Grills mit Steinplatte, Pfännchen-Ideen und echten Raclette-Käse AOP."
        keywords="Raclette, Raclette Grill kaufen, Raclette Käse, Raclette vs Fondue, Pfännchen Ideen, Silvester Raclette"
        canonical="https://caquelon.de/Raclette"
      />
      
      <div className="min-h-screen bg-[#faf8f5] text-stone-900">
        {/* Editorial Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 px-3.5 py-1 rounded-full text-amber-300 text-xs font-bold uppercase mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Schweizer Raclette & Grill Ratgeber 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Raclette – Der gesellige <span className="text-amber-400">Schweizer Klassiker</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
              Geschmolzener Raclette-Käse AOP über heißen Gschwellti (Pellkartoffeln), Cornichons und Silberzwiebeln. Finde den perfekten Raclette-Grill für 4 bis 8 Personen.
            </p>

            <div className="flex justify-center mb-6">
              <SocialShare 
                title="Raclette - Der gesellige Schweizer Klassiker im Ratgeber"
                description="Alles über Raclette-Käse AOP, Pfännchen-Ideen und die besten Raclette-Grills!"
              />
            </div>

            <CTAButton href="https://amzn.to/464y1aB" size="large" variant="secondary">
              Bestseller Raclette-Grills ansehen *
            </CTAButton>
          </div>
        </section>


        {/* Was ist Raclette */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Was macht <span className="text-red-900">Raclette</span> so besonders?
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Raclette kommt aus dem französischen "racler" (schaben) und beschreibt sowohl den würzigen Schweizer Käse als auch 
                  die gesellige Art, ihn zu genießen. Ursprünglich wurde der Käse am offenen Feuer geschmolzen und über Kartoffeln geschabt.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-700"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Geselliges Erlebnis</h3>
                      <p className="text-gray-600">Gemeinsam am Tisch, jeder bereitet sich sein perfektes Raclette zu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-700"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Perfekt geschmolzen</h3>
                      <p className="text-gray-600">Moderne Raclette-Grills sorgen für gleichmäßig geschmolzenen Käse</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-yellow-700"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Vielseitig und lecker</h3>
                      <p className="text-gray-600">Von klassisch mit Kartoffeln bis kreativ mit Gemüse und Fleisch</p>
                    </div>
                  </div>
                </div>
                
                <CTAButton href="https://amzn.to/464y1aB">
                  Raclette-Grill ansehen *
                </CTAButton>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">💡 Raclette-Tradition</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Ursprung:</strong> Schon im 13. Jahrhundert schmolzen Schweizer Hirten Käse am Lagerfeuer 
                    und schabten ihn über ihre einfachen Mahlzeiten.
                  </p>
                  <p>
                    <strong>Heute:</strong> Raclette ist zu einem geselligen Ereignis geworden, das Familie und Freunde 
                    stundenlang am Tisch zusammenbringt.
                  </p>
                  <p>
                    <strong>Der perfekte Käse:</strong> Echter Raclette-Käse aus dem Wallis oder Savoyen entwickelt 
                    beim Schmelzen seinen unverwechselbaren, nussigen Geschmack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Raclette Käse kaufen Section - NEU */}
        <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Der richtige <span className="text-red-900">Raclette Käse</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto text-center">
              Echter Raclette-Käse macht den Unterschied! Hier erfährst du, worauf es beim Käse ankommt.
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Was macht guten Raclette-Käse aus?</h3>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Perfekte Schmelzfähigkeit</h4>
                        <p className="text-gray-600 text-sm">
                          Echter Raclette-Käse schmilzt gleichmäßig ohne zu zerlaufen. 
                          Die goldene, leicht gebräunte Kruste ist sein Markenzeichen.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Würziger Geschmack</h4>
                        <p className="text-gray-600 text-sm">
                          Raclette-Käse hat einen kräftigen, würzig-nussigen Geschmack, 
                          der beim Erhitzen noch intensiver wird.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-5 h-5 text-yellow-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Mindestens 3 Monate gereift</h4>
                        <p className="text-gray-600 text-sm">
                          Guter Raclette-Käse reift mindestens 3 Monate, Premium-Sorten 
                          sogar 6-12 Monate für extra Würze.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Die beliebtesten Raclette-Käsesorten</h3>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">🇨🇭 Raclette du Valais AOP</h4>
                    <p className="text-sm text-gray-600">
                      Der Original-Raclette aus dem Wallis. Würzig, aromatisch und mit geschützter Herkunftsbezeichnung.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">🇫🇷 Raclette de Savoie</h4>
                    <p className="text-sm text-gray-600">
                      Die französische Variante - milder und cremiger als das Schweizer Original.
                    </p>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-bold text-gray-900 mb-1">🌿 Raclette mit Kräutern</h4>
                    <p className="text-sm text-gray-600">
                      Verfeinert mit Pfeffer, Knoblauch oder Kräutern für extra Geschmack.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">🧀 Raclette natur</h4>
                    <p className="text-sm text-gray-600">
                      Der Klassiker ohne Zusätze - perfekt für Puristen und zum selbst Würzen.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-700 text-center mb-3">
                    💡 Pro-Tipp: Rechne etwa 200-250g Käse pro Person
                  </p>
                  <CTAButton href="https://amzn.to/3KFuLu1" size="small" className="w-full">
                    Jetzt Raclette Käse kaufen *
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">❌ Raclette-Käse vs. Fondue-Käse</h3>
              <p className="text-gray-700 text-center mb-6">
                Wichtig zu wissen: Raclette-Käse ist NICHT für Fondue geeignet und umgekehrt! 
                Jeder Käse ist für seine spezifische Zubereitungsart optimiert.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">🧀 Raclette-Käse</h4>
                  <p className="text-sm text-gray-600">
                    Entwickelt zum Schmelzen und Überbacken. Bildet eine leckere Kruste 
                    und läuft nicht davon. Perfekt für Pfännchen!
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">🫕 Fondue-Käse</h4>
                  <p className="text-sm text-gray-600">
                    Optimiert für cremiges Schmelzen im Topf. Bindet perfekt mit Wein 
                    und wird nicht klumpig. <a href={createPageUrl('FondueKaese')} className="text-red-900 underline">Mehr erfahren</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">* = Affiliate-Link / Werbung</p>
            </div>
          </div>
        </section>

        {/* Die besten Raclette-Grills im Überblick */}
        <section className="py-20 bg-gradient-to-b from-stone-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Die besten <span className="text-red-900">Raclette-Grills</span> im Überblick
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Klassischer Grill */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Klassischer Grill</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">8 Raclette-Pfännchen für die ganze Familie</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Grillplatte für Fleisch und Gemüse</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Antihaftbeschichtung für einfache Reinigung</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Benötigt etwas Platz auf dem Tisch</span>
                  </div>
                </div>
                
                <p className="text-center font-semibold text-orange-700 mb-6">
                  Ideal für: Familienfeiern (4-8 Personen)
                </p>
                
                <CTAButton href="https://amzn.to/4oYqpOz" size="small" className="w-full">
                  Passendes Modell finden *
                </CTAButton>
              </div>

              {/* Mini-Raclette */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Mini-Raclette</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Perfekt für Paare oder kleine Haushalte</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Kompakt und platzsparend</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Schnell einsatzbereit</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Begrenzte Kapazität</span>
                  </div>
                </div>
                
                <p className="text-center font-semibold text-red-700 mb-6">
                  Ideal für: Romantische Abende (2 Personen)
                </p>
                
                <CTAButton href="https://amzn.to/3Jps8fz" size="small" className="w-full">
                  Passendes Modell finden *
                </CTAButton>
              </div>

              {/* Party-Grill */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Party-Grill</h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">12+ Pfännchen für große Runden</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Großzügige Grillfläche</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Professionelle Ausstattung</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Höherer Preis und Platzbedarf</span>
                  </div>
                </div>
                
                <p className="text-center font-semibold text-green-700 mb-6">
                  Ideal für: Große Feiern (8+ Personen)
                </p>
                
                <CTAButton href="https://amzn.to/3JtvDS1" size="small" className="w-full">
                  Passendes Modell finden *
                </CTAButton>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">* = Affiliate-Link / Werbung</p>
            </div>
          </div>
        </section>

        {/* Raclette vs Fondue Vergleich */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Raclette vs. Fondue – <span className="text-red-900">Der Vergleich</span>
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl shadow-lg">
                <thead>
                  <tr className="bg-gradient-to-r from-red-50 to-amber-50">
                    <th className="px-6 py-4 text-left font-bold text-gray-900">Aspekt</th>
                    <th className="px-6 py-4 text-center font-bold text-red-900">🧀 Raclette</th>
                    <th className="px-6 py-4 text-center font-bold text-red-900">🫕 Fondue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Geselligkeit</td>
                    <td className="px-6 py-4 text-center text-gray-700">Jeder für sich, aber am selben Tisch</td>
                    <td className="px-6 py-4 text-center text-gray-700">Alle teilen einen Topf</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Flexibilität</td>
                    <td className="px-6 py-4 text-center text-gray-700">Sehr hoch - verschiedene Zutaten möglich</td>
                    <td className="px-6 py-4 text-center text-gray-700">Mittlere - alle essen dasselbe</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-900">Vorbereitung</td>
                    <td className="px-6 py-4 text-center text-gray-700">Viele kleine Zutaten vorbereiten</td>
                    <td className="px-6 py-4 text-center text-gray-700">Ein Topf, wenige Beilagen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Tradition</td>
                    <td className="px-6 py-4 text-center text-gray-700">Schweizer Almhütten-Atmosphäre</td>
                    <td className="px-6 py-4 text-center text-gray-700">Jahrhundertealte Schweizer Tradition</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Raclette-Tipps */}
        <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
              Raclette-Tipps für <span className="text-red-900">Genießer</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <span className="text-4xl">🧀</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Der richtige Käse</h3>
                <p className="text-gray-600 text-center">
                  Echter Raclette-Käse schmilzt perfekt und entwickelt eine schöne goldene Kruste. 
                  Pro Person etwa 200-250g einplanen.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <span className="text-4xl">🥔</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Die perfekten Kartoffeln</h3>
                <p className="text-gray-600 text-center">
                  Kleine, festkochende Kartoffeln mit Schale. Gut gewürzt mit Rosmarin und Thymian 
                  werden sie zur perfekten Raclette-Grundlage.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <span className="text-4xl">🍷</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Getränke-Tipp</h3>
                <p className="text-gray-600 text-center">
                  Traditionell trinkt man warmen Kräutertee oder einen leichten Weißwein. 
                  Das hilft bei der Verdauung des geschmolzenen Käses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-900 to-red-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für gesellige <span className="text-amber-300">Raclette-Abende</span>?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Entdecke jetzt die besten Raclette-Grills und alles, was du für den perfekten Käse-Genuss brauchst.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="https://amzn.to/464y1aB" variant="secondary" size="large">
                Raclette-Bestseller entdecken *
              </CTAButton>
            </div>
            
            <div className="mt-4">
              <p className="text-sm text-red-200">* = Affiliate-Link / Werbung</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
