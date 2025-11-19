import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { BookOpen, Clock, DollarSign, CheckCircle, Send } from 'lucide-react';

export const AstrologyCourse = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ fullName: '', email: '', phone: '', course: '', message: '' });
  };

  const topics = [
    t('topic1'),
    t('topic2'),
    t('topic3'),
    t('topic4'),
    t('topic5'),
    t('topic6'),
  ];

  const courses = [
    'Basic Course',
    'Advanced Course',
    'Complete Package',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('courseTitle')}
          </h1>
          <p className="text-xl text-amber-100">
            {t('courseSubtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-amber-900">
                  {t('whatYouLearn')}
                </h2>
              </div>
              <div className="space-y-4">
                {topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-amber-50 rounded-lg hover:bg-amber-100 transition-colors"
                  >
                    <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{topic}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-900">
                    {t('courseDuration')}
                  </h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-lg font-semibold">{t('duration')}</p>
                  <p className="text-gray-600">{t('schedule')}</p>
                  <p className="text-gray-600">{t('mode')}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-amber-900">
                    {t('courseFees')}
                  </h2>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-lg">{t('basicFee')}</p>
                  <p className="text-gray-700 text-lg">{t('advancedFee')}</p>
                  <p className="text-gray-700 text-lg font-semibold text-amber-700">{t('completeFee')}</p>
                  <p className="text-sm text-gray-500 mt-4 italic">{t('installment')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-amber-100 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-3 rounded-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-amber-900">
                  {t('enrollmentForm')}
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('fullName')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('courseInterest')}
                  </label>
                  <select
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="">{t('selectCourse')}</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {t('submitEnrollment')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
