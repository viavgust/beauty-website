export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-light tracking-widest uppercase text-center mb-4">
        Contact
      </h1>
      <p className="text-center text-[#8A8580] mb-12 max-w-xl mx-auto">
        Ready to book? Get in touch and let's create something beautiful
      </p>

      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-light mb-4">Get in Touch</h2>
            <ul className="space-y-4 text-[#8A8580]">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@beautystudio.com" className="hover:text-[#3D3D3D]">
                  hello@beautystudio.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+79991234567" className="hover:text-[#3D3D3D]">
                  +7 (999) 123-45-67
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-light mb-4">Social Media</h2>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#E8E0D5] flex items-center justify-center text-[#8A8580] hover:border-[#3D3D3D] hover:text-[#3D3D3D] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#E8E0D5] flex items-center justify-center text-[#8A8580] hover:border-[#3D3D3D] hover:text-[#3D3D3D] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-light mb-4">Working Hours</h2>
            <p className="text-[#8A8580] text-sm">
              Monday - Saturday: 10:00 - 20:00<br />
              Sunday: By appointment only
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#E8E0D5] p-8">
          <h2 className="text-lg font-light mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#8A8580] mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 bg-[#F5F0EB] border border-transparent focus:border-[#B8A99A] outline-none text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#8A8580] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-[#F5F0EB] border border-transparent focus:border-[#B8A99A] outline-none text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm text-[#8A8580] mb-1">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-2 bg-[#F5F0EB] border border-transparent focus:border-[#B8A99A] outline-none text-sm"
              >
                <option value="">Select a service</option>
                <option value="everyday">Everyday Makeup</option>
                <option value="evening">Evening Makeup</option>
                <option value="bridal">Bridal Makeup</option>
                <option value="editorial">Editorial/Photoshoot</option>
                <option value="styling">Personal Styling</option>
                <option value="lesson">Makeup Lesson</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#8A8580] mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-[#F5F0EB] border border-transparent focus:border-[#B8A99A] outline-none text-sm resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#3D3D3D] text-[#F5F0EB] text-sm tracking-widest uppercase hover:bg-[#2D2D2D] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
