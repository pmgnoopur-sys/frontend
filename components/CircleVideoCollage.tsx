'use client';

import { useRef } from "react";

interface Rectangle {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface CircleVideoCollageProps {
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  videoSrc?: string;
  poster?: string;
}

// Rectangle bento-grid layout (design space is 660 x 500). Tweak x/y/width/height to
// reshape the mosaic — rectangles tile the canvas with small gaps between them.
const RECTANGLES: Rectangle[] = [
  { x: 0, y: 0, width: 215, height: 332 },
  { x: 220, y: 0, width: 220, height: 160 },
  { x: 445, y: 0, width: 220, height: 160 },
  { x: 220, y: 165, width: 220, height: 335 },
  { x: 445, y: 165, width: 220, height: 167 },
  { x: 0, y: 337, width: 215, height: 163 },
  { x: 445, y: 337, width: 215, height: 163 },
];

const VIEW_W = 660;
const VIEW_H = 500;
const CLIP_ID = "rectangle-collage-clip";

export default function OctagonVideoCollage({
  eyebrow = "A Sneak peek from",
  title = "PMGian's Achievement",
  paragraphs = [
    `We believe in an employee-centric environment as we treat our employees as a whole PMG family. We believe in the saying that "Employees are the mouthpiece of every organization".`,
    `At PMG B2B, we believe in going above and beyond in whatever we do, whether we're having fun or working. We PMGians don't put any restrictions on ourselves and are always looking for new ways to broaden our horizons.`,
  ],
  videoSrc = "/WhatsApp Video 2026-07-31 at 5.35.53 PM.mp4",
  poster,
}: CircleVideoCollageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .rectangle-container::before {
            content: "";
            position: absolute;
            inset: -3px;
            background: linear-gradient(
              180deg,
              #FECB0F 0%,
              #fff3b0 5%,
              #FECB0F 10%,
              transparent 15%,
              transparent 100%
            );
            background-size: 100% 300%;
            animation: verticalLineMove 4s linear infinite;
            z-index: 0;
            border-radius: 8px;
          }
          @keyframes verticalLineMove {
            0% {
              background-position: 0% 0%;
            }
            100% {
              background-position: 0% 300%;
            }
          }
        `
      }} />
    <section
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
      }}
      className="w-full py-20 px-6 md:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* ---------------- Left: copy ---------------- */}
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide" style={{ color: '#FECB0F' }}>
            {eyebrow}
          </p>
          <h2 className="mb-6 text-5xl font-black leading-none text-white sm:text-6xl">
            {title}
          </h2>
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-gray-300">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ---------------- Right: rectangle / video collage ---------------- */}
        <div className="relative w-full">
          <div
            className="relative w-full rectangle-container"
            style={{ aspectRatio: `${VIEW_W} / ${VIEW_H}` }}
          >
            {/* Hidden SVG that only supplies the clip-path definition */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
              <defs>
                <clipPath id={CLIP_ID} clipPathUnits="userSpaceOnUse">
                  {RECTANGLES.map((r, i) => (
                    <rect key={i} x={r.x} y={r.y} width={r.width} height={r.height} />
                  ))}
                </clipPath>
              </defs>
            </svg>

            {/*
              The video itself. It covers the whole design area but is
              clipped to the union of the rectangles above, so it's only
              painted where a rectangle exists — everywhere else stays
              fully transparent (no fill, no background color).
            */}
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                clipPath: `url(#${CLIP_ID})`,
                WebkitClipPath: `url(#${CLIP_ID})`,
                position: 'relative',
                zIndex: 1,
              }}
              src={videoSrc}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
