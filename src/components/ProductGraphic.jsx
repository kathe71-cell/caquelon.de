import React from 'react';

export default function ProductGraphic({ productId, className = "w-full h-44" }) {
  if (productId === 'kuhn-rikon-zermatt') {
    return (
      <div className={`relative ${className} rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100/60 border border-stone-200/80 flex items-center justify-center p-4 select-none`}>
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#78350f_1px,transparent_1px)] [background-size:12px_12px]" />
        
        {/* Vector Illustration: Kuhn Rikon Zermatt Ceramic Caquelon */}
        <svg viewBox="0 0 320 180" className="w-full h-full max-h-36 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="150" cy="155" rx="85" ry="12" fill="#000000" fillOpacity="0.08" />
          
          {/* Ceramic Handle (Single stick handle to the right) */}
          <path d="M205 102 C235 98 270 94 285 96 C292 97 296 103 294 109 C291 115 284 117 270 118 C235 120 205 116 205 116 Z" fill="#d97706" />
          <path d="M205 104 C235 100 270 96 284 98 C289 99 292 103 291 107 C289 111 284 113 270 114 C235 116 205 113 205 113 Z" fill="#f59e0b" />

          {/* Caquelon Body (Warm glazed earthenware) */}
          <path d="M75 80 C75 130 95 150 150 150 C205 150 225 130 225 80 Z" fill="#fdfbf7" stroke="#e2d9cc" strokeWidth="2" />
          {/* Terracotta rim & base accent */}
          <path d="M92 144 C110 149 190 149 208 144 C205 150 180 152 150 152 C120 152 95 150 92 144 Z" fill="#b45309" />

          {/* Swiss Cross Badge on Pot Belly */}
          <rect x="138" y="105" width="24" height="24" rx="4" fill="#dc2626" />
          <rect x="147" y="110" width="6" height="14" rx="1" fill="#ffffff" />
          <rect x="143" y="114" width="14" height="6" rx="1" fill="#ffffff" />

          {/* Outer Rim Lip */}
          <ellipse cx="150" cy="80" rx="75" ry="20" fill="#fdfbf7" stroke="#d5c8b5" strokeWidth="2" />
          {/* Inner Pot Rim */}
          <ellipse cx="150" cy="80" rx="68" ry="17" fill="#c2410c" fillOpacity="0.2" />

          {/* Golden Molten Cheese Surface */}
          <ellipse cx="150" cy="82" rx="64" ry="14" fill="#fbbf24" />
          {/* Cheese highlights & swirls */}
          <path d="M110 82 Q130 78 150 82 T190 82" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="135" cy="81" rx="8" ry="3" fill="#fef3c7" fillOpacity="0.8" />
          <ellipse cx="168" cy="83" rx="10" ry="4" fill="#fef3c7" fillOpacity="0.8" />
          <circle cx="152" cy="79" r="2.5" fill="#ffffff" fillOpacity="0.9" />
          <circle cx="125" cy="84" r="1.5" fill="#ffffff" fillOpacity="0.9" />

          {/* Steam curves */}
          <path d="M135 65 C130 55 140 48 135 38" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
          <path d="M152 62 C158 52 148 45 154 35" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.5" />
          <path d="M168 66 C163 56 173 49 168 40" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" opacity="0.4" />
        </svg>

        {/* Informative Vector Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-amber-100/90 text-amber-950 border border-amber-300/80 px-2 py-0.5 rounded-md text-[10px] font-bold shadow-xs">
          <span>Feuerfeste Keramik</span>
        </div>
      </div>
    );
  }

  if (productId === 'staub-gusseisen-fondueset') {
    return (
      <div className={`relative ${className} rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 via-rose-50/50 to-stone-200/70 border border-stone-200/80 flex items-center justify-center p-4 select-none`}>
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Vector Illustration: Staub Cast Iron Fondue Set */}
        <svg viewBox="0 0 320 180" className="w-full h-full max-h-36 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rechaud Base & Legs */}
          <ellipse cx="160" cy="165" rx="75" ry="9" fill="#000000" fillOpacity="0.1" />
          <path d="M100 162 L120 125 L200 125 L220 162" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
          {/* Rechaud ring platform */}
          <ellipse cx="160" cy="126" rx="48" ry="7" fill="#292524" stroke="#1c1917" strokeWidth="2" />
          {/* Burner & Small flame */}
          <rect x="145" y="132" width="30" height="18" rx="3" fill="#57534e" />
          <path d="M160 134 C155 127 160 120 160 114 C163 120 166 127 160 134 Z" fill="#f97316" />
          <path d="M160 132 C158 127 160 123 160 118 C161 123 163 127 160 132 Z" fill="#fde047" />

          {/* Left Cast-Iron Loop Handle */}
          <path d="M85 80 C65 80 65 98 85 98" stroke="#450a0a" strokeWidth="5" strokeLinecap="round" />
          <path d="M85 81 C68 81 68 97 85 97" stroke="#7f1d1d" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right Cast-Iron Loop Handle */}
          <path d="M235 80 C255 80 255 98 235 98" stroke="#450a0a" strokeWidth="5" strokeLinecap="round" />
          <path d="M235 81 C255 81 255 97 235 97" stroke="#7f1d1d" strokeWidth="2.5" strokeLinecap="round" />

          {/* Cast Iron Pot Belly (Enamelled Cherry Red / Rubis) */}
          <path d="M88 75 C88 120 108 132 160 132 C212 132 232 120 232 75 Z" fill="#991b1b" stroke="#450a0a" strokeWidth="2" />
          {/* Enamel highlight curvature */}
          <path d="M102 82 C102 115 115 125 140 127 C122 125 110 114 110 82 Z" fill="#dc2626" fillOpacity="0.6" />

          {/* Staub Signature Rim Lip */}
          <ellipse cx="160" cy="74" rx="72" ry="16" fill="#1c1917" stroke="#450a0a" strokeWidth="2" />
          {/* Inner Cream Enamel Surface */}
          <ellipse cx="160" cy="74" rx="66" ry="13" fill="#fef3c7" />

          {/* Cheese / Broth Content */}
          <ellipse cx="160" cy="75" rx="62" ry="11" fill="#f59e0b" />
          <ellipse cx="145" cy="74" rx="15" ry="4" fill="#fbbf24" />
          <circle cx="170" cy="73" r="2" fill="#ffffff" fillOpacity="0.8" />

          {/* Subtle steam */}
          <path d="M150 58 C145 50 152 44 148 36" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3" opacity="0.4" />
          <path d="M165 56 C170 48 162 42 167 34" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 3" opacity="0.4" />
        </svg>

        {/* Informative Vector Badge */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-stone-900 text-stone-100 border border-stone-700 px-2 py-0.5 rounded-md text-[10px] font-bold shadow-xs">
          <span>Emailliertes Gusseisen</span>
        </div>
      </div>
    );
  }

  // Fallback & 'spring-fondue-set' (Edelstahl-Fonduetopf mit Spritzschutz)
  return (
    <div className={`relative ${className} rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-zinc-100 to-slate-200/80 border border-stone-200/80 flex items-center justify-center p-4 select-none`}>
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:12px_12px]" />

      {/* Vector Illustration: Spring Stainless Steel Fondue Set */}
      <svg viewBox="0 0 320 180" className="w-full h-full max-h-36 drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Modern Rechaud Base & Burner */}
        <ellipse cx="160" cy="165" rx="72" ry="8" fill="#000000" fillOpacity="0.08" />
        <path d="M108 162 L124 128 L196 128 L212 162" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" />
        <ellipse cx="160" cy="128" rx="45" ry="6" fill="#475569" />
        <rect x="146" y="134" width="28" height="16" rx="2" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />
        <path d="M160 134 C156 128 160 122 160 117 C163 122 165 128 160 134 Z" fill="#38bdf8" />
        <path d="M160 133 C158 129 160 125 160 120 C161 125 163 129 160 133 Z" fill="#e0f2fe" />

        {/* Fondue Forks sticking out */}
        <line x1="130" y1="35" x2="152" y2="78" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="127" cy="30" r="4.5" fill="#dc2626" />
        <line x1="190" y1="35" x2="168" y2="78" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="193" cy="30" r="4.5" fill="#2563eb" />

        {/* Stainless Steel Pot Handles */}
        <path d="M92 84 C76 84 76 96 92 96" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
        <path d="M228 84 C244 84 244 96 228 96" stroke="#475569" strokeWidth="4" strokeLinecap="round" />

        {/* Pot Body (Sleek polished 18/10 stainless steel) */}
        <path d="M95 78 L100 130 C100 133 120 135 160 135 C200 135 220 133 220 130 L225 78 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
        {/* Metallic reflections */}
        <path d="M106 80 L110 128 C120 130 132 131 142 131 L138 80 Z" fill="#f8fafc" fillOpacity="0.7" />
        <path d="M172 80 L174 131 C184 131 198 129 208 127 L204 80 Z" fill="#94a3b8" fillOpacity="0.5" />

        {/* Encapsulated base disc (sandwich bottom) */}
        <path d="M101 128 C115 133 205 133 219 128 L218 133 C205 137 115 137 102 133 Z" fill="#334155" />

        {/* Anti-splash collar ring (Spritzschutzring mit Gabelkerben) */}
        <ellipse cx="160" cy="78" rx="66" ry="14" fill="#94a3b8" stroke="#334155" strokeWidth="1.5" />
        <ellipse cx="160" cy="78" rx="56" ry="10" fill="#cbd5e1" />
        <ellipse cx="160" cy="79" rx="42" ry="7" fill="#0f172a" />
        <ellipse cx="160" cy="80" rx="38" ry="5.5" fill="#eab308" fillOpacity="0.6" />

        {/* Fork notches on ring */}
        <circle cx="140" cy="76" r="2.5" fill="#334155" />
        <circle cx="180" cy="76" r="2.5" fill="#334155" />
        <circle cx="160" cy="72" r="2.5" fill="#334155" />
      </svg>

      {/* Informative Vector Badge */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-slate-900 text-slate-100 border border-slate-700 px-2 py-0.5 rounded-md text-[10px] font-bold shadow-xs">
        <span>18/10 Edelstahl • Spritzschutz</span>
      </div>
    </div>
  );
}
