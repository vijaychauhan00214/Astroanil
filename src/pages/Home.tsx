import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Users, BookOpen, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home = ({ onNavigate }: HomeProps) => {
  const { t } = useLanguage();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: bioRef, isVisible: bioVisible } = useScrollAnimation();
  const { elementRef: eventsRef, isVisible: eventsVisible } = useScrollAnimation();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const upcomingEvents = [
    {
      title: t('event1Title'),
      date: t('event1Date'),
      description: t('event1Desc'),
      icon: BookOpen,
    },
    {
      title: t('event2Title'),
      date: t('event2Date'),
      description: t('event2Desc'),
      icon: Users,
    },
    {
      title: t('event3Title'),
      date: t('event3Date'),
      description: t('event3Desc'),
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {t('welcomeTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              {t('welcomeSubtitle')}
            </p>
          </div>
        </div>
      </div>

      <div ref={bioRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20 ${bioVisible ? 'scroll-fade-in' : ''}`}>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-96 md:h-auto overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/007/425/490/small/woman-holding-a-astrology-book-astrological-wheel-projection-choose-a-zodiac-sign-astrology-esoteric-concept-photo.jpg"
                  alt="Expert Astrologer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                {t('expertBioTitle')}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t('expertBio')}
              </p>
              <div className="flex flex-wrap gap-3">
                {t('expertCredentials').split('|').map((credential, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 rounded-full text-sm font-semibold border border-amber-200"
                  >
                    {credential.trim()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={eventsRef} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${eventsVisible ? 'scroll-fade-in' : ''}`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent mb-4">
            {t('comingSoonTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('comingSoonSubtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100 group hover:-translate-y-2 ${eventsVisible ? 'scroll-scale-in' : ''}`}
                style={eventsVisible ? { animationDelay: `${index * 0.15}s` } : {}}
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="h-10 w-10" />
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-amber-100 font-medium">{event.date}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group-hover:space-x-3">
                    <span>{t('registerNow')}</span>
                    <ArrowRight className="h-5 w-5 transition-all" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={ctaRef} className={`bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-16 ${ctaVisible ? 'scroll-fade-in' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('getStarted')}
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            {t('scheduleConsultation')}
          </p>
          <button
            onClick={() => onNavigate('consultation')}
            className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105">
            {t('bookConsultation')}
          </button>
        </div>
      </div>
    </div>
  );
};
