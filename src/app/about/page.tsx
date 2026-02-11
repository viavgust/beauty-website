export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-light tracking-widest uppercase text-center mb-12">
        About
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Photo */}
        <div className="aspect-[4/5] bg-[#E8E0D5]" />

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-light">Hello, I'm Anna</h2>
          
          <p className="text-[#8A8580] leading-relaxed">
            Professional makeup artist and stylist based in Moscow with over 5 years
            of experience in the beauty industry. I specialize in bridal makeup,
            editorial looks, and personal styling.
          </p>

          <p className="text-[#8A8580] leading-relaxed">
            My philosophy is simple: enhance your natural beauty, not hide it.
            Every face is unique, and my job is to highlight what makes you special.
          </p>

          <div className="pt-4">
            <h3 className="text-lg mb-4">Experience</h3>
            <ul className="space-y-2 text-sm text-[#8A8580]">
              <li>• Fashion Week Moscow backstage</li>
              <li>• 200+ bridal makeovers</li>
              <li>• Editorial work for Elle, Harper's Bazaar</li>
              <li>• Brand collaborations</li>
            </ul>
          </div>

          <div className="pt-4">
            <h3 className="text-lg mb-4">Education</h3>
            <ul className="space-y-2 text-sm text-[#8A8580]">
              <li>• Make Up For Ever Academy, Paris</li>
              <li>• Bobbi Brown Masterclass</li>
              <li>• Fashion Styling Certificate</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="mt-20">
        <h2 className="text-2xl font-light tracking-widest uppercase text-center mb-12">
          What Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { text: 'Anna made me feel like the most beautiful bride. Every detail was perfect.', name: 'Maria K.', source: 'Instagram' },
            { text: 'Professional, punctual, and incredibly talented. Highly recommend!', name: 'Elena S.', source: 'Google' },
            { text: 'The best makeup experience. Will definitely come back!', name: 'Olga P.', source: 'Instagram' },
          ].map((testimonial, index) => (
            <div key={index} className="bg-[#E8E0D5] p-6">
              <p className="text-[#8A8580] text-sm italic mb-4">"{testimonial.text}"</p>
              <p className="text-sm font-medium">{testimonial.name}</p>
              <p className="text-xs text-[#B8A99A]">{testimonial.source}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
