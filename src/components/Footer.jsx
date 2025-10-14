import React from 'react'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo.png" 
                alt="SCIL Olympiad"
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const fallback = e.target.nextElementSibling;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              {/* Fallback text logo */}
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold">SCIL Olympiad 2026</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Join us for an enriching 3-day event celebrating Islamic knowledge, creativity, and spiritual growth. 
              Experience competitions, workshops, and spiritual development.
            </p>
            <div className="flex space-x-4">
              {/* Boys Instagram */}
              <a 
                href="https://instagram.com/scilolympiadboys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Follow SCIL Olympiad Boys"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.511-3.299-1.362-.85-.85-1.361-2.001-1.361-3.298 0-1.297.511-2.448 1.361-3.298.85-.85 2.002-1.361 3.299-1.361 1.297 0 2.448.511 3.298 1.361.85.85 1.361 2.001 1.361 3.298 0 1.297-.511 2.448-1.361 3.298-.85.851-2.001 1.362-3.298 1.362z"/>
                </svg>
                <span className="sr-only">SCIL Olympiad Boys Instagram</span>
              </a>
              {/* Girls Instagram */}
              <a 
                href="https://instagram.com/scilolympiadgirls" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                title="Follow SCIL Olympiad Girls"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.511-3.299-1.362-.85-.85-1.361-2.001-1.361-3.298 0-1.297.511-2.448 1.361-3.298.85-.85 2.002-1.361 3.299-1.361 1.297 0 2.448.511 3.298 1.361.85.85 1.361 2.001 1.361 3.298 0 1.297-.511 2.448-1.361 3.298-.85.851-2.001 1.362-3.298 1.362z"/>
                </svg>
                <span className="sr-only">SCIL Olympiad Girls Instagram</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'categories', 'registration', 'study-guides', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a 
                  href="mailto:scil.event.info@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  scil.event.info@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Organized by SCIL. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Designed by{' '}
              <a 
                href="https://github.com/amoh2mad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-200 font-medium"
              >
                Abdullah M.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer