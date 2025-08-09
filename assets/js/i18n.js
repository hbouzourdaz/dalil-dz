/* Simple i18n with flag switcher for Dalil DZ */
(function () {
  'use strict';

  const STORAGE_KEY = 'dalil_lang';

  const translations = {
    ar: {
      dir: 'rtl', lang: 'ar',
      'site.title': 'Dalil DZ | دليل الخدمات المحلية في الجزائر',
      'common.home': '🏠 الرئيسية',
      'nav.categories': '📚 التصنيفات',
      'nav.eservices': '⚡ الخدمات الإلكترونية',
      'nav.about': 'ℹ️ من نحن',
      'nav.contact': '📨 اتصل بنا',
      'nav.theme': 'تبديل الوضع',
      'footer.privacy': 'سياسة الخصوصية',
      'footer.terms': 'الشروط والأحكام',
      'footer.contact': 'اتصل بنا',
      'home.hero.title': '🧭 دليل الخدمات المحلية في الجزائر',
      'home.hero.subtitle': 'ابحث عن أقرب مطعم، مدرسة، طبيب، محامي، فندق أو مكتب كراء السيارات بسرعة وسهولة.',
      'home.search.label': 'ابحث',
      'home.search.placeholder': 'ابحث عن خدمة...',
      'home.search.button': 'بحث',
      'home.categories.title': '📚 التصنيفات الشائعة',
      'home.categories.viewall': '👁️ عرض الكل',
      'home.featured.title': '⭐ الأكثر شيوعًا',
      'home.featured.group': '🗂️ تصنيف:',
      'home.featured.sort': '🔽 فرز الخدمات:',
      'home.featured.sort.top': 'الأعلى تقييماً',
      'home.featured.sort.az': 'أبجدياً (أ-ي)',
      'home.featured.sort.za': 'أبجدياً (ي-أ)',
      'about.title': 'ℹ️ من نحن',
      'footer.tagline': 'دليل الخدمات المحلية في الجزائر',
      'es.title': '⚡ الخدمات الإلكترونية في الجزائر',
      'es.subtitle': 'تصفّح جميع الخدمات الإلكترونية مصنفة ضمن مجموعات ليسهل الوصول إليها.',
      'es.search.label': 'ابحث عن خدمة إلكترونية',
      'es.search.placeholder': 'ابحث عن خدمة إلكترونية...',
      'es.search.button': 'بحث',
      'es.group.label': '🗂️ تصنيف:',
      'es.group.all': '✨ الكل',
      'es.group.utilities': '🔌💧 الغاز والكهرباء والماء',
      'es.group.poste': '📮 بريد الجزائر',
      'es.group.telecom': '📡 اتصالات الجزائر والهاتف',
      'es.group.administration': '🏛️ الحالة المدنية والإدارة',
      'es.group.education': '📚 التربية والتعليم',
      'es.group.university': '🎓 الخدمات الجامعية',
      'es.group.vocational': '🛠️ التكوين المهني',
      'es.group.realestate': '🏠 العقار والمسح',
      'es.group.social': '👥 الضمان الاجتماعي والتقاعد',
      'es.group.fiscal': '💳 الخدمات الجبائية',
      'es.group.justice': '⚖️ العدل والقضاء',
      'es.group.transport': '🚌✈️ النقل والحجوزات',
      'es.group.employment': '💼 التشغيل والعمل',
      'es.group.insurance': '🛡️ التأمين',
      'es.group.health': '🏥 الصحة',
      'es.group.autoentre': '🚀 المقاول الذاتي',
      'cat.breadcrumb.home': '🏠 الرئيسية',
      'cat.search.placeholder': 'ابحث داخل هذه الفئة...',
      'cat.search.button': 'بحث',
      'cat.title.fallback': 'التصنيف',
      'svc.breadcrumb.home': '🏠 الرئيسية',
      'svc.breadcrumb.default': 'تفاصيل الخدمة',
      'svc.external': '⚡ خدمة إلكترونية',
      'svc.desc': '📝 الوصف',
      'svc.map': '🗺️ الموقع على الخريطة',
      'svc.form.contact': '📞 اتصل بنا',
      'form.name': '👤 الاسم',
      'form.email': '✉️ البريد الإلكتروني',
      'form.message': '✍️ الرسالة',
      'form.submit': 'إرسال',
      'contact.heading': '📨 اتصل بنا',
      'contact.subtitle': 'يسعدنا تواصلكم معنا لأي اقتراحات أو بلاغات أو شراكات.',
      'about.heading': 'ℹ️ من نحن',
      'about.p1': 'Dalil DZ منصة جزائرية تهدف إلى تسهيل العثور على الخدمات المحلية الموثوقة بالقرب منك. نجمع المعلومات الأساسية، التقييمات، وطرق التواصل، مع تجربة استخدام عصرية تدعم العربية من اليمين إلى اليسار.',
      'about.p2': 'نعمل على تحديث البيانات باستمرار وتحسين تجربة البحث والعرض عبر أيقونات واضحة وتصميم نظيف وموحّد.',
      'terms.title': 'الشروط والأحكام',
      'terms.section.acceptable': 'الاستخدام المقبول',
      'terms.section.content': 'المحتوى والمسؤولية',
      'terms.section.ip': 'الملكية الفكرية',
      'terms.section.changes': 'التعديلات',
      'terms.p1': 'باستخدامك لموقع Dalil DZ فإنك توافق على شروط الاستخدام التالية. الرجاء قراءة هذه الشروط بعناية.',
      'terms.p2': 'يُمنع إساءة استخدام الموقع أو محاولة الوصول غير المصرح به أو جمع البيانات بطريقة آلية مخالفة.',
      'terms.p3': 'نحرص على دقة المعلومات، وقد يحدث اختلاف أو تغيير من الجهات المقدّمة للخدمة. يُنصح بالتواصل المباشر للتحقق.',
      'terms.p4': 'جميع العلامات التجارية وحقوق النشر مملوكة لأصحابها. لا يجوز نسخ المحتوى دون إذن.',
      'terms.p5': 'قد نقوم بتحديث هذه الشروط من وقت لآخر. يسري التحديث فور نشره على هذه الصفحة.',
      'privacy.title': 'سياسة الخصوصية',
      'privacy.p1': 'نحترم خصوصيتك ونعمل على حماية بياناتك. يوضح هذا المستند أنواع المعلومات التي قد نجمعها وسبب جمعها وكيفية استخدامها.',
      'privacy.section.collect': 'المعلومات التي نجمعها',
      'privacy.section.cookies': 'ملفات تعريف الارتباط (Cookies)',
      'privacy.section.share': 'مشاركة البيانات',
      'privacy.section.contact': 'التواصل',
      'privacy.li1': 'بيانات استخدام عامة لغرض تحسين الأداء وتجربة المستخدم.',
      'privacy.li2': 'معلومات يقدّمها المستخدم طوعًا (نموذج الاتصال).',
      'privacy.li3': 'قد تستخدم خدمات طرف ثالث مثل Google AdSense ملفات تعريف الارتباط لعرض الإعلانات.',
      'privacy.p2': 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. يمكنك إدارة تفضيلاتك عبر شريط الموافقة على الكوكيز.',
      'privacy.p3': 'لا نبيع بياناتك. قد نشارك بيانات مجهولة مع مزوّدي التحليلات والإعلانات لتحسين الخدمة.',
      'privacy.p4': 'لأية استفسارات بخصوص الخصوصية، تواصل معنا عبر',
    },
    en: {
      dir: 'ltr', lang: 'en',
      'site.title': 'Dalil DZ | Algeria Local Services Directory',
      'common.home': '🏠 Home',
      'nav.categories': '📚 Categories',
      'nav.eservices': '⚡ E-Services',
      'nav.about': 'ℹ️ About',
      'nav.contact': '📨 Contact',
      'nav.theme': 'Toggle theme',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.contact': 'Contact',
      'home.hero.title': '🧭 Algeria Local Services Directory',
      'home.hero.subtitle': 'Find nearby restaurants, schools, doctors, lawyers, hotels or car rentals easily.',
      'home.search.label': 'Search',
      'home.search.placeholder': 'Search a service...',
      'home.search.button': 'Search',
      'home.categories.title': '📚 Popular Categories',
      'home.categories.viewall': '👁️ View all',
      'home.featured.title': '⭐ Most Popular',
      'home.featured.group': '🗂️ Group:',
      'home.featured.sort': '🔽 Sort services:',
      'home.featured.sort.top': 'Top rated',
      'home.featured.sort.az': 'Alphabetical (A-Z)',
      'home.featured.sort.za': 'Alphabetical (Z-A)',
      'about.title': 'ℹ️ About Us',
      'footer.tagline': 'Local services directory in Algeria',
      'es.title': '⚡ E-Services in Algeria',
      'es.subtitle': 'Browse all e-services grouped for easy access.',
      'es.search.label': 'Search e-service',
      'es.search.placeholder': 'Search an e-service...',
      'es.search.button': 'Search',
      'es.group.label': '🗂️ Group:',
      'es.group.all': '✨ All',
      'es.group.utilities': '🔌💧 Gas, Electricity & Water',
      'es.group.poste': '📮 Algeria Post',
      'es.group.telecom': '📡 Algeria Telecom & Phone',
      'es.group.administration': '🏛️ Civil Status & Administration',
      'es.group.education': '📚 Education',
      'es.group.university': '🎓 University Services',
      'es.group.vocational': '🛠️ Vocational Training',
      'es.group.realestate': '🏠 Real Estate & Cadastre',
      'es.group.social': '👥 Social Security & Retirement',
      'es.group.fiscal': '💳 Tax Services',
      'es.group.justice': '⚖️ Justice & Courts',
      'es.group.transport': '🚌✈️ Transport & Bookings',
      'es.group.employment': '💼 Employment & Work',
      'es.group.insurance': '🛡️ Insurance',
      'es.group.health': '🏥 Health',
      'es.group.autoentre': '🚀 Auto-entrepreneur',
      'cat.breadcrumb.home': '🏠 Home',
      'cat.search.placeholder': 'Search within this category...',
      'cat.search.button': 'Search',
      'cat.title.fallback': 'Category',
      'svc.breadcrumb.home': '🏠 Home',
      'svc.breadcrumb.default': 'Service Details',
      'svc.external': '⚡ E-Service',
      'svc.desc': '📝 Description',
      'svc.map': '🗺️ Location on Map',
      'svc.form.contact': '📞 Contact Us',
      'form.name': '👤 Name',
      'form.email': '✉️ Email',
      'form.message': '✍️ Message',
      'form.submit': 'Send',
      'contact.heading': '📨 Contact Us',
      'contact.subtitle': 'We welcome your suggestions, reports, or partnership inquiries.',
      'about.heading': 'ℹ️ About Us',
      'about.p1': 'Dalil DZ is an Algerian platform that helps you find trusted nearby local services. We aggregate key info, ratings, and contact methods with a modern UX supporting RTL.',
      'about.p2': 'We continuously update data and enhance search and display with clear icons and a clean, unified design.',
      'terms.title': 'Terms & Conditions',
      'terms.section.acceptable': 'Acceptable Use',
      'terms.section.content': 'Content and Liability',
      'terms.section.ip': 'Intellectual Property',
      'terms.section.changes': 'Changes',
      'terms.p1': 'By using Dalil DZ you agree to the following terms of use. Please read carefully.',
      'terms.p2': 'Misuse of the site, unauthorized access attempts, or automated scraping contrary to policy are prohibited.',
      'terms.p3': 'We strive for accuracy; providers may change details. Please verify directly when needed.',
      'terms.p4': 'All trademarks and copyrights belong to their owners. Do not copy without permission.',
      'terms.p5': 'We may update these terms from time to time. Updates apply upon publication on this page.',
      'privacy.title': 'Privacy Policy',
      'privacy.p1': 'We respect your privacy. This document explains what information we may collect, why, and how it is used.',
      'privacy.section.collect': 'Information We Collect',
      'privacy.section.cookies': 'Cookies',
      'privacy.section.share': 'Data Sharing',
      'privacy.section.contact': 'Contact',
      'privacy.li1': 'General usage data to improve performance and UX.',
      'privacy.li2': 'Information voluntarily provided by users (contact form).',
      'privacy.li3': 'Third-party services like Google AdSense may use cookies to show ads.',
      'privacy.p2': 'We use cookies to improve your experience. Manage preferences via the cookie consent bar.',
      'privacy.p3': 'We do not sell your data. We may share anonymized data with analytics/ads providers to improve the service.',
      'privacy.p4': 'For privacy inquiries, contact us at',
    },
    fr: {
      dir: 'ltr', lang: 'fr',
      'site.title': 'Dalil DZ | Annuaire des services en Algérie',
      'common.home': '🏠 Accueil',
      'nav.categories': '📚 Catégories',
      'nav.eservices': '⚡ Services en ligne',
      'nav.about': 'ℹ️ À propos',
      'nav.contact': '📨 Contact',
      'nav.theme': 'Thème sombre',
      'footer.privacy': 'Politique de confidentialité',
      'footer.terms': 'Termes et conditions',
      'footer.contact': 'Contact',
      'home.hero.title': '🧭 Annuaire des services en Algérie',
      'home.hero.subtitle': 'Trouvez rapidement restaurants, écoles, médecins, avocats, hôtels ou locations de voitures.',
      'home.search.label': 'Rechercher',
      'home.search.placeholder': 'Rechercher un service...',
      'home.search.button': 'Rechercher',
      'home.categories.title': '📚 Catégories populaires',
      'home.categories.viewall': '👁️ Voir tout',
      'home.featured.title': '⭐ Les plus populaires',
      'home.featured.group': '🗂️ Catégorie :',
      'home.featured.sort': '🔽 Trier les services :',
      'home.featured.sort.top': 'Mieux notés',
      'home.featured.sort.az': 'Alphabétique (A-Z)',
      'home.featured.sort.za': 'Alphabétique (Z-A)',
      'about.title': 'ℹ️ Qui sommes-nous',
      'footer.tagline': 'Annuaire des services locaux en Algérie',
      'es.title': '⚡ Services en ligne en Algérie',
      'es.subtitle': 'Parcourez tous les e-services, regroupés pour un accès facile.',
      'es.search.label': 'Rechercher un e-service',
      'es.search.placeholder': 'Rechercher un e-service...',
      'es.search.button': 'Rechercher',
      'es.group.label': '🗂️ Catégorie :',
      'es.group.all': '✨ Tous',
      'es.group.utilities': '🔌💧 Gaz, électricité et eau',
      'es.group.poste': '📮 Poste d’Algérie',
      'es.group.telecom': '📡 Algérie Télécom & Téléphone',
      'es.group.administration': '🏛️ État civil & Administration',
      'es.group.education': '📚 Éducation',
      'es.group.university': '🎓 Services universitaires',
      'es.group.vocational': '🛠️ Formation professionnelle',
      'es.group.realestate': '🏠 Immobilier & Cadastre',
      'es.group.social': '👥 Sécurité sociale & Retraite',
      'es.group.fiscal': '💳 Services fiscaux',
      'es.group.justice': '⚖️ Justice & Tribunaux',
      'es.group.transport': '🚌✈️ Transport & Réservations',
      'es.group.employment': '💼 Emploi & Travail',
      'es.group.insurance': '🛡️ Assurance',
      'es.group.health': '🏥 Santé',
      'es.group.autoentre': '🚀 Auto-entrepreneur',
      'cat.breadcrumb.home': '🏠 Accueil',
      'cat.search.placeholder': 'Rechercher dans cette catégorie...',
      'cat.search.button': 'Rechercher',
      'cat.title.fallback': 'Catégorie',
      'svc.breadcrumb.home': '🏠 Accueil',
      'svc.breadcrumb.default': 'Détails du service',
      'svc.external': '⚡ Service en ligne',
      'svc.desc': '📝 Description',
      'svc.map': '🗺️ Localisation sur la carte',
      'svc.form.contact': '📞 Contactez-nous',
      'form.name': '👤 Nom',
      'form.email': '✉️ E-mail',
      'form.message': '✍️ Message',
      'form.submit': 'Envoyer',
      'contact.heading': '📨 Contactez-nous',
      'contact.subtitle': 'Vos suggestions, signalements et partenariats sont les bienvenus.',
      'about.heading': 'ℹ️ Qui sommes-nous',
      'about.p1': 'Dalil DZ est une plateforme algérienne qui facilite la recherche de services locaux fiables près de chez vous. Nous rassemblons les infos clés, avis et moyens de contact, avec une UX moderne compatible RTL.',
      'about.p2': 'Nous mettons les données à jour en continu et améliorons la recherche et l’affichage avec des icônes claires et un design propre et unifié.',
      'terms.title': 'Termes et conditions',
      'terms.section.acceptable': 'Utilisation acceptable',
      'terms.section.content': 'Contenu et responsabilité',
      'terms.section.ip': 'Propriété intellectuelle',
      'terms.section.changes': 'Modifications',
      'terms.p1': 'En utilisant Dalil DZ, vous acceptez les conditions suivantes. Veuillez les lire attentivement.',
      'terms.p2': 'Tout usage abusif du site, accès non autorisé ou collecte automatisée contraire à la politique est interdit.',
      'terms.p3': 'Nous visons l’exactitude ; les prestataires peuvent modifier des informations. Veuillez vérifier directement si nécessaire.',
      'terms.p4': 'Toutes les marques et droits d’auteur appartiennent à leurs propriétaires. Ne copiez pas sans autorisation.',
      'terms.p5': 'Nous pouvons mettre à jour ces conditions de temps à autre. L’actualisation s’applique dès sa publication.',
      'privacy.title': 'Politique de confidentialité',
      'privacy.p1': 'Nous respectons votre vie privée. Ce document explique les informations susceptibles d’être collectées, pourquoi et comment elles sont utilisées.',
      'privacy.section.collect': 'Informations collectées',
      'privacy.section.cookies': 'Cookies',
      'privacy.section.share': 'Partage des données',
      'privacy.section.contact': 'Contact',
      'privacy.li1': 'Données d’usage générales pour améliorer les performances et l’UX.',
      'privacy.li2': 'Informations fournies volontairement par l’utilisateur (formulaire de contact).',
      'privacy.li3': 'Des services tiers comme Google AdSense peuvent utiliser des cookies pour afficher des publicités.',
      'privacy.p2': 'Nous utilisons des cookies pour améliorer votre expérience. Gérez vos préférences via la barre de consentement.',
      'privacy.p3': 'Nous ne vendons pas vos données. Nous pouvons partager des données anonymisées avec des services d’analyse/publicité.',
      'privacy.p4': 'Pour toute question relative à la confidentialité, contactez-nous à',
    }
  };

  const getLang = () => localStorage.getItem(STORAGE_KEY) || 'ar';
  const setLang = (lang) => { localStorage.setItem(STORAGE_KEY, lang); };

  function applyLang(lang) {
    const dict = translations[lang] || translations.ar;

    // html direction and lang
    const html = document.documentElement;
    html.setAttribute('lang', dict.lang);
    html.setAttribute('dir', dict.dir);

    // Update common navigation by selector (works across pages if present)
    const sel = {
      navCategories: 'a[href="#categories"], a[href="index.html#categories"]',
      navEServices: 'a[href="e-services.html"]',
      navAbout: 'a[href="about.html"]',
      navContact: 'a[href="contact.html"]',
      mobileThemeBtn: '#mobileMenu [data-theme-toggle]',
      desktopThemeBtn: 'header [data-theme-toggle]'
    };

    try { document.querySelectorAll(sel.navCategories).forEach(el => el.textContent = dict['nav.categories']); } catch {}
    try { const el = document.querySelector(sel.navEServices); if (el) el.textContent = dict['nav.eservices']; } catch {}
    try { const el = document.querySelector(sel.navAbout); if (el) el.textContent = dict['nav.about']; } catch {}
    try { const el = document.querySelector(sel.navContact); if (el) el.textContent = dict['nav.contact']; } catch {}
    try { const el = document.querySelector(sel.mobileThemeBtn); if (el) el.textContent = dict['nav.theme']; } catch {}
    // Title
    if (document.title && document.title.includes('Dalil DZ')) {
      document.title = dict['site.title'];
    }

    // Footer links
    try { const el = document.querySelector('footer a[href="privacy.html"]'); if (el) el.textContent = dict['footer.privacy']; } catch {}
    try { const el = document.querySelector('footer a[href="terms.html"]'); if (el) el.textContent = dict['footer.terms']; } catch {}
    try { const el = document.querySelector('footer a[href="contact.html"]'); if (el) el.textContent = dict['footer.contact']; } catch {}
    try { const el = document.querySelector('footer p'); if (el && el.textContent.includes('دليل') || el.textContent.includes('Local services') || el.textContent.includes('Annuaire')) el.textContent = dict['footer.tagline']; } catch {}

    // Home page specific (if elements exist)
    const heroTitle = document.querySelector('section h1');
    if (heroTitle && heroTitle.textContent.includes('دليل') || (heroTitle && heroTitle.textContent.includes('Algeria'))) {
      heroTitle.innerHTML = `<span class="me-2 align-middle">🧭</span><span>${dict['home.hero.title'].replace('🧭 ', '')}</span>`;
    }
    const heroSubtitle = document.querySelector('section p');
    if (heroSubtitle && (heroSubtitle.textContent.includes('ابحث') || heroSubtitle.textContent.includes('Find') || heroSubtitle.textContent.includes('Trouvez'))) {
      heroSubtitle.textContent = dict['home.hero.subtitle'];
    }
    const searchLabel = document.querySelector('label[for="q"].sr-only'); if (searchLabel) searchLabel.textContent = dict['home.search.label'];
    const searchInput = document.querySelector('#q'); if (searchInput) searchInput.placeholder = dict['home.search.placeholder'];
    const searchBtn = document.querySelector('form#homeSearchForm button[type="submit"]'); if (searchBtn) searchBtn.textContent = dict['home.search.button'];

    const catTitle = document.querySelector('#categories + section h2, #categories h2');
    const categoriesSection = document.querySelector('#categories');
    if (categoriesSection) {
      const h2 = categoriesSection.querySelector('h2'); if (h2) h2.textContent = dict['home.categories.title'];
      const viewAll = categoriesSection.querySelector('a[href="e-services.html"]'); if (viewAll) viewAll.textContent = dict['home.categories.viewall'];
    }

    const featuredWrap = document.querySelector('section.bg-white, section.dark\\:bg-gray-900');
    if (featuredWrap) {
      const h2 = featuredWrap.querySelector('h2'); if (h2) h2.textContent = dict['home.featured.title'];
      const groupLabel = document.querySelector('label[for="homeServicesGroup"]'); if (groupLabel) groupLabel.textContent = dict['home.featured.group'];
      const sortLabel = document.querySelector('label[for="homeServicesSort"]'); if (sortLabel) sortLabel.textContent = dict['home.featured.sort'];
      const sort = document.getElementById('homeServicesSort');
      if (sort) {
        const opts = sort.options;
        if (opts[0]) opts[0].textContent = dict['home.featured.sort.top'];
        if (opts[1]) opts[1].textContent = dict['home.featured.sort.az'];
        if (opts[2]) opts[2].textContent = dict['home.featured.sort.za'];
      }
    }

    // E-Services page updates
    (function es() {
      const esHeader = document.querySelector('#esSearchForm')?.closest('section');
      if (!esHeader) return;
      const title = esHeader.querySelector('h1 span:last-child'); if (title) title.textContent = dict['es.title'].replace('⚡ ', '');
      const sub = esHeader.querySelector('p'); if (sub) sub.textContent = dict['es.subtitle'];
      const l = esHeader.querySelector('label[for="esq"]'); if (l) l.textContent = dict['es.search.label'];
      const q = esHeader.querySelector('#esq'); if (q) q.placeholder = dict['es.search.placeholder'];
      const btn = esHeader.querySelector('form#esSearchForm button[type="submit"]'); if (btn) btn.textContent = dict['es.search.button'];
      const grpLabel = document.querySelector('label[for="esGroup"]'); if (grpLabel) grpLabel.textContent = dict['es.group.label'];
      const grp = document.getElementById('esGroup');
      if (grp) {
        const map = [
          'es.group.all', 'es.group.utilities', 'es.group.poste', 'es.group.telecom', 'es.group.administration', 'es.group.education',
          'es.group.university', 'es.group.vocational', 'es.group.realestate', 'es.group.social', 'es.group.fiscal', 'es.group.justice',
          'es.group.transport', 'es.group.employment', 'es.group.insurance', 'es.group.health', 'es.group.autoentre'
        ];
        [...grp.options].forEach((opt, i) => { if (map[i] && dict[map[i]]) opt.textContent = dict[map[i]]; });
      }
    })();

    // Category page updates
    (function cat() {
      const crumbHome = document.querySelector('nav a[href="index.html"]'); if (crumbHome) crumbHome.textContent = dict['cat.breadcrumb.home'];
      const searchInput = document.getElementById('searchInput'); if (searchInput) searchInput.placeholder = dict['cat.search.placeholder'];
      const searchBtn2 = document.querySelector('button.rounded-lg.bg-primary'); if (searchBtn2 && searchBtn2.textContent.trim().match(/^بحث|Search|Rechercher$/)) searchBtn2.textContent = dict['cat.search.button'];
      const catTitle = document.getElementById('categoryTitle'); if (catTitle && ['التصنيف','Category','Catégorie'].includes(catTitle.textContent.trim())) catTitle.textContent = dict['cat.title.fallback'];
    })();

    // Service page updates
    (function svc() {
      const crumbHome = document.querySelector('nav a[href="index.html"]'); if (crumbHome) crumbHome.textContent = dict['svc.breadcrumb.home'];
      const bc = document.getElementById('breadcrumbName'); if (bc && ['تفاصيل الخدمة','Service Details','Détails du service'].includes(bc.textContent.trim())) bc.textContent = dict['svc.breadcrumb.default'];
      const badge = document.getElementById('svcExternalBadge'); if (badge) badge.textContent = dict['svc.external'];
      const descH2 = document.querySelector('article h2'); if (descH2 && descH2.textContent.includes('📝')) descH2.textContent = dict['svc.desc'];
      const mapH2 = document.querySelector('article h2 + p') ? document.querySelectorAll('article h2')[1] : document.querySelectorAll('article h2')[1];
      const allH2 = document.querySelectorAll('article h2'); if (allH2[1]) allH2[1].textContent = dict['svc.map'];
      const sideH2 = document.querySelector('aside h2'); if (sideH2) sideH2.textContent = dict['svc.form.contact'];
      const ln = document.querySelector('label[for="name"]'); if (ln) ln.textContent = dict['form.name'];
      const le = document.querySelector('label[for="email"]'); if (le) le.textContent = dict['form.email'];
      const lm = document.querySelector('label[for="message"]'); if (lm) lm.textContent = dict['form.message'];
      const sb = document.getElementById('contactSubmit'); if (sb) sb.textContent = dict['form.submit'];
    })();

    // About page updates
    (function about() {
      const h = document.querySelector('main h1'); if (h && h.textContent.includes('من نحن') || (h && h.textContent.includes('About'))) h.textContent = dict['about.heading'];
      const ps = document.querySelectorAll('main p');
      if (ps.length >= 2 && (ps[0].textContent.includes('Dalil DZ منصة') || ps[0].textContent.includes('Dalil DZ is') || ps[0].textContent.includes('Dalil DZ est'))) {
        ps[0].textContent = dict['about.p1'];
        if (ps[1]) ps[1].textContent = dict['about.p2'];
      }
    })();

    // Contact page updates
    (function contact() {
      const h = document.querySelector('main h1'); if (h && (h.textContent.includes('اتصل بنا') || h.textContent.includes('Contact'))) h.textContent = dict['contact.heading'];
      const p = h ? h.nextElementSibling : null; if (p && p.tagName === 'P') p.textContent = dict['contact.subtitle'];
      const ln = document.querySelector('#contactForm label:nth-of-type(1)'); if (ln && (ln.textContent.includes('الاسم') || ln.textContent.includes('Name'))) ln.textContent = dict['form.name'];
      const le = document.querySelector('#contactForm label:nth-of-type(2)'); if (le && (le.textContent.includes('البريد') || le.textContent.includes('Email'))) le.textContent = dict['form.email'];
      const lm = document.querySelector('#contactForm label:nth-of-type(3)'); if (lm && (lm.textContent.includes('الرسالة') || lm.textContent.includes('Message'))) lm.textContent = dict['form.message'];
      const sb = document.getElementById('contactSubmit'); if (sb) sb.textContent = dict['form.submit'];
    })();

    // Terms page updates
    (function terms() {
      if (!document.title.includes('الشروط') && !document.title.toLowerCase().includes('terms')) return;
      const h1 = document.querySelector('main h1'); if (h1) h1.textContent = dict['terms.title'];
      const hs = document.querySelectorAll('main h2');
      if (hs[0]) hs[0].textContent = dict['terms.section.acceptable'];
      if (hs[1]) hs[1].textContent = dict['terms.section.content'];
      if (hs[2]) hs[2].textContent = dict['terms.section.ip'];
      if (hs[3]) hs[3].textContent = dict['terms.section.changes'];
      const ps = document.querySelectorAll('main p');
      if (ps[0]) ps[0].textContent = dict['terms.p1'];
      if (ps[1]) ps[1].textContent = dict['terms.p2'];
      if (ps[2]) ps[2].textContent = dict['terms.p3'];
      if (ps[3]) ps[3].textContent = dict['terms.p4'];
      if (ps[4]) ps[4].textContent = dict['terms.p5'];
    })();

    // Privacy page updates
    (function privacy() {
      if (!document.title.includes('سياسة الخصوصية') && !document.title.toLowerCase().includes('privacy')) return;
      const h1 = document.querySelector('main h1'); if (h1) h1.textContent = dict['privacy.title'];
      const ps = document.querySelectorAll('main p');
      if (ps[0]) ps[0].textContent = dict['privacy.p1'];
      const h2s = document.querySelectorAll('main h2');
      if (h2s[0]) h2s[0].textContent = dict['privacy.section.collect'];
      const lis = document.querySelectorAll('main ul li');
      if (lis[0]) lis[0].textContent = dict['privacy.li1'];
      if (lis[1]) lis[1].textContent = dict['privacy.li2'];
      if (lis[2]) lis[2].textContent = dict['privacy.li3'];
      if (h2s[1]) h2s[1].textContent = dict['privacy.section.cookies'];
      if (ps[1]) ps[1].textContent = dict['privacy.p2'];
      if (h2s[2]) h2s[2].textContent = dict['privacy.section.share'];
      if (ps[2]) ps[2].textContent = dict['privacy.p3'];
      if (h2s[3]) h2s[3].textContent = dict['privacy.section.contact'];
      if (ps[3]) {
        const a = ps[3].querySelector('a');
        ps[3].textContent = `${dict['privacy.p4']} `;
        if (a) { ps[3].appendChild(a); }
      }
    })();

    // Breadcrumb common home text, if any generic match remains
    document.querySelectorAll('nav a[href="index.html"]').forEach(a => { if (a) a.textContent = dict['common.home']; });
  }

  function buildLangSwitcher() {
    const lang = getLang();
    const container = document.createElement('div');
    container.className = 'relative';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'tap px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2';
    btn.setAttribute('aria-label', 'Language');

    const flagFor = (l) => l === 'en' ? '🇬🇧' : (l === 'fr' ? '🇫🇷' : '🇩🇿');
    btn.textContent = flagFor(lang);

    const menu = document.createElement('div');
    menu.className = 'absolute right-0 mt-2 w-28 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hidden';
    menu.innerHTML = [
      { l: 'ar', label: '🇩🇿 العربية' },
      { l: 'en', label: '🇬🇧 English' },
      { l: 'fr', label: '🇫🇷 Français' }
    ].map(i => `<button data-lang="${i.l}" class="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">${i.label}</button>`).join('');

    btn.addEventListener('click', () => { menu.classList.toggle('hidden'); });
    menu.addEventListener('click', (e) => {
      const target = e.target.closest('button[data-lang]');
      if (!target) return;
      const selected = target.getAttribute('data-lang');
      setLang(selected);
      btn.textContent = flagFor(selected);
      menu.classList.add('hidden');
      applyLang(selected);
    });

    container.appendChild(btn);
    container.appendChild(menu);

    // Place in desktop nav
    const desktopNav = document.querySelector('header nav');
    if (desktopNav) {
      const wrap = document.createElement('div');
      wrap.className = 'flex items-center';
      wrap.appendChild(container.cloneNode(true)); // shallow clone
      desktopNav.appendChild(container);
    }

    // Place in mobile menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
      const slot = document.createElement('div');
      slot.className = 'flex items-center gap-2';
      const mobileContainer = container.cloneNode(true);
      // Rebind events for cloned nodes
      const rebuild = () => {
        slot.innerHTML = '';
        const c = document.createElement('div'); c.className = 'relative';
        const b = document.createElement('button'); b.type = 'button'; b.className = 'tap px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800';
        const f = (l) => l === 'en' ? '🇬🇧' : (l === 'fr' ? '🇫🇷' : '🇩🇿'); b.textContent = f(getLang());
        const m = document.createElement('div'); m.className = 'absolute right-0 mt-2 w-28 rounded border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hidden';
        m.innerHTML = [
          { l: 'ar', label: '🇩🇿 العربية' },
          { l: 'en', label: '🇬🇧 English' },
          { l: 'fr', label: '🇫🇷 Français' }
        ].map(i => `<button data-lang="${i.l}" class="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">${i.label}</button>`).join('');
        b.addEventListener('click', () => { m.classList.toggle('hidden'); });
        m.addEventListener('click', (e) => {
          const t = e.target.closest('button[data-lang]'); if (!t) return;
          const sel = t.getAttribute('data-lang'); setLang(sel); b.textContent = f(sel); m.classList.add('hidden'); applyLang(sel);
        });
        c.appendChild(b); c.appendChild(m); slot.appendChild(c);
      };
      rebuild();
      mobileMenu.querySelector('.py-3')?.appendChild(slot);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const lang = getLang();
    applyLang(lang);
    buildLangSwitcher();
  });
})();
