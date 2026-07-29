'use client';

import { useEffect, useState } from 'react';

type Node = {
  icon: React.ReactNode;
  label: string;
};

const PlayIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default function HologramNetwork() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const nodes: Node[] = [
    { icon: <PlayIcon />, label: 'LEADCERT AI' },
    { icon: <ShieldIcon />, label: 'VERIFYSURE AI' },
    { icon: <PhoneIcon />, label: 'TRUSTCHECK AI' },
    { icon: <ChartIcon />, label: 'CLEARBOARD AI' },
    { icon: <EyeIcon />, label: 'PREDICTWISE AI' },
    { icon: <RocketIcon />, label: 'BOOK A PILOT' },
  ];

  // Positions for 6 nodes arranged in two columns of 3 (like the reference image)
  const positions = [
    { top: '14%', left: '18%' },  // top-left
    { top: '14%', left: '82%' },  // top-right
    { top: '50%', left: '10%' },  // mid-left
    { top: '50%', left: '90%' },  // mid-right
    { top: '86%', left: '18%' },  // bottom-left
    { top: '86%', left: '82%' },  // bottom-right
  ];

  const formattedTime = time
    ? time.toLocaleString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }).toUpperCase()
    : '';

  return (
    <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#FECB0F]/20 bg-black">
      {/* Server room style background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(254,203,15,0.08) 0px, rgba(254,203,15,0.08) 2px, transparent 2px, transparent 60px)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

      {/* Timestamp */}
      {formattedTime && (
        <div className="absolute top-3 right-4 text-[10px] md:text-xs text-[#FECB0F]/80 tracking-wider font-mono z-20">
          {formattedTime}
        </div>
      )}

      {/* Outer glowing ring container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[85%] h-[85%] max-w-[560px] max-h-[420px]">
          {/* Static dashed rings */}
          <div
            className="absolute inset-0 rounded-full border border-[#FECB0F]/25"
          />
          <div
            className="absolute inset-[8%] rounded-full border border-dashed border-[#FECB0F]/20"
          />

          {/* Connecting lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            {positions.map((pos, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={parseFloat(pos.left)}
                y2={parseFloat(pos.top)}
                stroke="#FECB0F"
                strokeOpacity="0.35"
                strokeWidth="0.3"
              />
            ))}
          </svg>

          {/* Central Globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#1a1a1a] to-black border border-[#FECB0F]/40 flex items-center justify-center shadow-[0_0_40px_rgba(254,203,15,0.35)]">
              <div
                className="absolute inset-1 rounded-full opacity-70"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 30% 30%, rgba(254,203,15,0.25), transparent 60%), repeating-radial-gradient(circle, rgba(254,203,15,0.08) 0px, transparent 3px, transparent 6px)',
                  animation: 'spin 20s linear infinite',
                }}
              />
              <div className="relative text-center z-10">
                <p className="text-[#FECB0F] font-extrabold text-xs md:text-base leading-tight tracking-wide">
                  PROFFER
                </p>
                <p className="text-white font-bold text-[10px] md:text-sm leading-tight tracking-wide">
                  .AI ENGINE
                </p>
              </div>
            </div>
          </div>

          {/* Nodes */}
          {nodes.map((node, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 z-10"
              style={{ top: positions[i].top, left: positions[i].left }}
            >
              <div className="w-14 h-10 md:w-16 md:h-11 rounded-lg border border-[#FECB0F]/50 bg-black/70 backdrop-blur-sm flex items-center justify-center text-[#FECB0F] shadow-[0_0_15px_rgba(254,203,15,0.25)]">
                {node.icon}
              </div>
              <span className="text-[8px] md:text-[10px] text-[#FECB0F]/90 font-semibold tracking-wide whitespace-nowrap text-center">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
        <button className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#FECB0F]/60 bg-black/70 text-[#FECB0F] text-xs md:text-sm font-semibold tracking-wide hover:bg-[#FECB0F]/10 transition-all">
          AFFILIATION
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  );
}
