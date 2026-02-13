import Image from 'next/image'
import Link from 'next/link'
import { testimonials, stats } from '@/lib/mockData'

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Обо мне</p>
              <h1 className="font-serif text-5xl md:text-6xl mb-6">Привет, я Александра</h1>
              <p className="text-[#7D6B5D] text-lg leading-relaxed mb-6">
                Профессиональный визажист и стилист с 8-летним опытом в индустрии красоты. 
                Начинала с небольших фотосессий, а сегодня работаю с невестами, 
                модными съёмками и обучаю начинающих мастеров.
              </p>
              <p className="text-[#7D6B5D] text-lg leading-relaxed mb-8">
                Моя философия проста: макияж должен подчёркивать вашу индивидуальность, 
                а не создавать новое лицо. Я верю, что каждая женщина прекрасна — 
                нужно лишь правильно расставить акценты.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.15em] uppercase px-6 py-3 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-colors font-medium"
                >
                  Instagram
                </a>
                <Link
                  href="/contact"
                  className="text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
                >
                  Связаться
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[3/4] relative">
                <Image
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80"
                  alt="Alexandra Plekhanova"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-2/3 aspect-square bg-[#C9A86C] -z-10" />
            </div>
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

      {/* Experience */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Опыт</p>
              <h2 className="font-serif text-4xl mb-8">Где я работала</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Fashion Week Moscow', desc: 'Backstage визажист, 2019-2023' },
                  { title: 'Elle Russia', desc: 'Приглашённый визажист для съёмок' },
                  { title: "Harper's Bazaar", desc: 'Работа над обложками и editorial' },
                  { title: 'Brides Magazine', desc: 'Свадебные съёмки и обложки' },
                ].map((item, index) => (
                  <li key={index} className="border-l-2 border-[#C9A86C] pl-6">
                    <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                    <p className="text-[#7D6B5D] text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Образование</p>
              <h2 className="font-serif text-4xl mb-8">Обучение</h2>
              <ul className="space-y-6">
                {[
                  { title: 'Make Up For Ever Academy', desc: 'Париж, профессиональный курс' },
                  { title: 'Bobbi Brown Masterclass', desc: 'Техники естественного макияжа' },
                  { title: 'London School of Style', desc: 'Персональный стайлинг' },
                  { title: 'Постоянное развитие', desc: 'Мастер-классы и тренинги каждый год' },
                ].map((item, index) => (
                  <li key={index} className="border-l-2 border-[#C9A86C] pl-6">
                    <h3 className="font-serif text-xl mb-1">{item.title}</h3>
                    <p className="text-[#7D6B5D] text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[#F0EAE2]">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">За кулисами</p>
            <h2 className="font-serif text-4xl">Рабочие моменты</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
              'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80',
              'https://images.unsplash.com/photo-1560577544-1a8c9ac31e7e?w=600&q=80',
              'https://images.unsplash.com/photo-1617220379469-5ca3e937a2d0?w=600&q=80',
            ].map((src, index) => (
              <div key={index} className="aspect-square relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Behind the scenes ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Отзывы</p>
            <h2 className="font-serif text-4xl md:text-5xl">Что говорят обо мне</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#F0EAE2] p-8">
                <p className="text-[#7D6B5D] leading-relaxed italic mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-[#7D6B5D]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8D5D0]">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Давайте знакомиться!</h2>
          <p className="text-[#7D6B5D] max-w-md mx-auto mb-8">
            Напишите мне, и мы обсудим, как я могу помочь вам выглядеть и чувствовать себя прекрасно
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
