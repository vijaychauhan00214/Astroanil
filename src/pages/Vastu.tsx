import { useLanguage } from '../contexts/LanguageContext';
import { Home, Building2, Compass, Sparkles, CheckCircle, Star, Award, Zap } from 'lucide-react';

export const Vastu = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('residentialVastu'),
      description: t('residentialDesc'),
      color: 'from-amber-500 to-orange-600',
      features: ['Room Placement', 'Direction Analysis', 'Energy Flow'],
    },
    {
      icon: Building2,
      title: t('commercialVastu'),
      description: t('commercialDesc'),
      color: 'from-amber-600 to-orange-700',
      features: ['Office Layout', 'Productivity', 'Financial Growth'],
    },
    {
      icon: Sparkles,
      title: t('vastuRemedies'),
      description: t('vastuRemediesDesc'),
      color: 'from-orange-500 to-amber-600',
      features: ['Practical Solutions', 'Cost-Effective', 'No Changes Needed'],
    },
  ];

  const principles = [
    { number: '1', title: 'Five Elements', desc: 'Earth, Water, Fire, Air, Space harmony' },
    { number: '2', title: 'Directions', desc: 'Optimal placement & energy flow' },
    { number: '3', title: 'Geometry', desc: 'Proper room shapes & layouts' },
    { number: '4', title: 'Materials', desc: 'Natural materials for positivity' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Compass className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('vastuTitle')}
          </h1>
          <p className="text-xl text-amber-100">
            {t('vastuSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border border-amber-100">
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {t('vastuIntro')}
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
            Vastu Principles
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Ancient architectural science for harmonious living
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-amber-100 group hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 text-white text-center">
                  <div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                    {principle.number}
                  </div>
                  <h3 className="text-xl font-bold">{principle.title}</h3>
                </div>
                <div className="p-6 text-center">
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent">
          {t('ourServices')}
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Comprehensive Vastu solutions for your space
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
            <CheckCircle className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">{t('onSiteConsultation')}</h3>
            <p className="text-amber-100 text-lg leading-relaxed">
              Our expert visits your property for comprehensive analysis and provides detailed recommendations with practical remedies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg p-8 text-white">
            <Zap className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">{t('remoteConsultation')}</h3>
            <p className="text-orange-100 text-lg leading-relaxed">
              Submit your floor plans and get professional Vastu analysis from anywhere in the world with detailed reports.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-8 text-white">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Expert Guidance</h3>
            <p className="text-amber-100">20+ years of experience in traditional Vastu Shastra</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl shadow-lg p-8 text-white">
            <Sparkles className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Proven Results</h3>
            <p className="text-orange-100">Transform your space for prosperity and well-being</p>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-orange-700 rounded-xl shadow-lg p-8 text-white">
            <Home className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold mb-3">Complete Solutions</h3>
            <p className="text-amber-100">From analysis to implementation with support</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Harmonize Your Space with Vastu Shastra
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Transform your living or working environment into a sanctuary of positive energy and prosperity
          </p>
          <button className="bg-white text-amber-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            {t('scheduleConsultation')}
          </button>
        </div>
      </div>
    </div>
  );
};
