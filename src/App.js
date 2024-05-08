import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import FarmMain from './pages/FarmMain';
import FarmSearch from './pages/FarmSearch';
import FarmInfo from './pages/FarmInfo';
import FarmGuide from './pages/FarmGuide';
import PlantMain from './pages/PlantMain';
import PlantInfo from './pages/PlantInfo';
import BugMain from './pages/BugMain';
import BugInfo from './pages/BugInfo';
import NotFound from './pages/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import Footer from './components/Footer/Footer420';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />ㅌ
        <Route path="/FarmMain" element={<FarmMain />} />
        <Route path="/FarmSearch" element={<FarmSearch />} />
        <Route path="/FarmInfo" element={<FarmInfo />} />
        <Route path="/FarmGuide" element={<FarmGuide />} />
        <Route path="/PlantMain" element={<PlantMain />} />
        <Route path="/PlantInfo" element={<PlantInfo />} />
        <Route path="/BugMain" element={<BugMain />} />
        <Route path="/BugInfo" element={<BugInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
