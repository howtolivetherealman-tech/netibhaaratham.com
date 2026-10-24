import React from 'react';

interface EdiNijamLogoProps {
  size?: number;
  className?: string;
}

export const EdiNijamLogo: React.FC<EdiNijamLogoProps> = ({ size = 56, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={`shrink-0 select-none ${className}`}
      role="img"
      aria-label="నేటిభారతం చానెల్ - NETI BHARATAM - ఒక దేశం ఒకే చట్టం లోగో"
    >
      <defs>
        <linearGradient id="enGoldBevel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="28%" stopColor="#E6B84C" />
          <stop offset="55%" stopColor="#A8741A" />
          <stop offset="80%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#8A5A10" />
        </linearGradient>
        <linearGradient id="enGoldText" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF7C2" />
          <stop offset="50%" stopColor="#E5B84B" />
          <stop offset="100%" stopColor="#9E6B14" />
        </linearGradient>
        <radialGradient id="enNavyRing" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#142F5A" />
          <stop offset="75%" stopColor="#0A1B38" />
          <stop offset="100%" stopColor="#061126" />
        </radialGradient>
        <clipPath id="enInnerGlobe">
          <circle cx="120" cy="120" r="76" />
        </clipPath>
        <path id="enTopTextArc" d="M 33,120 A 87,87 0 1,1 207,120" fill="none" />
        <path id="enBottomTextArc" d="M 28,124 A 92,92 0 0,0 212,124" fill="none" />
      </defs>

      {/* Outer 3D Gold Coin Rim */}
      <circle cx="120" cy="120" r="116" fill="url(#enGoldBevel)" />
      <circle
        cx="120"
        cy="120"
        r="110"
        fill="url(#enNavyRing)"
        stroke="url(#enGoldBevel)"
        strokeWidth="3.5"
      />

      {/* Golden Wheat Wreaths on Left & Right of Outer Ring */}
      <g stroke="url(#enGoldText)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <path d="M 25,112 C 22,135 28,158 42,175" />
        <path d="M 20,120 L 26,115 M 21,130 L 27,125 M 23,140 L 29,135 M 27,150 L 33,145 M 32,160 L 38,155" />
        <path d="M 215,112 C 218,135 212,158 198,175" />
        <path d="M 220,120 L 214,115 M 219,130 L 213,125 M 217,140 L 211,135 M 213,150 L 207,145 M 208,160 L 202,155" />
      </g>

      {/* Inner Tricolour & India Map Medallion */}
      <g clipPath="url(#enInnerGlobe)">
        <rect x="40" y="40" width="160" height="160" fill="#0B2246" />
        {/* Saffron, White, Green Waves */}
        <path d="M 40,44 L 200,44 L 200,96 L 40,106 Z" fill="#FF8C1A" opacity="0.92" />
        <path d="M 40,104 L 200,94 L 200,134 L 40,140 Z" fill="#FFFFFF" opacity="0.96" />
        <path d="M 40,138 L 200,132 L 200,175 L 40,175 Z" fill="#138808" opacity="0.92" />

        {/* Rising Golden Sun & Rays */}
        <circle cx="136" cy="82" r="16" fill="#FFD54F" />
        <g stroke="#FFD54F" strokeWidth="1.5" opacity="0.85">
          <line x1="136" y1="58" x2="136" y2="50" />
          <line x1="150" y1="64" x2="156" y2="57" />
          <line x1="122" y1="64" x2="116" y2="57" />
          <line x1="158" y1="76" x2="166" y2="73" />
        </g>

        {/* Stylized India Map Silhouette in Gold/Saffron */}
        <path
          d="M 105,54 L 118,58 L 114,68 L 126,76 L 146,84 L 132,102 L 118,128 L 110,145 L 98,122 L 86,102 L 95,84 L 92,66 Z"
          fill="#F59E0B"
          stroke="#FFF3B0"
          strokeWidth="1.2"
          opacity="0.9"
        />

        {/* Scales of Justice (న్యాయ త్రాసు) */}
        <g stroke="#08162F" strokeWidth="1.8" fill="none" strokeLinecap="round">
          <line x1="158" y1="76" x2="158" y2="100" />
          <line x1="146" y1="82" x2="170" y2="82" />
          <path d="M 146,82 L 142,91 L 150,91 Z" fill="#08162F" />
          <path d="M 170,82 L 166,91 L 174,91 Z" fill="#08162F" />
          <line x1="152" y1="100" x2="164" y2="100" />
        </g>

        {/* Ashoka Chakra on left tricolour band */}
        <circle cx="72" cy="122" r="11" fill="none" stroke="#1E3A8A" strokeWidth="1.8" />
        <circle cx="72" cy="122" r="2.5" fill="#1E3A8A" />

        {/* Deep Navy Lower Plinth for NETI BHARATAM Title */}
        <rect x="40" y="138" width="160" height="62" fill="#071630" opacity="0.96" />
        <line x1="52" y1="138" x2="188" y2="138" stroke="url(#enGoldBevel)" strokeWidth="1.8" />
      </g>

      {/* Inner Medallion Gold Ring */}
      <circle
        cx="120"
        cy="120"
        r="76"
        fill="none"
        stroke="url(#enGoldBevel)"
        strokeWidth="3.5"
      />

      {/* Central Ashoka Emblem Medallion */}
      <circle
        cx="120"
        cy="112"
        r="22"
        fill="#0A1B38"
        stroke="url(#enGoldBevel)"
        strokeWidth="2.5"
      />
      {/* Stylized Lion Capital Silhouette */}
      <path
        d="M 112,118 L 128,118 L 126,104 L 120,98 L 114,104 Z"
        fill="url(#enGoldText)"
      />
      <circle cx="120" cy="122" r="3" fill="#FFF3B0" />

      {/* Center Bold Titles: నేటిభారతం / NETI BHARATAM */}
      <text
        x="120"
        y="160"
        textAnchor="middle"
        fill="url(#enGoldText)"
        fontFamily="'Noto Sans Telugu', sans-serif"
        fontWeight="800"
        fontSize="19"
      >
        నేటిభారతం
      </text>
      <text
        x="120"
        y="178"
        textAnchor="middle"
        fill="#F6D365"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="800"
        fontSize="10"
        letterSpacing="1.2"
      >
        NETI BHARATAM
      </text>

      {/* Curved Outer Ring Text: నేటిభారతం చానెల్ (Top) & ఒక దేశం ఒకే చట్టం (Bottom) */}
      <text
        fill="url(#enGoldText)"
        fontFamily="'Noto Sans Telugu', sans-serif"
        fontWeight="700"
        fontSize="13.5"
      >
        <textPath href="#enTopTextArc" startOffset="50%" textAnchor="middle">
          నేటిభారతం చానెల్
        </textPath>
      </text>
      <text
        fill="#FFFFFF"
        fontFamily="'Noto Sans Telugu', sans-serif"
        fontWeight="700"
        fontSize="12.5"
      >
        <textPath href="#enBottomTextArc" startOffset="50%" textAnchor="middle">
          ఒక దేశం ఒకే చట్టం
        </textPath>
      </text>
    </svg>
  );
};
