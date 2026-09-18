export function ProstheticArmIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 420"
      className={className}
      role="img"
      aria-label="Stylised illustration of a prosthetic arm"
    >
      <circle cx="205" cy="215" r="180" className="fill-brand/5" />

      {/* forearm */}
      <rect
        x="150"
        y="190"
        width="90"
        height="230"
        rx="34"
        fill="currentColor"
        transform="rotate(18 195 305)"
      />
      {/* forearm joint seams */}
      <g stroke="white" strokeWidth="4" transform="rotate(18 195 305)">
        <line x1="150" y1="280" x2="240" y2="280" />
        <line x1="150" y1="340" x2="240" y2="340" />
      </g>

      {/* wrist joint */}
      <circle cx="222" cy="184" r="30" fill="currentColor" />
      <circle cx="222" cy="184" r="30" fill="none" stroke="white" strokeWidth="4" />

      {/* palm */}
      <rect x="176" y="120" width="92" height="86" rx="30" fill="currentColor" />

      {/* fingers, fanned out and reaching upward */}
      <g fill="currentColor">
        <rect x="160" y="60" width="26" height="80" rx="13" transform="rotate(-18 173 100)" />
        <rect x="192" y="40" width="26" height="92" rx="13" transform="rotate(-6 205 86)" />
        <rect x="224" y="38" width="26" height="94" rx="13" transform="rotate(6 237 85)" />
        <rect x="254" y="52" width="26" height="82" rx="13" transform="rotate(20 267 93)" />
      </g>
      {/* finger joint seams */}
      <g stroke="white" strokeWidth="3">
        <line x1="158" y1="100" x2="184" y2="94" transform="rotate(-18 173 100)" />
        <line x1="192" y1="82" x2="218" y2="82" transform="rotate(-6 205 86)" />
        <line x1="224" y1="80" x2="250" y2="80" transform="rotate(6 237 85)" />
        <line x1="254" y1="90" x2="280" y2="84" transform="rotate(20 267 93)" />
      </g>

      {/* thumb */}
      <rect
        x="148"
        y="150"
        width="24"
        height="62"
        rx="12"
        fill="currentColor"
        transform="rotate(-55 160 181)"
      />
    </svg>
  );
}
