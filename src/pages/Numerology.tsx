import { useLanguage } from '../contexts/LanguageContext';
import { Hash, User, Briefcase, Heart, TrendingUp, Star, Sparkles, Award } from 'lucide-react';

export const Numerology = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: User,
      title: t('nameAnalysis'),
      description: t('nameAnalysisDesc'),
      color: 'from-amber-500 to-orange-600',
      features: ['Name Vibration Analysis', 'Personality Traits', 'Recommendations'],
    },
    {
      icon: Hash,
      title: t('birthDateAnalysis'),
      description: t('birthDateAnalysisDesc'),
      color: 'from-amber-600 to-orange-700',
      features: ['Life Path Number', 'Destiny Number', 'Soul Urge'],
    },
    {
      icon: Briefcase,
      title: t('businessNameNumerology'),
      description: t('businessNameDesc'),
      color: 'from-orange-500 to-amber-600',
      features: ['Business Growth', 'Success Numerology', 'Name Optimization'],
    },
    {
      icon: Heart,
      title: t('compatibilityAnalysis'),
      description: t('compatibilityDesc'),
      color: 'from-orange-600 to-amber-700',
      features: ['Relationship Analysis', 'Compatibility Score', 'Insights'],
    },
  ];

  const numberMeanings = [
    { number: 1, trait: 'Leadership', description: 'Initiative & Independence' },
    { number: 2, trait: 'Harmony', description: 'Balance & Cooperation' },
    { number: 3, trait: 'Creativity', description: 'Expression & Joy' },
    { number: 4, trait: 'Stability', description: 'Foundation & Security' },
    { number: 5, trait: 'Freedom', description: 'Adventure & Change' },
    { number: 6, trait: 'Nurturing', description: 'Care & Harmony' },
    { number: 7, trait: 'Wisdom', description: 'Spirituality & Truth' },
    { number: 8, trait: 'Power', description: 'Abundance & Success' },
    { number: 9, trait: 'Compassion', description: 'Humanitarianism' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('numerologyTitle')}
          </h1>
          <p className="text-xl text-amber-100">
            {t('numerologySubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-amber-100">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {t('numerologyIntro')}
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
            Understanding the Numbers
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Each number carries unique vibrations and meanings that influence your life
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {numberMeanings.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform inline-block">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-bold">{item.trait}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 font-semibold mb-3">{item.description}</p>
                  <ul className="space-y-2 text-sm text-gray-500">
                    <li>• Life Path Element</li>
                    <li>• Destiny Influence</li>
                    <li>• Personal Power</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
            Our Numerology Services
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Comprehensive numerological guidance tailored to your needs
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100 group hover:-translate-y-2"
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <Icon className="h-14 w-14 mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Certified Expertise</h3>
            <p className="text-amber-100">Professional numerologists with years of experience and proven track record</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg p-8 text-white">
            <Sparkles className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Personalized Insights</h3>
            <p className="text-orange-100">Customized numerology readings based on your unique birth date and name</p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg p-8 text-white">
            <TrendingUp className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Transformative Results</h3>
            <p className="text-amber-100">Actionable recommendations for personal growth and life success</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Unlock Your Numerological Destiny
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Discover what the numbers reveal about your past, present, and future potential
          </p>
          <button className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            {t('scheduleConsultation')}
          </button>
        </div>
      </div>
    </div>
  );
};
