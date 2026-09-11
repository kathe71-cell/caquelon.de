import React from 'react';
import { HelpCircle, ChefHat, Flame, ShoppingBag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTAButton from '../components/CTAButton';
import { createPageUrl } from '@/utils';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist ein Caquelon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Caquelon ist ein traditioneller Fonduetopf, meist aus Keramik oder Gusseisen, der speziell für die Zubereitung von Käsefondue entwickelt wurde. Seine Materialeigenschaften sorgen für eine optimale und gleichmäßige Hitzeverteilung."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel Käse rechnet man pro Person?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Als Hauptgericht rechnet man mit ca. 200-250 Gramm Käse und ebenso viel Brot pro Person. Als Vorspeise genügt etwa die Hälfte."
      }
    },
    {
      "@type": "Question",
      "name": "Welches Öl eignet sich für Fondue Bourguignonne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verwenden Sie ein hocherhitzbares, geschmacksneutrales Pflanzenöl wie Rapsöl, Sonnenblumenöl oder Erdnussöl. Olivenöl ist nicht geeignet, da es bei hohen Temperaturen verbrennt."
      }
    },
    {
      "@type": "Question",
      "name": "Welcher Käse für Raclette?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Am besten eignet sich echter Raclette-Käse aus der Schweiz oder Savoyen. Alternativ funktionieren auch Gouda, Emmentaler oder Appenzeller. Pro Person rechnet man etwa 200-250g Käse."
      }
    }
  ]
};

