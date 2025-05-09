import  { useState } from 'react'
import { motion } from 'framer-motion'

const Setting = () => {
  const [username, setUsername] = useState('')  
  const [niche, setNiche] = useState('Tech')  
  const [notifications, setNotifications] = useState(true) 
  const [darkMode, setDarkMode] = useState(false)

  const handleSave = () => {
    // You can connect this to your backend later 🚀
    console.log('Saved Settings:', {
      username,
      niche,
      notifications,
      darkMode
    })
    alert('✅ Settings saved!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 py-16 flex justify-center">
      
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-10 w-11/12 md:w-2/3 lg:w-1/2">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-8 text-center">
          Settings ⚙️
        </h1>

        {/* Form Section */}
        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>

          {/* Username */}
          <div className="flex flex-col">
            <label className="text-slate-600 dark:text-slate-300 mb-2 font-medium">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username" 
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Niche Selection */}
          <div className="flex flex-col">
            <label className="text-slate-600 dark:text-slate-300 mb-2 font-medium">Select Your Niche</label>
            <select 
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option>Tech</option>
              <option>Fitness</option>
              <option>Fashion</option>
              <option>Gaming</option>
              <option>Education</option>
              <option>Travel</option>
            </select>
          </div>

          {/* Notification Toggle */}
          <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
            <span className="text-slate-800 dark:text-white font-medium">New Idea Alerts</span>
            <input 
              type="checkbox" 
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="toggle toggle-primary" 
            />
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-700 p-4 rounded-xl">
            <span className="text-slate-800 dark:text-white font-medium">Dark Mode</span>
            <input 
              type="checkbox" 
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="toggle toggle-primary" 
            />
          </div>

          {/* Save Changes Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-8 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-full transition-all"
          >
            💾 Save Changes
          </motion.button>

        </form>

      </div>
    </div>
  )
}

export default Setting
