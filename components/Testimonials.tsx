export default function Testimonials() {
  const testimonials = [
    {
      name: 'Martina Jones',
      role: 'Head of Marketing, Canada',
      text: 'Working with PMG B2B transformed our marketing strategy. Their dedication to success is evident. Highly recommended!'
    },
    {
      name: 'Arthur Taylor',
      role: 'Marketing Manager',
      text: 'Choosing PMG B2B for our B2B lead generation was a game-changer. Highly recommend them!'
    },
    {
      name: 'Neil Moore',
      role: 'Head of Sales, UK',
      text: "PMG's B2B expertise in lead generation has significantly boosted our sales. Their team is unparalleled!"
    },
    {
      name: 'Ben Jackson',
      role: 'B2B Acquisition Manager, France',
      text: "Impressed by PMG's strategic approach to B2B acquisition. Their results speak volumes. Would definitely recommend!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by More Than 10,000 Customers Around the Globe</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our clients have to say about partnering with PMG B2B
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
