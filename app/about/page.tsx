'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import RobotRunner from "@/components/RobotRunner";
import HeroAutomation from "@/components/AutomationHero";
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
  linkedin?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Shrish C Mishra",
    role: "CEO & Founder",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1788435823/FMW07251_BW_4_nep19y.jpg",
    description: "Visionary leader with 15+ years in B2B lead generation. Passionate about helping businesses scale through data-driven strategies.",
    linkedin: "https://www.linkedin.com/in/shrishofficial/",
  },
  {
    name: "Jay shinde",
    role: "Sr. Client Success manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784561719/copy_of_jjk_5116_1_lb2wmz1.jpg",
    description: "Senior client success manager ensuring exceptional client relationships and driving satisfaction through strategic account management.",
    linkedin: "https://www.linkedin.com/in/jay-s-94519123a/",
  },
  {
    name: "Vikas Thakur",
    role: "Client Success manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1789041493/5._Vikas_Singh_Thakur_ig0gzk.jpg",
    description: "Client success manager dedicated to understanding client needs and delivering solutions that drive business growth and retention.",
    linkedin: "https://www.linkedin.com/in/vikas-singh-thakur/",
  },
  {
    name: "Pranav Kumar",
    role: "Client Success manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1784211329/1781807276051_pcpbcz.png",
    description: "Client success manager focused on building strong client partnerships and ensuring seamless service delivery for optimal results.",
    linkedin: "https://www.linkedin.com/in/pranav-kumaar-258a68209/",
  },
  {
    name: "Subodh kadam",
    role: " Sr. Quality Manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1789041492/43._Subodh_Kadam_ryzzgi.jpg",
    description: "Quality manager ensuring high standards across all deliverables. Implements quality control processes to maintain excellence in client services.",
    linkedin: "https://www.linkedin.com/in/subodh-kadam-07942b7/",
  },
  {
    name: "Sushant Bangad",
    role: "Operations Manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/c_fill,w_400,h_500,g_face,q_auto/v1784796324/sushant.jpg",
    description: "Operations manager optimizing workflows and processes. Ensures efficient team coordination and smooth operational execution.",
    linkedin: "https://www.linkedin.com/in/sushant-bangad-8752b7b3/",
  },
  {
    name: "Amol Bade",
    role: "IT Manager",
    imageUrl: "https://res.cloudinary.com/vobojthd/image/upload/v1786090999/1785421776242_t1jn4m.png",
    description: "IT Team Head leading technology initiatives and infrastructure development. Ensures robust technical solutions and system reliability for PMG B2B's operations.",
    linkedin: "https://www.linkedin.com/in/amol-bade-73412b179/",
  },
];

