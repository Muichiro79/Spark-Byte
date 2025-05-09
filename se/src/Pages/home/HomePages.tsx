// HomePages Component (Routing)
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import HomePage from './HomePage';
import Idea from './pages/Idea';
import { Profile } from './pages/Profile';
import Setting from './pages/Setting';

const HomePages = () => {
  return (
    <HomePage>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="idea" element={<Idea />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Setting />} />
      </Routes>
    </HomePage>
  );
};

export default HomePages;
