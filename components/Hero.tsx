import Link from 'next/link';

export default function Hero({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FECB0F]/80 to-[#FECB0F]/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-black py-20 md:py-32">
        {title && (
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/contact" className="bg-black text-[#FECB0F] px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 transition">
            Contact Us
          </Link>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="bg-black/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">3X More</h3>
            <p className="text-lg">Qualified Leads</p>
          </div>
          <div className="bg-black/10 backdrop-blur-sm rounded-lg p-6">
            <h3 className="text-3xl font-bold mb-2">Double Your</h3>
            <p className="text-lg">Market Impact</p>
          </div>
        </div>
      </div>
    </section>
  );
}
