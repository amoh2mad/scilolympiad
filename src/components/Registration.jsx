import React, { useState } from 'react'

const Registration = () => {
  const [activeForm, setActiveForm] = useState('boys')

  // Updated embed URLs
  const boysFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf__nJwLch7KkyTRTZqZWG2GP2rIlWBwpbEDeFiHyast66unA/viewform?embedded=true"
  const girlsFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSftPyh6D4TBm4bXMc2fsdhbCEcaRvP0K6T0bGoY-o0B8kOwDQ/viewform?embedded=true"

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Registration
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Register for SCIL Olympiad 2026 by filling out the appropriate form below
          </p>
        </div>

        {/* Pricing Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-2">Early Bird Registration</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">Rs. 2,000</p>
              <p className="text-green-700">Until December 4th, 2025</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Regular Registration</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">Rs. 2,500</p>
              <p className="text-blue-700">Until January 10th, 2026</p>
            </div>
          </div>
        </div>

        {/* Form Selection Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveForm('boys')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeForm === 'boys'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Boys Registration
            </button>
            <button
              onClick={() => setActiveForm('girls')}
              className={`px-6 py-3 rounded-md font-medium transition-colors duration-200 ${
                activeForm === 'girls'
                  ? 'bg-pink-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Girls Registration
            </button>
          </div>
        </div>

        {/* Forms */}
        <div className="max-w-4xl mx-auto">
          {activeForm === 'boys' && (
            <div>
              <h3 className="text-2xl font-bold text-center text-blue-600 mb-6">
                Boys Registration Form
              </h3>
              <p className="text-center text-gray-600 mb-4">Event Dates: February 6th - February 8th, 2026</p>
              <div className="bg-gray-100 rounded-lg p-1">
                <iframe 
                  src={boysFormUrl}
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          )}

          {activeForm === 'girls' && (
            <div>
              <h3 className="text-2xl font-bold text-center text-pink-600 mb-6">
                Girls Registration Form
              </h3>
              <p className="text-center text-gray-600 mb-4">Event Dates: January 23-25, 2026</p>
              <div className="bg-gray-100 rounded-lg p-1">
                <iframe 
                  src={girlsFormUrl}
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight="0" 
                  marginWidth="0"
                  className="rounded-lg"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          )}
        </div>

        {/* Additional Information */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">
              Important Registration Information
            </h4>
            <ul className="text-blue-700 space-y-2">
              <li>• Early Bird Registration: Rs. 2,000 (Until December 10th, 2025)</li>
              <li>• Regular Registration: Rs. 2,500 (Until January 30th, 2026)</li>
              <li>• Each team must participate in at least 1 category.</li>
              <li>• We will try our best to accomodate with any clashes.</li>
              <li>• Payment should be made only to the Meezan Bank account provided in the form</li>
              <li>• The organization is not responsible for incorrect payments</li>
              <li>• Once registered, the delegate's fee is non refundable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Registration