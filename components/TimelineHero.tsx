'use client';

import { useEffect, useRef, useMemo } from 'react';

/* ================= types ================= */
interface TimelineItem {
  year: string;
  cards: string[];
  panelTitle: string;
  asList?: boolean;      // render all cards as bullets inside the screen
}

interface Point {
  x: number;
  y: number;
}

type SvgAttrs = Record<string, string | number>;

/* ================= data ================= */
const ITEMS: TimelineItem[] = [
  {
    year: "Our mission",
    cards: ["PMG B2B is a forward-thinking B2B lead generation agency specializing in lead generation, account-based marketing, demand generation, digital marketing, account management, and database management. We create a center of excellence for each customer, reserving 3X bandwidth exclusively, ensuring smooth execution of your campaigns."],
    panelTitle: "Our Mission"
  },
  {
    year: "Certifications",
    cards: ["As an ISO 27001-certified and GDPR/CCPA compliant organization, PMG manages your data with precision and safeguards your business interests. Each lead undergoes two rounds of audits, focusing on verification, specifications, and intent, ensuring quality."],
    panelTitle: "Certifications & Compliance"
  },
  {
    year: "Our Approach",
    cards: ["We deliver your first high-potential leads within 48 hours, catalyzing a 100% uptick in ROI and a dramatic conversion increase. Our strategic double-touch methodology and stringent BANT qualification process amplify conversions tenfold, equipping your teams with the acumen for enduring market excellence."],
    panelTitle: "Our Approach"
  },
  {
    year: "Why PMG",
    cards: [
      "ISO 27001 certified for data security",
      "GDPR and CCPA compliant",
      "Two-round lead audit process",
      "First leads delivered within 48 hours",
      "3X bandwidth reserved for each client"
    ],
    panelTitle: "Why Choose PMG B2B?",
    asList: true
  }
];

/* ================= typewriter settings ================= */
const TYPE_SPEED_MS = 14;        // delay per character
const TYPE_LIST_PAUSE_MS = 220;  // pause between list items

/* ================= arc geometry (centered on viewBox middle: y=320) ================= */
const CX = -40, CY = 320, R1 = 210, R2 = 300, SPREAD = 150;
const step: number = SPREAD / ITEMS.length;
const startAngle: number = 90 + (180 - SPREAD) / 2 - 90;
const NS = "http://www.w3.org/2000/svg";

