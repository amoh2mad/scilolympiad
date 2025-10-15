import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categoriesData = [
  {
    id: 1,
    title: "The Sweetness of Quran",
    subtitle: "Qiraat | حالوة القرآن",
    description: "Showcase the beauty of Quranic recitation with precision, accuracy and rhythm.",
    image: "/images/categories/qiraat.png",
    pdf: "/guides/qiraat-guide.pdf",
    details: `The Qiraat category will showcase the beauty of Quranic recitation, a sacred art in Islam. Delegates will recite verses from the Quran, capturing the rhythmic cadence and heartfelt spirituality of each line. This category emphasizes the profound connection between the art of recitation and the meanings of the Quranic verses, allowing listeners to experience the divine message through soulful expressions.

Guidelines:
- Each delegate will recite a passage of their own choice
- Time limit: 2-3 minutes
- Emphasis on precision, accuracy and rhythm in Quranic recitation

Truly, the skill of precision, accuracy and rhythm in Quranic recitation renders it the most true and wondrous form of remembrance.`
  },
  {
    id: 2,
    title: "Soulful Voices",
    subtitle: "Hamd/Nasheed/Naat | خيوط البالغة",
    description: "Express devotion through beautiful Islamic songs and spiritual praises.",
    image: "/images/categories/naat.png",
    pdf: "/guides/hamd-naat-guide.pdf",
    details: `In the Hamd, Nasheed, and Naat category, participants are invited to express their devotion and creativity through melodious recitations that reflect faith, gratitude, and spiritual love. This segment celebrates the harmony of voice and emotion, where participants convey deep reverence and beauty through meaningful verses.

Guidelines:
- Content: Must reflect faith, gratitude, and devotion. No elements of shirk or content contradicting Islamic beliefs.
- Originality: Should not be based on or adapted from existing songs or musical compositions.
- Duration: Must not exceed 3 minutes.
- Presentation: Clear pronunciation, expressive delivery, and respectful manner are essential.

Note: A list of acceptable and suggested Hamds, Naats, and poems will be uploaded in the Study Guides section. If a delegate wishes to present a different piece, it must first be approved by the SCIL Olympiad Team.`
  },
  {
    id: 3,
    title: "Walk of Wisdom",
    subtitle: "Islamic Quiz | سفِربصيرت",
    description: "Test your knowledge of Islamic heritage, history, and developments.",
    image: "/images/categories/quiz.png",
    pdf: "/guides/islamic-quiz-guide.pdf",
    details: `The Islamic Quiz category is designed to encourage learning and enthusiasm for Islamic heritage through engaging questions and challenges. It will test participants' knowledge of Makki/Madni life of our beloved Prophet (SAW) and his noble companions.

Syllabus:
- Seerah - The Radiant Lamp, published by SCIL Hikmah Cell
- General Islamic knowledge according to school syllabus

Guidelines:
- Each team should consist of 2-3 members
- Relevant excerpts from The Radiant Lamp will be uploaded as PDF (Makkan Period & Madni Period till Battle of Badr)
- Results and awards compiled separately for each age category
- Mixed age group teams will be evaluated according to the older age category

This interactive segment is an exciting opportunity for participants to deepen their understanding of Islam's rich legacy.`
  },
  {
    id: 4,
    title: "Radiant Realms",
    subtitle: "Writing | زوِرقلم",
    description: "Compose thoughtful articles and essays on Islamic culture, values and vision.",
    image: "/images/categories/writing.png",
    pdf: "/guides/writing-guide.pdf",
    details: `In the content writing category, delegates are invited to compose thoughtful articles and essays on topics related to our culture, values and collective vision - in both English and Urdu. Writers will explore subjects such as the current World conflicts and future of its youth.

Guidelines:
- Languages: English and Urdu
- Age Categories: Grades 6-8, Under 17 (O levels/Matriculation), and Open (A levels/Intermediate and Above)
- Duration: 50 minutes
- Format: Extempore writing on topic given at start of event
- Style: Narrative style required
- Participation: Each delegate can choose only one language and one category (Serious or Humorous)`
  },
  {
    id: 5,
    title: "Echoes of Enlightenment (Girls Only)",
    subtitle: "Parliamentary Debates | صدائےعرفان",
    description: "Participate in British Parliamentary style debates on contemporary issues.",
    image: "/images/categories/parlimentary.png",
    pdf: "/guides/debates-guide.pdf",
    details: `Parliamentary debate is a formal discussion between two sides: Proposition (supports the motion) and Opposition (argues against it). This category is exclusively for Girls participants.

Debate Structure:
- Main speeches: 8 minutes
- Reply speeches: 4 minutes
- Combination of prepared and impromptu debates

Competition Schedule:
- Day 1 & 2: 4 rounds total
  - Round 1: Prepared debate (teams research in advance)
  - Rounds 2-4: Impromptu debates (motions given shortly before)
- Day 3: Semi-finals and Grand finals

Judging Criteria: Content, style, and strategy. Top teams qualify for octo-finals leading to championship.`
  },
  {
    id: 6,
    title: "Strings of Eloquence",
    subtitle: "Poetry Recitation | نغمۂگل",
    description: "Celebrate the rich tradition of poetry in Islam, blending spirituality with eloquence.",
    image: "/images/categories/poetry.png",
    pdf: "/guides/poetry-recitation-guide.pdf",
    details: `The poetry recitation category will celebrate the rich tradition of poetry in Islam, blending spirituality with eloquence. Delegates will recite verses from renowned poets as well as original works, celebrating themes of faith, devotion, and reflection.

Guidelines:
- Languages: English and Urdu
- Categories: Separate categories for Serious and Humorous poetry
- Duration: 2-3 minutes per recitation
- Format: One round competition
- Selection: Poems will be uploaded in Study Guides section
- Participation: Each delegate can choose only one language and one category

Results and awards will be compiled separately for each age category.`
  },
  {
    id: 7,
    title: "Sacred Strokes",
    subtitle: "Art Gallery | قوِس قزح",
    description: "Express Islamic teachings through calligraphy and still life painting.",
    image: "/images/categories/art.png",
    pdf: "/guides/art-gallery-guide.pdf",
    details: `This themed exhibition highlights the elegance and depth of Islamic teachings and culture through the expressive arts of calligraphy and still life painting.

Guidelines:
- Technique: Calligraphy OR Still Life
- Medium: Acrylic painting & Sketching (Still Life)
- Canvas Size: 16" x 20"
- Schedule: Setup at 9:30 AM, painting 10:00 AM - 3:00 PM

Requirements:
- Delegates must bring their own easels, palettes, acrylic paints, and canvas/card paper
- For calligraphy: delegates may bring images of calligraphy they want to paint
- For still life: objects will be provided by SCIL
- Arabic script must be used respectfully

The exhibition showcases timeless beauty of traditional calligraphy and reflective charm of still life art.`
  },
  {
    id: 8,
    title: "Model United Nations",
    subtitle: "MUN (Boys Only)",
    description: "Engage in diplomatic discussions and represent countries in UN-style debates.",
    image: "/images/categories/mun.png",
    pdf: "/guides/mun-guide.pdf",
    details: `Details for Model United Nations will be announced soon.

Category Exclusively for Boys Participants

Model United Nations challenges participants to engage in diplomatic discussions, develop public speaking skills, and understand global issues from multiple perspectives through UN-style committee sessions.

Please check back later for complete guidelines and competition details.`
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
            Explore 8 Islamic and academic categories to showcase your talents in SCIL Olympiad 2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesData.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="h-40 overflow-hidden">
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
                <div className="image-fallback bg-gradient-to-br from-blue-500 to-purple-600 h-40 flex items-center justify-center hidden">
                  <span className="text-white font-semibold text-center px-2">{category.title}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {category.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-2">
                  {category.subtitle}
                </p>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {category.description}
                </p>
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors duration-200 flex items-center gap-1">
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