import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { AstrologyCourse } from './pages/AstrologyCourse';
import { Vastu } from './pages/Vastu';
import { Numerology } from './pages/Numerology';
import { Consultation } from './pages/Consultation';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') return <Home onNavigate={setCurrentPage} />;
    if (currentPage === 'astrology-course') return <AstrologyCourse />;
    if (currentPage === 'vastu') return <Vastu />;
    if (currentPage === 'numerology') return <Numerology />;
    if (currentPage === 'consultation') return <Consultation />;
    return <Home onNavigate={setCurrentPage} />;
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <div className="flex-grow">
          {renderPage()}
        </div>
        <Footer onNavigate={setCurrentPage} />
      </div>
    </LanguageProvider>
  );
}

export default App;
