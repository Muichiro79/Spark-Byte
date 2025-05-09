import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaRocket } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const LandingPage = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true 
    });
  }, []);

  return (
    <div className="bg-slate-100 dark:bg-gray-900 min-h-screen w-full flex flex-col justify-between px-4 pb-4 overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto py-16" data-aos="fade-up">
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold text-sky-500 dark:text-cyan-400 mb-6">
            Welcome to IdeaPulse 🚀
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
            Unlock your creativity with fresh daily content ideas tailored to your niche. Effortless content creation made simple.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to="/login">
              <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <FaSignInAlt /> Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <FaUserPlus /> Sign Up
              </button>
            </Link>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="flex-1" data-aos="fade-down">
          <img 
            src="https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww" 
            alt="Creative content generation" 
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
{/* Features Section */}
<section className="py-20 bg-white dark:bg-gray-800 text-center" data-aos="fade-up">
  <h2 className="text-4xl font-semibold text-sky-500 dark:text-cyan-400 mb-12">
    Why Choose IdeaPulse?
  </h2>
  <div className="flex flex-wrap justify-center gap-12 max-w-6xl mx-auto">
    
    {/* Feature Card Template */}
    {[
      {
        img: "https://images.unsplash.com/photo-1678798694643-2b8fddcf900f?fm=jpg&q=60&w=3000",
        title: "Personalized Ideas",
        desc: "Daily ideas tailored for you to fuel your content strategy effortlessly."
      },
      {
        img: "https://images.unsplash.com/photo-1577327966244-999949c7e884?fm=jpg&q=60&w=3000",
        title: "Save Time",
        desc: "Focus on creating instead of stressing about what to post next."
      },
      {
        img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?fm=jpg&q=60&w=3000",
        title: "Super Easy",
        desc: "Intuitive and clean UI so you can navigate and generate ideas like a boss."
      }
    ].map((feature, idx) => (
      <div
        key={idx}
        className="max-w-xs bg-white dark:bg-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group cursor-pointer"
        data-aos="fade-up"
      >
        <div className="overflow-hidden">
          <img 
            src={feature.img} 
            alt={feature.title} 
            className="rounded-t-2xl w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-sky-500 dark:group-hover:text-cyan-400 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-gray-400">
            {feature.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>


      {/* Call to Action Section */}
      <section className="bg-sky-500 dark:bg-slate-600 py-20 text-center flex flex-col items-center justify-center" data-aos="zoom-in">
  <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
  <p className="text-lg text-white mb-8">Join hundreds of creators growing faster with IdeaPulse 🚀</p>
  <Link to="/homepage/home">
    <button className="bg-white text-sky-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-xl flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <FaRocket /> Start Your Free Trial
    </button>
  </Link>
</section>


      {/* Footer */}
      <footer className="text-slate-600 dark:text-gray-400 text-sm text-center py-6">
        <p>© 2025 IdeaPulse. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default LandingPage;
