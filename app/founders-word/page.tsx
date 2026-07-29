'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Award, Target, Users, TrendingUp, Lightbulb, Heart } from "lucide-react";

export default function FoundersWord() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center bg-gradient-to-r from-black to-gray-900 text-white overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#FECB0F]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FECB0F]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FECB0F]/5 rounded-full blur-2xl"></div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 flex justify-center">
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1784808645/1000938163-removebg-preview_tb3kkw.png"
                  alt="Shrish Chandra Mishra - CEO"
                  className="w-full h-full md:w-[500px] md:h-[700px] object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Founder's <span className="text-[#FECB0F]">Word</span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
                    A journey of resilience, leadership, and building PMG B2B from the ground up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Award Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[#FFF8E7] to-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#FECB0F]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ETNow Business Conclave & Awards 2026</h2>
                    <p className="text-[#FECB0F] font-semibold">Most Influential CEO - AI-driven B2B Innovation & Global Growth</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Shrish Chandra Mishra, CEO of PMG B2B, has been named Most Influential CEO - AI-driven B2B Innovation & Global Growth at the ETNow Business Conclave & Awards 2026, held on 16 June in Ahmedabad. The award recognises his leadership in demand generation, AI-integrated marketing, and his decade-long commitment to building scalable B2B demand generation growth systems.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  The ETNow Business Conclave & Awards 2026 brought together policymakers, industry pioneers, business decision-makers, and innovators to discuss India's economic future, emerging technologies, sustainable growth, and global leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                The <span className="text-[#FECB0F]">Journey</span>
              </h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Beginning</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Awards often capture the outcome, but not the years behind it. His journey did not begin with privilege. After clearing multiple entrance exams for a postgraduate programme, financial constraints forced him to step back from that path entirely.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    So, he chose to work, learn, and build his way forward.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Grind</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The early years were shaped by cold calls, night shifts, rejections, targets, and the daily pressure of proving himself. Those experiences built the discipline that continues to define him today. Even as the CEO of PMG B2B, leading a team of more than 120 people, he carries the mindset of someone who remembers the grind behind every opportunity.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#FECB0F]">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">The Recognition</h3>
                  <p className="text-gray-700 leading-relaxed italic">
                    "This recognition is deeply special to me, but it also belongs to the team as much as it belongs to any individual. Every client wins, every campaign delivered, every late night, and every improvement reflects our effort. This award is a reminder of how far we have come together and motivates us to keep raising the bar for ourselves and for our clients."
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4 italic">
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
                    <div className="hexagon">
                      <div className="hexagon-content">
                        <h3 className="hex-title">Ambassadors</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon">
                      <div className="hexagon-content">
                        <h3 className="hex-title">Shop</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon">
                      <div className="hexagon-content">
                        <h3 className="hex-title">Adventures</h3>
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
                    <div className="hexagon">
                      <div className="hexagon-content">
                        <h3 className="hex-title">Materials &amp; Design</h3>
                        <button className="hex-btn">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-container">
                    <div className="hexagon">
                      <div className="hexagon-content">
                        <h3 className="hex-title">Special Features</h3>
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
                  background: linear-gradient(145deg, #ffffff 0%, #e8e8e8 100%);
                  transform: scale(1.06);
                  box-shadow: 0 12px 32px rgba(254, 203, 15, 0.35);
                }
                .hexagon:hover::before {
                  opacity: 1;
                }
                .hexagon-content {
                  text-align: center;
                  padding: 2rem 2.2rem;
                  position: relative;
                  z-index: 1;
                }
                .hex-title {
                  color: #1a1a1a;
                  font-weight: 700;
                  font-size: 1.15rem;
                  margin-bottom: 0.85rem;
                  text-transform: uppercase;
                  letter-spacing: 0.06em;
                  line-height: 1.3;
                }
                .hex-btn {
                  color: #b8860b;
                  font-size: 0.8rem;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.12em;
                  background: transparent;
                  border: none;
                  border-bottom: 1px solid rgba(184, 134, 11, 0.4);
                  padding-bottom: 4px;
                  transition: all 0.25s ease;
                  cursor: pointer;
                }
                .hex-btn:hover {
                  color: #1a1a1a;
                  border-bottom-color: #1a1a1a;
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
        <section className="py-20 bg-gradient-to-r from-black to-gray-900 text-white">
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
        <section className="py-20 bg-black">
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
