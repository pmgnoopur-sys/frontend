import Link from 'next/link';

export default function Stats() {
  const stats = [
    { value: '200+', label: 'Campaigns Managed' },
    { value: '94%', label: 'Campaign Delivery Satisfaction' },
    { value: '25+', label: 'Million US-based contacts' }
  ];

  return (
    <section className="py-20 bg-black text-white border-t-4 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PMG B2B is Your Trusted Solution</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Capture, Nurture, And Accelerate B2B Demand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-5xl font-bold mb-2" style={{color: '#FECB0F'}}>{stat.value}</h3>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="backdrop-blur-sm rounded-lg p-6 border-2" style={{backgroundColor: 'rgba(254, 203, 15, 0.1)', borderColor: '#FECB0F'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Strategic Engagement for Unmatched Success</h3>
            <p className="text-gray-300">
              Leverage PMG B2B for account-based engagement that empowers your sales with pinpoint accuracy, fostering rapid growth and client retention. Our strategic double-touch methodology and stringent BANT qualification process amplify conversions tenfold.
            </p>
          </div>
          <div className="backdrop-blur-sm rounded-lg p-6 border-2" style={{backgroundColor: 'rgba(254, 203, 15, 0.1)', borderColor: '#FECB0F'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: '#FECB0F'}}>Strategic Insights for Smart Decisions</h3>
            <p className="text-gray-300">
              Immerse in our ethos of excellence as we deliver your first high-potential leads within 48 hours, catalyzing a 100% uptick in ROI and a dramatic conversion increase.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/services" className="inline-block text-black px-8 py-4 rounded-lg font-semibold transition" style={{backgroundColor: '#FECB0F'}}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
