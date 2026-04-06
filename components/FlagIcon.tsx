// National flags rendered as simple geometric SVGs.
// Flag designs are official government symbols and are in the public domain.

type FlagIconProps = {
  countryCode: string // GB | US | AE | DE | CA
  size?: number       // width in px, height auto-calculated
}

export default function FlagIcon({ countryCode, size = 48 }: FlagIconProps) {
  const w = size
  const h = Math.round(size * 0.6)
  const r = 4

  switch (countryCode) {
    // ── United Kingdom (Union Jack — simplified horizontal triband) ──────
    case 'GB':
      return (
        <svg width={w} height={h} viewBox={`0 0 60 36`} xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          <rect width="60" height="36" fill="#012169" />
          {/* White diagonal cross */}
          <line x1="0" y1="0" x2="60" y2="36" stroke="white" strokeWidth="7" />
          <line x1="60" y1="0" x2="0" y2="36" stroke="white" strokeWidth="7" />
          {/* Red diagonal cross */}
          <line x1="0" y1="0" x2="60" y2="36" stroke="#C8102E" strokeWidth="4" />
          <line x1="60" y1="0" x2="0" y2="36" stroke="#C8102E" strokeWidth="4" />
          {/* White St George cross */}
          <rect x="24" y="0" width="12" height="36" fill="white" />
          <rect x="0" y="12" width="60" height="12" fill="white" />
          {/* Red St George cross */}
          <rect x="26" y="0" width="8" height="36" fill="#C8102E" />
          <rect x="0" y="14" width="60" height="8" fill="#C8102E" />
        </svg>
      )

    // ── United States ────────────────────────────────────────────────────
    case 'US':
      return (
        <svg width={w} height={h} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          {/* 7 red stripes alternating */}
          {[0,1,2,3,4,5,6,7,8,9,10,11,12].map((i) => (
            <rect key={i} x="0" y={i * (36/13)} width="60" height={36/13}
              fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'} />
          ))}
          {/* Blue canton */}
          <rect x="0" y="0" width="23" height="19" fill="#3C3B6E" />
          {/* 9 white stars (simplified) */}
          {[0,1,2,3,4].map((row) =>
            [0,1,2,3].map((col) => (
              <circle key={`${row}-${col}`}
                cx={2.8 + col * 4.5 + (row % 2 === 1 ? 2.25 : 0)}
                cy={2.5 + row * 3.5}
                r="1.1" fill="white" />
            ))
          )}
        </svg>
      )

    // ── UAE ──────────────────────────────────────────────────────────────
    case 'AE':
      return (
        <svg width={w} height={h} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          {/* Green top stripe */}
          <rect x="0" y="0" width="60" height="12" fill="#00732F" />
          {/* White middle stripe */}
          <rect x="0" y="12" width="60" height="12" fill="#FFFFFF" />
          {/* Black bottom stripe */}
          <rect x="0" y="24" width="60" height="12" fill="#000000" />
          {/* Red vertical bar */}
          <rect x="0" y="0" width="16" height="36" fill="#FF0000" />
        </svg>
      )

    // ── Germany ──────────────────────────────────────────────────────────
    case 'DE':
      return (
        <svg width={w} height={h} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          <rect x="0" y="0" width="60" height="12" fill="#000000" />
          <rect x="0" y="12" width="60" height="12" fill="#DD0000" />
          <rect x="0" y="24" width="60" height="12" fill="#FFCE00" />
        </svg>
      )

    // ── Canada ───────────────────────────────────────────────────────────
    case 'CA':
      return (
        <svg width={w} height={h} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          {/* White base */}
          <rect x="0" y="0" width="60" height="36" fill="#FFFFFF" />
          {/* Red left bar */}
          <rect x="0" y="0" width="15" height="36" fill="#FF0000" />
          {/* Red right bar */}
          <rect x="45" y="0" width="15" height="36" fill="#FF0000" />
          {/* Maple leaf (simplified as a star/polygon approximation) */}
          <polygon points="30,5 32,13 40,11 35,17 38,25 30,21 22,25 25,17 20,11 28,13"
            fill="#FF0000" />
        </svg>
      )

    // ── Fallback: plain colored square with country code ─────────────────
    default:
      return (
        <svg width={w} height={h} viewBox="0 0 60 36" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: r }}>
          <rect x="0" y="0" width="60" height="36" fill="#374151" />
          <text x="30" y="22" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold"
            fontFamily="system-ui, sans-serif">
            {countryCode}
          </text>
        </svg>
      )
  }
}