export default function About() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Leadership Hero */}
        <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(254,203,15,0.08)_0%,transparent_50%)]" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-10 bg-[#FECB0F]" />
                <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">Leadership</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Minds Driving Your Growth
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Meet the strategic experts who combine decades of experience in B2B marketing, technology,
                and operations to deliver exceptional results for our clients.
              </p>

              <Link
                href="/founders-word"
                className="inline-flex items-center gap-3 mt-8 bg-[#FECB0F] text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-[#FFD54F] transition-all duration-300"
              >
                Read Founder&apos;s Word
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <RobotRunner />

        {/* CEO Profile + Founder's Journey - single section, image left / text right */}
        <section className="py-20 bg-black border-t border-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12">
              {/* Left: CEO image + card */}
              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden">
                  <img
                    src={teamMembers[0].imageUrl}
                    alt={teamMembers[0].name}
                    className="w-full h-[450px] object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-white text-2xl font-bold">{teamMembers[0].name}</h3>
                    <p className="text-[#FECB0F] text-sm font-semibold uppercase tracking-wide mt-1">{teamMembers[0].role}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mt-4">{teamMembers[0].description}</p>
                    {teamMembers[0].linkedin && (
                      <div className="flex justify-center gap-4 mt-4">
                        <a href={teamMembers[0].linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-[#FECB0F] transition-colors">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Founder's Journey text */}
              <div>
                <span className="text-[#FECB0F] text-xs font-bold tracking-[0.3em] uppercase">
                  From Cold Calls To Crores
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-2">
                  The Daring Climbs of Shrish Mishra
                </h2>
                <p className="text-gray-500 text-sm italic mb-10">
                  CEO, Proffer Media Group — PMG B2B &middot; Caution: this journey feels like a rocket launch.
                </p>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    Shrish didn&apos;t start with a pedigree college. In fact, for post grad, he cleared multiple
                    entrance exams, only to realize he couldn&apos;t afford the course fees.
                  </p>
                  <p>So he did what hungry people do... He got to work!</p>
                </div>

                {/* Timeline strip */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { year: '2014', label: 'DemandShore', note: 'Cold calls, night shifts' },
                    { year: 'Next', label: 'CSS Corp', note: 'Every role, every grind' },
                    { year: 'Then', label: 'Hexaware', note: '$400k deal as inside sales' },
                    { year: 'Today', label: 'PMG B2B', note: 'Leading 120+ people' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="bg-gray-900/60 border border-gray-800 rounded-xl p-4 text-center hover:border-[#FECB0F]/50 transition-colors"
                    >
                      <div className="text-[#FECB0F] text-xs font-bold tracking-widest uppercase">{item.year}</div>
                      <div className="text-white font-bold mt-2">{item.label}</div>
                      <div className="text-gray-500 text-xs mt-1">{item.note}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-12">
                  <p>
                    And even today, as the CEO and founder of PMG, leading 120+ people, he still works the night
                    shift. Because momentum &gt; comfort!
                  </p>
                  <p>Some people are born leaders. He just happens to lead with results!</p>
                  <p>
                    At Hexaware, where sales reps chase only the big fish and don&apos;t chase anything under
                    $1 million... he had the audacity to think outside the box, chase the smaller fish. He closed
                    a $400k deal and convinced the senior leadership of its value, all while being an inside sales
                    rep. And proved something no org chart ever could:
                  </p>
                </div>

                <blockquote className="border-l-4 border-[#FECB0F] pl-6 my-10 text-2xl font-bold text-white leading-snug">
                  Influence doesn&apos;t need a title. It needs intent.
                </blockquote>

                <div className="space-y-3 text-gray-300 text-lg leading-relaxed">
                  <p>That&apos;s been his rhythm ever since.</p>
                  <p>&rarr; He asks life for more.</p>
                  <p>&rarr; He prepares like hell to deliver.</p>
                  <p>&rarr; And when he gets what he asked for, he doesn&apos;t blink!</p>
                </div>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed mt-6">
                  <p>
                    Some confuse it for overconfidence! But here&apos;s the truth: optimism becomes a superpower
                    when it&apos;s backed by action.
                  </p>
                </div>

                {/* Beliefs grid */}
                <h3 className="text-2xl font-bold text-white mt-14 mb-6">Beliefs That Built The Man</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Poverty is a state of mind (thanks to his father)',
                    'Support makes success possible (he credits his wife, Sanketa, for giving him the space to build)',
                    'Up-skill > Entitlement (he once mentored a tea delivery staffer into becoming a business analyst)',
                    'AI + Human is the winning combo',
                    'If you want extraordinary outcomes, make the extraordinary move',
                  ].map((belief) => (
                    <div
                      key={belief}
                      className="flex items-start gap-3 bg-gray-900/60 border border-gray-800 rounded-xl p-4"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FECB0F] mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-sm leading-relaxed">{belief}</p>
                    </div>
                  ))}
                </div>

                {/* Advice */}
                <div className="mt-14 text-center bg-gray-900/60 border border-[#FECB0F]/30 rounded-2xl p-10">
                  <p className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">
                    His Advice To The Next Gen
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
                    Stop over-planning.
                    <br />
                    <span className="text-[#FECB0F]">Start over-delivering.</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-6">
                    If you want a Range Rover Defender, work-life balance isn&apos;t delivering it.
                  </p>
                </div>

                <div className="space-y-2 text-gray-300 text-lg leading-relaxed mt-12 text-center">
                  <p>Still night-shifting since 2014.</p>
                  <p>Still momentum-hunting.</p>
                  <p>Still dreaming bigger than most would dare.</p>
                  <p className="font-semibold text-white mt-4">
                    This one&apos;s for the builders who don&apos;t slow down!
                  </p>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                  <span className="text-[#FECB0F] text-sm font-semibold">#SundayLeadership</span>
                  <span className="text-[#FECB0F] text-sm font-semibold">#Batmanspeaks</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <HeroAutomation />
      </main>
      <Footer />
    </div>
  );
}
