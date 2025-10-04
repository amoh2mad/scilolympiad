import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categoriesData = [
  {
    id: 1,
    title: "The Sweetness of Quran",
    subtitle: "Qiraat",
    description: "Showcase the beauty of Quranic recitation with precision, accuracy and rhythm.",
    image: "/images/categories/qiraat.jpg",
    pdf: "/guides/qiraat-guide.pdf",
    details: `The Qiraat category will showcase the beauty of Quranic recitation, a sacred art in Islam. Delegates will recite verses from the Quran, capturing the rhythmic cadence and heartfelt spirituality of each line.

**Competition Rounds:**
- **Round 1:** Recite a passage of choice within 3 minutes
- **Round 2:** Recite assigned passages (Surah Waqiah 10-26 or Surah Baqarah 285-286)
- **Final Round:** Recite from 10 pre-assigned Quranic passages

Truly, the skill of precision, accuracy and rhythm in Quranic recitation renders it the most true and wondrous form of remembrance.`
  },
  {
    id: 2,
    title: "Walk of Wisdom",
    subtitle: "Islamic Quiz",
    description: "Test your knowledge of Islamic heritage, history, and developments.",
    image: "/images/categories/islamic-quiz.jpg",
    pdf: "/guides/islamic-quiz-guide.pdf",
    details: `The Islamic Quiz category is designed to encourage learning and enthusiasm for Islamic heritage through engaging questions and challenges.

**Syllabus:**
- Seerah - Treaty of Hudaybiyah till Conquest of Makkah
- Significant Women in the Life of Prophet Muhammad (SAW)
- Ashratul Mubashireen - Ten Blessed Companions
- Science and Architecture in Islam

**Competition Format:**
- Teams of 3 members
- Multiple rounds with MCQs and team-based Q&A`
  },
  {
    id: 3,
    title: "Model United Nations",
    subtitle: "MUN (Boys Only)",
    description: "Engage in diplomatic discussions and represent countries in UN-style debates.",
    image: "/images/categories/mun.jpg",
    pdf: "/guides/mun-guide.pdf",
    details: `Model United Nations challenges participants to engage in diplomatic discussions, develop public speaking skills, and understand global issues from multiple perspectives.

**Competition Details:**
- Exclusive for Boys participants
- UN-style committee sessions
- Country representation and policy debates
- Resolution drafting and voting procedures
- Focus on current global issues and diplomacy

**Skills Developed:**
- Research and analysis
- Public speaking and negotiation
- Critical thinking and problem-solving
- Understanding of international relations`
  },
  {
    id: 4,
    title: "Parliamentary Debates",
    subtitle: "Debates (Girls Only)",
    description: "Participate in British Parliamentary style debates on contemporary issues.",
    image: "/images/categories/debates.jpg",
    pdf: "/guides/debates-guide.pdf",
    details: `Parliamentary Debates provide a platform for structured argumentation and persuasive speaking in the British Parliamentary format.

**Competition Details:**
- Exclusive for Girls participants
- British Parliamentary style debates
- Impromptu topics with limited preparation time
- Team-based with government and opposition roles
- Emphasis on logic, evidence, and rhetorical skills

**Debate Structure:**
- Opening Government and Opposition
- Closing Government and Opposition
- Point of Information interventions
- Reply speeches and summary arguments`
  },
  {
    id: 5,
    title: "Soulful Voices",
    subtitle: "Poetry Recitation",
    description: "Celebrate the rich tradition of poetry in Islam, blending spirituality with eloquence.",
    image: "/images/categories/poetry-recitation.jpg",
    pdf: "/guides/poetry-recitation-guide.pdf",
    details: `The poetry recitation category will celebrate the rich tradition of poetry in Islam, blending spirituality with eloquence.

**Competition Details:**
- Languages: English and Urdu
- Age Categories: Under 17 & Open
- Each delegate receives four poems
- Choose one language to compete in
- Must be familiar with all four poems
- One round competition
- Judges select one poem for recitation
- 3 winners selected (1st, 2nd, 3rd places)`
  },
  {
    id: 6,
    title: "Harmonious Praises",
    subtitle: "Hamd, Naat & Nasheed",
    description: "Express devotion through beautiful Islamic songs and spiritual praises.",
    image: "/images/categories/hamd-naat.jpg",
    pdf: "/guides/hamd-naat-guide.pdf",
    details: `This category provides a platform for vocal talents to share beautiful Islamic songs, praises of Allah, and poems honoring Prophet Muhammad (PBUH) in a melodious and spiritually uplifting manner.

**Competition Categories:**
- **Hamd:** Praises of Allah Almighty
- **Naat:** Poetry honoring Prophet Muhammad (PBUH)
- **Nasheed:** Islamic songs without musical instruments

**Performance Guidelines:**
- Solo or group performances (max 5 members)
- Duration: 3-5 minutes per performance
- Acoustic only - no musical instruments
- Appropriate Islamic attire required
- Judged on melody, voice quality, and spiritual impact

**Languages:** Urdu, Arabic, and English performances welcome`
  },
  {
    id: 7,
    title: "Radiant Realms",
    subtitle: "Writing",
    description: "Compose thoughtful articles and essays on Islamic culture, values and vision.",
    image: "/images/categories/writing.jpg",
    pdf: "/guides/writing-guide.pdf",
    details: `In the content writing category, delegates are invited to compose thoughtful articles and essays on topics related to our culture, values and collective vision.

**Competition Details:**
- Languages: English and Urdu
- Age Categories: Under 17 & Open
- Duration: 50 minutes
- Choose one language to compete in
- Extempore writing
- Narrative style required
- Topic given at start of event`
  }
]

const CategoryModal = ({ category, isOpen, onClose }) => {
  const handleDownloadGuide = () => {
    if (category.pdf) {
      const link = document.createElement('a')
      link.href = category.pdf
      link.download = `${category.title} - Study Guide.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } else {
      alert(`Study guide for ${category.title} will be available soon`)
    }
  }

  const handleGoToRegistration = () => {
    onClose()
    setTimeout(() => {
      const element = document.getElementById('registration')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
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
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                  <p className="text-lg text-blue-600 font-semibold">{category.subtitle}</p>
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
              
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement.querySelector('.image-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="image-fallback bg-gray-200 h-48 flex items-center justify-center hidden">
                  <span className="text-gray-500">Category Image</span>
                </div>
              </div>
              
              <div className="text-gray-600 mb-6 leading-relaxed whitespace-pre-line">
                {category.details}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleDownloadGuide}
                  className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Study Guide
                </button>
                <button
                  onClick={handleGoToRegistration}
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
                >
                  Go to Registration
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Competition Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore 7 Islamic and academic categories to showcase your talents in SCIL Olympiad 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.parentElement.querySelector('.image-fallback');
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="image-fallback bg-gray-200 h-48 flex items-center justify-center hidden">
                  <span className="text-gray-500">Image not found</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-1">
                  Learn More 
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CategoryModal
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  )
}

export default Categories