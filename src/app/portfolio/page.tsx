'use client'

import { useState } from 'react'
import Image from 'next/image'
import { portfolioImages } from '@/lib/mockData'

const categories = [
  { id: 'all', label: 'Все работы' },
  { id: 'bridal', label: 'Свадебный' },
  { id: 'editorial', label: 'Editorial' },
  { id: 'makeup', label: 'Макияж' },
  { id: 'styling', label: 'Стайлинг' },
]

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null)

  const filteredItems = activeFilter === 'all'
    ? portfolioImages
    : portfolioImages.filter(item => item.category === activeFilter)

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EAE2]">
        <div className="container">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A86C] mb-3">Мои работы</p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Портфолио</h1>
          <p className="text-[#7D6B5D] max-w-xl text-lg">
            Каждый образ — это история. Здесь собраны мои лучшие работы за последние годы.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-[#F0EAE2] sticky top-0 bg-[#FAF7F4] z-40">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-2 md:gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`text-xs tracking-[0.15em] uppercase px-4 py-2 transition-all ${
                  activeFilter === category.id
                    ? 'text-[#2C2C2C] border-b-2 border-[#C9A86C]'
                    : 'text-[#7D6B5D] hover:text-[#2C2C2C]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className={`relative group overflow-hidden ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <div className={`relative ${index % 5 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                    <p className="text-white font-serif text-lg">{item.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src}
              alt={selectedImage.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white">
            <p className="font-serif text-2xl mb-1">{selectedImage.title}</p>
            <p className="text-xs tracking-widest uppercase text-white/50">{selectedImage.category}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#2C2C2C] text-white text-center">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Хотите такой же образ?</h2>
          <p className="text-white/60 mb-8 max-w-md mx-auto">
            Свяжитесь со мной, и мы обсудим ваш идеальный look
          </p>
          <a
            href="/contact"
            className="inline-block text-xs tracking-[0.2em] uppercase px-8 py-4 bg-[#C9A86C] text-white hover:bg-[#B8975B] transition-colors font-medium"
          >
            Записаться
          </a>
        </div>
      </section>
    </>
  )
}