function polar(cx: number, cy: number, r: number, deg: number): Point {
  const rad = (deg - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function wedgePath(cx: number, cy: number, r1: number, r2: number, a1: number, a2: number): string {
  const p1 = polar(cx, cy, r2, a1), p2 = polar(cx, cy, r2, a2);
  const p3 = polar(cx, cy, r1, a2), p4 = polar(cx, cy, r1, a1);
  const large = (a2 - a1 > 180) ? 1 : 0;
  return `M ${p1.x} ${p1.y} A ${r2} ${r2} 0 ${large} 1 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${r1} ${r1} 0 ${large} 0 ${p4.x} ${p4.y} Z`;
}

function el<K extends keyof SVGElementTagNameMap>(
  tag: K,
  attrs: SvgAttrs = {}
): SVGElementTagNameMap[K] {
  const e = document.createElementNS(NS, tag);
  for (const k in attrs) e.setAttribute(k, String(attrs[k]));
  return e;
}

/* small helper: getElementById with a non-null, typed result */
function byId<T extends Element>(id: string): T {
  const node = document.getElementById(id);
  if (!node) throw new Error(`Missing element #${id}`);
  return node as unknown as T;
}

/* short label for the middle selector cards (first few words) */
function cardLabel(text: string): string {
  const words = text.split(" ");
  return words.length <= 6 ? text : words.slice(0, 6).join(" ") + "…";
}

export function TimelineHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = 0;
    let activeCard = 0;
    let autoTimer: number | null = null;

    /* ---- typewriter state: a generation counter cancels stale typing runs ---- */
    let typeGeneration = 0;

    /** Types `text` into `target` char by char. Returns a promise that
     *  resolves when done (or rejects silently if a newer run started). */
    const typeText = (target: HTMLElement, text: string, gen: number): Promise<void> => {
      return new Promise<void>((resolve) => {
        let i = 0;
        const cursor = document.createElement("span");
        cursor.className = "type-cursor";
        target.appendChild(cursor);

        const step = (): void => {
          if (gen !== typeGeneration) {        // a newer render started — abort
            cursor.remove();
            resolve();
            return;
          }
          if (i < text.length) {
            cursor.insertAdjacentText("beforebegin", text[i]);
            i++;
            window.setTimeout(step, TYPE_SPEED_MS);
          } else {
            cursor.remove();
            resolve();
          }
        };
        step();
      });
    };

    /* ================= render arc ================= */
    const renderArc = (): void => {
      const svg = byId<SVGSVGElement>("arc");
      svg.innerHTML = "";

      // rotating decorative rings
      const rotor = el("g");
      rotor.setAttribute("class", "ring-rotor");
      rotor.appendChild(el("circle", { cx: CX, cy: CY, r: R2 + 40, fill: "none", stroke: "var(--accent-dim)", "stroke-width": 6, "stroke-dasharray": "4 10" }));
      svg.appendChild(rotor);

      const rotorRev = el("g");
      rotorRev.setAttribute("class", "ring-rotor-rev");
      rotorRev.appendChild(el("circle", { cx: CX, cy: CY, r: R1 - 30, fill: "none", stroke: "var(--accent-faint)", "stroke-width": 18, "stroke-dasharray": "2 6" }));
      rotorRev.appendChild(el("circle", { cx: CX, cy: CY, r: R2 + 62, fill: "none", stroke: "var(--accent-faint)", "stroke-width": 2, "stroke-dasharray": "30 14" }));
      svg.appendChild(rotorRev);

      ITEMS.forEach((it: TimelineItem, i: number) => {
        const a1 = startAngle + i * step + 2;
        const a2 = startAngle + (i + 1) * step - 2;
        const mid = (a1 + a2) / 2;
        const lp = polar(CX, CY, (R1 + R2) / 2, mid);
        const isActive = i === active;

        const g = el("g");
        g.setAttribute("class", "hud-wedge" + (isActive ? " wedge-active" : ""));
        if (isActive) g.style.opacity = "1";

        g.appendChild(el("path", {
          d: wedgePath(CX, CY, R1, R2, a1, a2),
          fill: isActive ? "var(--card-bg-active)" : "var(--card-bg)",
          stroke: isActive ? "var(--accent-bright)" : "var(--accent-dim)",
          "stroke-width": isActive ? 3 : 1.5
        }));

        // Create curved text path
        const textRadius = (R1 + R2) / 2;
        const pathId = `textPath-${i}`;
        const textPath = el("path", {
          id: pathId,
          d: `M ${polar(CX, CY, textRadius, a1).x} ${polar(CX, CY, textRadius, a1).y} A ${textRadius} ${textRadius} 0 0 1 ${polar(CX, CY, textRadius, a2).x} ${polar(CX, CY, textRadius, a2).y}`,
          fill: "none"
        });
        g.appendChild(textPath);

        // Create text with textPath
        const t = el("text", {
          fill: isActive ? "var(--accent-bright)" : "var(--text)",
          "font-size": isActive ? 16 : 13,
          "font-weight": "700",
          "letter-spacing": "0.04em"
        });
        t.setAttribute("class", "hud-year");

        const tp = el("textPath", {
          href: `#${pathId}`,
          "text-anchor": "middle",
          startOffset: "50%"
        });
        tp.textContent = it.year;
        t.appendChild(tp);
        g.appendChild(t);

        g.addEventListener("click", () => {
          if (autoTimer) window.clearInterval(autoTimer);
          autoTimer = null;
          active = i;
          activeCard = 0;
          renderArc(); renderCards(); renderPanel();
        });
        svg.appendChild(g);
      });

      
    };

    /* ================= render selector cards (short labels) ================= */
    const renderCards = (): void => {
      const wrap = byId<HTMLDivElement>("cards");
      wrap.innerHTML = "";
      ITEMS[active].cards.forEach((c: string, i: number) => {
        const d = document.createElement("div");
        d.className = "hud-card" + (i === activeCard ? " active" : "");
        d.style.animationDelay = `${i * 0.08}s`;
        d.innerHTML =
          '<div class="ticks"><span></span><span></span><span></span><span></span></div>' +
          cardLabel(c);
        d.addEventListener("click", () => {
          activeCard = i;
          renderCards();
          renderPanel();               // clicking a card retypes the screen
        });
        wrap.appendChild(d);
      });
    };

    /* ================= render panel: TYPEWRITER inside the screen ================= */
    const renderPanel = (): void => {
      const it = ITEMS[active];
      const safeCard = Math.min(activeCard, it.cards.length - 1);
      const gen = ++typeGeneration;      // invalidate any typing still in progress

      // caption bar (title)
      const cap = byId<HTMLDivElement>("panelCaption");
      cap.style.animation = "none";
      void cap.offsetWidth;              // force reflow → restart entrance animation
      cap.style.animation = "";
      cap.textContent = it.panelTitle;

      // screen content
      const inner = byId<HTMLDivElement>("panelInner");
      inner.innerHTML = "";

      const content = document.createElement("div");
      content.className = "hud-panel-text";
      inner.appendChild(content);

      if (it.asList && it.cards.length > 1) {
        // bullet list: type each item in sequence
        const ul = document.createElement("ul");
        content.appendChild(ul);

        const typeItems = async (): Promise<void> => {
          for (const c of it.cards) {
            if (gen !== typeGeneration) return;
            const li = document.createElement("li");
            li.classList.add("typed-li");
            ul.appendChild(li);
            await typeText(li, c, gen);
            await new Promise<void>(r => window.setTimeout(r, TYPE_LIST_PAUSE_MS));
          }
        };
        void typeItems();
      } else {
        // paragraph: type the selected card's full text
        const p = document.createElement("p");
        content.appendChild(p);
        void typeText(p, it.cards[safeCard], gen);
      }
    };

    /* ================= dot rail ================= */
    const initDotRail = (): void => {
      const dl = byId<HTMLDivElement>("dotline");
      dl.innerHTML = "";
      for (let i = 0; i < 22; i++) {
        const d = document.createElement("i");
        if (i % 5 === 2) d.className = "big";
        dl.appendChild(d);
      }
    };

    /* ================= floating particles ================= */
    const initParticles = (): void => {
      for (let i = 0; i < 24; i++) {
        const p = document.createElement("div");
        p.className = "particle";
        const size = 2 + Math.random() * 3;
        p.style.width = p.style.height = `${size}px`;
        p.style.left = `${Math.random() * 100}vw`;
        p.style.top = `${55 + Math.random() * 45}vh`;
        p.style.animationDuration = `${6 + Math.random() * 8}s`;
        p.style.animationDelay = `${Math.random() * 8}s`;
        document.body.appendChild(p);
      }
    };

    initDotRail();
    initParticles();
    renderArc();
    renderCards();
    renderPanel();

    /* ================= auto-cycle through sections ================= */
    autoTimer = window.setInterval(() => {
      active = (active + 1) % ITEMS.length;
      activeCard = 0;
      renderArc(); renderCards(); renderPanel();
    }, 8000);                            // longer, so typing can finish

    // stop auto-cycling once the user interacts
    const stopAuto = (): void => {
      if (autoTimer) window.clearInterval(autoTimer);
      autoTimer = null;
    };
    document.addEventListener("click", stopAuto, { once: true });

    /* ================= cleanup ================= */
    return () => {
      typeGeneration++;                  // cancel in-flight typing
      if (autoTimer) window.clearInterval(autoTimer);
      document.removeEventListener("click", stopAuto);
      document.querySelectorAll(".particle").forEach(p => p.remove());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&display=swap');

        :root {
          --bg1: #000000;
          --bg2: #0a0a0a;
          --accent: #FFD700;
          --accent-bright: #FFED4A;
          --accent-dim: rgba(255,215,0,0.35);
          --accent-faint: rgba(255,215,0,0.12);
          --card-bg: rgba(255,215,0,0.08);
          --card-bg-active: #1a1a00;
          --text: #e5e5e5;
          --text-active: #ffffff;
          --panel-bg: rgba(255,215,0,0.06);
          --panel-inner: rgba(255,215,0,0.10);
          --glow: 0 0 12px rgba(255,215,0,0.8), 0 0 32px rgba(255,215,0,0.35);
        }

        * { box-sizing: border-box; }

        .hud-wrap {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 440px 1fr 1.2fr;
          align-items: center;
          font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
          background: radial-gradient(ellipse at 20% 30%, var(--bg2) 0%, var(--bg1) 65%);
          overflow: hidden;
        }
        @media (max-width: 1100px) {
          .hud-wrap { grid-template-columns: 1fr; padding: 40px 0; gap: 40px; }
          .hud-arc { height: 420px !important; }
        }

        /* ===== floating particles ===== */
        .particle {
          position: fixed;
          background: var(--accent);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          animation: floatUp linear infinite;
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) translateX(0);   opacity: 0; }
          10%  { opacity: .7; }
          90%  { opacity: .5; }
          100% { transform: translateY(-45vh) translateX(30px); opacity: 0; }
        }

        /* ===== arc: rotating rings ===== */
        .ring-rotor      { transform-origin: -40px 320px; animation: spin 40s linear infinite; }
        .ring-rotor-rev  { transform-origin: -40px 320px; animation: spinRev 26s linear infinite; }
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes spinRev { to { transform: rotate(-360deg); } }

        .hud-wedge { cursor: pointer; transition: opacity .25s; opacity: .8; }
        .hud-wedge:hover { opacity: 1; }
        .hud-year { pointer-events: none; user-select: none; font-weight: 700; letter-spacing: .06em; }

        .wedge-active { animation: wedgePulse 2.2s ease-in-out infinite; }
        @keyframes wedgePulse {
          0%, 100% { filter: drop-shadow(0 0 6px var(--accent)); }
          50%      { filter: drop-shadow(0 0 18px var(--accent-bright)); }
        }

  

        /* ===== selector cards ===== */
        .hud-mid { display: flex; gap: 18px; align-items: center; padding: 0 24px; }
        .hud-cards { display: flex; flex-direction: column; gap: 22px; flex: 1; }

        .hud-card {
          position: relative; cursor: pointer;
          padding: 14px 22px;
          color: var(--text);
          font-size: 15px; font-weight: 600; letter-spacing: .04em; line-height: 1.5;
          background: var(--card-bg);
          border: 1px solid var(--accent-dim);
          clip-path: polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%);
          transition: transform .25s, background .25s, box-shadow .25s, color .25s;
          opacity: 0;
          animation: cardIn .45s cubic-bezier(.2,.9,.3,1.2) forwards;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .hud-card:hover { transform: translateX(6px); }
        .hud-card.active {
          background: var(--card-bg-active);
          color: var(--text-active);
          border-color: var(--accent);
          animation: cardIn .45s cubic-bezier(.2,.9,.3,1.2) forwards, activeGlow 2s ease-in-out infinite;
        }
        @keyframes activeGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(255,215,0,.6); }
          50%      { box-shadow: 0 0 22px rgba(255,215,0,.95), 0 0 44px rgba(255,215,0,.35); }
        }
        .hud-card .ticks { position: absolute; top: -7px; left: 14px; display: flex; gap: 5px; }
        .hud-card .ticks span { width: 16px; height: 4px; background: var(--accent-dim); }
        .hud-card.active .ticks span { background: var(--accent); animation: tickBlink 1s steps(2) infinite; }
        @keyframes tickBlink { 50% { opacity: .3; } }

        .hud-dotline { display: flex; flex-direction: column; align-items: center; gap: 7px; }
        .hud-dotline i { width: 5px; height: 5px; background: var(--accent-dim); border-radius: 1px; }
        .hud-dotline i.big { width: 9px; height: 9px; border: 1px solid var(--accent); background: transparent; border-radius: 50%; animation: dotPing 2.4s ease-in-out infinite; }
        @keyframes dotPing {
          0%, 100% { box-shadow: 0 0 0 rgba(255,215,0,0); }
          50%      { box-shadow: 0 0 10px rgba(255,215,0,.9); }
        }

        /* ===== display panel ===== */
        .hud-right { padding: 0 48px; }
        .hud-panel {
          position: relative;
          border: 2px solid var(--accent);
          background: var(--panel-bg);
          backdrop-filter: blur(6px);
          padding: 28px;
          clip-path: polygon(28px 0, 100% 0, 100% calc(100% - 28px), calc(100% - 28px) 100%, 0 100%, 0 28px);
          animation: panelGlow 3s ease-in-out infinite;
        }
        @keyframes panelGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(255,215,0,.5); }
          50%      { box-shadow: 0 0 26px rgba(255,215,0,.85), 0 0 60px rgba(255,215,0,.25); }
        }
        .hud-panel-inner {
          position: relative;
          width: 100%;
          min-height: 300px;               /* screen grows with the text */
          background: var(--panel-inner);
          border: 1px solid var(--accent-dim);
          overflow: hidden;
        }
        /* scanline sweep */
        .hud-panel-inner::after {
          content: "";
          position: absolute; left: 0; right: 0; height: 34%;
          background: linear-gradient(to bottom, transparent, rgba(255,215,0,.18), rgba(255,215,0,.35), transparent);
          animation: scan 3.2s linear infinite;
          pointer-events: none;
        }
        @keyframes scan {
          from { top: -40%; }
          to   { top: 110%; }
        }
        /* faint grid inside the screen */
        .hud-panel-inner::before {
          content: "";
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--accent-faint) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-faint) 1px, transparent 1px);
          background-size: 34px 34px;
        }

        /* ===== text inside the screen ===== */
        .hud-panel-text {
          position: relative;
          z-index: 1;                       /* above grid + scanline */
          padding: 28px 30px;
          color: var(--text-active);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.7;
          letter-spacing: .03em;
        }
        .hud-panel-text p { margin: 0; min-height: 1.7em; }
        .hud-panel-text ul {
          margin: 0; padding: 0; list-style: none;
          display: flex; flex-direction: column; gap: 14px;
        }
        .hud-panel-text ul li {
          position: relative;
          padding-left: 26px;
          min-height: 1.7em;
        }
        .hud-panel-text ul li::before {
          content: "";
          position: absolute; left: 0; top: 8px;
          width: 10px; height: 10px;
          background: var(--accent);
          clip-path: polygon(0 0, 100% 0, 100% 60%, 60% 100%, 0 100%);
          box-shadow: 0 0 8px rgba(255,215,0,.8);
        }

        /* ===== typewriter cursor ===== */
        .type-cursor {
          display: inline-block;
          width: 9px;
          height: 1.1em;
          margin-left: 2px;
          vertical-align: text-bottom;
          background: var(--accent);
          box-shadow: 0 0 8px rgba(255,215,0,.9);
          animation: cursorBlink .7s steps(2) infinite;
        }
        @keyframes cursorBlink { 50% { opacity: 0; } }

        .hud-panel-caption {
          margin-top: 22px;
          border: 1px solid var(--accent-dim);
          background: var(--card-bg);
          text-align: center; padding: 12px;
          color: var(--accent-bright);
          font-weight: 700; font-size: 17px; letter-spacing: .06em;
          animation: captionIn .5s ease forwards;
        }
        @keyframes captionIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hud-corner { position: absolute; width: 26px; height: 26px; border-color: var(--accent-bright); border-style: solid; animation: cornerBlink 2.6s ease-in-out infinite; }
        .hud-corner.tl { top: -6px; left: -6px; border-width: 3px 0 0 3px; }
        .hud-corner.tr { top: -6px; right: -6px; border-width: 3px 3px 0 0; animation-delay: .6s; }
        .hud-corner.bl { bottom: -6px; left: -6px; border-width: 0 0 3px 3px; animation-delay: 1.2s; }
        .hud-corner.br { bottom: -6px; right: -6px; border-width: 0 3px 3px 0; animation-delay: 1.8s; }
        @keyframes cornerBlink { 50% { opacity: .35; } }

        /* glowing base under panel */
        .hud-base {
          margin: 26px auto 0;
          width: 70%; height: 14px;
          background: radial-gradient(ellipse at center, rgba(255,215,0,.55), transparent 70%);
          animation: basePulse 2.4s ease-in-out infinite;
        }
        @keyframes basePulse { 50% { opacity: .4; transform: scaleX(.85); } }
      `}</style>

      <div ref={containerRef} className="hud-wrap">
        {/* LEFT: section arc */}
        <svg id="arc" className="hud-arc" viewBox="0 0 440 640" style={{ width: "100%", height: "100vh" }} />

        {/* MIDDLE: selector cards */}
        <div className="hud-mid">
          <div className="hud-dotline" id="dotline" />
          <div className="hud-cards" id="cards" />
        </div>

        {/* RIGHT: display panel — text TYPES OUT inside the screen */}
        <div className="hud-right">
          <div className="hud-panel">
            <div className="hud-corner tl" />
            <div className="hud-corner tr" />
            <div className="hud-corner bl" />
            <div className="hud-corner br" />
            <div className="hud-panel-inner" id="panelInner" />
            <div className="hud-panel-caption" id="panelCaption" />
          </div>
          <div className="hud-base" />
        </div>
      </div>
    </>
  );
}

export default TimelineHero;

interface CtaProps {
  children?: React.ReactNode;
  className?: string;
  colors?: string[] | null;
  waveAmplitude?: number;
  waveSpeed?: number;
  layers?: number;
  opacity?: number;
  glowIntensity?: number;
}

export function Cta({
  children,
  className = "",
  colors = null,
  waveAmplitude = 30,
  waveSpeed = 0.004,
  layers = 5,
  opacity = 0.6,
  glowIntensity = 0.8,
}: CtaProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Golden-yellow palette
  const waveColors = useMemo(
    () =>
      colors || [
        "#FFD54F", // gold
        "#FFAB00", // amber
        "#FFC107", // amber-500
        "#FFE082", // amber-200
        "#FF8F00", // amber-800
        "#FFCA28", // amber-400
        "#FFF176", // amber-100
        "#E65100", // deep warm amber
        "#FF6F00", // vibrant orange-yellow
        "#FFD740", // sun gold
      ],
    [colors]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = container.offsetWidth;
    let height = container.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    let animationFrameId: number;
    let startTime = Date.now();

    const waveLayers = Array.from({ length: layers }, (_, i) => ({
      yBase: height * (0.3 + (i / layers) * 0.4),
      amplitude: waveAmplitude * (0.6 + Math.random() * 0.8),
      frequency: 0.006 + i * 0.002,
      speed: waveSpeed * (0.8 + i * 0.15),
      phase: (i * Math.PI * 2) / layers,
      color: waveColors[i % waveColors.length],
      lineWidth: 1.5 + Math.random() * 2,
      dashPattern: i % 3 === 0 ? [8, 4] : [],
    }));

    function hexToRgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function drawWave(layer: (typeof waveLayers)[number], time: number) {
      if (!ctx) return;
      ctx.beginPath();
      ctx.shadowColor = hexToRgba(layer.color, glowIntensity);
      ctx.shadowBlur = 12;
      const color = hexToRgba(layer.color, opacity);
      ctx.strokeStyle = color;
      ctx.lineWidth = layer.lineWidth;
      ctx.setLineDash(layer.dashPattern);

      for (let x = 0; x <= width; x += 3) {
        const y =
          layer.yBase +
          Math.sin(x * layer.frequency + time * layer.speed + layer.phase) *
            layer.amplitude +
          Math.sin(x * layer.frequency * 0.5 + time * layer.speed * 0.7) *
            layer.amplitude * 0.3;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.closePath();
      ctx.setLineDash([]);
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";
    }

    function animate() {
      if (!ctx) return;
      const time = (Date.now() - startTime) * 1;
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.6
      );
      gradient.addColorStop(0, "rgba(255, 213, 79, 0.08)");
      gradient.addColorStop(0.5, "rgba(255, 171, 0, 0.04)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      waveLayers.forEach((layer) => drawWave(layer, time));
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    function handleResize() {
      if (!container || !canvas) return;
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = width;
      canvas.height = height;
      waveLayers.forEach((layer) => {
        layer.yBase =
          height * (0.3 + (layer.yBase / (height * 0.7)) * 0.4);
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [waveColors, layers, waveAmplitude, waveSpeed, opacity, glowIntensity]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ minHeight: "400px" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
