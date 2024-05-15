import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import FarmSearch from './pages/FarmSearch';
import FarmInfo from './pages/FarmInfo';
import FarmGuide from './pages/FarmGuide';
import PlantMain from './pages/PlantMain';
import BugMain from './pages/BugMain';
import BugInfo from './pages/BugInfo';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Footer420 from './components/Footer/Footer420';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/FarmSearch" element={<FarmSearch />} />
        <Route path="/FarmInfo/:farmName" element={<FarmInfo />} />
        <Route path="/FarmGuide" element={<FarmGuide />} />
        <Route path="/PlantMain" element={<PlantMain />} />
        <Route path="/BugMain" element={<BugMain />} />
        <Route path="/BugInfo/:BugId/" element={<BugInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isMobile ? <Footer420 /> : <Footer />}
    </div>
  );
}

export default App;
