import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Visionary from './components/Visionary';
import About from './components/About';
import Departments from './components/Departments';
import Progress from './components/Progress';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Programs from './pages/Programs';
import Admissions from './pages/Admissions';
import News from './pages/News';

const MainLayout = () => (
  <>
    <main className="flex-grow">
      <Hero />
      <Visionary />
      <About />
      <Departments />
      <Progress />
    </main>
  </>
);

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { i18n } = useTranslation();
  
  const currentLang = i18n.language || 'ar';
  const isRtl = currentLang.startsWith('ar');

  useEffect(() => {
    // Only show loader on the initial visit or full page reload
    // For navigation between pages, we don't need the full 4-second loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}

      <div className={`min-h-screen flex flex-col relative transition-opacity duration-700 ${isRtl ? 'text-start' : 'text-left'} ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`} dir={isRtl ? "rtl" : "ltr"}>
        {/* !isLoading && <CustomCursor /> */}
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<><MainLayout /><Footer /></>} />
          <Route path="/programs" element={<><Programs /><Footer /></>} />
          <Route path="/admissions" element={<><Admissions /><Footer /></>} />
          <Route path="/news" element={<><News /><Footer /></>} />
          <Route path="*" element={<><NotFound /><Footer /></>} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <SmoothScroll>
      <Router>
        <AppContent />
      </Router>
    </SmoothScroll>
  );
}

export default App;
