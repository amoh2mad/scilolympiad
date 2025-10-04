import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage('Thank you for your message! We will get back to you within 24 hours.')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 2000)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team for any questions or concerns
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-2">Boys Management</h4>
                <p className="text-blue-700 text-lg">+92 330 4204892, +92 300 4475506 </p>
                <p className="text-blue-600 text-sm">scil.olympiad.info@gmail.com</p>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-pink-800 mb-2">Girls Management</h4>
                <p className="text-pink-700 text-lg">+92 334 8078553, +92 335 1557196</p>
                <p className="text-pink-600 text-sm">scil.olympiad.info@gmail.com</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-2">General Inquiries</h4>
                <p className="text-gray-700">scil.olympiad.info@gmail.com</p>
                <p className="text-gray-600 text-sm mt-2">
                  For general questions about the event, registration process, or sponsorship opportunities.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Website</h4>
                <p className="text-green-700 text-lg">scilolympiad.info</p>
                <p className="text-green-600 text-sm">Visit our website for more information</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Event Location</h4>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.587065244063!2d74.46756227485923!3d31.508032274219644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190ec3df5fcc3f%3A0xf4c40b1a716a9352!2sSCIL%20School%20Barki%20Road%20Branch!5e0!3m2!1sen!2s!4v1759517229771!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SCIL School Location"
                ></iframe>
              </div>
              <p className="text-gray-600 text-sm mt-2 text-center">
                SCIL DHA Campus, Barki Road, Phase VIII DHA, Lahore
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  placeholder="Enter your message or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitMessage && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact