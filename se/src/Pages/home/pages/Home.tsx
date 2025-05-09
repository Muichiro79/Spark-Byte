import { motion } from 'framer-motion'; // ✨ ADD THIS!

export const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-sky-400 to-sky-600 dark:from-cyan-600 dark:to-cyan-800 text-white rounded-3xl p-12 mb-16 shadow-xl overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=3000&q=80" 
            alt="Inspiration" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Unlock Your Creative Superpowers 🚀</h1>
            <p className="text-xl md:text-2xl mb-8">Fresh ideas. Big moves. Unstoppable energy — all in one vibe.</p>

            {/* 🔥 Motion Button */}
            <motion.button 
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-slate-100 active:scale-95 transition-all shadow-md"
            >
              🚀 Explore New Ideas
            </motion.button>
          </div>
        </section>

        {/* Featured Content */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://media.istockphoto.com/id/2181938963/photo/businessman-in-a-suit-pressing-a-generate-button-on-a-smartphone-symbolizing-content-creation.webp?a=1&b=1&s=612x612&w=0&k=20&c=MldLaPTxo9omXBMaLAVpdTLUSlyFl25PFDSAbTzq004="
              alt="Daily Ideas"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Daily Prompts</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Wake up inspired. Get fresh, AI-powered prompts personalized to your creative journey.
              </p>

              {/* 🔥 Motion Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
              >
                🔥 Get Today's Prompt
              </motion.button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://media.istockphoto.com/id/2152368912/photo/film-editor-and-workflows-diagram-in-post-production-process-creativity-for-storytelling-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=unVAhW79eKPDZrLFIahu4hwKAe5aQk1IQxe9_Z4TYh8="
              alt="Trending Insights"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Trending Insights</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Stay ahead of trends before they pop. Analyze, create, dominate.
              </p>

              {/* 🔥 Motion Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
              >
                📈 See What's Hot
              </motion.button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?fit=crop&w=800&q=80"
              alt="Boost Creativity"
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">Mindset Boosters</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Fuel your mind. Build unstoppable habits that turn dreams into reality.
              </p>

              {/* 🔥 Motion Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
              >
                💬 Start Building Habits
              </motion.button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-white text-center">Level Up Your Mindset 🧠</h2>
          <div className="flex justify-center">
            <iframe 
              width="800" 
              height="450" 
              src="https://www.youtube.com/embed/ZXsQAXx_ao0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="rounded-3xl shadow-2xl"
            ></iframe>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-sky-500 to-blue-600 dark:from-slate-700 dark:to-slate-800 rounded-3xl py-20 flex flex-col items-center justify-center text-white shadow-2xl">
          <h2 className="text-4xl py-3 px-3 font-extrabold mb-6">Stay Consistent, Stay Winning 🏆</h2>
          <p className="text-2xl mb-8 text-center px-4 max-w-2xl">Plan, create, and post with confidence. Your future self is already cheering for you.</p>

          {/* 🔥 Motion Button */}
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-sky-600 font-bold py-4 px-10 rounded-full hover:bg-slate-100 active:scale-95 transition-all shadow-lg"
          >
            🗓️ Plan My Next Move
          </motion.button>
        </section>

      </div>
    </>
  )
};
