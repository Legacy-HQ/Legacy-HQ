// Background geometry from the brand's dark banner: shadow, mid and lit planes,
// a faint disc and a hairline grid. Sits behind dark sections.
export function Planes({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1536 512"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pl-lit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1d2324" />
          <stop offset="1" stopColor="#141a1b" />
        </linearGradient>
        <linearGradient id="pl-mid" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0a1010" />
          <stop offset="1" stopColor="#0d1414" />
        </linearGradient>
      </defs>
      <rect width="1536" height="512" fill="#050b0b" />
      <path d="M0 0h130l170 255L0 512z" fill="url(#pl-mid)" />
      <path d="M130 0h425L300 255z" fill="url(#pl-lit)" />
      <circle cx="900" cy="256" r="270" fill="#0a1010" />
      <path d="M1536 512V60l-330 452z" fill="#0a1010" opacity=".8" />
      <path d="M1000 512C1240 380 1340 200 1420 0" fill="none" stroke="#f5f3ee" strokeOpacity=".14" />
      <g stroke="#f5f3ee" strokeOpacity=".06">
        <path d="M0 256h1536M384 0v512M768 0v512M1152 0v512M1460 0v512" />
      </g>
    </svg>
  );
}
