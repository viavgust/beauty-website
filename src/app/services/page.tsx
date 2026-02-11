const services = [
  {
    title: 'Everyday Makeup',
    description: 'Natural, fresh look for any occasion. Perfect for meetings, dates, or everyday confidence.',
    price: 'от 3,000₽',
    duration: '1 hour',
  },
  {
    title: 'Evening Makeup',
    description: 'Glamorous look for special events, parties, and celebrations.',
    price: 'от 5,000₽',
    duration: '1.5 hours',
  },
  {
    title: 'Bridal Makeup',
    description: 'Complete bridal beauty package including trial session. Your perfect wedding day look.',
    price: 'от 15,000₽',
    duration: '2-3 hours',
  },
  {
    title: 'Editorial/Photoshoot',
    description: 'Creative makeup for photoshoots, campaigns, and editorial projects.',
    price: 'от 8,000₽',
    duration: '2 hours',
  },
  {
    title: 'Personal Styling',
    description: 'Complete look consultation including outfit selection and accessories.',
    price: 'от 10,000₽',
    duration: '3 hours',
  },
  {
    title: 'Makeup Lesson',
    description: 'One-on-one session to learn techniques for your face type and style.',
    price: 'от 7,000₽',
    duration: '2 hours',
  },
]

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-light tracking-widest uppercase text-center mb-4">
        Services
      </h1>
      <p className="text-center text-[#8A8580] mb-12 max-w-xl mx-auto">
        Professional makeup and styling services tailored to your needs
      </p>

      <div className="max-w-3xl mx-auto space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-b border-[#E8E0D5] pb-8 last:border-b-0"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-light">{service.title}</h2>
              <span className="text-lg text-[#B8A99A]">{service.price}</span>
            </div>
            <p className="text-[#8A8580] text-sm mb-2">{service.description}</p>
            <p className="text-xs text-[#B8A99A]">{service.duration}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-block px-8 py-3 border border-[#3D3D3D] text-sm tracking-widest uppercase hover:bg-[#3D3D3D] hover:text-[#F5F0EB] transition-colors"
        >
          Book a Service
        </a>
      </div>
    </div>
  )
}
