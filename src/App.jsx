import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import TryPage from './pages/TryPage';
import RequestDemoModal from './components/RequestDemoModal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  // Backward compatibility adapter for child components that receive setActivePage
  const setActivePage = (page) => {
    if (page === 'try' || page === 'trynow') {
      navigate('/trynow');
    } else if (page === 'about') {
      navigate('/about');
    } else if (page === 'docs') {
      navigate('/docs');
    } else {
      navigate('/overview');
    }
  };

  const getActivePage = () => {
    const p = location.pathname;
    if (p === '/try' || p === '/trynow') return 'try';
    if (p === '/about') return 'about';
    if (p === '/docs') return 'docs';
    return 'home';
  };

  const activePage = getActivePage();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', background: '#FFFFFF' }}>
      <ScrollToTop />
      <Navbar activePage={activePage} setActivePage={setActivePage} openDemoModal={openDemoModal} />
      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="/overview" element={<HomePage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="/try" element={<TryPage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="/trynow" element={<TryPage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="/about" element={<AboutPage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="/docs" element={<DocsPage setActivePage={setActivePage} openDemoModal={openDemoModal} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer activePage={activePage} setActivePage={setActivePage} openDemoModal={openDemoModal} />
      <RequestDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