const faqData = [
    {
        category: "Allgemeine Fragen",
        items: [
            {
                q: "Was ist ein Caquelon?",
                a: "Ein Caquelon ist ein traditioneller Fonduetopf, meist aus Keramik oder Gusseisen, der speziell für die Zubereitung von Käsefondue entwickelt wurde. Seine Materialeigenschaften sorgen für eine optimale und gleichmäßige Hitzeverteilung."
            },
            {
                q: "Welches Caquelon für welche Fondue-Art?",
                a: "Für Käsefondue eignet sich ein Caquelon aus Keramik am besten. Für Fleischfondue mit Öl (Bourguignonne) oder Brühe (Chinoise) ist ein Topf aus Gusseisen oder Edelstahl die sicherere und bessere Wahl, da diese Materialien höhere Temperaturen aushalten."
            },
            {
                q: "Wie finanziert sich Caquelon.de?",
                a: "Unsere Seite finanziert sich durch Affiliate-Links, hauptsächlich über das Amazon-Partnerprogramm. Wenn Sie über einen unserer Links ein Produkt kaufen, erhalten wir eine kleine Provision, ohne dass für Sie zusätzliche Kosten entstehen. So können wir die Seite betreiben und weiter ausbauen."
            }
        ]
    },
    {
        category: "Fragen zum Käsefondue",
        items: [
            {
                q: "Wie viel Käse rechnet man pro Person?",
                a: "Als Hauptgericht rechnet man mit ca. 200-250 Gramm Käse und ebenso viel Brot pro Person. Als Vorspeise genügt etwa die Hälfte."
            },
            {
                q: "Warum wird mein Fondue nicht cremig oder klumpt?",
                a: "Das passiert oft, wenn das Fondue zu heiß wird. Erhitzen Sie den Käse immer langsam und bei milder Hitze. Ständiges Rühren in Form einer '8' hilft, die Masse homogen zu halten. Ein Schuss Zitronensaft oder mit Kirschwasser angerührte Speisestärke können ebenfalls für die perfekte Bindung sorgen."
            },
            {
                q: "Kann man Käsefondue auch ohne Alkohol zubereiten?",
                a: "Ja, absolut. Sie können den Weißwein einfach durch Apfelsaft, (alkoholfreien) Sekt oder eine milde Gemüsebrühe ersetzen. Unser Rezept für 'Käsefondue ohne Alkohol' finden Sie auf der Rezeptseite."
            },
            {
                q: "Welche Käsesorten eignen sich am besten für Fondue?",
                a: "Für ein klassisches Schweizer Fondue verwenden Sie am besten eine Mischung aus Gruyère (Greyerzer), Vacherin Fribourgeois und Emmentaler. Diese Sorten schmelzen perfekt und ergeben den authentischen Geschmack."
            }
        ]
    },
    {
        category: "Fragen zum Fleischfondue",
        items: [
            {
                q: "Welches Öl eignet sich für Fondue Bourguignonne?",
                a: "Verwenden Sie ein hocherhitzbares, geschmacksneutrales Pflanzenöl wie Rapsöl, Sonnenblumenöl oder Erdnussöl. Olivenöl ist nicht geeignet, da es bei hohen Temperaturen verbrennt."
            },
            {
                q: "Brühe oder Öl - was ist besser?",
                a: "Das ist Geschmackssache. Fondue mit Öl (Bourguignonne) gibt dem Fleisch eine knusprige Hülle. Fondue mit Brühe (Chinoise) ist die leichtere, fettärmere Variante und gart das Fleisch schonender. Ein toller Nebeneffekt beim Brühe-Fondue: Am Ende hat man eine kräftige Suppe."
            },
            {
                q: "Welches Fleisch eignet sich am besten für Fleischfondue?",
                a: "Für Öl-Fondue nehmen Sie zartes Rinderfilet oder Schweinefilet. Für Brühe-Fondue eignen sich auch Hähnchenbrust oder Kalbfleisch. Das Fleisch sollte in etwa 2cm große Würfel geschnitten werden."
            }
        ]
    },
    {
        category: "Fragen zu Raclette",
        items: [
            {
                q: "Was ist der Unterschied zwischen Raclette und Fondue?",
                a: "Beim Fondue tauchen alle gemeinsam in einen Topf, beim Raclette bereitet jeder sein Essen individuell in kleinen Pfännchen zu. Raclette ist flexibler bei den Zutaten, Fondue ist geselliger und traditioneller."
            },
            {
                q: "Welcher Käse für Raclette?",
                a: "Am besten eignet sich echter Raclette-Käse aus der Schweiz oder Savoyen. Alternativ funktionieren auch Gouda, Emmentaler oder Appenzeller. Pro Person rechnet man etwa 200-250g Käse."
            },
            {
                q: "Raclette oder Fondue für Silvester?",
                a: "Beide sind perfekt für Silvester! Fondue ist geselliger und traditioneller, Raclette bietet mehr Flexibilität bei den Zutaten. Für große Runden ist Raclette oft praktischer, für eine gemütliche Atmosphäre ist Fondue unschlagbar."
            },
            {
                q: "Wie viele Raclette-Pfännchen brauche ich?",
                a: "Planen Sie mindestens ein Pfännchen pro Person, besser zwei. Bei einem 8-Personen Raclette-Grill können alle gleichzeitig ihre Pfännchen nutzen."
            }
        ]
    },
    {
        category: "Fragen zu Schokoladenfondue",
        items: [
            {
                q: "Welche Schokolade für Schokofondue?",
                a: "Am besten eignet sich hochwertige Zartbitterschokolade mit 60-70% Kakaoanteil. Sie können auch Vollmilch- oder weiße Schokolade verwenden. Nutella-Fondue ist eine schnelle Alternative für Kinder."
            },
            {
                q: "Was kann man in Schokofondue dippen?",
                a: "Besonders lecker sind: Erdbeeren, Bananen, Ananas, Weintrauben, Marshmallows, Waffelstücke, Kekse, kleine Brownie-Würfel und sogar salzige Brezeln für den Kontrast."
            },
            {
                q: "Warum wird mein Schokofondue zu dick?",
                a: "Schokolade kann schnell zu fest werden. Geben Sie etwas warme Sahne oder Milch dazu und rühren Sie vorsichtig um. Die Hitze sollte sehr niedrig sein - am besten nur ein Teelicht verwenden."
            }
        ]
    },
    {
        category: "Saisonale Fragen",
        items: [
            {
                q: "Welches Fondue für Weihnachten?",
                a: "Zu Weihnachten passt ein klassisches Schweizer Käsefondue perfekt. Für Kinder ist Schokoladenfondue als Dessert ein Highlight. Ein Champagner-Trüffel-Fondue macht das Fest besonders elegant."
            },
            {
                q: "Fondue-Ideen für Silvester?",
                a: "Silvester ist die perfekte Zeit für Fondue! Starten Sie mit Käsefondue als Vorspeise, servieren Sie Fleischfondue als Hauptgang und beenden Sie den Abend mit Schokoladenfondue. Oder entscheiden Sie sich für Raclette - das ist entspannter für lange Abende."
            },
            {
                q: "Kann man Fondue auch im Sommer machen?",
                a: "Auf jeden Fall! Probieren Sie leichte Varianten wie Fondue Chinoise mit Brühe oder ein erfrischendes Kokos-Limetten-Fondue als Dessert. Auch veganes Fondue ist eine sommerliche Alternative."
            }
        ]
    },
    {
        category: "Praktische Tipps",
        items: [
            {
                q: "Wie reinigt man ein Caquelon richtig?",
                a: "Lassen Sie das Caquelon vollständig abkühlen. Weichen Sie es in warmem Wasser ein. Verwenden Sie keine aggressiven Reinigungsmittel. Bei hartnäckigen Resten hilft eine Paste aus Backpulver und Wasser."
            },
            {
                q: "Kann man Fondue-Reste aufbewahren?",
                a: "Ja, Käsefondue-Reste halten sich 2-3 Tage im Kühlschrank. Erwärmen Sie sie langsam unter Rühren und geben Sie bei Bedarf etwas Weißwein oder Milch hinzu, um die Konsistenz zu verbessern."
            },
            {
                q: "Wie viele Fonduegabeln brauche ich?",
                a: "Pro Person sollten Sie mindestens 2 Fonduegabeln haben - eine zum Garen, eine zum Essen. Farblich unterscheidbare Gabeln helfen dabei, dass jeder seine eigene wiederfindet."
            },
            {
                q: "Was tun wenn das Fondue anbrennt?",
                a: "Reduzieren Sie sofort die Hitze und rühren Sie nicht um! Gießen Sie das Fondue vorsichtig in ein neues Gefäß und lassen Sie den angebrannten Teil zurück. Ein Schuss kalte Milch kann helfen."
            }
        ]
    }
];

