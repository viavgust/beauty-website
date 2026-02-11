'use client'

import { useState } from 'react'

const categories = ['All', 'Makeup', 'Styling', 'Bridal', 'Editorial']

const placeholderItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Work ${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1].toLowerCase(),
}))

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = activeFilter === 'All'
    ? placeholderItems
    : placeholderItems.filter(item => 
        item.category === activeFilter.toLowerCase()
      )

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-light tracking-widest uppercase text-center mb-12">
        Portfolio
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`text-sm tracking-wide uppercase px-4 py-2 transition-colors ${
              activeFilter === category
                ? 'text-[#3D3D3D] border-b-2 border-[#3D3D3D]'
                : 'text-[#8A8580] hover:text-[#3D3D3D]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="aspect-[3/4] bg-[#E8E0D5] relative group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#3D3D3D]/0 group-hover:bg-[#3D3D3D]/20 transition-colors flex items-end p-4">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm text-white">{item.title}</p>
                <p className="text-xs text-white/70 capitalize">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="text-center text-[#8A8580] py-12">
          No items in this category yet
        </p>
      )}
    </div>
  )
}
