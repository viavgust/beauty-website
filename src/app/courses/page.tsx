import Image from 'next/image'
import Link from 'next/link'
import { courses } from '@/lib/mockData'

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EAE2]">
        <div className="container">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Обучение</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Курсы</h1>
          <p className="text-[#7D6B5D] max-w-xl text-lg">
            Научитесь профессиональному макияжу под руководством практикующего визажиста. 
            Маленькие группы, много практики, реальные навыки.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {courses.map((course, index) => (
              <div 
                key={course.id} 
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                    {course.status === 'coming-soon' && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white text-xs tracking-[0.3em] uppercase border border-white px-6 py-3">
                          Скоро
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A86C] hidden md:flex items-center justify-center">
                    <span className="font-serif text-2xl text-white">{course.duration}</span>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    {course.status === 'published' && (
                      <span className="text-xs tracking-widest uppercase px-3 py-1 bg-[#C9A86C] text-white">
                        Набор открыт
                      </span>
                    )}
                    {course.status === 'coming-soon' && (
                      <span className="text-xs tracking-widest uppercase px-3 py-1 bg-[#7D6B5D] text-white">
                        {course.startDate}
                      </span>
                    )}
                  </div>
                  
                  <h2 className="font-serif text-3xl md:text-4xl mb-4">{course.title}</h2>
                  <p className="text-[#7D6B5D] leading-relaxed mb-6">{course.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-xs tracking-widest uppercase text-[#7D6B5D] mb-3">Программа:</p>
                    <div className="flex flex-wrap gap-2">
                      {course.modules.map((module, i) => (
                        <span 
                          key={i} 
                          className="text-sm px-3 py-1 bg-[#F0EAE2] text-[#7D6B5D]"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-[#F0EAE2]">
                    <div>
                      <span className="font-serif text-3xl text-[#C9A86C]">{course.price}</span>
                      <span className="text-[#7D6B5D] text-sm ml-2">/ {course.duration}</span>
                    </div>
                    {course.status === 'published' ? (
                      <Link
                        href="/contact"
                        className="text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
                      >
                        Записаться
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="text-xs tracking-[0.15em] uppercase px-6 py-3 border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white transition-colors font-medium"
                      >
                        Узнать первой
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-[#2C2C2C] text-white">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Преимущества</p>
            <h2 className="font-serif text-4xl md:text-5xl">Что вы получите</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Практические навыки',
                desc: '80% курса — это практика на моделях. Вы уйдёте с реальными умениями, а не только теорией.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Профессиональный кейс',
                desc: 'Подберём вам базовый набор косметики и инструментов для старта карьеры.',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Поддержка после курса',
                desc: 'Чат выпускников, помощь с первыми клиентами и ответы на вопросы в течение года.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 border border-[#C9A86C] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C9A86C]">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#E8D5D0]">
        <div className="container text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Остались вопросы?</h2>
          <p className="text-[#7D6B5D] max-w-md mx-auto mb-8">
            Напишите мне, и я расскажу подробнее о программе и помогу выбрать подходящий курс
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
