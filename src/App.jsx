import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Visionary from './components/Visionary';
import About from './components/About';
import Departments from './components/Departments';
import Progress from './components/Progress';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import StatsStrip from './components/StatsStrip';
import SupportInvite from './components/SupportInvite';

// Code-split the secondary pages so the homepage bundle stays lean
const Programs = lazy(() => import('./pages/Programs'));
const Admissions = lazy(() => import('./pages/Admissions'));
const News = lazy(() => import('./pages/News'));
const NotFound = lazy(() => import('./components/NotFound'));

// Assets the first paint actually depends on — the loader hides until these are ready
const CRITICAL_ASSETS = [
  '/images/logo.png',
  '/images/logo.svg',
  '/images/school-3d-render.jpeg',
];

const preloadImage = (src) =>
  new Promise((resolve) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = resolve; // a missing asset shouldn't block the site
    img.src = src;
  });

const MainLayout = () => (
  <>
    <main className="flex-grow">
      <Hero />
      <StatsStrip />
      <About />
      <Departments />
      <Visionary />
      <Progress />
      <SupportInvite />
    </main>
  </>
);

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { i18n } = useTranslation();

  const currentLang = i18n.language || 'ar';
  const isRtl = currentLang.startsWith('ar');

  // Keep <html dir/lang> in sync with the active language. Tailwind's rtl:/ltr:
  // variants match on ancestors, so the hardcoded dir="rtl" in index.html made
  // RTL rules apply even in English (e.g. paragraphs hugging the right).
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang.split('-')[0];
  }, [isRtl, currentLang]);

  useEffect(() => {
    // REAL LOADING: wait for critical images + webfonts, with a hard cap so a
    // slow network can never trap users on the loader screen.
    const loadInitialData = async () => {
      const assets = Promise.all([
        ...CRITICAL_ASSETS.map(preloadImage),
        document.fonts?.ready ?? Promise.resolve(),
      ]);
      const minDisplay = new Promise((r) => setTimeout(r, 300)); // avoid a jarring flash
      const hardCap = new Promise((r) => setTimeout(r, 4000));

      try {
        await Promise.race([Promise.all([assets, minDisplay]), hardCap]);
      } finally {
        setIsLoading(false);
      }
    };

    loadInitialData();
  }, []); // Empty dependency array ensures this only runs on the initial site load

  return (
    <>
      {/* Loader shows until the critical assets above have loaded */}
      {isLoading && <Loader />}

      <div className={`min-h-screen flex flex-col relative transition-opacity duration-700 ease-in-out ${isRtl ? 'text-start' : 'text-left'} ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`} dir={isRtl ? "rtl" : "ltr"}>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<><MainLayout /><Footer /></>} />
            <Route path="/programs" element={<><Programs /><Footer /></>} />
            <Route path="/admissions" element={<><Admissions /><Footer /></>} />
            <Route path="/news" element={<><News /><Footer /></>} />
            <Route path="*" element={<><NotFound /><Footer /></>} />
          </Routes>
        </Suspense>
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