export default function FAQ() {
    return (
        <>
            <SEOHead 
                title="FAQ - Häufige Fragen zu Fondue, Caquelon & Raclette"
                description="Alle Antworten: Welches Caquelon für Käsefondue? Wie viel Käse pro Person? Was tun, wenn das Fondue klumpt? Tipps für perfekten Fondue-Genuss!"
                keywords="Fondue FAQ, Caquelon Fragen, Käsefondue klumpt, Fondue wie viel Käse, Raclette Tipps, Fleischfondue Öl"
                canonical="https://caquelon.de/FAQ"
                structuredData={structuredData}
            />
            <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mb-12">
                        <HelpCircle className="w-12 h-12 text-red-900 mx-auto mb-4"/>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Häufig gestellte Fragen (FAQ)</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Hier findest du Antworten auf die häufigsten Fragen rund um Fondue, Caquelons und Raclette. 
                            Von der richtigen Käsemenge über Tipps zur Zubereitung bis hin zur Reinigung deines Caquelons.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <a href={createPageUrl('CaquelonKaufen')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ShoppingBag className="w-8 h-8 text-red-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Caquelon kaufen</h3>
                            <p className="text-sm text-gray-600">Finde das perfekte Caquelon für deine Bedürfnisse</p>
                        </a>
                        <a href={createPageUrl('FondueRezepte')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <ChefHat className="w-8 h-8 text-red-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Fondue-Rezepte</h3>
                            <p className="text-sm text-gray-600">Entdecke unsere Rezept-Sammlung von Käse bis Schokolade</p>
                        </a>
                        <a href={createPageUrl('FondueAbendPlanen')} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                            <Flame className="w-8 h-8 text-red-900 mb-3" />
                            <h3 className="font-semibold text-gray-900 mb-2">Fondue-Abend planen</h3>
                            <p className="text-sm text-gray-600">So wird dein Fondue-Abend perfekt</p>
                        </a>
                    </div>
                    <div className="space-y-12">
                        {faqData.map((categoryItem) => (
                            <section key={categoryItem.category}>
                                <h2 className="text-2xl font-bold text-red-900 mb-6 border-b-2 border-red-200 pb-2">{categoryItem.category}</h2>
                                <div className="space-y-6">
                                    {categoryItem.items.map((item) => (
                                        <div key={item.q} className="bg-white p-6 rounded-xl shadow-md">
                                            <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.q}</h3>
                                            <p className="text-gray-700 leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 text-center text-white">
                        <h2 className="text-3xl font-bold mb-4">Noch Fragen offen?</h2>
                        <p className="text-xl text-red-100 mb-8">
                            Finde in unseren Ratgebern und Rezepten weitere hilfreiche Tipps für den perfekten Fondue-Genuss!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <CTAButton href={createPageUrl('CaquelonKaufen')} variant="secondary" size="large">
                                Caquelon-Ratgeber
                            </CTAButton>
                            <CTAButton href={createPageUrl('FondueRezepte')} variant="secondary" size="large">
                                Alle Rezepte
                            </CTAButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}