// Placeholder vetorial on-brand para cards sem foto (ex.: "Requerimento aprovado").
// Emblema de "documento aprovado" (papel + selo verde) sobre o teal, com textura de pontos.
export function CardArt() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div aria-hidden className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-ciano/15 blur-2xl" />

      {/* Textura de pontinhos */}
      <svg aria-hidden className="absolute inset-0 h-full w-full text-white/10">
        <defs>
          <pattern id="card-dots" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="1.6" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card-dots)" />
      </svg>

      {/* Emblema: documento aprovado */}
      <div className="absolute inset-0 grid place-items-center">
        <svg viewBox="0 0 120 120" className="h-28 w-28" fill="none" aria-hidden>
          <rect x="31" y="20" width="54" height="74" rx="6" fill="#ffffff" fillOpacity="0.08" stroke="#5CE1E6" strokeWidth="2.5" />
          <path d="M73 20 L85 32 L73 32 Z" fill="#5CE1E6" fillOpacity="0.55" />
          <line x1="41" y1="42" x2="70" y2="42" stroke="#ffffff" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" />
          <line x1="41" y1="52" x2="75" y2="52" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
          <line x1="41" y1="62" x2="63" y2="62" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
          <circle cx="79" cy="82" r="16" fill="#10B981" stroke="#07171A" strokeWidth="2.5" />
          <path d="M72 82 l5 5 l9 -11" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
