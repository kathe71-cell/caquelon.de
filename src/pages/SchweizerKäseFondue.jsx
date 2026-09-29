import React from 'react';
import { Clock, Users, ChefHat, CheckCircle } from 'lucide-react';
import CTAButton from '../components/CTAButton';
import FloatingCTABar from '../components/FloatingCTABar';
import { createPageUrl } from '@/utils';

export default function SchweizerKäseFondue() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🇨🇭</span>
              <span className="text-sm font-medium text-gray-700">Original aus der Schweiz</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Original <span className="text-red-900">Schweizer Käsefondue</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Das authentische Schweizer Käsefondue-Rezept mit Gruyère und Emmentaler, verfeinert mit Weißwein und einem Hauch Kirsch.
            </p>

            {/* Recipe Meta */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-red-900" />
                <span className="font-medium">20 Minuten</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-red-900" />
                <span className="font-medium">4-6 Personen</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full">
                <ChefHat className="w-5 h-5 text-red-900" />
                <span className="font-medium">Einfach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Ingredients */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">🧀</span>
                Zutaten
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Gruyère, gerieben</span>
                  <span className="font-semibold">400g</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Emmentaler, gerieben</span>
                  <span className="font-semibold">200g</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Trockener Weißwein</span>
                  <span className="font-semibold">300ml</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Speisestärke</span>
                  <span className="font-semibold">2 EL</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Knoblauchzehe</span>
                  <span className="font-semibold">1 Stück</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Kirsch (optional)</span>
                  <span className="font-semibold">2 EL</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Muskatnuss, gerieben</span>
                  <span className="font-semibold">1 Prise</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span>Weißer Pfeffer</span>
                  <span className="font-semibold">nach Geschmack</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span>Baguette, gewürfelt</span>
                  <span className="font-semibold">1 Stück</span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="text-2xl">👨‍🍳</span>
                Zubereitung
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700">
                    Das Caquelon mit der halbierten Knoblauchzehe ausreiben. Den Weißwein bei mittlerer Hitze erwärmen, aber nicht kochen lassen.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700">
                    Den geriebenen Käse portionsweise unter ständigem Rühren in Form einer Acht hinzugeben, bis er geschmolzen ist.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700">
                    Die Speisestärke mit dem Kirsch verrühren und unter das Fondue mischen. Mit Muskat und Pfeffer würzen.
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700">
                    Das Caquelon auf das Rechaud stellen und bei niedriger Flamme warm halten. Mit Brotwürfeln servieren.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tips Section */}
          <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              💡 Profi-Tipps für perfektes Käsefondue
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Die richtige Temperatur</h4>
                    <p className="text-gray-600">Das Fondue darf nur leicht köcheln, nie sprudelnd kochen, sonst wird es zäh.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Käse-Qualität</h4>
                    <p className="text-gray-600">Verwende hochwertigen, gut gereiften Käse für den besten Geschmack.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Richtig rühren</h4>
                    <p className="text-gray-600">Immer in Form einer Acht rühren - das verhindert Klumpenbildung.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Beilagen-Tipps</h4>
                    <p className="text-gray-600">Neben Baguette passen auch Pellkartoffeln, Cornichons und eingelegte Zwiebeln.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Getränke-Empfehlung</h4>
                    <p className="text-gray-600">Warmer Kräutertee oder der gleiche Weißwein wie im Fondue passen perfekt.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Notfall-Tipp</h4>
                    <p className="text-gray-600">Ist das Fondue zu dickflüssig geworden, etwas warmen Wein unterrühren.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Variations */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🔄 Leckere Variationen
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <span className="text-3xl mb-3 block">🍄</span>
                <h4 className="font-bold text-gray-900 mb-2">Mit Pilzen</h4>
                <p className="text-sm text-gray-600">Gebratene Champignons oder Steinpilze für extra Geschmack hinzufügen.</p>
              </div>
              
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <span className="text-3xl mb-3 block">🌿</span>
                <h4 className="font-bold text-gray-900 mb-2">Mit Kräutern</h4>
                <p className="text-sm text-gray-600">Frische Kräuter wie Thymian oder Rosmarin verleihen eine besondere Note.</p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <span className="text-3xl mb-3 block">🧄</span>
                <h4 className="font-bold text-gray-900 mb-2">Extra würzig</h4>
                <p className="text-sm text-gray-600">Mit mehr Knoblauch und einer Prise Paprika für intensiveren Geschmack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit für authentisches <span className="text-amber-300">Schweizer Käsefondue</span>?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Hole dir jetzt das perfekte Caquelon und alle Zutaten für dein unvergessliches Fondue-Erlebnis.
          </p>
          
          <CTAButton href="https://amzn.to/4oVKIMA" variant="secondary" size="large">
            👉 Passendes Caquelon bei Amazon ansehen
          </CTAButton>
        </div>
      </section>
    </div>
  );
}