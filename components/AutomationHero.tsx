"use client";

import React, { useEffect, useRef } from "react";

/* ============================================================
   Types
   ============================================================ */
interface WorkflowTile {
  icon: string;
  label: string;
  sub: string;
  delay: string;
}

interface Kpi {
  value: string;
  label: string;
}

/* ============================================================
   Data
   ============================================================ */
const TILES: WorkflowTile[] = [
  { icon: "◎", label: "Discover", sub: "Crawl & audit", delay: "0s" },
  { icon: "⌕", label: "Search Intel", sub: "SERP signals", delay: "0.6s" },
  { icon: "⚙", label: "Optimize", sub: "On-page fixes", delay: "1.2s" },
  { icon: "</>", label: "Generate", sub: "Content & schema", delay: "1.8s" },
  { icon: "◫", label: "Deploy", sub: "CMS push", delay: "2.4s" },
];

const KPIS: Kpi[] = [
  { value: "12.4M", label: "Tasks automated / mo" },
  { value: "99.98%", label: "Pipeline uptime" },
  { value: "6.2×", label: "Faster time-to-publish" },
];

/* ============================================================
   Animated line chart (SVG, self-drawing)
   ============================================================ */
const ChartLines: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const N = 32;
    const pts: number[] = Array.from({ length: N }, (_, i) => 40 + Math.sin(i * 0.6) * 14);

    const tick = (): void => {
      t += 0.02;
      for (let i = 0; i < N; i++) {
        pts[i] = 42 + Math.sin(i * 0.55 + t * 2) * 10 + Math.sin(i * 0.18 + t) * 8;
      }
      const d = pts
        .map((y, i) => `${i === 0 ? "M" : "L"} ${(i / (N - 1)) * 280} ${y}`)
        .join(" ");
      pathRef.current?.setAttribute("d", d);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg viewBox="0 0 280 80" className="w-full h-20" aria-hidden="true">
      {/* grid */}
      {[0, 20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="280" y2={y} className="stroke-yellow-300/20" strokeWidth="1" />
      ))}
      <path
        ref={pathRef}
        fill="none"
        className="stroke-yellow-500"
        strokeWidth="2"
        style={{ filter: "drop-shadow(0 0 6px rgba(254,203,15,0.5))" }}
      />
    </svg>
  );
};


/* ============================================================
   Hero component
   ============================================================ */
