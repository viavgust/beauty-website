import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#E8E0D5] py-12 mt-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg tracking-widest uppercase font-light mb-4">Beauty Studio</h3>
            <p className="text-sm text-[#8A8580]">
              Professional makeup & styling services
            </p>
          </div>
          
          <div>
            <h4 className="text-sm tracking-wide uppercase mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#8A8580]">
              <li><Link href="/portfolio" className="hover:text-[#3D3D3D]">Portfolio</Link></li>
              <li><Link href="/services" className="hover:text-[#3D3D3D]">Services</Link></li>
              <li><Link href="/courses" className="hover:text-[#3D3D3D]">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-[#3D3D3D]">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm tracking-wide uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#8A8580]">
              <li>hello@beautystudio.com</li>
              <li>+7 (999) 123-45-67</li>
              <li className="flex gap-4 pt-2">
                <a href="#" className="hover:text-[#3D3D3D]">Instagram</a>
                <a href="#" className="hover:text-[#3D3D3D]">Telegram</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#B8A99A]/30 mt-8 pt-8 text-center text-sm text-[#8A8580]">
          © {new Date().getFullYear()} Beauty Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
