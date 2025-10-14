import React, { useState, useEffect } from 'react'

// Girls Event Countdown Timer
const GirlsCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const eventDate = new Date('2026-01-23T09:00:00').getTime()

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
          <div className="text-white/80 text-xs capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

// Boys Event Countdown Timer
const BoysCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3">
          <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
          <div className="text-white/80 text-xs capitalize">{unit}</div>
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
    <section className="relative text-white py-20">
      {/* Blueish Background with Opacity */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/90 via-blue-600/80 to-indigo-700/90">
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            SCIL Olympiad 2026
          </h1>
          <p className="text-lg mb-12 text-blue-100 max-w-2xl mx-auto">
            Join us for an enriching 3-day event celebrating Islamic knowledge, creativity, and spiritual growth
          </p>
          
          {/* Side by Side Countdown Timers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Girls Event Timer */}
            <div className="bg-gradient-to-br from-blue-500/80 to-purple-600/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Girls Event Starts In</h3>
              <p className="text-blue-100 mb-4">January 23-25, 2026</p>
              <GirlsCountdownTimer />
              <div className="mt-4 text-sm text-blue-200">
                3 days of competitions, workshops, and spiritual growth
              </div>
            </div>

            {/* Boys Event Timer */}
            <div className="bg-gradient-to-br from-blue-600/80 to-cyan-600/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-white">Boys Event Starts In</h3>
              <p className="text-blue-100 mb-4">January 30 - February 1, 2026</p>
              <BoysCountdownTimer />
              <div className="mt-4 text-sm text-blue-200">
                3 days of competitions, workshops, and spiritual growth
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToRegistration}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg"
            >
              Register Now
            </button>
            <button
              onClick={() => document.getElementById('study-guides').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm"
            >
              Download Guides
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default Hero