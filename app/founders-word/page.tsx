'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Award, Target, Users, TrendingUp, Lightbulb, Heart } from "lucide-react";

export default function FoundersWord() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-black">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white overflow-hidden rounded-b-[2.5rem]">
          <div className="relative z-10 px-6 md:px-16 py-20 md:py-28">
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Left - Portrait */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm lg:max-w-md">
                  <img
                    src="https://res.cloudinary.com/vobojthd/image/upload/v1784806502/1000938160-removebg-preview_ladj4x.png"
                    alt="Shrish Chandra Mishra - Founder & CEO"
                    className="w-full h-[420px] md:h-[480px] object-cover"
                  />

                  
                </div>
              </div>

              {/* Right - Copy */}
              <div className="lg:pr-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#FECB0F]"></span>
                  <span className="text-[#FECB0F] text-xs font-bold tracking-[0.2em] uppercase">
                    Shrish Chandra Mishra — Founder &amp; CEO
                  </span>
                </div>

                <h1 className="font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
                  <span className="text-white px-4">We</span>
                  <span className="text-gray-500">lead</span>
                  <span className="text-white">,</span><br/>
                  <span className="text-white px-4">You</span>
                  <span className="text-[#FECB0F]">Succeed</span>
                </h1>

                <p className="mt-6 text-gray-400 text-base md:text-lg max-w-md leading-relaxed">
                  Stop playing safe. We transform mid-market enterprises into
                  category killers with ruthless execution and uncompromising
                  strategy.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#FECB0F] text-black font-bold text-sm uppercase tracking-wide px-6 py-4 rounded-md hover:bg-[#ffd94a] transition"
                  >
                    Dominate Your Market
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href="#journey"
                    className="text-white text-sm font-semibold uppercase tracking-wide border-b border-white/40 pb-1 hover:border-[#FECB0F] hover:text-[#FECB0F] transition"
                  >
                    See The Results
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Award Section */}
        <section id="award" className="py-24 bg-black relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-[#FECB0F] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FECB0F] rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-10 md:p-16 border border-white/10 shadow-2xl">
                  {/* Header */}
                  <div className="text-center mb-10">
                    <span className="inline-block px-4 py-2 bg-[#FECB0F]/10 border border-[#FECB0F]/30 rounded-full text-[#FECB0F] text-sm font-semibold tracking-wider uppercase mb-6">
                      Recognition & Achievement
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      ETNow Business Conclave
                      <span className="block text-[#FECB0F]">& Awards 2026</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent mx-auto"></div>
                  </div>

                  {/* Award Title */}
                  <div className="bg-gradient-to-r from-[#FECB0F]/20 to-[#F5A623]/20 rounded-2xl p-6 md:p-8 border border-[#FECB0F]/30 mb-8">
                    <p className="text-xl md:text-2xl font-bold text-white text-center leading-relaxed">
                      Most Influential CEO
                      <span className="block text-[#FECB0F] text-lg md:text-xl font-semibold mt-2">
                        AI-driven B2B Innovation & Global Growth
                      </span>
                    </p>
                  </div>

                  {/* Description */}
                  <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                      Shrish Chandra Mishra, CEO of PMG B2B, has been recognized for his exceptional leadership in demand generation, AI-integrated marketing, and his decade-long commitment to building scalable B2B demand generation growth systems.
                    </p>
                    <p>
                      The ETNow Business Conclave & Awards 2026 brought together policymakers, industry pioneers, business decision-makers, and innovators to discuss India's economic future, emerging technologies, sustainable growth, and global leadership.
                    </p>
                  </div>

                  {/* Stats/Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#FECB0F] mb-2">2026</div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider">Year</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#FECB0F] mb-2">Ahmedabad</div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider">Location</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-[#FECB0F] mb-2">CEO</div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider">Category</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section id="journey" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                The <span className="text-[#FECB0F]">Journey</span>
              </h2>

              <div className="space-y-8">
                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-white">The Beginning</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Awards often capture the outcome, but not the years behind it. His journey did not begin with privilege. After clearing multiple entrance exams for a postgraduate programme, financial constraints forced him to step back from that path entirely.
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4">
                    So, he chose to work, learn, and build his way forward.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-white">The Grind</h3>
                  <p className="text-gray-300 leading-relaxed">
                    The early years were shaped by cold calls, night shifts, rejections, targets, and the daily pressure of proving himself. Those experiences built the discipline that continues to define him today. Even as the CEO of PMG B2B, leading a team of more than 120 people, he carries the mindset of someone who remembers the grind behind every opportunity.
                  </p>
                </div>

                <div className="bg-gray-900 rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-white">The Recognition</h3>
                  <p className="text-gray-300 leading-relaxed italic">
                    "This recognition is deeply special to me, but it also belongs to the team as much as it belongs to any individual. Every client wins, every campaign delivered, every late night, and every improvement reflects our effort. This award is a reminder of how far we have come together and motivates us to keep raising the bar for ourselves and for our clients."
                  </p>
                  <p className="text-gray-300 leading-relaxed mt-4 italic">
                    "I am grateful to ETNow for this honour, and even more grateful to the team behind the work. None of this would have been possible without the unwavering support of my family and friends, and especially my wife, whose belief in me has been a constant through every phase of this journey."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-black relative">
          {/* Top Yellow Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
                Building <span className="text-[#FECB0F]">PMG B2B</span>
              </h2>
              
              {/* Hexagon Grid */}
              <div className="hex-grid">
                {/* Top Row - 3 hexagons */}
                <div className="hex-row hex-row-top">
                  <div className="hexagon-container">
                    <div className="hexagon" style={{
                      backgroundImage: 'url(https://res.cloudinary.com/vobojthd/image/upload/v1786101803/5799223fb32ccb409cf525e342c42707_zpxp3l.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div className="hexagon-overlay"></div>
                      <div className="hexagon-content">
                        <h3 className="hex-title">Lead Generation</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon" style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div className="hexagon-overlay"></div>
                      <div className="hexagon-content">
                        <h3 className="hex-title">Sales Development</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon" style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div className="hexagon-overlay"></div>
                      <div className="hexagon-content">
                        <h3 className="hex-title">Account-Based Marketing</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Row - 2 hexagons */}
                <div className="hex-row hex-row-bottom">
                  <div className="hexagon-container">
                    <div className="hexagon" style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div className="hexagon-overlay"></div>
                      <div className="hexagon-content">
                        <h3 className="hex-title">Data Solutions</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon" style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&h=400&fit=crop)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}>
                      <div className="hexagon-overlay"></div>
                      <div className="hexagon-content">
                        <h3 className="hex-title">Email Marketing</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Yellow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FECB0F] to-transparent"></div>

              <style jsx>{`
                .hex-grid {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  gap: 0.5rem;
                }
                .hex-row {
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                }
                .hex-row-top {
                  gap: 2.5rem;
                  position: relative;
                  z-index: 2;
                }
                .hex-row-bottom {
                  gap: 2.5rem;
                  position: relative;
                  z-index: 1;
                }
                @property --hex-angle {
                  syntax: '<angle>';
                  initial-value: 0deg;
                  inherits: false;
                }
                .hexagon-container {
                  width: 250px;
                  height: 220px;
                  position: relative;
                }
                .hexagon-container::before {
                  content: "";
                  position: absolute;
                  inset: -2px;
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                  background: conic-gradient(from var(--hex-angle), transparent 0deg, transparent 315deg, #FECB0F 328deg, #fff3b0 335deg, #FECB0F 342deg, transparent 355deg);
                  animation: hexBorderRotate 6s linear infinite;
                  z-index: 0;
                }
                @keyframes hexBorderRotate {
                  from { --hex-angle: 0deg; }
                  to { --hex-angle: 360deg; }
                }
                .hexagon {
                  position: absolute;
                  inset: 2px;
                  background: linear-gradient(145deg, #ffffff 0%, #f2f2f2 100%);
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                  cursor: pointer;
                  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
                  z-index: 1;
                }
                .hexagon::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(180deg, rgba(254, 203, 15, 0) 60%, rgba(254, 203, 15, 0.15) 100%);
                  opacity: 0;
                  transition: opacity 0.35s ease;
                }
                .hexagon:hover {
                  transform: scale(1.06);
                  box-shadow: 0 12px 32px rgba(254, 203, 15, 0.35);
                }
                .hexagon:hover .hexagon-overlay {
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
                }
                .hexagon:hover::before {
                  opacity: 1;
                }
                .hexagon-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                  z-index: 0;
                }
                .hexagon-content {
                  text-align: center;
                  padding: 2rem 2.2rem;
                  position: relative;
                  z-index: 1;
                }
                .hex-title {
                  color: #ffffff;
                  font-weight: 700;
                  font-size: 1.15rem;
                  margin-bottom: 0.85rem;
                  text-transform: uppercase;
                  letter-spacing: 0.06em;
                  line-height: 1.3;
                  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
                }
                .hex-btn {
                  color: #FECB0F;
                  font-size: 0.8rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.12em;
                  background: transparent;
                  border: none;
                  border-bottom: 1px solid rgba(254, 203, 15, 0.6);
                  padding-bottom: 4px;
                  transition: all 0.25s ease;
                  cursor: pointer;
                }
                .hex-btn:hover {
                  color: #ffffff;
                  border-bottom-color: #ffffff;
                }

                @media (max-width: 768px) {
                  .hex-grid {
                    gap: 1.5rem;
                  }
                  .hex-row-top,
                  .hex-row-bottom {
                    gap: 1.25rem;
                  }
                  .hexagon-container {
                    width: 160px;
                    height: 140px;
                  }
                  .hex-title {
                    font-size: 0.85rem;
                    margin-bottom: 0.5rem;
                  }
                  .hex-btn {
                    font-size: 0.65rem;
                  }
                  .hexagon-content {
                    padding: 1rem 0.75rem;
                  }
                }
              `}</style>
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Meaning of <span className="text-[#FECB0F]">Success</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                More than a personal milestone, this honour reflects a larger truth about meaningful success. It is rarely sudden. It is built through hard choices, consistent discipline, long nights, and the courage to keep moving before the world starts noticing.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-6">
                The recognition highlights Shrish's ability to combine AI-driven innovation with people-first leadership. His approach to demand generation and business growth reflects the higher standards emerging across the B2B marketing industry.
              </p>
            </div>
          </div>
        </section>

        {/* Glowing Grid Section */}
        <section id="values" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Core <span className="text-[#FECB0F]">Values</span>
            </h2>
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
              <GridItem
                area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                icon={<Award className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Excellence in Service"
                description="Delivering exceptional B2B lead generation services that drive real results for our clients."
              />

              <GridItem
                area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                icon={<Target className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Data-Driven Approach"
                description="Using advanced analytics and insights to create targeted campaigns that convert."
              />

              <GridItem
                area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                icon={<Users className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Team Collaboration"
                description="Building a culture of teamwork and mutual growth across our 120+ member team."
              />

              <GridItem
                area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                icon={<TrendingUp className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Continuous Growth"
                description="Always pushing boundaries and innovating to stay ahead in the B2B marketing landscape."
              />

              <GridItem
                area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                icon={<Lightbulb className="h-4 w-4 text-black dark:text-neutral-400" />}
                title="Innovation First"
                description="Embracing new technologies and creative solutions to solve complex business challenges."
              />
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border border-gray-700 bg-black p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-black p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 bg-gray-900 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-gray-300 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
