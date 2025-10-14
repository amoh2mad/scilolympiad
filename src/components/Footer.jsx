import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <img 
              src="/images/logo.png" 
              alt="SCIL Olympiad"
              className="w-8 h-8 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center hidden">
              <span className="text-white font-bold text-sm">SC</span>
            </div>
            <span className="text-xl font-bold">SCIL Olympiad 2026</span>
          </div>

          {/* Organization Info */}
          <p className="text-gray-300 text-lg mb-4">
            Organized by SCIL
          </p>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Striving for excellence in Islamic and academic education through competitive events 
            that inspire learning, creativity, and spiritual growth.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-6 text-sm">
            <div>
              <p className="text-gray-300">Email</p>
              <p className="text-gray-400">scil.olympiad.info@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-300">Venue</p>
              <p className="text-gray-400">SCIL DHA Campus, Lahore</p>
            </div>
          </div>

          {/* Instagram Links */}
          <div className="flex justify-center gap-8 mb-6">
            <div className="text-center">
              <p className="text-pink-400 font-semibold mb-2">Girls Instagram</p>
              <a 
                href="https://instagram.com/scilolympiadgirls" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @scilolympiadgirls
              </a>
            </div>
            
            <div className="text-center">
              <p className="text-blue-400 font-semibold mb-2">Boys Instagram</p>
              <a 
                href="https://instagram.com/scilolympiadboys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @scilolympiadboys
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {['home', 'categories', 'registration', 'study-guides', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-colors duration-200 capitalize"
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </div>

          {/* Event Dates */}
          <div className="bg-gray-700 rounded-lg p-4 max-w-md mx-auto mb-6">
            <h4 className="font-semibold mb-2">Event Dates 2026</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-pink-300">Girls Event</p>
                <p className="text-gray-300">Jan 23-25</p>
              </div>
              <div>
                <p className="text-blue-300">Boys Event</p>
                <p className="text-gray-300">Jan 30 - Feb 1</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © {currentYear} SCIL Olympiad. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer