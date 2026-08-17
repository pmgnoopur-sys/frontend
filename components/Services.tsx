"use client";

import Link from 'next/link';
import { useEffect, useRef } from "react";
import * as THREE from "three";



const services = [
  {
    title: 'Targeted Lead Generation™',
    description: 'Experience campaigns and guaranteed MQL/SQL appointments, driving sales with precision-targeted messaging.',
    link: '/services/prospect-pinnacle',
    features: ['B2B Demand Generation', 'Content Syndication', 'MQL and SQL Generation', 'B2B Appointment Setting']
  },
  {
    title: 'Account-Based Engagement (ABE)™',
    description: 'Hit your target every time with our meticulously curated content and strategic account-based engagement planning.',
    link: '/services/impact-sphere',
    features: ['Best-fit Account Identification', 'Cross Channel Campaigns', 'Double-touch Engagement', 'BANT Qualification']
  },
  {
    title: 'Email Marketing Solutions™',
    description: 'Level up your email strategy with our BANT-qualified, insight-driven approaches for unmatched lead verification.',
    link: '/services/inbox-oracle',
    features: ['Landing Page Optimization', 'Email Campaign Deployment', 'Targeted B2B Data Segmentation', 'Verified Opt-in B2B Email Lists']
  },
  {
    title: 'Contact Discovery™',
    description: 'Discover and connect with key decision-makers through our advanced contact discovery solutions.',
    link: '/services/contact-discovery',
    features: ['Decision Maker Identification', 'Direct Contact Details', 'Company Intelligence', 'Verified Contact Data']
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FECB0F]">We Transform Opportunities Into Loyalty</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover excellence in B2B lead generation with us, where every partnership fuels growth and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition border-2" style={{borderColor: '#FECB0F'}}>
              <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-200">
                    <svg className="w-4 h-4 mr-2" style={{color: '#FECB0F'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.link} className="inline-block font-semibold transition" style={{color: '#FECB0F'}}>
                Know More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= types ================= */

export function GiveShapeHero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // ---------- scene / camera / renderer ----------
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ---------- lighting (dim, moody) ----------
    scene.add(new THREE.AmbientLight(0xffffff, 0.35));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(-4, 6, 8);
    scene.add(key);

    // ---------- hypnotic ring texture (concentric circles) ----------
    const makeRingTexture = () => {
      const size = 1024;
      const c = document.createElement("canvas");
      c.width = c.height = size;
      const ctx = c.getContext("2d")!;
      ctx.fillStyle = "#111111";
      ctx.fillRect(0, 0, size, size);
      // rings centered toward upper-right of the texture
      const cx = size * 0.68, cy = size * 0.35;
      for (let r = size; r > 0; r -= 44) {
        // alternate dark / yellow bands
        const band = Math.floor(r / 44) % 2 === 0;
        ctx.fillStyle = band ? "#f5c842" : "#121212";
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      // bright bullseye center
      ctx.fillStyle = "#ffd95e";
      ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2); ctx.fill();
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      return tex;
    };

    // ---------- sphere ----------
    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(2.3, 96, 96),
      new THREE.MeshStandardMaterial({
        map: makeRingTexture(),
        roughness: 0.55,
        metalness: 0.25,
      })
    );
    sphere.position.set(-1.2, 0.6, 0);
    scene.add(sphere);

    // ---------- low-poly pyramids ----------
    const pyramidMat = new THREE.MeshStandardMaterial({
      color: 0xf5c842,
      roughness: 0.9,
      flatShading: true,
    });
    const pyramids: THREE.Mesh[] = [];
    const pyramidSpecs: [number, number, number, number, number][] = [
      // [x, y, z, radius, height]
      [-2.6, -2.9, 1.2, 1.5, 2.6],
      [-1.1, -3.1, 1.6, 0.9, 1.6],
      [-0.2, -2.6, 0.8, 0.7, 1.3],
      [ 1.6, -2.4, 0.5, 0.35, 0.7],
    ];
    for (const [x, y, z, r, h] of pyramidSpecs) {
      const p = new THREE.Mesh(new THREE.ConeGeometry(r, h, 4), pyramidMat);
      p.position.set(x, y, z);
      p.rotation.y = Math.random() * Math.PI;
      scene.add(p);
      pyramids.push(p);
    }

    // ---------- white square particles ----------
    const particleCount = 90;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(particleCount * 3);
    const pSize = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      pPos[i * 3] = (Math.random() - 0.5) * 26;
      pPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pPos[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      pSize[i] = Math.random() < 0.12 ? 18 : Math.random() * 4 + 1.5;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    pGeo.setAttribute("size", new THREE.BufferAttribute(pSize, 1));
    const particles = new THREE.Points(
      pGeo,
      new THREE.ShaderMaterial({
        transparent: true,
        vertexShader: `
          attribute float size;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (10.0 / -mv.z);
            gl_Position = projectionMatrix * mv;
          }`,
        fragmentShader: `
          void main() { gl_FragColor = vec4(1.0, 1.0, 1.0, 0.9); }`,
      })
    );
    scene.add(particles);

    // ---------- thin line streaks ----------
    const lineGeo = new THREE.BufferGeometry();
    const linePts: number[] = [];
    for (let i = 0; i < 26; i++) {
      const x = (Math.random() - 0.5) * 24;
      const y = (Math.random() - 0.5) * 12;
      const z = (Math.random() - 0.5) * 6 - 1;
      const len = Math.random() * 9 + 3;
      const ang = Math.PI * 0.75 + (Math.random() - 0.5) * 0.7;
      linePts.push(x, y, z, x + Math.cos(ang) * len, y + Math.sin(ang) * len, z);
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePts, 3));
    const lines = new THREE.LineSegments(
      lineGeo,
      new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.18 })
    );
    scene.add(lines);

    // ---------- animate ----------
    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      sphere.rotation.y = t * 0.15;
      sphere.rotation.x = Math.sin(t * 0.1) * 0.08;
      particles.rotation.y = t * 0.008;
      lines.rotation.z = Math.sin(t * 0.05) * 0.02;
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // ---------- resize ----------
    const onResize = () => {
      const w = mount.clientWidth, h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ---------- cleanup ----------
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* 3D canvas */}
      <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />

      {/* GIVE SHAPE text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "6%",
          transform: "translateY(-50%)",
          color: "#f5c842",
          fontFamily: "'Futura', 'Century Gothic', 'Poppins', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "0.45em",
          lineHeight: 1.6,
          textAlign: "left",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        GIVE
        <br />
        SHAPE
      </div>
    </section>
  );
}

const trendServices = [
  {
    title: "Prospect Pinnacle Targeted B2B Lead Gen Solutions™",
    desc: "PMG B2B's specialized B2B lead generation solutions combine precision targeting and multi-touch campaigns to deliver high quality MQLs and SQLs with unmatched speed. By leveraging deep audience insights, we focus on providing not just leads, but prospects ready to drive measurable success for your business.",
    points: ["B2B Demand Generation", "Content Syndication", "MQL and SQL Generation", "B2B Appointment Setting"],
  },
  {
    title: "Impact Sphere Account Based Engagement (ABE)™",
    desc: "PMG B2B's account based marketing services deliver tailored strategies that identify and engage high value accounts with precision. By leveraging detailed account intelligence, personalized messaging, and strategic nurturing, we help you build meaningful relationships that drive long term results.",
    points: ["Best-fit Account Identification", "Cross Channel Campaigns", "Double-touch Engagement", "BANT Qualification"],
  },
  {
    title: "Inbox Oracle Email Marketing Solutions™",
    desc: "PMG B2B's B2B email marketing services are designed to deliver high impact campaigns that connect with your audience and drive measurable results. From precise targeting to large scale deployment, we ensure your emails land in the right inbox every time. With strategies that generate 150K verified email leads monthly.",
    points: ["Landing Page Optimization", "Email Campaign Deployment", "Targeted B2B Data Segmentation", "Verified Opt-in B2B Email Lists"],
  },
  {
    title: "Contact Discovery Solutions™",
    desc: "PMG B2B's contact discovery solutions help you identify and connect with key decision-makers across your target accounts. Leveraging advanced research methodologies and verified data sources, we provide accurate contact information to accelerate your sales outreach.",
    points: ["Decision Maker Identification", "Direct Contact Details", "Company Intelligence", "Verified Contact Data"],
  },
];

export function TrendsHero() {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const starsCv = starsRef.current;
    const linesCv = linesRef.current;
    if (!starsCv || !linesCv) return;

    const sctx = starsCv.getContext('2d');
    const lctx = linesCv.getContext('2d');
    if (!sctx || !lctx) return;

    let W = 0, H = 0, dpr = 0;
    let stars: any[] = [];
    let ribbons: any[] = [];
    let shards: any[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      [starsCv, linesCv].forEach(cv => {
        if (cv) {
          cv.width = W * dpr;
          cv.height = H * dpr;
        }
      });
      sctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      lctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildScene();
    }

    function buildScene() {
      const count = Math.round((W * H) / 6000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.2,
        base: Math.random() * 0.5 + 0.15,
        tw: Math.random() * 2 + 0.5,
        ph: Math.random() * Math.PI * 2,
      }));

      ribbons = Array.from({ length: 9 }, (_, i) => ({
        x: W * (0.58 + Math.random() * 0.28),
        amp: 30 + Math.random() * 70,
        freq: 0.004 + Math.random() * 0.004,
        speed: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.10 + Math.random() * 0.22,
      }));

      shards = [
        { x: W * 0.70, y: H * 0.12, s: 70, rot: 0.4, spin: 0.0006, fill: '#3a3a3d' },
        { x: W * 0.73, y: H * 0.40, s: 34, rot: 2.1, spin: -0.0009, fill: '#242427' },
        { x: W * 0.69, y: H * 0.52, s: 24, rot: 1.0, spin: 0.0011, fill: '#1c1c1f' },
      ];
    }

    function drawStars(t: number) {
      if (!sctx) return;
      sctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        const a = s.base + Math.sin(t * 0.001 * s.tw + s.ph) * s.base * 0.8;
        sctx.globalAlpha = Math.max(0, a);
        sctx.fillStyle = '#ffffff';
        sctx.beginPath();
        sctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        sctx.fill();
      }
      sctx.globalAlpha = 1;
    }

    function drawRibbons(t: number) {
      if (!lctx) return;
      lctx.clearRect(0, 0, W, H);
      lctx.lineWidth = 1;
      for (const r of ribbons) {
        lctx.beginPath();
        for (let y = -20; y <= H + 20; y += 6) {
          const x = r.x
            + Math.sin(y * r.freq + t * 0.0006 * r.speed + r.phase) * r.amp
            + Math.sin(y * r.freq * 2.3 + r.phase) * (r.amp * 0.25);
          if (y === -20) lctx.moveTo(x, y);
          else lctx.lineTo(x, y);
        }
        lctx.strokeStyle = 'rgba(200,200,205,' + r.alpha + ')';
        lctx.stroke();
      }
    }

    function drawShards(t: number) {
      if (!lctx) return;
      for (const sh of shards) {
        const ang = sh.rot + t * sh.spin;
        const float = Math.sin(t * 0.0008 + sh.x) * 6;
        lctx.save();
        lctx.translate(sh.x, sh.y + float);
        lctx.rotate(ang);
        const s = sh.s;
        lctx.beginPath();
        lctx.moveTo(0, -s);
        lctx.lineTo(s * 0.9, s * 0.6);
        lctx.lineTo(-s * 0.9, s * 0.6);
        lctx.closePath();
        lctx.fillStyle = sh.fill;
        lctx.fill();
        lctx.beginPath();
        lctx.moveTo(0, -s);
        lctx.lineTo(s * 0.9, s * 0.6);
        lctx.lineTo(0, s * 0.15);
        lctx.closePath();
        lctx.fillStyle = 'rgba(0,0,0,0.45)';
        lctx.fill();
        lctx.restore();
      }
    }

    function frame(t: number) {
      drawStars(t);
      drawRibbons(t);
      drawShards(t);
      animationRef.current = requestAnimationFrame((time) => frame(time));
    }

    window.addEventListener('resize', resize);
    resize();
    animationRef.current = requestAnimationFrame((time) => frame(time));

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative w-full h-screen overflow-hidden" style={{ background: '#000000' }}>
        <canvas ref={starsRef} className="absolute inset-0 w-full h-full" />
        <canvas ref={linesRef} className="absolute inset-0 w-full h-full" />

        <div className="absolute left-1/2 bottom-[-60px] w-[900px] h-[340px] -translate-x-[30%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(210,210,215,0.16)_0%,rgba(160,160,170,0.07)_35%,transparent_70%)] blur-[30px] pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[5] pointer-events-none">
          <span className="block text-[#9a9a9e] font-normal text-[clamp(28px,5vw,56px)] tracking-[0.55em] leading-[1.5] shadow-[0_0_30px_rgba(0,0,0,0.6)] opacity-0 animate-[rise_1.4s_ease_forwards]">
            FOLLOW
          </span>
          <span className="block text-[#9a9a9e] font-normal text-[clamp(28px,5vw,56px)] tracking-[0.55em] leading-[1.5] shadow-[0_0_30px_rgba(0,0,0,0.6)] opacity-0 animate-[rise_1.4s_ease_forwards_0.25s]">
            THE TRENDS
          </span>
        </div>

        <div className="absolute left-1/2 bottom-[26px] -translate-x-1/2 text-[#55565a] z-[5] animate-[bob_2s_ease-in-out_infinite]" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <style jsx>{`
          @keyframes rise {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes bob {
            0%, 100% { transform: translate(-50%, 0); opacity: .5; }
            50%      { transform: translate(-50%, 8px); opacity: 1; }
          }
        `}</style>
      </section>

      {/* ===== SERVICE CARDS (glassmorphic, below the hero) ===== */}
      <section
        className="relative w-full"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, #1b1b22 0%, #000000 60%), #000000",
        }}
      >
        <style>{`
          .svc-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            padding: 64px 5vw;
            background: transparent;
          }
          @media (max-width: 860px) {
            .svc-grid { grid-template-columns: 1fr; }
          }

          /* ===== pure glass card — no fill, only frost ===== */
          .svc-card {
            position: relative;
            border-radius: 20px;
            padding: 36px 34px;
            background: transparent;
            backdrop-filter: blur(18px) saturate(150%);
            -webkit-backdrop-filter: blur(18px) saturate(150%);
            border: 1px solid rgba(255, 255, 255, 0.25);
            box-shadow:
              0 8px 32px rgba(0, 0, 0, 0.25),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
            transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
          }
          .svc-card:hover {
            transform: translateY(-6px);
            border-color: rgba(255, 255, 255, 0.45);
            box-shadow:
              0 16px 48px rgba(0, 0, 0, 0.35),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
          /* subtle glass sheen across the top edge */
          .svc-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 20px;
            background: linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 45%);
            pointer-events: none;
          }

          /* ===== text — solid, unaffected by the glass ===== */
          .svc-title {
            color: #e8b52a;
            font-size: 1.35rem;
            font-weight: 700;
            line-height: 1.35;
            margin: 0 0 16px;
          }
          .svc-desc {
            color: #f6f2f2;
            font-size: 0.95rem;
            line-height: 1.65;
            margin: 0 0 22px;
          }
          .svc-points {
            list-style: none;
            margin: 0 0 26px;
            padding: 0;
          }
          .svc-points li {
            display: flex;
            align-items: center;
            gap: 12px;
            color: #ffffff;
            font-size: 0.95rem;
            padding: 6px 0;
          }
          .svc-points li::before {
            content: "✓";
            color: #e8b52a;
            font-weight: 700;
            flex-shrink: 0;
          }

          .svc-btn {
            display: inline-block;
            background: #f5c842;
            color: #1a1a1a;
            font-weight: 700;
            font-size: 0.92rem;
            padding: 12px 26px;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: transform .2s ease, box-shadow .2s ease;
            box-shadow: 0 4px 18px rgba(245, 200, 66, 0.35);
          }
          .svc-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 26px rgba(245, 200, 66, 0.5);
          }
        `}</style>

        <section className="svc-grid">
          {trendServices.map((s) => (
            <div className="svc-card" key={s.title}>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <ul className="svc-points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <button className="svc-btn">Explore More</button>
            </div>
          ))}
        </section>
      </section>
    </>
  );
}
