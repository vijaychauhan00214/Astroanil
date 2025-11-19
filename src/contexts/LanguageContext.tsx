import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    home: 'Home',
    astrologyCourse: 'Astrology Course',
    vastu: 'Vastu',
    numerology: 'Numerology',
    consultation: 'Consultation',

    beginnerCourse: 'Beginner Course',
    advancedCourse: 'Advanced Course',
    onlineClasses: 'Online Classes',
    certification: 'Certification',

    vastuHome: 'Vastu for Home',
    vastuOffice: 'Vastu for Office',
    vastuConsultation: 'Vastu Consultation',

    basicNumerology: 'Basic Numerology',
    nameCorrectionNumbers: 'Name Correction',
    businessNumerology: 'Business Numerology',

    bookConsultation: 'Book Consultation',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',

    welcomeTitle: 'Welcome to the World of Vedic Astrology',
    welcomeSubtitle: 'Discover Your Destiny Through Ancient Wisdom',
    aboutExpert: 'About Our Expert',
    expertBioTitle: 'Master Astrologer & Spiritual Guide',
    expertBio: 'With over 20 years of experience in Vedic Astrology, Vastu Shastra, and Numerology, our expert has guided thousands of individuals towards clarity, prosperity, and spiritual growth. Trained in traditional gurukul system and holding advanced certifications in multiple astrological sciences, our expert combines ancient wisdom with modern insights to provide accurate predictions and effective remedies.',
    expertCredentials: 'Certified Vedic Astrologer | Vastu Expert | Numerology Specialist',

    comingSoonTitle: 'Upcoming Courses & Events',
    comingSoonSubtitle: 'Join our next batch and begin your journey into cosmic wisdom',

    event1Title: 'Advanced Vedic Astrology Masterclass',
    event1Date: 'Starting: January 15, 2026',
    event1Desc: 'Deep dive into predictive astrology, dashas, and transit analysis',

    event2Title: 'Vastu Shastra Weekend Workshop',
    event2Date: 'February 10-11, 2026',
    event2Desc: 'Learn practical Vastu principles for home and workplace',

    event3Title: 'Numerology Practitioner Course',
    event3Date: 'March 1, 2026',
    event3Desc: 'Complete certification program in Chaldean and Pythagorean numerology',

    registerNow: 'Register Now',
    learnMore: 'Learn More',

    courseTitle: 'Astrology Course',
    courseSubtitle: 'Master the Ancient Science of Vedic Astrology',
    whatYouLearn: 'What You Will Learn',
    courseDuration: 'Course Duration',
    courseFees: 'Course Fees',
    enrollmentForm: 'Enrollment Form',

    topic1: 'Fundamentals of Vedic Astrology and Birth Chart Analysis',
    topic2: 'Planetary Positions, Houses, and Their Significance',
    topic3: 'Dasha Systems and Predictive Techniques',
    topic4: 'Remedial Measures and Gemstone Recommendations',
    topic5: 'Transit Analysis and Timing of Events',
    topic6: 'Career, Marriage, and Health Predictions',

    duration: '6 Months (Weekend Classes)',
    schedule: 'Every Saturday & Sunday, 10 AM - 1 PM',
    mode: 'Online & Offline Both Available',

    basicFee: 'Basic Course: ₹45,000',
    advancedFee: 'Advanced Course: ₹75,000',
    completeFee: 'Complete Package: ₹1,10,000',
    installment: 'Easy Installment Available',

    fullName: 'Full Name',
    email: 'Email Address',
    phone: 'Phone Number',
    courseInterest: 'Course Interest',
    selectCourse: 'Select Course',
    message: 'Message (Optional)',
    submitEnrollment: 'Submit Enrollment',

    vastuTitle: 'Vastu Shastra Services',
    vastuSubtitle: 'Harmonize Your Space with Ancient Architectural Science',
    vastuIntro: 'Vastu Shastra is the ancient Indian science of architecture and design that creates harmonious living and working spaces. Our expert Vastu consultations help align your environment with natural energies to bring prosperity, health, and peace.',

    residentialVastu: 'Residential Vastu',
    residentialDesc: 'Complete home analysis including room placements, entrance direction, and energy flow optimization',

    commercialVastu: 'Commercial Vastu',
    commercialDesc: 'Office and business space consultation for enhanced productivity and financial growth',

    vastuRemedies: 'Vastu Remedies',
    vastuRemediesDesc: 'Practical and cost-effective solutions without structural changes',

    onSiteConsultation: 'On-Site Consultation Available',
    remoteConsultation: 'Remote Consultation via Floor Plans',

    numerologyTitle: 'Numerology Services',
    numerologySubtitle: 'Unlock the Power of Numbers in Your Life',
    numerologyIntro: 'Numerology is the mystical study of numbers and their influence on human life. Through detailed analysis of your birth date and name, we provide insights into your personality, destiny, and life path.',

    nameAnalysis: 'Name Analysis & Correction',
    nameAnalysisDesc: 'Discover the vibrations of your name and get personalized recommendations',

    birthDateAnalysis: 'Birth Date Analysis',
    birthDateAnalysisDesc: 'Understand your life path number, destiny number, and soul urge',

    businessNameNumerology: 'Business Name Numerology',
    businessNameDesc: 'Choose the perfect name for business success and growth',

    compatibilityAnalysis: 'Compatibility Analysis',
    compatibilityDesc: 'Numerological compatibility for relationships and partnerships',

    ourServices: 'Our Services',
    getStarted: 'Get Started Today',
    scheduleConsultation: 'Schedule Your Consultation',

    shareYourDetails: 'Share Your Details',
    sessionDuration: 'Session Duration',
    whatToExpect: 'What to Expect',
    availableTimes: 'Available Times',
    typeOfConsultation: 'Type of Consultation',
    describeYourConcerns: 'Describe Your Concerns / Questions',
    dateOfBirth: 'Date of Birth',
    timeOfBirth: 'Time of Birth (24hrs format)',
    placeOfBirth: 'Place of Birth',
    bookConsultationBtn: 'Book Consultation',
    consultationRequestSubmitted: 'Consultation Request Submitted!',
    weWillContactYouWithin: 'We will contact you within 24 hours to confirm your booking',

    privacyPolicy: 'Privacy Policy',
    termsAndConditions: 'Terms & Conditions',
    refundPolicy: 'Refund Policy',
    subscribe: 'Subscribe',
    subscribeToGetExclusive: 'Subscribe to get exclusive updates and insights',
    enterYourEmail: 'Enter your email',
    thankYouForSubscribing: 'Thank you for subscribing!',
    madeWithLove: 'Made with love for spiritual seekers',

    expertGuidance: 'Expert Guidance',
    provenResults: 'Proven Results',
    completeSolutions: 'Complete Solutions',
    certifiedExpertise: 'Certified Expertise',
    personalizedInsights: 'Personalized Insights',
    transformativeResults: 'Transformative Results',

    understandingTheNumbers: 'Understanding the Numbers',
    eachNumberCarriesUnique: 'Each number carries unique vibrations and meanings that influence your life',
    ourNumerologyServices: 'Our Numerology Services',
    comprehensiveNumerological: 'Comprehensive numerological guidance tailored to your needs',

    vastuPrinciples: 'Vastu Principles',
    ancientArchitecturalScience: 'Ancient architectural science for harmonious living',
    comprehensiveVastuSolutions: 'Comprehensive Vastu solutions for your space',
    fiveElements: 'Five Elements',
    earthWaterFireAirSpace: 'Earth, Water, Fire, Air, Space harmony',
    directions: 'Directions',
    optimalPlacement: 'Optimal placement & energy flow',
    geometry: 'Geometry',
    properRoomShapes: 'Proper room shapes & layouts',
    materials: 'Materials',
    naturalMaterials: 'Natural materials for positivity',
    harmonizeYourSpace: 'Harmonize Your Space with Vastu Shastra',
    transformYourLivingOrWorking: 'Transform your living or working environment into a sanctuary of positive energy and prosperity',
    unlockYourNumerological: 'Unlock Your Numerological Destiny',
    discoverWhatTheNumbers: 'Discover what the numbers reveal about your past, present, and future potential',
  },
  hi: {
    home: 'होम',
    astrologyCourse: 'ज्योतिष कोर्स',
    vastu: 'वास्तु',
    numerology: 'अंकशास्त्र',
    consultation: 'परामर्श',

    beginnerCourse: 'शुरुआती कोर्स',
    advancedCourse: 'उन्नत कोर्स',
    onlineClasses: 'ऑनलाइन क्लासेस',
    certification: 'प्रमाणीकरण',

    vastuHome: 'घर के लिए वास्तु',
    vastuOffice: 'कार्यालय के लिए वास्तु',
    vastuConsultation: 'वास्तु परामर्श',

    basicNumerology: 'बुनियादी अंकशास्त्र',
    nameCorrectionNumbers: 'नाम सुधार',
    businessNumerology: 'व्यापार अंकशास्त्र',

    bookConsultation: 'परामर्श बुक करें',
    aboutUs: 'हमारे बारे में',
    contactUs: 'संपर्क करें',

    welcomeTitle: 'वैदिक ज्योतिष की दुनिया में आपका स्वागत है',
    welcomeSubtitle: 'प्राचीन ज्ञान के माध्यम से अपनी नियति की खोज करें',
    aboutExpert: 'हमारे विशेषज्ञ के बारे में',
    expertBioTitle: 'मास्टर ज्योतिषी और आध्यात्मिक मार्गदर्शक',
    expertBio: 'वैदिक ज्योतिष, वास्तु शास्त्र और अंकशास्त्र में 20 से अधिक वर्षों के अनुभव के साथ, हमारे विशेषज्ञ ने हजारों व्यक्तियों को स्पष्टता, समृद्धि और आध्यात्मिक विकास की दिशा में मार्गदर्शन किया है। पारंपरिक गुरुकुल प्रणाली में प्रशिक्षित और कई ज्योतिषीय विज्ञानों में उन्नत प्रमाणपत्र धारक, हमारे विशेषज्ञ सटीक भविष्यवाणियां और प्रभावी उपाय प्रदान करने के लिए प्राचीन ज्ञान को आधुनिक अंतर्दृष्टि के साथ जोड़ते हैं।',
    expertCredentials: 'प्रमाणित वैदिक ज्योतिषी | वास्तु विशेषज्ञ | अंकशास्त्र विशेषज्ञ',

    comingSoonTitle: 'आगामी कोर्सेस और कार्यक्रम',
    comingSoonSubtitle: 'हमारे अगले बैच में शामिल हों और ब्रह्मांडीय ज्ञान की यात्रा शुरू करें',

    event1Title: 'उन्नत वैदिक ज्योतिष मास्टरक्लास',
    event1Date: 'शुरुआत: 15 जनवरी, 2026',
    event1Desc: 'भविष्यवाणी ज्योतिष, दशाओं और ट्रांजिट विश्लेषण में गहरा गोता',

    event2Title: 'वास्तु शास्त्र सप्ताहांत कार्यशाला',
    event2Date: '10-11 फरवरी, 2026',
    event2Desc: 'घर और कार्यस्थल के लिए व्यावहारिक वास्तु सिद्धांत सीखें',

    event3Title: 'अंकशास्त्र प्रैक्टिशनर कोर्स',
    event3Date: '1 मार्च, 2026',
    event3Desc: 'चाल्डियन और पाइथागोरियन अंकशास्त्र में पूर्ण प्रमाणन कार्यक्रम',

    registerNow: 'अभी पंजीकरण करें',
    learnMore: 'और जानें',

    courseTitle: 'ज्योतिष कोर्स',
    courseSubtitle: 'वैदिक ज्योतिष के प्राचीन विज्ञान में महारत हासिल करें',
    whatYouLearn: 'आप क्या सीखेंगे',
    courseDuration: 'कोर्स की अवधि',
    courseFees: 'कोर्स शुल्क',
    enrollmentForm: 'नामांकन फॉर्म',

    topic1: 'वैदिक ज्योतिष और जन्म कुंडली विश्लेषण की बुनियादी बातें',
    topic2: 'ग्रह स्थिति, घर और उनका महत्व',
    topic3: 'दशा प्रणाली और भविष्यवाणी तकनीक',
    topic4: 'उपचारात्मक उपाय और रत्न सिफारिशें',
    topic5: 'ट्रांजिट विश्लेषण और घटनाओं का समय',
    topic6: 'करियर, विवाह और स्वास्थ्य की भविष्यवाणी',

    duration: '6 महीने (सप्ताहांत क्लासेस)',
    schedule: 'हर शनिवार और रविवार, सुबह 10 बजे - दोपहर 1 बजे',
    mode: 'ऑनलाइन और ऑफलाइन दोनों उपलब्ध',

    basicFee: 'बेसिक कोर्स: ₹45,000',
    advancedFee: 'उन्नत कोर्स: ₹75,000',
    completeFee: 'कंप्लीट पैकेज: ₹1,10,000',
    installment: 'आसान किस्त उपलब्ध',

    fullName: 'पूरा नाम',
    email: 'ईमेल पता',
    phone: 'फोन नंबर',
    courseInterest: 'कोर्स रुचि',
    selectCourse: 'कोर्स चुनें',
    message: 'संदेश (वैकल्पिक)',
    submitEnrollment: 'नामांकन जमा करें',

    vastuTitle: 'वास्तु शास्त्र सेवाएं',
    vastuSubtitle: 'प्राचीन वास्तुकला विज्ञान के साथ अपने स्थान को सामंजस्यपूर्ण बनाएं',
    vastuIntro: 'वास्तु शास्त्र वास्तुकला और डिजाइन का प्राचीन भारतीय विज्ञान है जो सामंजस्यपूर्ण रहने और काम करने की जगह बनाता है। हमारे विशेषज्ञ वास्तु परामर्श समृद्धि, स्वास्थ्य और शांति लाने के लिए आपके वातावरण को प्राकृतिक ऊर्जाओं के साथ संरेखित करने में मदद करते हैं।',

    residentialVastu: 'आवासीय वास्तु',
    residentialDesc: 'कमरे की व्यवस्था, प्रवेश दिशा और ऊर्जा प्रवाह अनुकूलन सहित पूर्ण घर विश्लेषण',

    commercialVastu: 'व्यावसायिक वास्तु',
    commercialDesc: 'बढ़ी हुई उत्पादकता और वित्तीय विकास के लिए कार्यालय और व्यापार स्थान परामर्श',

    vastuRemedies: 'वास्तु उपाय',
    vastuRemediesDesc: 'संरचनात्मक परिवर्तनों के बिना व्यावहारिक और लागत प्रभावी समाधान',

    onSiteConsultation: 'साइट पर परामर्श उपलब्ध',
    remoteConsultation: 'फ्लोर प्लान के माध्यम से रिमोट परामर्श',

    numerologyTitle: 'अंकशास्त्र सेवाएं',
    numerologySubtitle: 'अपने जीवन में संख्याओं की शक्ति को अनलॉक करें',
    numerologyIntro: 'अंकशास्त्र संख्याओं और मानव जीवन पर उनके प्रभाव का रहस्यमय अध्ययन है। आपकी जन्म तिथि और नाम के विस्तृत विश्लेषण के माध्यम से, हम आपके व्यक्तित्व, नियति और जीवन पथ में अंतर्दृष्टि प्रदान करते हैं।',

    nameAnalysis: 'नाम विश्लेषण और सुधार',
    nameAnalysisDesc: 'अपने नाम की कंपन की खोज करें और व्यक्तिगत सिफारिशें प्राप्त करें',

    birthDateAnalysis: 'जन्म तिथि विश्लेषण',
    birthDateAnalysisDesc: 'अपने जीवन पथ संख्या, भाग्य संख्या और आत्मा प्रेरणा को समझें',

    businessNameNumerology: 'व्यापार नाम अंकशास्त्र',
    businessNameDesc: 'व्यापार सफलता और विकास के लिए सही नाम चुनें',

    compatibilityAnalysis: 'संगतता विश्लेषण',
    compatibilityDesc: 'संबंधों और साझेदारी के लिए अंकशास्त्रीय संगतता',

    ourServices: 'हमारी सेवाएं',
    getStarted: 'आज ही शुरू करें',
    scheduleConsultation: 'अपना परामर्श निर्धारित करें',

    shareYourDetails: 'अपने विवरण साझा करें',
    sessionDuration: 'सत्र की अवधि',
    whatToExpect: 'क्या उम्मीद करें',
    availableTimes: 'उपलब्ध समय',
    typeOfConsultation: 'परामर्श का प्रकार',
    describeYourConcerns: 'अपनी समस्याओं / प्रश्नों का वर्णन करें',
    dateOfBirth: 'जन्म तिथि',
    timeOfBirth: 'जन्म का समय (24 घंटे प्रारूप)',
    placeOfBirth: 'जन्म स्थान',
    bookConsultationBtn: 'परामर्श बुक करें',
    consultationRequestSubmitted: 'परामर्श अनुरोध प्रस्तुत किया गया!',
    weWillContactYouWithin: 'हम आपकी बुकिंग की पुष्टि करने के लिए 24 घंटे के भीतर आपसे संपर्क करेंगे',

    privacyPolicy: 'गोपनीयता नीति',
    termsAndConditions: 'शर्तें और शर्तें',
    refundPolicy: 'रिफंड नीति',
    subscribe: 'सदस्यता लें',
    subscribeToGetExclusive: 'विशेष अपडेट और अंतर्दृष्टि प्राप्त करने के लिए सदस्यता लें',
    enterYourEmail: 'अपना ईमेल दर्ज करें',
    thankYouForSubscribing: 'सदस्यता के लिए धन्यवाद!',
    madeWithLove: 'आध्यात्मिक साधकों के लिए प्रेम से बनाया गया',

    expertGuidance: 'विशेषज्ञ निर्देशन',
    provenResults: 'सिद्ध परिणाम',
    completeSolutions: 'संपूर्ण समाधान',
    certifiedExpertise: 'प्रमाणित विशेषज्ञता',
    personalizedInsights: 'व्यक्तिगत अंतर्दृष्टि',
    transformativeResults: 'रूपांतरकारी परिणाम',

    understandingTheNumbers: 'संख्याओं को समझना',
    eachNumberCarriesUnique: 'प्रत्येक संख्या अद्वितीय कंपन और अर्थ रखती है जो आपके जीवन को प्रभावित करते हैं',
    ourNumerologyServices: 'हमारी अंकशास्त्र सेवाएं',
    comprehensiveNumerological: 'आपकी जरूरतों के अनुसार व्यापक अंकशास्त्रीय मार्गदर्शन',

    vastuPrinciples: 'वास्तु सिद्धांत',
    ancientArchitecturalScience: 'सामंजस्यपूर्ण जीवन के लिए प्राचीन वास्तुकला विज्ञान',
    comprehensiveVastuSolutions: 'आपके स्थान के लिए व्यापक वास्तु समाधान',
    fiveElements: 'पाँच तत्व',
    earthWaterFireAirSpace: 'पृथ्वी, जल, अग्नि, वायु, आकाश सामंजस्य',
    directions: 'दिशाएं',
    optimalPlacement: 'इष्टतम प्लेसमेंट और ऊर्जा प्रवाह',
    geometry: 'ज्यामिति',
    properRoomShapes: 'उचित कमरे के आकार और लेआउट',
    materials: 'सामग्री',
    naturalMaterials: 'सकारात्मकता के लिए प्राकृतिक सामग्री',
    harmonizeYourSpace: 'वास्तु शास्त्र के साथ अपने स्थान को सामंजस्यपूर्ण बनाएं',
    transformYourLivingOrWorking: 'अपने रहने या काम करने के वातावरण को सकारात्मक ऊर्जा और समृद्धि का अभयारण्य बनाएं',
    unlockYourNumerological: 'अपनी अंकशास्त्रीय नियति को अनलॉक करें',
    discoverWhatTheNumbers: 'संख्याएं आपके अतीत, वर्तमान और भविष्य की संभावनाओं के बारे में क्या बताती हैं यह जानें',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
