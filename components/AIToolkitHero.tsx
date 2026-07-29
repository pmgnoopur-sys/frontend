import React from "react";
import {
  Brain,
  BarChart3,
  ShieldCheck,
  Cpu,
  Workflow,
  Image as ImageIcon,
  Gauge,
  BookOpen,
  GraduationCap,
  Eye,
  Sparkles,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    title: "Prompt\nEngine",
    icon: Brain,
    variant: "top",
    className: "top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Data\nAnalytics",
    icon: BarChart3,
    variant: "top",
    className: "top-[20%] left-[75%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Secure\nCloud",
    icon: ShieldCheck,
    variant: "side",
    className: "top-[50%] left-[13%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Model\nTrainer",
    icon: Cpu,
    variant: "side",
    className: "top-[50%] left-[87%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Workflow\nAutomation",
    icon: Workflow,
    variant: "bottom",
    className: "top-[77%] left-[32%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    title: "Image\nCreator",
    icon: ImageIcon,
    variant: "bottom",
    className: "top-[77%] left-[68%] -translate-x-1/2 -translate-y-1/2",
  },
];



function FeatureCard({ title, icon: Icon, className = "", variant = "top" }: { title: string; icon: any; className?: string; variant?: string }) {
  const shapes: any = {
    top: "polygon(18% 0%, 82% 0%, 100% 30%, 86% 100%, 14% 100%, 0% 30%)",
    side: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
    bottom: "polygon(14% 0%, 86% 0%, 100% 22%, 82% 100%, 18% 100%, 0% 22%)",
  };

  const shape = shapes[variant];

  return (
    <div className={`absolute z-20 w-[180px] sm:w-[230px] ${className}`} style={{ clipPath: shape }}>
      <div className="absolute inset-0 bg-yellow-400/30 blur-xl" style={{ clipPath: shape }} />

      <div
        className="relative border border-yellow-200/40 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(254,203,15,0.28)]"
        style={{ clipPath: shape }}
      >
        <div
          className="absolute inset-[2px] border border-white/10 bg-gradient-to-br from-white/20 via-white/8 to-yellow-400/10"
          style={{ clipPath: shape }}
        />

        <div className="relative flex min-h-[160px] flex-col items-center justify-center px-6 py-8 text-center sm:min-h-[190px]">
          <Icon className="mb-3 h-7 w-7 text-yellow-200" strokeWidth={1.8} />
          <h3 className="whitespace-pre-line text-xl font-semibold leading-tight text-white sm:text-[33px]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

function MiniPanel({ label, icon: Icon, className = "" }: { label: string; icon: any; className?: string }) {
  return (
    <div
      className={`absolute z-10 hidden sm:flex items-center gap-3 rounded-2xl border border-yellow-300/30 
      bg-slate-900/50 px-4 py-3 text-white shadow-[0_0_22px_rgba(254,203,15,0.18)] backdrop-blur-md ${className}`}
    >
      <Icon className="h-5 w-5 text-yellow-300" />
      <span className="text-sm font-medium leading-tight">{label}</span>
    </div>
  );
}

export default function AIToolkitHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgb(255, 255, 255),transparent_28%),radial-gradient(circle_at_20%_30%,rgb(239, 239, 239),transparent_22%),radial-gradient(circle_at_80%_30%,rgb(250, 249, 247),transparent_24%),linear-gradient(180deg,#020617_0%,#020b1b_45%,#01040f_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255, 255, 254)_1px,transparent_1px),linear-gradient(90deg,rgb(255, 255, 255)_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-yellow-300/80 shadow-[0_0_12px_rgba(254,203,15,0.9)]"
            style={{
              left: `${5 + ((i * 13) % 90)}%`,
              top: `${8 + ((i * 9) % 80)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-6 py-14 sm:px-10 lg:px-16">
        {/* Heading */}
    

        {/* Main visual */}
        <div className="relative mt-10 h-[760px] w-full max-w-[980px] sm:h-[860px]">
          {/* outer rings */}
          <div className="absolute left-1/2 top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/40 shadow-[0_0_40px_rgba(254,203,15,0.18)]" />
          <div className="absolute left-1/2 top-[46%] h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/20" />
          <div className="absolute left-1/2 top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-yellow-400/10" />

          {/* connection ring */}
          <div className="absolute left-1/2 top-[46%] h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/30 shadow-[0_0_20px_rgba(168,85,247,0.18)]" />

          {/* connector lines */}
          <div className="absolute left-1/2 top-[46%] h-[2px] w-[620px] -translate-x-1/2 -translate-y-1/2 bg-yellow-300/40 blur-[1px]" />
          <div className="absolute left-1/2 top-[46%] h-[620px] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-purple-300/10 blur-[1px]" />
          <div className="absolute left-1/2 top-[46%] h-[2px] w-[620px] -translate-x-1/2 -translate-y-1/2 rotate-[60deg] bg-yellow-300/20 blur-[1px]" />
          <div className="absolute left-1/2 top-[46%] h-[2px] w-[620px] -translate-x-1/2 -translate-y-1/2 rotate-[-60deg] bg-purple-300/20 blur-[1px]" />

          {/* center hub */}
          <div className="absolute left-1/2 top-[46%] z-30 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(254,203,15,0.95)_0%,rgba(168,85,247,0.25)_34%,rgba(10,15,30,0.15)_62%,transparent_72%)] shadow-[0_0_40px_rgba(254,203,15,0.55),0_0_100px_rgba(168,85,247,0.3)]">
            <div className="absolute inset-[18px] rounded-full border border-yellow-200/30" />
            <div className="absolute inset-[36px] rounded-full border border-purple-300/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-yellow-200/30 bg-white/10 px-10 py-7 backdrop-blur-md shadow-[0_0_25px_rgba(254,203,15,0.35)]">
                <span className="text-6xl font-extrabold tracking-wide text-yellow-100">AI</span>
              </div>
            </div>
            <div className="absolute inset-[58px] rounded-full border-t border-yellow-200/50 border-r border-purple-400/0 border-b border-yellow-400/20 border-l border-purple-400/0" />
            <div className="absolute inset-[78px] rounded-full border-t border-purple-400/30 border-r border-yellow-400/0 border-b border-yellow-200/30 border-l border-purple-400/0" />
          </div>

          {/* feature cards */}
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}


       
        </div>
      </div>
    </section>
  );
}
