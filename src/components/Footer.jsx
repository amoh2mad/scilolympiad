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
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img 
              src="/images/scil-logo.png" 
              alt="SCIL Olympiad"
              className="h-12 object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback */}
            <div className="hidden items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="text-xl font-bold">SCIL Olympiad 2026</span>
            </div>
          </div>

          {/* Organization Info */}
          <p className="text-gray-300 text-lg mb-4">
            Organized by SCIL
          </p>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Striving for excellence in Islamic and academic education through competitive events 
            that inspire learning, creativity, and spiritual growth.
          </p>

          {/* Rest of footer content remains the same */}
          {/* ... */}
        </div>
      </div>
    </footer>
  )
}

export default Footer