const HeroAutomation: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white text-slate-800 antialiased">
      {/* ---------- scoped keyframes ---------- */}
      <style>{`
        @keyframes floatY   { 0%,100% { transform: translateY(0) }   50% { transform: translateY(-10px) } }
        @keyframes floatY2  { 0%,100% { transform: translateY(0) }   50% { transform: translateY(-16px) } }
        @keyframes pulseGlow{ 0%,100% { box-shadow: 0 0 18px rgba(254,203,15,.12), inset 0 0 22px rgba(254,203,15,.05) }
                              50%     { box-shadow: 0 0 34px rgba(254,203,15,.28), inset 0 0 30px rgba(254,203,15,.10) } }
        @keyframes belt     { to { background-position: -64px 0 } }
        @keyframes scan     { from { top: -30% } to { top: 115% } }
        @keyframes tickerUp { 0% { transform: translateY(0) } 100% { transform: translateY(-50%) } }

        .glass        { background: linear-gradient(150deg, rgba(254,203,15,.06), rgba(254,203,15,.02));
                        border: 1px solid rgba(254,203,15,.2);
                        backdrop-filter: blur(12px); }
        .glass-bright { border-color: rgba(254,203,15,.4); }
      `}</style>

      {/* ---------- background: grid + ambient glow ---------- */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(254,203,15,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(254,203,15,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-40 left-1/4 h-[480px] w-[720px] rounded-full bg-yellow-400/8 blur-[140px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[520px] rounded-full bg-yellow-400/8 blur-[120px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">

          {/* ================= LEFT: copy ================= */}
          <div className="relative z-10">
            {/* eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-yellow-700">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-500" />
              </span>
              Autonomous Workflow Engine
            </div>

            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
              AUTOMATION
              <span className="block bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                AT SCALE.
              </span>
              <span className="mt-2 block text-2xl font-semibold normal-case tracking-normal text-slate-600 sm:text-3xl">
                Intelligent digital workflows, end to end.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Orchestrate discovery, optimization, and content generation as one
              continuous production line. Our agents audit, decide, and ship —
              while your team reviews the output, not the busywork.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="group relative rounded-lg bg-yellow-600 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition
                           hover:bg-yellow-500 hover:shadow-[0_0_32px_rgba(254,203,15,0.45)]"
              >
                Start Automating
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#platform"
                className="glass rounded-lg px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-yellow-700 transition
                           hover:border-yellow-400/60 hover:text-yellow-900"
              >
                View Platform
              </a>
            </div>

            {/* KPI chips */}
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-3">
              {KPIS.map((k) => (
                <div key={k.label} className="glass rounded-xl px-4 py-3.5" style={{ animation: "pulseGlow 4s ease-in-out infinite" }}>
                  <dt className="order-2 mt-1 text-[11px] leading-snug text-slate-500">{k.label}</dt>
                  <dd className="text-xl font-bold text-yellow-600">{k.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ================= RIGHT: visual stage ================= */}
          <div className="relative h-[520px] select-none lg:h-[600px]" aria-hidden="true">


            {/* ---- analytics dashboard panel ---- */}
            <div
              className="glass glass-bright absolute right-0 top-24 z-10 w-[78%] max-w-sm rounded-2xl p-5"
              style={{ animation: "floatY2 7s ease-in-out infinite, pulseGlow 5s ease-in-out infinite" }}
            >
              {/* scanline */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-cyan-300/10 to-transparent"
                  style={{ animation: "scan 4.5s linear infinite" }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-600/90">
                <span className="flex items-center gap-1.5">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-yellow-500" />
                  Live Pipeline
                </span>
                <span>REQ 98.4%</span>
              </div>

              <ChartLines />

              {/* mini bars */}
              <div className="mt-3 flex h-14 items-end gap-1.5">
                {[62, 40, 78, 55, 88, 47, 70, 92, 60, 81].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-yellow-500/70"
                    style={{ height: `${h}%`, animation: `floatY 3s ease-in-out ${i * 0.18}s infinite` }}
                  />
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {["Indexed 14,208", "Fixed 3,491", "Queued 612"].map((s) => (
                  <div key={s} className="rounded-md border border-yellow-300/20 bg-yellow-50 px-1 py-1.5 text-[10px] text-slate-700">
                    {s}
                  </div>
                ))}
              </div>
            </div>

            {/* ---- conveyor: workflow tiles ---- */}
            <div className="absolute bottom-6 left-0 right-0">
              {/* belt track */}
              <div
                className="absolute -bottom-3 left-0 right-0 h-3 rounded-full border-y border-yellow-300/30"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, rgba(254,203,15,.25) 0 8px, rgba(255,255,255,.9) 8px 32px)",
                  animation: "belt 1.2s linear infinite",
                }}
              />
              <div className="flex items-end gap-3 overflow-x-auto pb-5 lg:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {TILES.map((tile, i) => (
                  <div
                    key={tile.label}
                    className="glass group min-w-[112px] flex-1 cursor-default rounded-xl px-3 py-4 text-center transition-all duration-300
                               hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-[0_0_28px_rgba(254,203,15,0.35)]"
                    style={{ animation: `floatY 4.5s ease-in-out ${tile.delay} infinite` }}
                  >
                    <div className="text-2xl text-yellow-600 transition-transform duration-300 group-hover:scale-110">
                      {tile.icon}
                    </div>
                    <div className="mt-2 text-[11px] font-bold uppercase tracking-wider text-slate-800">
                      {tile.label}
                    </div>
                    <div className="mt-0.5 text-[10px] text-slate-500">{tile.sub}</div>
                    {/* connector dot to next tile */}
                    {i < TILES.length - 1 && (
                      <span className="absolute -right-2.5 top-1/2 hidden h-1 w-1 rounded-full bg-yellow-400/70 lg:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* decorative floating micro-panels */}
            <div
              className="glass absolute left-6 top-64 hidden rounded-lg px-3 py-2 text-[10px] font-mono text-yellow-700/90 md:block"
              style={{ animation: "floatY 5s ease-in-out -1s infinite" }}
            >
              {"<meta content=\"auto\" />"}
            </div>
            <div
              className="glass absolute left-1/2 top-40 hidden rounded-lg px-3 py-2 text-[10px] font-mono text-yellow-700/90 lg:block"
              style={{ animation: "floatY 6s ease-in-out -2.5s infinite" }}
            >
              schema.deploy(✓)
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-16 border-t border-yellow-200 pt-8">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">
            Powering automated pipelines for engineering-led marketing teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroAutomation;
