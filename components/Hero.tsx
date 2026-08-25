import Link from 'next/link';

export default function Hero({
  title,
  description,
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={`relative flex items-end overflow-hidden bg-black ${
        compact ? 'h-[45vh] min-h-[320px]' : 'h-[90vh]'
      }`}
    >
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
      <div className={`relative z-10 container mx-auto px-4 ${compact ? 'pb-6' : 'pb-8'}`}>
        <div className="text-[#FECB0F] text-center">
          <img
            src="https://res.cloudinary.com/vobojthd/image/upload/v1783428737/PMG_Logo_FInal-02_cbrjos.webp"
            alt="PMG Logo"
            className={`mx-auto w-auto ${compact ? 'mb-4 h-12 md:h-14' : 'mb-8 h-16 md:h-20'}`}
          />
          {title && (
            <h1 className={`font-bold ${compact ? 'text-xl md:text-3xl mb-3' : 'text-2xl md:text-4xl mb-6'}`}>
              {title}
            </h1>
          )}
          {description && (
            <p className={`max-w-2xl mx-auto ${compact ? 'text-base md:text-lg mb-0' : 'text-lg md:text-xl mb-8'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
