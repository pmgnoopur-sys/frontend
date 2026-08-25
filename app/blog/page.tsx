'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getBlogs } from '@/lib/blogStorage';
import StickyScrollSection from '@/components/StickyScrollSection';

const blogStickyContent = [
  {
    title: 'Insights Backed by Experience',
    description:
      'Every article is written by practitioners who run real B2B campaigns, sharing tactics and lessons you can apply immediately.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80"
        alt="Content writing and research"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Trends That Matter',
    description:
      'From AI-driven outreach to shifting buyer behavior, we cover the trends shaping B2B marketing so you always stay ahead of the curve.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
        alt="Industry trends analysis"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'Actionable Playbooks',
    description:
      'Beyond theory, our guides give you step-by-step frameworks for lead generation, email marketing, and account-based strategies you can put to work today.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
        alt="Actionable marketing playbooks"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: 'A Growing Library',
    description:
      'New articles are published regularly, covering fresh case studies, tool reviews, and evolving best practices for B2B marketers and sales teams.',
    content: (
      <img
        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
        alt="Growing content library"
        className="h-full w-full object-cover"
      />
    ),
  },
];

// Add animation keyframes
const style = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  @keyframes wave {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(-25px) translateY(10px); }
    100% { transform: translateX(0) translateY(0); }
  }
  @keyframes waveMove {
    0% { transform: translateX(0); }
    50% { transform: translateX(-50px); }
    100% { transform: translateX(0); }
  }
  @keyframes marquee {
    0% { transform: translateX(100%) translateY(0); }
    25% { transform: translateX(50%) translateY(-10px); }
    50% { transform: translateX(0%) translateY(0); }
    75% { transform: translateX(-50%) translateY(10px); }
    100% { transform: translateX(-100%) translateY(0); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const categories = ['All', 'AI & Technology', 'Lead Generation', 'Sales & Marketing', 'Data Solutions', 'Email Marketing'];

// Maps legacy/old category values (saved before categories were aligned with the
// public blog page) to the current category names, so old blogs still show up
// under the correct tab instead of only appearing under "All".
const legacyCategoryMap: Record<string, string> = {
  general: 'AI & Technology',
  technology: 'AI & Technology',
  business: 'Sales & Marketing',
  lifestyle: 'AI & Technology',
  education: 'AI & Technology',
  health: 'AI & Technology',
  entertainment: 'AI & Technology',
  news: 'AI & Technology',
};

const normalizeCategory = (category?: string): string | undefined => {
  if (!category) return undefined;
  return legacyCategoryMap[category] || category;
};

interface BlogCardProps {
  post: {
    title: string;
    content: string;
    author: string;
    createdAt: string;
    slug: string;
    tags?: string[];
    category?: string;
    images?: { url: string; altText: string }[];
    excerpt?: string;
  };
  index: number;
  isVisible: boolean;
}

const BlogCard = ({ post, index, isVisible }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="bg-white rounded-2xl overflow-hidden transition-all duration-500 border border-gray-100"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 50}ms`,
        boxShadow: isHovered ? '0 25px 50px -12px rgba(0,0,0,0.15)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Blog Image */}
      {post.images && post.images.length > 0 && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={post.images[0].url}
            alt={post.images[0].altText || post.title}
            className="w-full h-full object-cover transition-transform duration-700"
            style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"
          />
        </div>
      )}

      <div className="p-6 relative overflow-hidden">
        <div className="relative z-10">
          {/* Category and Date */}
          <div className="flex items-center justify-between mb-4">
            {(post.category || (post.tags && post.tags.length > 0)) && (
              <span
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-[#FECB0F]/10 text-[#FECB0F]"
              >
                {normalizeCategory(post.category) || post.tags?.[0]}
              </span>
            )}
            <span className="text-gray-400 text-xs">{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>

          {/* Title */}
          <h2
            className="text-xl font-bold mb-3 text-gray-900 leading-snug line-clamp-2 transition-colors duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="hover:text-[#FECB0F] transition-colors">
              {post.title}
            </Link>
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3">
            {post.excerpt || post.content.substring(0, 150)}...
          </p>

          {/* Author and Read More */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FECB0F] to-[#F5A623] rounded-full flex items-center justify-center text-white font-bold text-xs">
                {post.author.charAt(0)}
              </div>
              <span className="text-sm text-gray-600 font-medium">{post.author}</span>
            </div>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#FECB0F] hover:text-[#F5A623] transition-colors"
            >
              Read
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getBlogs();
        setBlogPosts(blogs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      normalizeCategory(post.category) === selectedCategory ||
      (post.tags && post.tags.includes(selectedCategory));
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    // Simulate scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          setVisibleCards((prev) => new Set([...prev, target.dataset.index]));
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [paginatedPosts]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <style>{style}</style>
      <Header />
      <main className="flex-1">
        {/* Hero Section with Enhanced Animations */}
        <section className="relative overflow-hidden py-24 md:py-32">
          
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white" style={{ zIndex: 1 }}></div>

          {/* Animated Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 2 }}>
            <div
              className="absolute -top-40 -right-40 w-80 h-80 bg-[#FECB0F]/10 rounded-full blur-3xl"
              style={{
                animation: 'float 8s ease-in-out infinite',
              }}
            ></div>
            <div
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FECB0F]/10 rounded-full blur-3xl"
              style={{
                animation: 'float 10s ease-in-out infinite 1s',
              }}
            ></div>
            <div
              className="absolute top-1/2 left-1/4 w-40 h-40 bg-[#FECB0F]/5 rounded-full blur-2xl"
              style={{
                animation: 'float 12s ease-in-out infinite 2s',
              }}
            ></div>

            {/* Wave Text Animations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Wave 1 - LEADS */}
              <div className="absolute top-[15%] left-0 right-0 opacity-70">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,20 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="2"
                    opacity="0.8"
                    style={{ animation: 'waveMove 8s ease-in-out infinite' }}
                  />
                  <text x="50" y="30" fill="#FECB0F" fontSize="24" fontWeight="bold" letterSpacing="4" style={{ animation: 'marquee 15s linear infinite' }}>
                    LEADS
                  </text>
                </svg>
              </div>

              {/* Wave 2 - TELEMARKETING */}
              <div className="absolute top-[30%] left-0 right-0 opacity-65">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,80 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="1.5"
                    opacity="0.75"
                    style={{ animation: 'waveMove 10s ease-in-out infinite 1s' }}
                  />
                  <text x="100" y="30" fill="#FECB0F" fontSize="20" fontWeight="bold" letterSpacing="3" style={{ animation: 'marquee 18s linear infinite' }}>
                    TELEMARKETING
                  </text>
                </svg>
              </div>

              {/* Wave 3 - CONTACT DISCOVERY */}
              <div className="absolute top-[45%] left-0 right-0 opacity-60">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,20 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="1.2"
                    opacity="0.7"
                    style={{ animation: 'waveMove 12s ease-in-out infinite 2s' }}
                  />
                  <text x="150" y="30" fill="#FECB0F" fontSize="18" fontWeight="bold" letterSpacing="2" style={{ animation: 'marquee 20s linear infinite' }}>
                    CONTACT DISCOVERY
                  </text>
                </svg>
              </div>

              {/* Wave 4 - EMAIL MARKETING */}
              <div className="absolute top-[60%] left-0 right-0 opacity-55">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,80 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="1"
                    opacity="0.65"
                    style={{ animation: 'waveMove 14s ease-in-out infinite 3s' }}
                  />
                  <text x="200" y="30" fill="#FECB0F" fontSize="16" fontWeight="bold" letterSpacing="2" style={{ animation: 'marquee 22s linear infinite' }}>
                    EMAIL MARKETING
                  </text>
                </svg>
              </div>

              {/* Wave 5 - B2B SALES */}
              <div className="absolute top-[75%] left-0 right-0 opacity-50">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,20 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="0.8"
                    opacity="0.6"
                    style={{ animation: 'waveMove 16s ease-in-out infinite 4s' }}
                  />
                  <text x="250" y="30" fill="#FECB0F" fontSize="14" fontWeight="bold" letterSpacing="2" style={{ animation: 'marquee 25s linear infinite' }}>
                    B2B SALES
                  </text>
                </svg>
              </div>

              {/* Wave 6 - DATA */}
              <div className="absolute top-[85%] left-0 right-0 opacity-45">
                <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q180,80 360,50 T720,50 T1080,50 T1440,50"
                    fill="none"
                    stroke="#FECB0F"
                    strokeWidth="0.6"
                    opacity="0.55"
                    style={{ animation: 'waveMove 18s ease-in-out infinite 5s' }}
                  />
                  <text x="300" y="30" fill="#FECB0F" fontSize="12" fontWeight="bold" letterSpacing="2" style={{ animation: 'marquee 28s linear infinite' }}>
                    DATA
                  </text>
                </svg>
              </div>
            </div>

            {/* Wave animations */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
                <path
                  d="M0,60 C360,120 720,0 1080,60 C1260,90 1350,75 1440,60 L1440,120 L0,120 Z"
                  fill="#FECB0F"
                  opacity="0.1"
                  style={{ animation: 'wave 8s ease-in-out infinite' }}
                />
                <path
                  d="M0,80 C360,140 720,20 1080,80 C1260,110 1350,95 1440,80 L1440,120 L0,120 Z"
                  fill="#FECB0F"
                  opacity="0.05"
                  style={{ animation: 'wave 10s ease-in-out infinite 2s' }}
                />
              </svg>
            </div>
          </div>

          <div className="container mx-auto px-4 text-left relative z-10" style={{ zIndex: 10 }}>
            {/* Hero Image - Right Corner */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block z-0">
              <div className="relative">
                {/* White circular background */}
                <div className="absolute inset-0 bg-white rounded-full opacity-90 blur-sm"></div>
                <img
                  src="https://res.cloudinary.com/vobojthd/image/upload/v1783944510/Section-6_hxna2g.png"
                  alt="MQL and SQL Generation Funnel"
                  className="w-[28rem] h-auto object-contain drop-shadow-2xl relative z-10"
                />
              </div>
            </div>

            {/* Badge with Animation */}
            <div
              className="inline-flex items-center gap-2 bg-[#FECB0F]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-pulse border border-[#FECB0F]/30"
              style={{
                animation: 'slideDown 0.8s ease-out',
              }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-gray-900">Latest Insights & Trends</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight"
              style={{
                animation: 'slideDown 1s ease-out 0.2s both',
              }}
            >
              Expert B2B Lead
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
                Generation Strategies
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl max-w-3xl mb-10 text-black/80 leading-relaxed"
              style={{
                animation: 'slideDown 1s ease-out 0.4s both',
              }}
            >
              Unlock the power of data-driven marketing with our comprehensive guides,
              industry insights, and proven tactics to supercharge your B2B growth.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{
                animation: 'slideDown 1s ease-out 0.6s both',
              }}
            >
              <button className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Reading
              </button>
              <button className="px-8 py-4 bg-[#FECB0F] text-black rounded-xl font-semibold hover:bg-[#FFD54F] transition-all border-2 border-[#FECB0F]">
                Browse Categories
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
              {[
                { number: '150+', label: 'Articles' },
                { number: '50K+', label: 'Readers' },
                { number: '10+', label: 'Categories' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-left"
                  style={{
                    animation: `slideUp 0.8s ease-out ${0.8 + i * 0.1}s both`,
                  }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-black">{stat.number}</div>
                  <div className="text-sm text-black/70 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#FECB0F] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-[#FECB0F] text-black shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    boxShadow: selectedCategory === category ? '0 10px 25px rgba(254, 203, 15, 0.3)' : 'none',
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            {paginatedPosts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, index) => (
                    <div
                      key={`${currentPage}-${index}`}
                      data-index={`${currentPage}-${index}`}
                    >
                      <BlogCard
                        post={post}
                        index={index}
                        isVisible={visibleCards.has(`${currentPage}-${index}`)}
                      />
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-16 flex justify-center gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-110"
                        style={{
                          backgroundColor: currentPage === page ? '#FECB0F' : '#E5E7EB',
                          color: currentPage === page ? '#000' : '#374151',
                          boxShadow: currentPage === page ? '0 10px 25px rgba(254, 203, 15, 0.3)' : 'none',
                        }}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No articles found</p>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        {/* Sticky Scroll Reveal Section */}
        <StickyScrollSection
          eyebrow="Our Blog"
          title="Why Read the PMG B2B Blog"
          description="Practical insights to help you grow your pipeline, written by people who do this every day."
          items={blogStickyContent}
        />
      </main>
      <Footer />
    </div>
  );
}