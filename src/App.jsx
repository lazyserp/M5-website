import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import RequestDemoModal from './components/RequestDemoModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', background: '#FFFFFF' }}>
      <Navbar activePage={activePage} setActivePage={setActivePage} openDemoModal={openDemoModal} />
      <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
        {activePage === 'about' ? (
          <AboutPage setActivePage={setActivePage} openDemoModal={openDemoModal} />
        ) : (
          <HomePage setActivePage={setActivePage} openDemoModal={openDemoModal} />
        )}
      </div>
      <Footer activePage={activePage} setActivePage={setActivePage} openDemoModal={openDemoModal} />
      <RequestDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
