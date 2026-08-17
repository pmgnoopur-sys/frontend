export default function AboutHero() {
  const stats = [
    { value: '150+', label: 'Projects' },
    { value: '12', label: 'Awards' },
    { value: '5yr', label: 'Experience' },
  ];

  return (
    <section className="relative bg-black text-white overflow-hidden py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left: Copy */}
          <div className="lg:ml-46">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-10 bg-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">
                Who We Are
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[0.95] mb-2">
              <span className="block text-white">Beyond</span>
              <span className="block text-yellow-400">The</span>
              <span className="block text-yellow-400">Surface</span>
            </h1>

            <p className="border-l-4 border-yellow-400 pl-4 text-gray-400 max-w-md mb-4">
              We don&apos;t just design websites. We engineer digital ecosystems
              that drive growth, inspire action, and define culture.
            </p>

            <div className="grid grid-cols-3 gap-2 max-w-md">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/80 border border-gray-800 rounded-lg p-2"
                >
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-yellow-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20 bg-yellow-400 text-black px-4 py-3 sm:px-6 sm:py-4 shadow-xl">
              <div className="text-xs font-bold tracking-widest uppercase">Est</div>
              <div className="text-2xl sm:text-3xl font-black leading-none">24</div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-gray-800">
              <img
                src="https://images.unsplash.com/photo-1713947505221-8a11da8aa744?q=80&w=800&auto=format&fit=crop&sat=-70"
                alt="Creative HQ team"
                className="w-full h-[340px] sm:h-[420px] lg:h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center px-4">
                <div className="text-white font-bold text-xl">Creative HQ</div>
                <div className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mt-1">
                  Berlin &bull; New York &bull; Tokyo
                </div>
              </div>
            </div>

            <span className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-dashed border-yellow-400/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
