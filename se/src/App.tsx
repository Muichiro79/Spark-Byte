import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/Landingpage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import HomePages from './Pages/home/HomePages';
import { useState, useEffect } from 'react';
import Loader from './component/Loader';



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some loading time (e.g., fetching data, etc.)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (or when your data is loaded)
    }, 2000); // Adjust the delay as needed

    // Cleanup timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* HomePage acts like a layout */}
        <Route path='/homepage/*' element={<HomePages />}>
          {/* Add more child routes here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
