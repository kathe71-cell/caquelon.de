import React from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import CTAButton from '../components/CTAButton';

export default function KäseFondueOhneAlkohol() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Käsefondue <span className="text-red-900">ohne Alkohol</span></h1>
          <p className="text-xl text-gray-600 mb-8">Alkoholfreies Käsefondue-Rezept, ideal für Kinder und Familienabende. Cremig, würzig, lecker.</p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Clock className="w-5 h-5 text-red-900" /><span>15 Minuten</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><Users className="w-5 h-5 text-red-900" /><span>4 Personen</span></div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full"><ChefHat className="w-5 h-5 text-red-900" /><span>Einfach</span></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zutaten</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between border-b pb-2"><span>Milder Käse (z.B. Gouda, Butterkäse)</span><span className="font-semibold">600g</span></li>
              <li className="flex justify-between border-b pb-2"><span>Milch</span><span className="font-semibold">350ml</span></li>
              <li className="flex justify-between border-b pb-2"><span>Apfelsaft (naturtrüb)</span><span className="font-semibold">50ml</span></li>
              <li className="flex justify-between border-b pb-2"><span>Speisestärke</span><span className="font-semibold">2 TL</span></li>
              <li className="flex justify-between border-b pb-2"><span>Zitronensaft</span><span className="font-semibold">1 EL</span></li>
              <li className="flex justify-between border-b pb-2"><span>Muskatnuss & Pfeffer</span><span className="font-semibold">1 Prise</span></li>
              <li className="flex justify-between"><span>Brot und Gemüse zum Dippen</span><span className="font-semibold">nach Belieben</span></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zubereitung</h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>Käse reiben. Speisestärke mit etwas Milch glatt rühren.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>Restliche Milch und Apfelsaft im Caquelon erwärmen. Den geriebenen Käse unter Rühren langsam zugeben und schmelzen lassen.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>Angerührte Speisestärke und Zitronensaft unterrühren und kurz aufkochen lassen, bis das Fondue bindet.</li>
              <li className="flex gap-4"><div className="w-8 h-8 bg-red-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>Mit Muskatnuss und Pfeffer abschmecken und auf dem Rechaud servieren.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-red-900 to-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Perfekt für die ganze Familie!</h2>
          <p className="text-xl text-red-100 mb-8">Finde das passende Caquelon für unvergessliche Familienabende.</p>
          <CTAButton href="https://amzn.to/4mthKBR" variant="secondary" size="large">👉 Passendes Caquelon bei Amazon ansehen</CTAButton>
        </div>
      </section>
    </div>
  );
}