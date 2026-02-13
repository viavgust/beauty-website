'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Портфолио', href: '/portfolio' },
  { name: 'Услуги', href: '/services' },
  { name: 'Курсы', href: '/courses' },
  { name: 'Обо мне', href: '/about' },
  { name: 'Контакты', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#FAF7F4]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="container flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl md:text-3xl tracking-wide">
          Alexandra Plekhanova
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-xs tracking-[0.2em] uppercase text-[#7D6B5D] hover:text-[#2C2C2C] transition-colors font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Book button - desktop */}
        <Link
          href="/contact"
          className="hidden md:block text-xs tracking-[0.15em] uppercase px-6 py-3 bg-[#2C2C2C] text-white hover:bg-[#7D6B5D] transition-colors font-medium"
        >
          Записаться
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-[#FAF7F4] z-50">
          <div className="container py-6 flex justify-between items-center">
            <Link href="/" className="font-serif text-2xl tracking-wide">
              Alexandra Plekhanova
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="container py-12 space-y-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block font-serif text-3xl text-[#2C2C2C] hover:text-[#C9A86C]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-8">
              <Link
                href="/contact"
                className="inline-block text-xs tracking-[0.15em] uppercase px-8 py-4 bg-[#2C2C2C] text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Записаться
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
