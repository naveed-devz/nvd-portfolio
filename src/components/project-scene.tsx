"use client";

export type SceneVariant = "routeeye" | "kalrav" | "ecai";

export function ProjectScene({ variant }: { variant: SceneVariant }) {
  return (
    <div className={`project-scene project-scene-${variant}`}>
      <svg viewBox="0 0 360 180" className="project-scene-svg" aria-hidden="true">
        {variant === "routeeye" ? <RouteEyeScene /> : null}
        {variant === "kalrav" ? <KalravScene /> : null}
        {variant === "ecai" ? <EcaiScene /> : null}
      </svg>
    </div>
  );
}

function RouteEyeScene() {
  return (
    <>
      <rect
        x="18"
        y="24"
        width="324"
        height="132"
        rx="22"
        fill="rgba(255,255,255,0.5)"
      />

      <g transform="translate(74 122)">
        <circle r="15" cy="-26" fill="#d56d44" />
        <path
          d="M-12 12 C-8 -12 8 -12 12 12 L9 34 L-9 34 Z"
          fill="#1b2631"
        />
        <rect
          x="18"
          y="-6"
          width="22"
          height="34"
          rx="6"
          fill="#3558b2"
          transform="rotate(-12 29 11)"
        />
        <circle cx="29" cy="2" r="2.5" fill="#f0f4f8" opacity="0.9" />
      </g>

      <path
        d="M136,138 C176,116 214,110 246,90 C276,72 304,54 330,40"
        fill="none"
        stroke="rgba(42, 118, 215, 0.12)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M136,138 C176,116 214,110 246,90 C276,72 304,54 330,40"
        fill="none"
        stroke="#3568d4"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="28 14"
      />

      <circle cx="136" cy="138" r="5.5" fill="#3558b2" stroke="#ffffff" strokeWidth="2" />
      <circle cx="246" cy="90" r="5.5" fill="#3558b2" stroke="#ffffff" strokeWidth="2" />
      <circle cx="330" cy="40" r="5.5" fill="#5f9f5b" stroke="#ffffff" strokeWidth="2" />

      <g transform="translate(302 58)">
        <rect x="-11" y="-7" width="22" height="14" rx="5" fill="#18202d" />
        <rect x="-5" y="-10" width="10" height="6" rx="2" fill="#3558b2" />
        <circle cx="-7" cy="8" r="2.6" fill="#d56d44" />
        <circle cx="7" cy="8" r="2.6" fill="#d56d44" />
      </g>

      <text
        x="342"
        y="164"
        textAnchor="end"
        className="scene-label"
      >
        Driver checks route in real time
      </text>
    </>
  );
}

function KalravScene() {
  return (
    <>
      <g transform="translate(54 92)">
        <circle r="16" cy="-22" fill="#d56d44" />
        <path
          d="M-12 10 C-8 -10 8 -10 12 10 L10 32 L-10 32 Z"
          fill="#3558b2"
        />
      </g>

      <g transform="translate(144 38)">
        <rect
          width="86"
          height="92"
          rx="16"
          fill="#ffffff"
          stroke="rgba(53, 88, 178, 0.14)"
        />
        <path
          d="M43 66 V28 M43 28 L30 42 M43 28 L56 42"
          fill="none"
          stroke="#3558b2"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="24"
          y="70"
          width="38"
          height="6"
          rx="3"
          fill="rgba(53, 88, 178, 0.12)"
        />
      </g>

      <path
        d="M70,96 C96,96 118,88 144,84"
        className="scene-dashed-path"
      />
      <path
        d="M230,84 C250,70 260,60 272,54"
        className="scene-dashed-path"
      />
      <path
        d="M230,86 C252,92 276,94 304,92"
        className="scene-dashed-path"
      />
      <path
        d="M230,88 C250,106 258,118 270,124"
        className="scene-dashed-path"
      />

      <circle cx="114" cy="90" r="4.2" fill="#3558b2" />
      <circle cx="132" cy="86" r="4.2" fill="#3558b2" opacity="0.8" />
      <circle cx="250" cy="70" r="3.8" fill="#5f9f5b" />
      <circle cx="276" cy="92" r="3.8" fill="#5f9f5b" opacity="0.8" />
      <circle cx="250" cy="106" r="3.8" fill="#5f9f5b" opacity="0.7" />

      <g transform="translate(282 54)">
        <circle r="10" cy="-12" fill="#3558b2" />
        <rect x="-9" y="0" width="18" height="20" rx="7" fill="#3558b2" />
      </g>
      <g transform="translate(314 92)">
        <circle r="10" cy="-12" fill="#5f9f5b" />
        <rect x="-9" y="0" width="18" height="20" rx="7" fill="#5f9f5b" />
      </g>
      <g transform="translate(280 126)">
        <circle r="10" cy="-12" fill="#d56d44" />
        <rect x="-9" y="0" width="18" height="20" rx="7" fill="#d56d44" />
      </g>

      <text
        x="342"
        y="164"
        textAnchor="end"
        className="scene-label"
      >
        Upload once, shared everywhere
      </text>
    </>
  );
}

function EcaiScene() {
  return (
    <>
      <g transform="translate(32 22)">
        <rect
          width="296"
          height="132"
          rx="18"
          fill="#ffffff"
          stroke="rgba(53, 88, 178, 0.12)"
        />
        <rect
          x="16"
          y="18"
          width="88"
          height="96"
          rx="16"
          fill="rgba(53, 88, 178, 0.08)"
        />

        <g transform="translate(60 67)">
          <rect
            x="-18"
            y="-2"
            width="36"
            height="28"
            rx="8"
            fill="#3558b2"
          />
          <path
            d="M-10 -2 V-14 C-10 -25 10 -25 10 -14 V-2"
            fill="none"
            stroke="#3558b2"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>

        <text x="126" y="36" className="scene-panel-title">
          Internal RAG workspace
        </text>

        <line
          x1="148"
          y1="78"
          x2="190"
          y2="60"
          stroke="rgba(53, 88, 178, 0.22)"
          strokeWidth="2"
        />
        <line
          x1="190"
          y1="60"
          x2="234"
          y2="86"
          stroke="rgba(53, 88, 178, 0.22)"
          strokeWidth="2"
        />
        <line
          x1="234"
          y1="86"
          x2="274"
          y2="68"
          stroke="rgba(53, 88, 178, 0.22)"
          strokeWidth="2"
        />

        <rect x="138" y="66" width="20" height="24" rx="5" fill="#3558b2" />
        <rect x="180" y="48" width="20" height="24" rx="5" fill="#3558b2" />
        <rect x="224" y="74" width="20" height="24" rx="5" fill="#3558b2" />
        <rect x="264" y="56" width="20" height="24" rx="5" fill="#3558b2" />

        <circle cx="234" cy="86" r="5.5" fill="#d56d44" />

        <rect
          x="122"
          y="96"
          width="152"
          height="18"
          rx="8"
          fill="rgba(53, 88, 178, 0.08)"
        />
      </g>

      <text
        x="342"
        y="164"
        textAnchor="end"
        className="scene-label"
      >
        Private docs, internal answers
      </text>
    </>
  );
}
