import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const quickLinks = [
    { label: t('home'), page: 'home' },
    { label: t('astrologyCourse'), page: 'astrology-course' },
    { label: t('vastu'), page: 'vastu' },
    { label: t('numerology'), page: 'numerology' },
    { label: t('consultation'), page: 'consultation' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                Cosmic Wisdom
              </h3>
              <p className="text-sm text-gray-400">
                {t('expertCredentials').split('|')[0]}
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Guiding thousands towards clarity, prosperity, and spiritual growth through ancient wisdom and modern insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Information</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => alert('Privacy Policy content')}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Terms & Conditions content')}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert('Refund Policy content')}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm hover:translate-x-1 duration-200"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">Subscribe to get exclusive updates and insights</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 outline-none transition-all text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all text-sm"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-sm text-green-400 mt-2">Thank you for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center space-x-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <Mail className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white font-semibold">astrology@cosmicwisdom.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <Phone className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white font-semibold">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-amber-500/10 p-3 rounded-lg">
                <MapPin className="h-6 w-6 text-amber-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="text-white font-semibold">New Delhi, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/50 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; 2024 Cosmic Wisdom. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center space-x-1 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for spiritual seekers</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
