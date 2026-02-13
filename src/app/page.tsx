import Image from 'next/image'
import Link from 'next/link'
import { portfolioImages, heroImage, services, testimonials, stats } from '@/lib/mockData'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Beauty Studio"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.3em] uppercase mb-4 text-white/80">
              Визажист & Стилист • Москва
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-[1.1]">
              Красота в<br />деталях
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-md leading-relaxed">
              Создаю образы, которые подчёркивают вашу индивидуальность и остаются в памяти
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block text-center text-xs tracking-[0.2em] uppercase px-8 py-4 bg-white text-[#2C2C2C] hover:bg-[#C9A86C] hover:text-white transition-colors font-medium"
              >
                Записаться
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-center text-xs tracking-[0.2em] uppercase px-8 py-4 border border-white text-white hover:bg-white hover:text-[#2C2C2C] transition-colors font-medium"
              >
                Портфолио
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-white/30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#2C2C2C] text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl md:text-5xl text-[#C9A86C] mb-2">{stat.number}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Портфолио</p>
              <h2 className="font-serif text-4xl md:text-5xl">Избранные работы</h2>
            </div>
            <Link
              href="/portfolio"
              className="text-xs tracking-[0.2em] uppercase text-[#7D6B5D] hover:text-[#2C2C2C] transition-colors border-b border-current pb-1"
            >
              Смотреть все →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {portfolioImages.slice(0, 8).map((item, index) => (
              <Link
                key={item.id}
                href="/portfolio"
                className={`relative group overflow-hidden ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index === 0 || index === 5 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <p className="font-serif text-lg md:text-xl">{item.title}</p>
                      <p className="text-xs tracking-widest uppercase text-white/70 mt-1">{item.category}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-[#F0EAE2]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80"
                  alt="Alexandra Plekhanova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#C9A86C] hidden md:block" />
            </div>
            
            <div className="md:pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Обо мне</p>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Привет, я Александра</h2>
              <p className="text-[#7D6B5D] leading-relaxed mb-6">
                Профессиональный визажист и стилист с 8-летним опытом работы в индустрии красоты. 
                Работала на Fashion Week Moscow, сотрудничала с ведущими глянцевыми изданиями.
              </p>
              <p className="text-[#7D6B5D] leading-relaxed mb-8">
                Моя философия — подчеркнуть вашу природную красоту, а не спрятать её. 
                Каждое лицо уникально, и моя задача — найти то, что делает вас особенной.
              </p>
              <Link
                href="/about"
                className="inline-block text-xs tracking-[0.2em] uppercase px-8 py-4 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-colors font-medium"
              >
                Узнать больше
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Услуги</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">Что я предлагаю</h2>
            <p className="text-[#7D6B5D] max-w-xl mx-auto">
              От повседневного макияжа до полного свадебного образа — найдём идеальное решение для вас
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div key={service.id} className="group">
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-[#C9A86C] text-white text-xs tracking-widest uppercase px-3 py-1">
                      Популярное
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-2xl mb-2">{service.title}</h3>
                <p className="text-[#7D6B5D] text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-serif text-xl text-[#C9A86C]">{service.price}</span>
                  <span className="text-xs text-[#7D6B5D]">{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#2C2C2C] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Отзывы</p>
            <h2 className="font-serif text-4xl md:text-5xl">Что говорят клиенты</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/5 p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-xs text-white/50">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-white/70 text-sm leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#E8D5D0]">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-6xl mb-6">Готовы преобразиться?</h2>
          <p className="text-[#7D6B5D] max-w-xl mx-auto mb-8">
            Запишитесь на консультацию, и мы вместе создадим ваш идеальный образ
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-[0.2em] uppercase px-10 py-5 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
          >
            Связаться со мной
          </Link>
        </div>
      </section>
    </>
  )
}
