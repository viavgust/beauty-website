import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/mockData'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EAE2]">
        <div className="container">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Что я предлагаю</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Услуги</h1>
          <p className="text-[#7D6B5D] max-w-xl text-lg">
            Профессиональный макияж и стайлинг для любого события — от деловой встречи до свадьбы мечты.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:mt-20' : ''}`}>
                <div className="aspect-[4/3] relative overflow-hidden mb-6 group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {service.popular && (
                    <div className="absolute top-4 left-4 bg-[#C9A86C] text-white text-xs tracking-widest uppercase px-4 py-2">
                      Популярное
                    </div>
                  )}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-serif text-3xl">{service.title}</h2>
                  <span className="font-serif text-2xl text-[#C9A86C] whitespace-nowrap ml-4">{service.price}</span>
                </div>
                
                <p className="text-[#7D6B5D] leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-[#F0EAE2]">
                  <span className="text-sm text-[#7D6B5D]">
                    <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.duration}
                  </span>
                  <Link
                    href="/contact"
                    className="text-xs tracking-[0.15em] uppercase text-[#2C2C2C] hover:text-[#C9A86C] transition-colors font-medium"
                  >
                    Записаться →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Как это работает</p>
            <h2 className="font-serif text-4xl md:text-5xl">Процесс работы</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Консультация', desc: 'Обсуждаем ваши пожелания, событие и референсы' },
              { step: '02', title: 'Подготовка', desc: 'Подбираю идеальную палитру и продукты под вашу кожу' },
              { step: '03', title: 'Создание образа', desc: 'Работаю с вашим лицом, создавая идеальный look' },
              { step: '04', title: 'Финальные штрихи', desc: 'Последние детали и рекомендации по поддержанию' },
            ].map((item) => (
              <div key={item.step} className="text-center md:text-left">
                <span className="font-serif text-5xl text-[#C9A86C]/30">{item.step}</span>
                <h3 className="font-serif text-xl mt-4 mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">FAQ</p>
            <h2 className="font-serif text-4xl md:text-5xl">Частые вопросы</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'Нужно ли приезжать с чистым лицом?', a: 'Да, желательно приехать без макияжа. Если вы красились, я смою макияж и подготовлю кожу.' },
              { q: 'Сколько держится макияж?', a: 'Профессиональный макияж держится 8-12 часов в зависимости от типа кожи и выбранных продуктов.' },
              { q: 'Можно ли приехать ко мне?', a: 'Да, я работаю с выездом по Москве. Стоимость выезда — от 1500₽ в зависимости от района.' },
              { q: 'Как записаться?', a: 'Напишите мне в Telegram, WhatsApp или заполните форму на сайте. Я отвечу в течение нескольких часов.' },
            ].map((item, index) => (
              <div key={index} className="border-b border-[#F0EAE2] pb-6">
                <h3 className="font-serif text-xl mb-2">{item.q}</h3>
                <p className="text-[#7D6B5D]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8D5D0]">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Готовы записаться?</h2>
          <p className="text-[#7D6B5D] max-w-md mx-auto mb-8">
            Выберите удобное время, и я помогу вам выглядеть потрясающе
          </p>
          <Link
            href="/contact"
            className="inline-block text-xs tracking-[0.2em] uppercase px-10 py-5 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
          >
            Записаться на услугу
          </Link>
        </div>
      </section>
    </>
  )
}
