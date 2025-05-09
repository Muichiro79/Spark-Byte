import { motion } from 'framer-motion';

export const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-200 dark:from-slate-800 dark:to-slate-900 flex flex-col items-center justify-center px-4 py-16">
      
      {/* Profile Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-lg flex flex-col items-center"
      >
        {/* Avatar */}
        <motion.img 
          whileHover={{ scale: 1.1 }}
          src="https://i.pravatar.cc/150?img=45" 
          alt="User Avatar" 
          className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-sky-400"
        />

        {/* Name */}
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white mb-1 text-center">
          Alex Blaze
        </h1>

        {/* Selected Niche */}
        <p className="text-sky-500 dark:text-cyan-400 mb-6 text-lg font-semibold text-center">
          🎯 Content Niche: Tech + Gaming
        </p>

        {/* Stats */}
        <div className="flex gap-10 mb-10 text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">83</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Ideas Generated</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-slate-800 dark:text-white">5</span>
            <span className="text-sm text-slate-500 dark:text-slate-400">Saved Ideas</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-md w-full md:w-auto"
          >
            ✨ Update My Niche
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-slate-700 text-sky-500 dark:text-cyan-400 font-semibold py-3 px-6 rounded-full border border-sky-400 dark:border-cyan-400 transition-all shadow-md w-full md:w-auto"
          >
            ⚙️ Edit Profile
          </motion.button>
        </div>

      </motion.div>

    </div>
  )
}
