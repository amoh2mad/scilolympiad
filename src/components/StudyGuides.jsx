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
    title: "Model United Nations",
    subtitle: "MUN Competition Guide",
    description: "Rules, procedures, and preparation tips for MUN debates (Boys Only)",
    file: "/guides/mun-guide.pdf",
    image: "/images/categories/mun.jpg"
  },
  {
    id: 4,
    title: "Parliamentary Debates",
    subtitle: "Debates Guidelines", 
    description: "British Parliamentary format rules and debate strategies (Girls Only)",
    file: "/guides/debates-guide.pdf",
    image: "/images/categories/debates.jpg"
  },
  {
    id: 5,
    title: "Soulful Voices",
    subtitle: "Poetry Recitation Guidelines",
    description: "Selected poems for recitation in English and Urdu with evaluation criteria",
    file: "/guides/poetry-recitation-guide.pdf",
    image: "/images/categories/poetry-recitation.jpg"
  },
  {
    id: 6,
    title: "Harmonious Praises",
    subtitle: "Hamd, Naat & Nasheed Guide",
    description: "Rules, formats, and guidelines for Islamic vocal performances",
    file: "/guides/hamd-naat-guide.pdf",
    image: "/images/categories/hamd-naat.jpg"
  },
  {
    id: 7,
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            Study Guides & Resources
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Download comprehensive study guides and preparation materials for all competition categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studyGuidesData.map((guide) => (
            <div
              key={guide.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-700/50 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-600/50 transition-all duration-300"
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
                <div className="guide-fallback bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center hidden transition-colors duration-300">
                  <span className="text-gray-500 dark:text-gray-400">Guide Cover</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                  {guide.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 transition-colors duration-300">
                  {guide.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
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

        {/* File Structure Instructions */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-blue-600 dark:bg-blue-800 text-white rounded-xl p-8 transition-colors duration-300">
            <h3 className="text-2xl font-bold mb-4">How to Update Study Guides</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Required PDF Files:</h4>
                <div className="bg-blue-700 dark:bg-blue-900 rounded-lg p-4 text-sm font-mono transition-colors duration-300">
                  public/guides/
                  <br />├── qiraat-guide.pdf
                  <br />├── islamic-quiz-guide.pdf
                  <br />├── mun-guide.pdf
                  <br />├── debates-guide.pdf
                  <br />├── poetry-recitation-guide.pdf
                  <br />├── hamd-naat-guide.pdf
                  <br />└── writing-guide.pdf
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Update Process:</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Replace old PDFs in <code>public/guides/</code> folder</li>
                  <li>• Keep the same file names</li>
                  <li>• Files update automatically on website</li>
                  <li>• No code changes needed for PDF updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyGuides