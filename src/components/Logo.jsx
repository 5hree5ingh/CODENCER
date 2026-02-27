// Inline SVG logo — no background, original colours, works on any dark surface
export default function Logo({ height = 34 }) {
    // Scale everything relative to height
    const w = height * 4.8

    return (
        <svg
            width={w}
            height={height}
            viewBox="0 0 240 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="CODENCER"
        >
            <defs>
                <linearGradient id="cg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#7C3AED" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>

            {/* Left chevron < */}
            <polyline
                points="22,8 8,25 22,42"
                stroke="url(#cg)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Right chevron > */}
            <polyline
                points="34,8 48,25 34,42"
                stroke="url(#cg)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* CODENCER text */}
            <text
                x="60"
                y="34"
                fontFamily="Outfit, Inter, sans-serif"
                fontWeight="800"
                fontSize="24"
                fill="#FFFFFF"
                letterSpacing="1"
            >
                CODENCER
            </text>
        </svg>
    )
}
