const courses = [
  {
    title: 'Makeup Basics',
    description: 'Learn the fundamentals of makeup application, color theory, and product selection.',
    price: '25,000₽',
    duration: '2 days',
    status: 'coming-soon' as const,
  },
  {
    title: 'Bridal Masterclass',
    description: 'Advanced techniques for creating stunning bridal looks that last all day.',
    price: '40,000₽',
    duration: '3 days',
    status: 'coming-soon' as const,
  },
  {
    title: 'Personal Style Workshop',
    description: 'Discover your unique style, learn to build a capsule wardrobe, and shop smarter.',
    price: '15,000₽',
    duration: '1 day',
    status: 'coming-soon' as const,
  },
]

export default function CoursesPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-light tracking-widest uppercase text-center mb-4">
        Courses
      </h1>
      <p className="text-center text-[#8A8580] mb-12 max-w-xl mx-auto">
        Learn professional makeup and styling techniques
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-[#E8E0D5] p-6"
          >
            {course.status === 'coming-soon' && (
              <span className="text-xs tracking-wide uppercase text-[#B8A99A] mb-4 block">
                Coming Soon
              </span>
            )}
            <h2 className="text-xl font-light mb-3">{course.title}</h2>
            <p className="text-[#8A8580] text-sm mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#B8A99A]">{course.duration}</span>
              <span className="font-medium">{course.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16 p-8 bg-[#E8E0D5] max-w-xl mx-auto">
        <h3 className="text-lg font-light mb-3">Stay Updated</h3>
        <p className="text-sm text-[#8A8580] mb-4">
          Be the first to know when new courses are available
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-2 border border-[#3D3D3D] text-sm tracking-wide uppercase hover:bg-[#3D3D3D] hover:text-[#F5F0EB] transition-colors"
        >
          Contact Me
        </a>
      </div>
    </div>
  )
}
