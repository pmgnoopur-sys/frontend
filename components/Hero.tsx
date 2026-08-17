import Link from 'next/link';

export default function Hero({ title, description }: { title?: string; description?: string }) {
  return (
    <section className="relative h-[90vh] flex items-end overflow-hidden bg-black">
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
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-8">
        <div className="text-[#FECB0F] text-center">
          <img
            src="https://res.cloudinary.com/vobojthd/image/upload/v1783428737/PMG_Logo_FInal-02_cbrjos.webp"
            alt="PMG Logo"
            className="mx-auto mb-8 h-24 md:h-32 w-auto"
          />
          {title && (
            <h1 className="text-2xl md:text-4xl font-bold mb-6">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
