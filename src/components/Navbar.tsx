import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown, Globe, Star, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    {
      label: t('astrologyCourse'),
      key: 'astrologyCourse',
      page: 'astrology-course',
    },
    {
      label: t('vastu'),
      key: 'vastu',
      page: 'vastu',
    },
    {
      label: t('numerology'),
      key: 'numerology',
      page: 'numerology',
    },
    {
      label: t('consultation'),
      key: 'consultation',
      page: 'consultation',
    },
  ];

  const handleMouseEnter = (key: string) => {
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleMobileNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 shadow-lg border-b border-amber-200 backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-2 rounded-lg shadow-lg group-hover:shadow-xl transition-shadow">
                <Star className="h-8 w-8 text-white" fill="white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                  Cosmic Wisdom
                </h1>
                <p className="text-xs text-amber-600 -mt-1">{t('expertCredentials').split('|')[0]}</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => onNavigate('home')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === 'home'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-amber-800 hover:bg-amber-100'
                }`}
              >
                {t('home')}
              </button>

              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.page)}
                  className="px-4 py-2 rounded-lg font-medium text-amber-800 hover:bg-amber-100 transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all border border-amber-200 hover:border-amber-400"
              >
                <Globe className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-amber-800 hidden sm:inline">{language === 'en' ? 'EN' : 'हिं'}</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-amber-100 transition-all"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-1">
                <button
                  onClick={() => handleMobileNavigation('home')}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    currentPage === 'home'
                      ? 'bg-amber-600 text-white'
                      : 'text-amber-800 hover:bg-amber-100'
                  }`}
                >
                  {t('home')}
                </button>

                {menuItems.map((item) => (
                  <button
                    key={item.key}
                    onClick={() => handleMobileNavigation(item.page)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                      currentPage === item.page
                        ? 'bg-amber-600 text-white'
                        : 'text-amber-800 hover:bg-amber-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
