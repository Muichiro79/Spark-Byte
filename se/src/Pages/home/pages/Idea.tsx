import  { useState } from 'react'
import { motion } from 'framer-motion'

const ideaBank: Record<string, string[]> = {
  Tech: [
    "Top 5 coding hacks you wish you knew earlier 💻",
    "AI tools you should be using in 2025 🤖",
    "How I built my first app with zero experience 🔥",
  ],
  Fitness: [
    "My 30-day fitness transformation 🏋️‍♂️",
    "5 healthy habits that changed my life 🌱",
    "How to stay motivated during lazy days 💤",
  ],
  Fashion: [
    "Spring 2025 must-have outfits 👗",
    "How to find your personal style ✨",
    "Affordable fashion hacks for a luxe look 💎",
  ],
  Gaming: [
    "Top underrated games you should play 🎮",
    "Building my dream gaming setup 🎧",
    "My best clutch moments (with clips!) 🔥",
  ],
  Education: [
    "Study hacks for better grades 📚",
    "How I balance work, life, and study 🧠",
    "Learning a new skill every month 🚀",
  ],
  Travel: [
    "Hidden travel gems you need to visit ✈️",
    "How to travel smart and cheap 🛫",
    "Storytime: My craziest trip ever 🌍",
  ],
};

const Idea = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tech')
  const [ideas, setIdeas] = useState<string[]>([])
  const [savedIdeas, setSavedIdeas] = useState<string[]>([])

  const fetchIdeas = () => {
    setIdeas(ideaBank[selectedCategory] || [])
  }

  const saveIdea = (idea: string) => {
    if (!savedIdeas.includes(idea)) {
      setSavedIdeas(prev => [...prev, idea])
    }
  }

  return (
    <div className="min-h-screen py-10 px-6 bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-slate-800 dark:text-white mb-10">
        🎯 Get Your Next Big Idea
      </h1>

      {/* Category Selector */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-4 rounded-2xl bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          {Object.keys(ideaBank).map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>

        {/* Fetch Button */}
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={fetchIdeas}
          className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
        >
          🔥 Get Ideas
        </motion.button>
      </div>

      {/* Idea List */}
      <div className="grid md:grid-cols-2 gap-8">
        {ideas.map((idea, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <p className="text-slate-700 dark:text-slate-300 mb-4">{idea}</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => saveIdea(idea)}
              className="self-end bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-5 rounded-full font-semibold"
            >
              ⭐ Save
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Saved Ideas Section */}
      {savedIdeas.length > 0 && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">⭐ Your Saved Ideas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {savedIdeas.map((idea, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-700 p-4 rounded-xl shadow-md">
                <p className="text-slate-700 dark:text-slate-200">{idea}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  )
}

export default Idea
