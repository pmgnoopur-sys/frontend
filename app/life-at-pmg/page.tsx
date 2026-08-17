'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import OctagonVideoCollage from '@/components/CircleVideoCollage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRocket,
  faCalendarCheck,
  faGamepad,
  faChampagneGlasses,
  faSackDollar,
  faCalendarDays,
  faUmbrellaBeach,
  faGift,
  faDoorOpen,
  faPlane,
  faBaby,
  faTrophy
} from '@fortawesome/free-solid-svg-icons';

export default function LifeAtPMG() {
  const sections = [
    {
      image: 'https://res.cloudinary.com/vobojthd/image/upload/v1784125212/0P0A0811_uacc78.jpg',
      title: 'Our Culture',
      description: 'At PMG B2B, we foster a culture of innovation, collaboration, and continuous learning. Our team members are encouraged to think outside the box and bring fresh perspectives to every challenge. We believe in work-life balance and provide a supportive environment where everyone can thrive both personally and professionally.'
    },
    {
      image: 'https://res.cloudinary.com/vobojthd/image/upload/v1784198754/WhatsApp_Image_2026-07-16_at_4.05.29_PM_wxf9fb.jpg',
      title: 'Diwali Celebration',
      description: 'At PMG B2B, we celebrate the festival of lights with great enthusiasm and joy. Our Diwali celebrations bring the entire team together to share sweets, exchange greetings, and create lasting memories. The office comes alive with decorations, traditional attire, and the spirit of togetherness that defines our PMG family.'
    },
    {
      image: 'https://res.cloudinary.com/vobojthd/image/upload/v1784198754/WhatsApp_Image_2026-07-16_at_4.05.29_PM_wxf9fb.jpg',
      videoUrl: '/WhatsApp Video 2026-07-16 at 2.03.20 PM.mp4',
      title: 'Scavenger Hunt Activity',
      description: 'Our scavenger hunt activities at PMG B2B bring excitement and team building to the workplace. Teams collaborate to solve puzzles, find hidden clues, and complete challenges throughout the office. These engaging activities foster creativity, communication, and friendly competition while creating memorable experiences that strengthen our team bonds.'
    },
    {
      image: 'https://res.cloudinary.com/vobojthd/image/upload/v1784198754/WhatsApp_Image_2026-07-16_at_4.05.29_PM_wxf9fb.jpg',
      videoUrl: '/WhatsApp Video 2026-07-28 at 7.37.41 PM.mp4',
      title: 'Fun Friday',
      description: 'Fun Fridays at PMG B2B are all about unwinding, bonding, and celebrating our team spirit. From games and activities to casual conversations and team lunches, these Fridays provide a perfect break from the work routine. It is a time when we let loose, share laughs, and strengthen the friendships that make our workplace enjoyable and supportive.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-[70vh] flex items-end pb-7">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/vobojthd/image/upload/v1784125212/0P0A0811_uacc78.jpg"
              alt="Life at PMG"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Life at PMG
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Discover what makes PMG B2B a great place to work and grow your career.
            </p>
          </div>
        </section>

        {/* Circle Video Collage Section */}
        <OctagonVideoCollage />

        {/* Benefits Cards Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and exciting perks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                { title: 'Internal Growth Opportunities', icon: faRocket },
                { title: 'Monthly R&R', icon: faCalendarCheck },
                { title: 'Fun Friday', icon: faGamepad },
                { title: 'Yearly Parties', icon: faChampagneGlasses },
                { title: 'Uncapped Incentives', icon: faSackDollar },
                { title: 'Fixed Weekend-Offs', icon: faCalendarDays },
                { title: 'Team Outing', icon: faUmbrellaBeach },
                { title: 'Gratuity', icon: faGift },
                { title: 'Open Door Policy', icon: faDoorOpen },
                { title: 'Paid Time-Off & Holiday', icon: faPlane },
                { title: 'Maternity & Paternity Leave', icon: faBaby },
                { title: 'Annual Awards', icon: faTrophy }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  style={{
                    backgroundColor: 'rgba(254, 203, 15, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '4px solid #FECB0F',
                    minHeight: '200px'
                  }}
                >
                  <div className="text-5xl mb-6 text-gray-900">
                    <FontAwesomeIcon icon={benefit.icon} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image/Video */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  {section.videoUrl ? (
                    <video
                      src={section.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-[700px] rounded-2xl shadow-lg object-cover p-4"
                      onError={(e) => console.error('Video error:', e)}
                    />
                  ) : (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[400px] rounded-2xl shadow-lg object-cover"
                    />
                  )}
                </div>

                {/* Text Content */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our current openings and find the perfect role for your skills and aspirations.
            </p>
            <a
              href="/career"
              className="inline-block px-8 py-4 text-black font-bold rounded-lg transition hover:opacity-90"
              style={{ backgroundColor: '#FECB0F' }}
            >
              View Open Positions
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
