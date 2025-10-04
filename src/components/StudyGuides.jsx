import React from 'react'

const studyGuidesData = [
  {
    id: 1,
    title: "The Sweetness of Quran",
    subtitle: "Qiraat Study Guide",
    description: "Complete guide to Quranic recitation rules, passages, and competition format",
    file: "/guides/qiraat-guide.pdf",
    image: "/images/categories/qiraat.jpg"
  },
  {
    id: 2,
    title: "Walk of Wisdom", 
    subtitle: "Islamic Quiz Study Material",
    description: "Comprehensive syllabus covering Seerah, Islamic history, science and architecture",
    file: "/guides/islamic-quiz-guide.pdf",
    image: "/images/categories/islamic-quiz.jpg"
  },
  {
    id: 3,
    title: "Soulful Voices",
    subtitle: "Poetry Recitation Guidelines",
    description: "Selected poems for recitation in English and Urdu with evaluation criteria",
    file: "/guides/poetry-recitation-guide.pdf",
    image: "/images/categories/poetry-recitation.jpg"
  },
  {
    id: 4,
    title: "Echoes of Enlightenment",
    subtitle: "Declamation Topics & Guidelines", 
    description: "Speech topics and persuasive speaking guidelines for declamation competition",
    file: "/guides/declamation-guide.pdf",
    image: "/images/categories/declamation.jpg"
  },
  {
    id: 5,
    title: "Radiant Realms",
    subtitle: "Writing Competition Guidelines",
    description: "Writing competition format, narrative style requirements and evaluation criteria",
    file: "/guides/writing-guide.pdf", 
    image: "/images/categories/writing.jpg"
  }
]

const StudyGuides = () => {
  const handleDownload = (guideTitle, filePath) => {
    const link = document.createElement('a')
    link.href = filePath
    link.download = `${guideTitle}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    alert(`Downloading: ${guideTitle}`)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Study Guides & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download comprehensive study guides and preparation materials for all competition categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyGuidesData.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement.querySelector('.guide-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="guide-fallback bg-gray-200 h-48 flex items-center justify-center hidden">
                  <span className="text-gray-500">Guide Cover</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {guide.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{guide.subtitle}</p>
                <p className="text-gray-600 mb-4">
                  {guide.description}
                </p>
                <button
                  onClick={() => handleDownload(guide.title, guide.file)}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Instructions */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">
              Download Instructions
            </h4>
            <p className="text-blue-700">
              Click any "Download PDF" button to get the study guide for that category. 
              All guides are in PDF format and will download directly to your device.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyGuides