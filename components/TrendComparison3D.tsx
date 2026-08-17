import React from "react";

/**
 * TrendComparison3D
 * Side-by-side glowing 3D-style bar charts with a trend arrow — one declining, one rising.
 * Bars are drawn as isometric blocks (front + top + side faces) in pure SVG.
 *
 * Props:
 *  - leftValues / rightValues: number[]  (bar heights, any scale — auto-normalized)
 *  - leftColor / rightColor: string      (hex color for that side's glow + bars)
 *  - leftLabel / rightLabel: string      (optional caption under each chart)
 *  - height: number                      (px height of the chart area, default 260)
 */
export default function TrendComparison3D({
  leftValues = [90, 70, 78, 60, 40],
  rightValues = [40, 60, 78, 70, 90],
  leftColor = "#f23c3c",
  rightColor = "#f2f23c",
  leftLabel = "",
  rightLabel = "",
  height = 280,
}: {
  leftValues?: number[];
  rightValues?: number[];
  leftColor?: string;
  rightColor?: string;
  leftLabel?: string;
  rightLabel?: string;
  height?: number;
}) {
  return (
    <div className="w-full bg-black p-4">
      <div className="grid grid-cols-2 gap-1">
        <Panel values={leftValues} color={leftColor} label={leftLabel} height={height} direction="down" />
        <Panel values={rightValues} color={rightColor} label={rightLabel} height={height} direction="up" />
      </div>
    </div>
  );
}

/**
 * SingleTrendGraph3D
 * Single glowing 3D-style bar chart with a trend arrow.
 * Bars are drawn as isometric blocks (front + top + side faces) in pure SVG.
 *
 * Props:
 *  - values: number[]  (bar heights, any scale — auto-normalized)
 *  - color: string      (hex color for glow + bars)
 *  - direction: "up" | "down"  (trend direction)
 *  - height: number      (px height of the chart area, default 260)
 */
export function SingleTrendGraph3D({
  values = [90, 70, 78, 60, 40],
  color = "#f23c3c",
  direction = "down",
  height = 200,
}: {
  values?: number[];
  color?: string;
  direction?: "up" | "down";
  height?: number;
}) {
  return <Panel values={values} color={color} label="" height={height} direction={direction} />;
}

function Panel({ values, color, label, height, direction }: {
  values: number[];
  color: string;
  label: string;
  height: number;
  direction: "up" | "down";
}) {
  const barCount = values.length;
  const max = Math.max(...values);
  const width = 540;
  const depth = 16; // 3D skew offset
  const barGap = 26;
  const barWidth = (width - depth - barGap * (barCount + 1)) / barCount;
  const arrowMargin = 26; // reserved space so the arrowhead never clips the viewBox
  const baseline = height - 46;
  const topPad = 34 + arrowMargin;

  const front = shade(color, -0.15); // front face: slightly darker (true color-ish)
  const top = shade(color, 0.35); // top face: lighter, catches "light"
  const side = shade(color, -0.45); // side face: darker, in shadow

  const bars = values.map((v: number, i: number) => {
    const h = (v / max) * (baseline - topPad);
    const x = depth + barGap + i * (barWidth + barGap);
    const y = baseline - h;
    return { x, y, w: barWidth, h };
  });

  const points = bars.map((b: { x: number; y: number; w: number; h: number }, i: number) => {
    const lineGap = 15; // gap between line and bar top
    return [b.x + b.w / 2 + depth / 2, b.y - depth - 12 - lineGap];
  });
  const first = points[0];
  const last = points[points.length - 1];
  const lineStart = [first[0] - barGap, first[1] + (direction === "down" ? -20 : 20)];
  const rawEndY = last[1] + (direction === "down" ? 24 : -24);
  // Clamp so the arrowhead always stays within the visible viewBox bounds
  const lineEnd = [last[0] + barGap, Math.min(height - arrowMargin / 2, Math.max(arrowMargin / 2, rawEndY))];
  const fullPoints = [lineStart, ...points, lineEnd];
  const linePath = fullPoints.map((p) => p.join(",")).join(" ");

  const dx = lineEnd[0] - fullPoints[fullPoints.length - 2][0];
  const dy = lineEnd[1] - fullPoints[fullPoints.length - 2][1];
  // Rounded to avoid floating-point precision drift between server and
  // client renders, which caused a React hydration mismatch on the
  // arrowhead's rotate() transform.
  const angle = Math.round(Math.atan2(dy, dx) * (180 / Math.PI) * 1000) / 1000;

  const glowId = `glow3d-${color.replace("#", "")}`;

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full rounded-sm py-4"
      style={{
        background: `linear-gradient(135deg, ${hexToRgba(color, 0.15)} 0%, ${hexToRgba(color, 0.08)} 50%, rgba(0,0,0,0) 100%)`,
      }}
    >
      <svg
        width="100%"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="max-w-full"
      >
        <defs>
          <filter id={glowId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 3D bars: side face, front face, top face */}
        {bars.map((b: { x: number; y: number; w: number; h: number }, i: number) => {
          const { x, y, w, h } = b;
          const sidePath = `M ${x + w},${y} L ${x + w + depth},${y - depth} L ${x + w + depth},${y - depth + h} L ${x + w},${y + h} Z`;
          const topPath = `M ${x},${y} L ${x + depth},${y - depth} L ${x + w + depth},${y - depth} L ${x + w},${y} Z`;
          return (
            <g key={i} filter={`url(#${glowId})`}>
              <rect x={x} y={y} width={w} height={h} fill={front} />
              <path d={sidePath} fill={side} />
              <path d={topPath} fill={top} />
            </g>
          );
        })}

        {/* baseline */}
        <line
          x1={4}
          y1={baseline + 16}
          x2={width - 4 + depth}
          y2={baseline + 16}
          stroke={color}
          strokeWidth={3}
          strokeLinecap="round"
          filter={`url(#${glowId})`}
        />

        {/* trend line */}
        <polyline
          points={linePath}
          fill="none"
          stroke={color}
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          filter={`url(#${glowId})`}
        />

        {/* arrowhead */}
        <g transform={`translate(${lineEnd[0]}, ${lineEnd[1]}) rotate(${angle})`}>
          <path d="M -2,-14 L 22,0 L -2,14 Z" fill={color} filter={`url(#${glowId})`} />
        </g>
      </svg>

      {label && (
        <div className="mt-2 text-sm font-semibold tracking-wide" style={{ color }}>
          {label}
        </div>
      )}
    </div>
  );
}

// lightens (amt > 0) or darkens (amt < 0) a hex color by amt (-1..1)
function shade(hex: string, amt: number) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map((ch: string) => ch + ch).join("");
  const num = parseInt(c, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;
  const blend = amt > 0 ? 255 : 0;
  const p = Math.abs(amt);
  r = Math.round(r + (blend - r) * p);
  g = Math.round(g + (blend - g) * p);
  b = Math.round(b + (blend - b) * p);
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToRgba(hex: string, alpha: number) {
  let c = hex.replace("#", "");
  if (c.length === 3) c = c.split("").map((ch: string) => ch + ch).join("");
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  let b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
