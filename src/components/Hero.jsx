import React, { useState, useEffect } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Boys event starts on January 30, 2026
    const eventDate = new Date('2026-01-30T09:00:00').getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = eventDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-3xl md:text-4xl font-bold text-white">{value}</div>
          <div className="text-white/80 text-sm capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
     <div className="absolute inset-0">
  <img 
    src="/images/hero-bg.jpg" 
    alt="SCIL Olympiad 2026"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black/40"></div>
</div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            SCIL Olympiad 2026
          </h1>
          <div className="text-xl md:text-2xl mb-8 text-blue-100 space-y-2">
            <p>Girls Event: January 23-25, 2026</p>
            <p>Boys Event: January 30 - February 1, 2026</p>
          </div>
          <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto">
            Join us for an enriching 3-day event celebrating Islamic knowledge, creativity, and spiritual growth. 
            Explore various categories including Quranic recitation, Islamic quiz, poetry, and more.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Boys Event Starts In</h3>
            <CountdownTimer />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToRegistration}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Register Now
            </button>
            <button
              onClick={() => document.getElementById('study-guides').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Download Guides
            </button>
          </div>
        </div>
      </div>
      
      {/* Hero Image Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero