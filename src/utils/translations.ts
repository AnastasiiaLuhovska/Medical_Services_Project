import { Language } from '../store/slices/languageSlice'

export const translations = {
  de: {
    // Brand
    'brand.name': 'Medizinische Assistenz',
    
    // Navigation
    'nav.about': 'Über mich',
    'nav.services': 'Leistungen',
    'nav.prices': 'Preise',
    'nav.contact': 'Kontakt',
    'nav.appointment': 'Termin buchen',

    // Hero Section
    'hero.title': 'Schnell & zuverlässig einen Termin sichern',
    'hero.subtitle': 'wir unterstützen Sie in allen medizinischen Angelegenheiten in Deutschland.',
    'hero.description': 'Wenn Sie Schwierigkeiten haben, einen Termin zu bekommen – wir machen es möglich, oft innerhalb von wenigen Tagen.',
    'hero.services': 'Leistungen',
    'hero.appointment': 'Termin buchen',
    'hero.ctaTitle': 'Bereit für Ihren Termin?',
    'hero.ctaDescription': 'Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch',
    'hero.ctaButton': 'Jetzt kontaktieren',

    // About Section
    'about.title': 'Wer ich bin',
    'about.subtitle': 'Ihre medizinische Assistenz',
    'about.description': 'Mein Name ist Yelyzaveta. Ich bin medizinische Fachangestellter mit langjähriger Erfahrung und arbeite eng mit Ärzten zusammen, denen ich vertraue. Durch meine Kenntnisse im medizinischen Bereich kann ich Sie nicht nur bei Terminen unterstützen, sondern auch bei der Organisation, Dokumentation und Kommunikation mit Ärzten und Kliniken. Darüber hinaus helfe ich auch bei allgemeinen Anträgen und Dokumenten, die über den medizinischen Bereich hinausgehen. Meine Stärke ist, komplexe Abläufe einfach und klar zu erklären und Sie Schritt für Schritt zu begleiten.',
    'about.feature1': 'Zuverlässigkeit und Diskretion',
    'about.feature2': 'Medizinisches Fachwissen',
    'about.feature3': 'Persönliche Begleitung und Unterstützung',
    'about.feature4': 'Erfahrung mit Dokumenten und Anträgen',
    'about.feature5': 'Freundliche und verständliche Kommunikation',
    'about.feature6': 'Individuelle Betreuung',
    'about.learnMore': 'Kontakt aufnehmen',

    // Services Section
    'services.title': 'Unser Service',
    'services.subtitle': 'wir sind für Sie da',
    'services.service1.title': 'Terminvereinbarung',
    'services.service1.description': 'Wir vereinbaren Termine bei Fachärzten, auch bei schwer erreichbaren Praxen, oft innerhalb weniger Tage.',
    'services.service2.title': 'Übersetzungen',
    'services.service2.description': 'Professionelle Übersetzungen Deutsch ⇄ Ukrainisch/Russisch für medizinische Dokumente und Gespräche.',
    'services.service3.title': 'Dokumentenausfüllung',
    'services.service3.description': 'Hilfe beim korrekten Ausfüllen von Anträgen, Formularen und medizinischen Dokumenten.',
    'services.service4.title': 'Erstbesuch beim Arzt',
    'services.service4.description': 'Begleitung zu Ihrem ersten Arztbesuch mit Übersetzung und Unterstützung bei der Kommunikation.',
    'services.service5.title': 'Notfall-Begleitung',
    'services.service5.description': 'Dringende Begleitung ins Krankenhaus oder zur Notaufnahme mit sofortiger Übersetzungshilfe.',
    'services.service6.title': 'Hausarzt finden',
    'services.service6.description': 'Wir helfen Ihnen dabei, einen passenden Hausarzt in Ihrer Nähe zu finden und den ersten Termin zu vereinbaren.',
    'services.service7.title': 'Vorgespräche vor Operationen',
    'services.service7.description': 'Begleitung zu wichtigen Aufklärungs- und Vorgesprächen vor geplanten medizinischen Eingriffen.',
    'services.service8.title': 'Telefonische Kommunikation',
    'services.service8.description': 'Telefonische Terminvereinbarung und Kommunikation mit Ärzten und Praxen in Ihrem Namen.',
    'services.learnMore': 'Mehr erfahren',

    // Prices Section
    'prices.title': 'Transparente Preise',
    'prices.subtitle': 'faire Leistungen',
    'prices.service': 'Leistung',
    'prices.price': 'Preis',
    'prices.terminvereinbarung': '15-25 €',
    'prices.uebersetzungen': '20-30 €/Std',
    'prices.dokumentenausfuellung': '20-40 €',
    'prices.erstbesuch': '30-50 €',
    'prices.notfall': '40-60 €',
    'prices.hausarzt': '25-35 €',
    'prices.vorgespraeche': '35-55 €',
    'prices.telefonisch': '15-20 €',
    'prices.note': 'Alle Preise sind Richtwerte und können je nach Aufwand variieren.',

    // Appointment Form
    'appointment.title': 'Termin buchen',
    'appointment.name': 'Vollständiger Name',
    'appointment.namePlaceholder': 'Ihr vollständiger Name',
    'appointment.email': 'E-Mail-Adresse',
    'appointment.emailPlaceholder': 'ihre.email@beispiel.de',
    'appointment.phone': 'Telefonnummer',
    'appointment.phonePlaceholder': '+49 176 84727849',
    'appointment.date': 'Gewünschtes Datum',
    'appointment.time': 'Gewünschte Uhrzeit',
    'appointment.timePlaceholder': 'Uhrzeit wählen',
    'appointment.message': 'Nachricht',
    'appointment.messagePlaceholder': 'Beschreiben Sie Ihr Anliegen oder stellen Sie Ihre Fragen...',
    'appointment.submit': 'ANFRAGE SENDEN',
    'appointment.submitting': 'WIRD GESENDET...',

    // Contact Section
    'contact.title': 'Kontaktieren Sie uns',
    'contact.phone': 'Telefon',
    'contact.email': 'E-Mail',
    'contact.getDirections': 'Kontakt aufnehmen',

    // Footer
    'footer.tagline': 'Ihre vertrauensvolle medizinische Assistenz in Deutschland.',
    'footer.importantLinks': 'Wichtige Links',
    'footer.contactUs': 'Kontakt',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterPlaceholder': 'Ihre E-Mail-Adresse eingeben',
    'footer.subscribe': 'Abonnieren',
    'footer.copyright': '© 2024 Medizinische Assistenz. Alle Rechte vorbehalten.',
  },
  ru: {
    // Brand
    'brand.name': 'Медицинская Помощь',
    
    // Navigation
    'nav.about': 'Обо мне',
    'nav.services': 'Услуги',
    'nav.prices': 'Цены',
    'nav.contact': 'Контакты',
    'nav.appointment': 'Записаться',

    // Hero Section
    'hero.title': 'Быстро и надежно записаться к врачу',
    'hero.subtitle': 'мы поддержим вас во всех медицинских вопросах в Германии.',
    'hero.description': 'Если у вас есть трудности с записью к врачу – мы сделаем это возможным, часто в течение нескольких дней.',
    'hero.services': 'Услуги',
    'hero.appointment': 'Записаться',
    'hero.ctaTitle': 'Готовы записаться на приём?',
    'hero.ctaDescription': 'Свяжитесь с нами для бесплатной консультации',
    'hero.ctaButton': 'Связаться сейчас',

    // About Section
    'about.title': 'Кто я',
    'about.subtitle': 'Ваш медицинский ассистент',
    'about.description': 'Меня зовут Елизавета. Я медицинский специалист с многолетним опытом и тесно работаю с врачами, которым доверяю. Благодаря моим знаниям в медицинской области, я могу поддержать вас не только в записи на прием, но и в организации, документообороте и общении с врачами и клиниками. Кроме того, я также помогаю с общими заявлениями и документами, выходящими за рамки медицинской сферы. Моя сильная сторона - объяснять сложные процессы просто и понятно, сопровождая вас шаг за шагом.',
    'about.feature1': 'Надежность и конфиденциальность',
    'about.feature2': 'Медицинские знания',
    'about.feature3': 'Личное сопровождение и поддержка',
    'about.feature4': 'Опыт работы с документами и заявлениями',
    'about.feature5': 'Дружелюбное и понятное общение',
    'about.feature6': 'Индивидуальный подход',
    'about.learnMore': 'Связаться',

    // Services Section
    'services.title': 'Наши услуги',
    'services.subtitle': 'мы здесь для вас',
    'services.service1.title': 'Запись к врачу',
    'services.service1.description': 'Мы записываем к специалистам, даже к труднодоступным врачам, часто в течение нескольких дней.',
    'services.service2.title': 'Переводы',
    'services.service2.description': 'Профессиональные переводы немецкий ⇄ украинский/русский для медицинских документов и бесед.',
    'services.service3.title': 'Заполнение документов',
    'services.service3.description': 'Помощь в правильном заполнении заявлений, форм и медицинских документов.',
    'services.service4.title': 'Первый визит к врачу',
    'services.service4.description': 'Сопровождение на первый прием к врачу с переводом и поддержкой в общении.',
    'services.service5.title': 'Экстренное сопровождение',
    'services.service5.description': 'Срочное сопровождение в больницу или приемный покой с немедленной помощью перевода.',
    'services.service6.title': 'Поиск семейного врача',
    'services.service6.description': 'Мы поможем найти подходящего семейного врача рядом с вами и записаться на первый прием.',
    'services.service7.title': 'Предварительные беседы перед операциями',
    'services.service7.description': 'Сопровождение на важные консультации и предварительные беседы перед плановыми медицинскими вмешательствами.',
    'services.service8.title': 'Телефонное общение',
    'services.service8.description': 'Телефонная запись и общение с врачами и клиниками от вашего имени.',
    'services.learnMore': 'Подробнее',

    // Prices Section
    'prices.title': 'Прозрачные цены',
    'prices.subtitle': 'честные услуги',
    'prices.service': 'Услуга',
    'prices.price': 'Цена',
    'prices.terminvereinbarung': '15-25 €',
    'prices.uebersetzungen': '20-30 €/час',
    'prices.dokumentenausfuellung': '20-40 €',
    'prices.erstbesuch': '30-50 €',
    'prices.notfall': '40-60 €',
    'prices.hausarzt': '25-35 €',
    'prices.vorgespraeche': '35-55 €',
    'prices.telefonisch': '15-20 €',
    'prices.note': 'Все цены являются ориентировочными и могут варьироваться в зависимости от объема работы.',

    // Appointment Form
    'appointment.title': 'Записаться',
    'appointment.name': 'Полное имя',
    'appointment.namePlaceholder': 'Ваше полное имя',
    'appointment.email': 'Электронная почта',
    'appointment.emailPlaceholder': 'ваша.почта@пример.com',
    'appointment.phone': 'Номер телефона',
    'appointment.phonePlaceholder': '+49 176 84727849',
    'appointment.date': 'Желаемая дата',
    'appointment.time': 'Желаемое время',
    'appointment.timePlaceholder': 'Выберите время',
    'appointment.message': 'Сообщение',
    'appointment.messagePlaceholder': 'Опишите ваш вопрос или задайте вопросы...',
    'appointment.submit': 'ОТПРАВИТЬ ЗАПРОС',
    'appointment.submitting': 'ОТПРАВЛЯЕТСЯ...',

    // Contact Section
    'contact.title': 'Связаться с нами',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    'contact.getDirections': 'Связаться',

    // Footer
    'footer.tagline': 'Ваш надежный медицинский ассистент в Германии.',
    'footer.importantLinks': 'Важные ссылки',
    'footer.contactUs': 'Контакты',
    'footer.newsletter': 'Новости',
    'footer.newsletterPlaceholder': 'Введите ваш email',
    'footer.subscribe': 'Подписаться',
    'footer.copyright': '© 2024 Медицинский Ассистент. Все права защищены.',
  },
  en: {
    // Brand
    'brand.name': 'Medical Assistance',
    
    // Navigation
    'nav.about': 'About me',
    'nav.services': 'Services',
    'nav.prices': 'Prices',
    'nav.contact': 'Contact',
    'nav.appointment': 'Book appointment',

    // Hero Section
    'hero.title': 'Quickly & reliably secure an appointment',
    'hero.subtitle': 'we support you in all medical matters in Germany.',
    'hero.description': 'If you have difficulties getting an appointment – we make it possible, often within a few days.',
    'hero.services': 'Services',
    'hero.appointment': 'Book appointment',
    'hero.ctaTitle': 'Ready for your appointment?',
    'hero.ctaDescription': 'Contact us for a non-binding consultation',
    'hero.ctaButton': 'Contact now',

    // About Section
    'about.title': 'Who I am',
    'about.subtitle': 'Your medical assistant',
    'about.description': 'My name is Yelyzaveta. I am a medical professional with many years of experience and work closely with doctors I trust. Through my knowledge in the medical field, I can support you not only with appointments, but also with organization, documentation and communication with doctors and clinics. In addition, I also help with general applications and documents that go beyond the medical field. My strength is to explain complex processes simply and clearly and to accompany you step by step.',
    'about.feature1': 'Reliability and discretion',
    'about.feature2': 'Medical expertise',
    'about.feature3': 'Personal accompaniment and support',
    'about.feature4': 'Experience with documents and applications',
    'about.feature5': 'Friendly and understandable communication',
    'about.feature6': 'Individual care',
    'about.learnMore': 'Get in touch',

    // Services Section
    'services.title': 'Our service',
    'services.subtitle': 'we are here for you',
    'services.service1.title': 'Appointment scheduling',
    'services.service1.description': 'We arrange appointments with specialists, even at hard-to-reach practices, often within a few days.',
    'services.service2.title': 'Translations',
    'services.service2.description': 'Professional translations German ⇄ Ukrainian/Russian for medical documents and conversations.',
    'services.service3.title': 'Document completion',
    'services.service3.description': 'Help with correctly filling out applications, forms and medical documents.',
    'services.service4.title': 'First doctor visit',
    'services.service4.description': 'Accompaniment to your first doctor visit with translation and communication support.',
    'services.service5.title': 'Emergency accompaniment',
    'services.service5.description': 'Urgent accompaniment to hospital or emergency room with immediate translation assistance.',
    'services.service6.title': 'Find family doctor',
    'services.service6.description': 'We help you find a suitable family doctor near you and arrange the first appointment.',
    'services.service7.title': 'Pre-operative consultations',
    'services.service7.description': 'Accompaniment to important consultation and preliminary talks before planned medical procedures.',
    'services.service8.title': 'Telephone communication',
    'services.service8.description': 'Telephone appointment scheduling and communication with doctors and practices on your behalf.',
    'services.learnMore': 'Learn more',

    // Prices Section
    'prices.title': 'Transparent prices',
    'prices.subtitle': 'fair services',
    'prices.service': 'Service',
    'prices.price': 'Price',
    'prices.terminvereinbarung': '15-25 €',
    'prices.uebersetzungen': '20-30 €/hour',
    'prices.dokumentenausfuellung': '20-40 €',
    'prices.erstbesuch': '30-50 €',
    'prices.notfall': '40-60 €',
    'prices.hausarzt': '25-35 €',
    'prices.vorgespraeche': '35-55 €',
    'prices.telefonisch': '15-20 €',
    'prices.note': 'All prices are guidelines and may vary depending on the scope of work.',

    // Appointment Form
    'appointment.title': 'Book appointment',
    'appointment.name': 'Full name',
    'appointment.namePlaceholder': 'Your full name',
    'appointment.email': 'Email address',
    'appointment.emailPlaceholder': 'your.email@example.com',
    'appointment.phone': 'Phone number',
    'appointment.phonePlaceholder': '+49 176 84727849',
    'appointment.date': 'Preferred date',
    'appointment.time': 'Preferred time',
    'appointment.timePlaceholder': 'Select time',
    'appointment.message': 'Message',
    'appointment.messagePlaceholder': 'Describe your concern or ask your questions...',
    'appointment.submit': 'SEND REQUEST',
    'appointment.submitting': 'SENDING...',

    // Contact Section
    'contact.title': 'Contact us',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.getDirections': 'Get in touch',

    // Footer
    'footer.tagline': 'Your trusted medical assistant in Germany.',
    'footer.importantLinks': 'Important Links',
    'footer.contactUs': 'Contact Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterPlaceholder': 'Enter your email address',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Medical Assistant. All rights reserved.',
  }
}

export const getTranslation = (language: Language, key: string): string => {
  const languageTranslations = translations[language] as Record<string, string>
  
  // First try to get the key directly (for keys like 'hero.title')
  if (languageTranslations && languageTranslations[key]) {
    return languageTranslations[key]
  }
  
  // If not found, return the key itself (fallback)
  console.warn(`Translation key '${key}' not found for language '${language}'`)
  return key
}