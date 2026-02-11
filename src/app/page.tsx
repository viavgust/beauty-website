import Link from 'next/link'
import Image from 'next/image'

const featuredWorks = [
  { id: 1, category: 'Bridal' },
  { id: 2, category: 'Editorial' },
  { id: 3, category: 'Makeup' },
  { id: 4, category: 'Styling' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[#E8E0D5]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F0EB]/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-widest uppercase mb-6">
            Beauty Studio
          </h1>
          <p className="text-lg md:text-xl text-[#8A8580] max-w-xl mx-auto mb-8">
            Professional makeup & styling for every occasion
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-[#3D3D3D] text-sm tracking-widest uppercase hover:bg-[#3D3D3D] hover:text-[#F5F0EB] transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Featured Work */}
      <section className="container py-20">
        <h2 className="text-2xl font-light tracking-widest uppercase text-center mb-12">
          Featured Work
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredWorks.map((work) => (
            <Link
              key={work.id}
              href="/portfolio"
              className="aspect-[3/4] bg-[#E8E0D5] relative group overflow-hidden"
            >
              <div className="absolute inset-0 flex items-end p-4">
                <span className="text-xs tracking-wide uppercase text-[#8A8580]">
                  {work.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="text-sm tracking-widest uppercase text-[#8A8580] hover:text-[#3D3D3D] border-b border-current pb-1"
          >
            View All Work
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#E8E0D5] py-20">
        <div className="container">
          <h2 className="text-2xl font-light tracking-widest uppercase text-center mb-12">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {['Makeup', 'Styling', 'Bridal'].map((service) => (
              <div key={service} className="text-center">
                <h3 className="text-lg tracking-wide mb-2">{service}</h3>
                <p className="text-sm text-[#8A8580]">from 5,000₽</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-sm tracking-widest uppercase text-[#8A8580] hover:text-[#3D3D3D] border-b border-current pb-1"
            >
              All Services & Prices
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="aspect-[4/5] bg-[#E8E0D5]" />
          <div>
            <h2 className="text-2xl font-light tracking-widest uppercase mb-6">
              About Me
            </h2>
            <p className="text-[#8A8580] leading-relaxed mb-6">
              Professional makeup artist and stylist with over 5 years of experience
              in bridal, editorial, and everyday beauty. I believe in enhancing
              natural beauty and creating looks that make you feel confident.
            </p>
            <Link
              href="/about"
              className="text-sm tracking-widest uppercase text-[#8A8580] hover:text-[#3D3D3D] border-b border-current pb-1"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
