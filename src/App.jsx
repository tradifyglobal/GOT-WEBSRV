import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useLenisScroll } from './hooks/useLenisScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import ContactUsPage from './pages/ContactUsPage';
import CartDrawer from './components/CartDrawer';
import ConsultationModal from './components/ConsultationModal';

function AppContent() {
  // Initialize Lenis smooth scroll
  useLenisScroll();

  const [cartOpen, setCartOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#faf8f5] text-[#2c2416] selection:bg-[#b08c4f] selection:text-white font-sans antialiased flex flex-col justify-between">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* Top Navbar */}
      <Navbar
        onOpenCart={() => setCartOpen(true)}
        onOpenModal={() => setModalOpen(true)}
      />

      {/* Main Routed Content */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage onOpenModal={() => setModalOpen(true)} />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />

      {/* Consultation / Assessment Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
