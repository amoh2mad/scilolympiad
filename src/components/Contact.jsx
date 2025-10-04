import React from 'react'

const Contact = () => {
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
                <p className="text-blue-700 text-lg">+92 330 4204892, +92 300 4475506</p>
                <p className="text-blue-600 text-sm">scil.olympiad.info@gmail.com</p>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h4 className="font-semibold text-pink-800 mb-2">Girls Management</h4>
                <p className="text-pink-700 text-lg">+92 334 8078553, +92 335 1557196</p>
                <p className="text-pink-600 text-sm">scil.olympiad.info@gmail.com</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-2">General Inquiries</h4>
                <p className="text-gray-700">scil.olympiad.info@gmail.com
                                              0333-4865500
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  For general questions about the event, registration process, or sponsorship opportunities.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-2">Website</h4>
                <p className="text-green-700 text-lg">scilolympiad.com</p>
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

          {/* Instagram & Social Media Section */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-lg">Girls Instagram</h4>
                <a 
                  href="https://instagram.com/scilolympiadgirls" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <p className="text-lg font-semibold">@scilolympiadgirls</p>
                    <p className="text-purple-100 text-sm">Follow for girls event updates</p>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-2 text-lg">Boys Instagram</h4>
                <a 
                  href="https://instagram.com/scilolympiadboys" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:opacity-90 transition-opacity duration-200"
                >
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <div>
                    <p className="text-lg font-semibold">@scilolympiadboys</p>
                    <p className="text-blue-100 text-sm">Follow for boys event updates</p>
                  </div>
                </a>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Quick Contact</h4>
                <p className="text-gray-600 mb-4">
                  Prefer direct communication? Reach out to our coordinators via phone or email for immediate assistance.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Call during office hours: 9 AM - 5 PM</p>
                  <p> Email responses within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact