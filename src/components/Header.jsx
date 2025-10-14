import React from 'react'

const Header = ({ activeSection }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleRegisterClick = () => {
    scrollToSection('registration')
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Updated with SCIL logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/scil-logo.png" 
              alt="SCIL Olympiad"
              className="h-12 object-contain" // Increased height for better visibility
              onError={(e) => {
                e.target.style.display = 'none';
                // Fallback to text if logo fails to load
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback text - hidden by default */}
            <div className="hidden">
              <span className="text-xl font-bold text-gray-800">
                SCIL Olympiad 2026
              </span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'categories', 'study-guides', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors duration-200 capitalize ${
                  activeSection === item
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {item.replace('-', ' ')}
              </button>
            ))}
          </nav>

          {/* Register Button */}
          <button
            onClick={handleRegisterClick}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Register
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header