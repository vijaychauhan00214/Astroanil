import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, Users, MessageSquare, Send, CheckCircle } from 'lucide-react';

export const Consultation = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    consultationType: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        timeOfBirth: '',
        placeOfBirth: '',
        consultationType: '',
        description: '',
      });
    }, 3000);
  };

  const consultationTypes = [
    'General Consultation',
    'Career Guidance',
    'Love & Relationships',
    'Health Prediction',
    'Financial Planning',
    'Vastu Consultation',
    'Numerology Reading',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MessageSquare className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-4">
            {t('consultation')}
          </h1>
          <p className="text-xl text-amber-100">
            Book your personal consultation session with our expert astrologer
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-amber-100">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">
                Share Your Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('fullName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('email')} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t('phone')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Date of Birth *</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>Time of Birth (24hrs format) *</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.timeOfBirth}
                      onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>Place of Birth *</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.placeOfBirth}
                      onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                      className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                      placeholder="City/Town of birth"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Type of Consultation *
                  </label>
                  <select
                    required
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700"
                  >
                    <option value="">Select consultation type</option>
                    {consultationTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Describe Your Concerns / Questions
                  </label>
                  <textarea
                    rows={6}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all text-gray-700 resize-none"
                    placeholder="Tell us about your concerns, specific questions, or areas you'd like guidance on..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group hover:scale-105"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-all" />
                  <span>Book Consultation</span>
                </button>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3 animate-in fade-in">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900">Consultation Request Submitted!</p>
                      <p className="text-sm text-green-700">We'll contact you within 24 hours to confirm your booking.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Session Duration</span>
                </h3>
                <p className="text-gray-600 mb-4">45-60 minutes comprehensive consultation</p>
                <p className="text-2xl font-bold text-amber-600">₹2,500 - ₹5,000</p>
                <p className="text-sm text-gray-500 mt-2">Based on consultation type</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-amber-100">
                <h3 className="text-xl font-bold text-amber-900 mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Detailed birth chart analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Personalized predictions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Remedial measures</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Gemstone recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                    <span className="text-sm text-gray-600">Written report provided</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Available Times</h3>
                <p className="text-sm mb-4 opacity-90">Book your preferred time slot</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold">Monday - Friday</p>
                  <p className="text-sm opacity-90">10:00 AM - 7:00 PM</p>
                  <p className="text-sm font-semibold mt-4">Saturday & Sunday</p>
                  <p className="text-sm opacity-90">11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
