import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const studyGuidesData = [
  {
    id: 1,
    title: "The Sweetness of Quran",
    subtitle: "Qiraat | حالوة القرآن",
    description: "Study guide for Quranic recitation competition",
    pdf: "/guides/qiraat-guide.pdf",
    category: "Qiraat",
    lastUpdated: "2025-01-15",
    fileSize: "2.4 MB"
  },
  {
    id: 2,
    title: "Soulful Voices",
    subtitle: "Hamd/Nasheed/Naat | خيوط البالغة",
    description: "Guidelines for Hamd, Nasheed and Naat performances",
    pdf: "/guides/hamd-naat-guide.pdf",
    category: "Hamd/Nasheed/Naat",
    lastUpdated: "2025-01-15",
    fileSize: "1.8 MB"
  },
  {
    id: 3,
    title: "Walk of Wisdom",
    subtitle: "Islamic Quiz | سفِربصيرت",
    description: "Syllabus and preparation materials for Islamic Quiz",
    pdf: "/guides/islamic-quiz-guide.pdf",
    category: "Islamic Quiz",
    lastUpdated: "2025-01-15",
    fileSize: "3.2 MB"
  },
  {
    id: 4,
    title: "Radiant Realms",
    subtitle: "Writing | زوِرقلم",
    description: "Guidelines for content writing competition",
    pdf: "/guides/writing-guide.pdf",
    category: "Writing",
    lastUpdated: "2025-01-15",
    fileSize: "1.5 MB"
  },
  {
    id: 5,
    title: "Echoes of Enlightenment",
    subtitle: "Parliamentary Debates | صدائےعرفان",
    description: "Rules and format for parliamentary debates",
    pdf: "/guides/debates-guide.pdf",
    category: "Debates",
    lastUpdated: "2025-01-15",
    fileSize: "2.1 MB"
  },
  {
    id: 6,
    title: "Strings of Eloquence",
    subtitle: "Poetry Recitation | نغمۂگل",
    description: "Selected poems and recitation guidelines",
    pdf: "/guides/poetry-recitation-guide.pdf",
    category: "Poetry",
    lastUpdated: "2025-01-15",
    fileSize: "1.9 MB"
  },
  {
    id: 7,
    title: "Sacred Strokes",
    subtitle: "Art Gallery | قوِس قزح",
    description: "Guidelines for calligraphy and still life art",
    pdf: "/guides/art-gallery-guide.pdf",
    category: "Art",
    lastUpdated: "2025-01-15",
    fileSize: "4.1 MB"
  },
  {
    id: 8,
    title: "Model United Nations",
    subtitle: "MUN (Boys Only)",
    description: "Rules and procedures for Model UN",
    pdf: "/guides/mun-guide.pdf",
    category: "MUN",
    lastUpdated: "Coming Soon",
    fileSize: "—"
  }
]

const StudyGuideModal = ({ guide, isOpen, onClose }) => {
  const handleDownload = () => {
    if (guide.pdf && guide.lastUpdated !== "Coming Soon") {
      const link = document.createElement('a')
      link.href = guide.pdf
      link.download = `${guide.title} - Study Guide.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      alert(`Study guide for ${guide.title} will be available soon. Please check back later.`)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                  <p className="text-blue-600 font-semibold">{guide.subtitle}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-600 mb-6">{guide.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Category:</span>
                  <span className="text-gray-800 font-medium">{guide.category}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Last Updated:</span>
                  <span className={`font-medium ${
                    guide.lastUpdated === "Coming Soon" ? "text-orange-600" : "text-gray-800"
                  }`}>
                    {guide.lastUpdated}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">File Size:</span>
                  <span className="text-gray-800 font-medium">{guide.fileSize}</span>
                </div>
              </div>
              
              <button
                onClick={handleDownload}
                disabled={guide.lastUpdated === "Coming Soon"}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 ${
                  guide.lastUpdated === "Coming Soon"
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {guide.lastUpdated === "Coming Soon" ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Coming Soon
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Guide
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const StudyGuides = () => {
  const [selectedGuide, setSelectedGuide] = useState(null)
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'All Guides' },
    { id: 'Qiraat', name: 'Qiraat' },
    { id: 'Hamd/Nasheed/Naat', name: 'Hamd/Nasheed/Naat' },
    { id: 'Islamic Quiz', name: 'Islamic Quiz' },
    { id: 'Writing', name: 'Writing' },
    { id: 'Debates', name: 'Debates' },
    { id: 'Poetry', name: 'Poetry' },
    { id: 'Art', name: 'Art' },
    { id: 'MUN', name: 'MUN' }
  ]

  const filteredGuides = filter === 'all' 
    ? studyGuidesData 
    : studyGuidesData.filter(guide => guide.category === filter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Study Guides & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download comprehensive study guides and preparation materials for each competition category
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Study Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGuides.map((guide) => (
            <motion.div
              key={guide.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedGuide(guide)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">
                      {guide.subtitle}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ml-2 flex-shrink-0 ${
                    guide.lastUpdated === "Coming Soon" ? "bg-orange-400" : "bg-green-400"
                  }`}></div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {guide.description}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>Updated: {guide.lastUpdated}</span>
                  <span>{guide.fileSize}</span>
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-block bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded">
                    {guide.category}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center gap-1 text-sm">
                    {guide.lastUpdated === "Coming Soon" ? "View Details" : "Download"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">No guides available</h3>
            <p className="text-gray-500">Study guides for this category will be available soon.</p>
          </div>
        )}
      </div>

      <StudyGuideModal
        guide={selectedGuide}
        isOpen={!!selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />
    </section>
  )
}

export default StudyGuides