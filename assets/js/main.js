/* Dalil DZ - Minimal JS powering homepage, category, and service pages */
(function () {
  'use strict';

  // --- i18n helpers (reads selection from i18n.js storage) ---
  const LANG_STORAGE_KEY = 'dalil_lang';
  function currentLang() {
    return (typeof localStorage !== 'undefined' && localStorage.getItem(LANG_STORAGE_KEY)) || 'ar';
  }
  function locField(obj, base) {
    const lang = currentLang();
    if (lang === 'en' && obj?.[`${base}_en`]) return obj[`${base}_en`];
    if (lang === 'fr' && obj?.[`${base}_fr`]) return obj[`${base}_fr`];
    return obj?.[base];
  }
  function locCatName(c) { return locField(c, 'name'); }
  function esBadgeLabel() {
    const lang = currentLang();
    if (lang === 'en') return '⚡ E-Service';
    if (lang === 'fr') return '⚡ Service électronique';
    return '⚡ خدمة إلكترونية';
  }

  // --- Data (replace with real backend later) ---
  let categories = [
    { slug: 'restaurants',   name: 'مطاعم',            name_en: 'Restaurants',         name_fr: 'Restaurants',             icon: '🍽️', image: 'https://via.placeholder.com/600x400?text=Restaurants' },
    { slug: 'cafes',         name: 'مقاهي',            name_en: 'Cafes',               name_fr: 'Cafés',                   icon: '☕',  image: 'https://via.placeholder.com/600x400?text=Cafes' },
    { slug: 'schools',       name: 'مدارس',            name_en: 'Schools',             name_fr: 'Écoles',                  icon: '🏫', image: 'https://via.placeholder.com/600x400?text=Schools' },
    { slug: 'universities',  name: 'جامعات',           name_en: 'Universities',        name_fr: 'Universités',             icon: '🎓', image: 'https://via.placeholder.com/600x400?text=Universities' },
    { slug: 'car-rentals',   name: 'كراء السيارات',     name_en: 'Car Rentals',         name_fr: 'Location de voitures',    icon: '🚗', image: 'https://via.placeholder.com/600x400?text=Car+Rentals' },
    { slug: 'mechanics',     name: 'ميكانيك',          name_en: 'Mechanics',           name_fr: 'Mécanique',               icon: '🔧', image: 'https://via.placeholder.com/600x400?text=Mechanics' },
    { slug: 'doctors',       name: 'أطباء',            name_en: 'Doctors',             name_fr: 'Médecins',                icon: '🩺', image: 'https://via.placeholder.com/600x400?text=Doctors' },
    { slug: 'pharmacies',    name: 'صيدليات',          name_en: 'Pharmacies',          name_fr: 'Pharmacies',              icon: '💊', image: 'https://via.placeholder.com/600x400?text=Pharmacies' },
    { slug: 'lawyers',       name: 'محامون',           name_en: 'Lawyers',             name_fr: 'Avocats',                 icon: '⚖️', image: 'https://via.placeholder.com/600x400?text=Lawyers' },
    { slug: 'notaries',      name: 'موثقون',           name_en: 'Notaries',            name_fr: 'Notaires',                icon: '🖋️', image: 'https://via.placeholder.com/600x400?text=Notaries' },
    { slug: 'hotels',        name: 'فنادق',            name_en: 'Hotels',              name_fr: 'Hôtels',                  icon: '🏨', image: 'https://via.placeholder.com/600x400?text=Hotels' },
    { slug: 'travel',        name: 'سفر وسياحة',       name_en: 'Travel & Tourism',    name_fr: 'Voyages et tourisme',     icon: '✈️', image: 'https://via.placeholder.com/600x400?text=Travel' },
    { slug: 'it-services',   name: 'خدمات تقنية',       name_en: 'IT Services',         name_fr: 'Services informatiques',  icon: '💻', image: 'https://via.placeholder.com/600x400?text=IT+Services' },
    { slug: 'e-services',    name: 'خدمات إلكترونية',   name_en: 'E-Services',          name_fr: 'Services électroniques',  icon: '⚡', image: 'https://via.placeholder.com/600x400?text=E-Services' },
  ];

  let services = [
    {
      id: 'svc-1',
      name: 'مطعم القصبة',
      category: 'restaurants',
      rating: 4.6,
      address: 'حي القصبة، الجزائر العاصمة',
      phone: '+213555001122',
      image: 'https://via.placeholder.com/600x400?text=Restaurant',
      description: 'تشكيلة شهية من الأطباق التقليدية والحديثة مع أجواء عائلية.',
      lat: 36.785, lng: 3.060
    },
    { id: 'svc-1b', name: 'قهوة المدينة', category: 'cafes', rating: 4.2, address: 'المدنية، العاصمة', phone: '+213555221133', image: 'https://via.placeholder.com/600x400?text=Cafe', description: 'قهوة مميزة وحلويات تقليدية.', lat: 36.75, lng: 3.06 },
    {
      id: 'svc-2',
      name: 'مدرسة النجاح',
      category: 'schools',
      rating: 4.4,
      address: 'باب الزوار، الجزائر العاصمة',
      phone: '+213555334455',
      image: 'https://via.placeholder.com/600x400?text=School',
      description: 'تعليم عصري مع كادر مؤهل ومناهج حديثة.',
      lat: 36.713, lng: 3.212
    },
    { id: 'svc-2b', name: 'جامعة وهران', category: 'universities', rating: 4.1, address: 'وهران', phone: '+213555667700', image: 'https://via.placeholder.com/600x400?text=University', description: 'تخصصات متعددة وبحث علمي.', lat: 35.702, lng: -0.649 },
    {
      id: 'svc-3',
      name: 'كراء سيارات الطريق السريع',
      category: 'car-rentals',
      rating: 4.2,
      address: 'وهران وسط المدينة',
      phone: '+213555778899',
      image: 'https://via.placeholder.com/600x400?text=Car+Rental',
      description: 'أسعار تنافسية ومجموعة واسعة من السيارات.',
      lat: 35.697, lng: -0.634
    },
    { id: 'svc-3b', name: 'ميكانيك بومرداس', category: 'mechanics', rating: 4.5, address: 'بومرداس', phone: '+213555991122', image: 'https://via.placeholder.com/600x400?text=Mechanic', description: 'صيانة سيارات سريعة وموثوقة.', lat: 36.76, lng: 3.47 },
    {
      id: 'svc-4',
      name: 'عيادة الشفاء',
      category: 'doctors',
      rating: 4.8,
      address: 'سطيف - حي الهضاب',
      phone: '+213555667788',
      image: 'https://via.placeholder.com/600x400?text=Clinic',
      description: 'خدمات طبية شاملة مع أطباء مختصين.',
      lat: 36.19, lng: 5.41
    },
    { id: 'svc-4b', name: 'صيدلية الخير', category: 'pharmacies', rating: 4.6, address: 'البليدة', phone: '+213555998877', image: 'https://via.placeholder.com/600x400?text=Pharmacy', description: 'أدوية ومستحضرات طبية.', lat: 36.47, lng: 2.83 },
    {
      id: 'svc-5',
      name: 'مكتب المحامي العدل',
      category: 'lawyers',
      rating: 4.3,
      address: 'قسنطينة - وسط المدينة',
      phone: '+213555990011',
      image: 'https://via.placeholder.com/600x400?text=Law+Office',
      description: 'استشارات قانونية و تمثيل قضائي.',
      lat: 36.365, lng: 6.614
    },
    { id: 'svc-5b', name: 'مكتب موثق الشرق', category: 'notaries', rating: 4.2, address: 'عنابة', phone: '+213555445566', image: 'https://via.placeholder.com/600x400?text=Notary', description: 'توثيق عقود ومعاملات.', lat: 36.9, lng: 7.77 },
    {
      id: 'svc-6',
      name: 'فندق السلام',
      category: 'hotels',
      rating: 4.1,
      address: 'تلمسان - الحديقة',
      phone: '+213555112233',
      image: 'https://via.placeholder.com/600x400?text=Hotel',
      description: 'إقامة مريحة وخدمات راقية.',
      lat: 34.888, lng: -1.316
    }
    ,{ id: 'svc-6b', name: 'وكالة سفر الأطلس', category: 'travel', rating: 4.5, address: 'الجزائر العاصمة', phone: '+213555332211', image: 'https://via.placeholder.com/600x400?text=Travel', description: 'حجوزات طيران وفنادق.', lat: 36.76, lng: 3.05 }
    ,{ id: 'svc-7', name: 'خدمة دفع الفواتير - Algérie Télécom', category: 'e-services', rating: 4.4, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Bill+Payment', description: 'دفع فواتير الهاتف والإنترنت عبر الإنترنت.', externalUrl: 'https://paiement.algerietelecom.dz/AR/index.php?p=facture_paiement' }
    ,{ id: 'svc-8', name: 'تعبئة الرصيد (فليكسي) - Djezzy', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Flexy', description: 'تعبئة رصيد الهاتف المحمول عبر الإنترنت.', externalUrl: 'https://moncompte.djezzy.dz/ar/guest/recharge' }
    ,{ id: 'svc-9', name: 'CCP بريد الجزائر - كشف الحساب', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CCP', description: 'متابعة الحسابات وسحب كشف الحساب الإلكتروني.', lat: 36.76, lng: 3.07 }
    ,{ id: 'svc-10', name: 'شحن الإنترنت - 4G LTE', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Internet+Topup', description: 'شراء باقات إنترنت مسبقة الدفع.', lat: 36.74, lng: 3.04 }
    ,{ id: 'svc-11', name: 'Ooredoo Flexy', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Ooredoo+Flexy', description: 'تعبئة رصيد Ooredoo بسهولة.', externalUrl: 'http://estorm.ooredoo.dz/' }
    ,{ id: 'svc-12', name: 'Mobilis Flexy', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Mobilis+Flexy', description: 'تعبئة رصيد Mobilis عبر الإنترنت.', externalUrl: 'https://e-paiement.mobilis.dz/' }
    ,{ id: 'svc-13', name: 'حجز تذاكر الحافلات', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Bus+Tickets', description: 'حجز وتأكيد تذاكر السفر.', lat: 36.68, lng: 3.00 }
    ,{ id: 'svc-14', name: 'الدفع الإلكتروني عبر البطاقة الذهبية', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Edahabia', description: 'إتمام المشتريات والخدمات عبر البطاقة الذهبية.', externalUrl: 'https://baridinet.poste.dz/' }
    ,{ id: 'svc-15', name: 'دفع فواتير الكهرباء والغاز - سونلغاز', category: 'e-services', rating: 4.4, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Sonelgaz', description: 'تسديد فواتير الكهرباء والغاز عبر الإنترنت.', externalUrl: 'https://epayement.elit.dz/payementFacture.xhtml' }
    ,{ id: 'svc-16', name: 'الخدمات الجبـائـيـة الإلكترونية', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Taxes', description: 'التصريح والدفع الضريبي عبر الإنترنت.', externalUrl: 'https://www.mfdgi.gov.dz/' }
    ,{ id: 'svc-17', name: 'منصة حجز المواعيد الصحية', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Health+Appointments', description: 'حجز مواعيد لدى العيادات والمستشفيات.', externalUrl: 'https://rdv.sante.gov.dz/' }
    ,{ id: 'svc-21', name: 'فتح حساب بريدي CCP', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية - بريد الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CCP', description: 'فتح حساب بريدي ومتابعة الطلب.', externalUrl: 'https://ccpnet.poste.dz/init' }
    ,{ id: 'svc-22', name: 'كشف رصيد CCP', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية - بريد الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CCP+Balance', description: 'الاطلاع على رصيد الحساب الجاري.', externalUrl: 'https://eccp.poste.dz/login' }
    ,{ id: 'svc-23', name: 'طلب البطاقة الذهبية وتتبعها', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية - بريد الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Edahabia+Card', description: 'طلب بطاقة Edahabia وتتبعها.', externalUrl: 'https://eccp.poste.dz/commande-edahabia' }
    ,{ id: 'svc-24', name: 'بريدي واب BaridiWeb', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية - بريد الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BaridiWeb', description: 'خدمات بريدية عبر الويب.', externalUrl: 'https://baridiweb.poste.dz/' }
    ,{ id: 'svc-25', name: 'تتبع الطرود البريدية', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية - بريد الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Tracking', description: 'تتبع الشحنات والطرود.', externalUrl: 'https://aptracking.poste.dz/' }
    ,{ id: 'svc-26', name: 'تعبئة إنترنت Idoom', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية - اتصالات الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Internet+Recharge', description: 'تعبئة حساب الإنترنت.', externalUrl: 'https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=in' }
    ,{ id: 'svc-27', name: 'تعبئة Idoom 4G LTE', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية - اتصالات الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=4G+Recharge', description: 'تعبئة 4G LTE.', externalUrl: 'https://paiement.algerietelecom.dz/AR/index.php?p=internet_recharge&pr=4g' }
    ,{ id: 'svc-28', name: 'بطاقات تعبئة الإنترنت', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية - اتصالات الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Voucher+Internet', description: 'تعبئة الإنترنت عبر البطاقات.', externalUrl: 'https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=in' }
    ,{ id: 'svc-29', name: 'بطاقات تعبئة 4G LTE', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية - اتصالات الجزائر', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Voucher+4G', description: 'تعبئة 4G عبر البطاقات.', externalUrl: 'https://paiement.algerietelecom.dz/AR/index.php?p=voucher_internet&produit=4g' }
    ,{ id: 'svc-18', name: 'مركز صيانة الحاسوب - الجزائر', category: 'it-services', rating: 4.6, address: 'الجزائر العاصمة', phone: '+213555445599', image: 'https://via.placeholder.com/600x400?text=IT+Repair', description: 'صيانة وبرمجيات وأمن معلومات.', lat: 36.75, lng: 3.06 }
    ,{ id: 'svc-19', name: 'مطعم تلمسان الذهبي', category: 'restaurants', rating: 4.5, address: 'تلمسان', phone: '+213555664433', image: 'https://via.placeholder.com/600x400?text=Restaurant', description: 'أكلات محلية مميزة.', lat: 34.89, lng: -1.31 }
    ,{ id: 'svc-20', name: 'فندق عنابة بلازا', category: 'hotels', rating: 4.3, address: 'عنابة', phone: '+213555761234', image: 'https://via.placeholder.com/600x400?text=Hotel', description: 'غرف فاخرة وخدمة رائعة.', lat: 36.9, lng: 7.76 }
  ];

  // --- Dynamic Data Loader (JSON + localStorage) ---
  const CAT_KEY = 'dalildz_categories_json';
  const SVC_KEY = 'dalildz_services_json';
  const RELOAD_ONCE = 'dalildz_data_reloaded_once';

  function safeParseJSON(str) { try { return JSON.parse(str); } catch { return null; } }
  function isNonEmptyArray(a) { return Array.isArray(a) && a.length > 0; }

  // 1) Read cached data now but apply later (after default dataset is fully built)
  const cachedCats = safeParseJSON(localStorage.getItem(CAT_KEY));
  const cachedSvcs = safeParseJSON(localStorage.getItem(SVC_KEY));
  const pendingCats = isNonEmptyArray(cachedCats) ? cachedCats : null;
  const pendingSvcs = isNonEmptyArray(cachedSvcs) ? cachedSvcs : null;

  // Defer application to after the full script (and data pushes) finish executing
  try {
    setTimeout(() => {
      try {
        if (pendingCats) categories = pendingCats;
        if (pendingSvcs) services = pendingSvcs;
      } catch (_) { /* no-op */ }
    }, 0);
  } catch (_) { /* no-op */ }

  // 2) Background refresh from assets/data/*.json
  (async function refreshDataFromFiles() {
    try {
      const [cRes, sRes] = await Promise.allSettled([
        fetch('assets/data/categories.json', { cache: 'no-cache' }),
        fetch('assets/data/services.json', { cache: 'no-cache' })
      ]);

      async function getJSON(res) {
        return (res.status === 'fulfilled' && res.value.ok) ? await res.value.json().catch(() => null) : null;
      }
      const fileCats = await getJSON(cRes);
      const fileSvcs = await getJSON(sRes);

      let updated = false;
      if (isNonEmptyArray(fileCats)) {
        const prev = localStorage.getItem(CAT_KEY);
        const next = JSON.stringify(fileCats);
        if (prev !== next) { localStorage.setItem(CAT_KEY, next); updated = true; }
      }
      if (isNonEmptyArray(fileSvcs)) {
        const prev = localStorage.getItem(SVC_KEY);
        const next = JSON.stringify(fileSvcs);
        if (prev !== next) { localStorage.setItem(SVC_KEY, next); updated = true; }
      }

      // First-time apply: reload once to ensure the UI renders with JSON data
      if (updated && !sessionStorage.getItem(RELOAD_ONCE)) {
        sessionStorage.setItem(RELOAD_ONCE, '1');
        try { location.reload(); } catch {}
      }
    } catch (e) {
      // Silent fail; fallback to embedded arrays
      console.warn('Data refresh failed:', e);
    }
  })();

  // 3) Expose facade for admin tools
  try {
    window.DalilData = {
      get categories() { return categories; },
      set categories(v) { if (Array.isArray(v)) { categories = v; localStorage.setItem(CAT_KEY, JSON.stringify(v)); } },
      get services() { return services; },
      set services(v) { if (Array.isArray(v)) { services = v; localStorage.setItem(SVC_KEY, JSON.stringify(v)); } },
      saveAll(cats, svcs) {
        if (Array.isArray(cats)) { categories = cats; localStorage.setItem(CAT_KEY, JSON.stringify(cats)); }
        if (Array.isArray(svcs)) { services = svcs; localStorage.setItem(SVC_KEY, JSON.stringify(svcs)); }
      }
    };
  } catch {}
  // --- Appended Algerian e-services extracted from portal ---
  // الدفع الإلكتروني للفواتير
  services.push(
    { id: 'es-001', name: 'دفع فواتير الجزائرية للمياه ADE', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ADE', description: 'تسديد فواتير الماء عبر الإنترنت.', externalUrl: 'https://www.ade.dz/e-paiement/' },
    { id: 'es-002', name: 'تطبيق Miyahimob - ADE', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Miyahimob', description: 'تطبيق متابعة الفواتير والخدمات للجزائرية للمياه.', externalUrl: 'https://play.google.com/store/apps/details?id=com.ade.adese&hl=ar' },
    { id: 'es-003', name: 'دفع فاتورة المياه سيال SEAAL', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=SEAAL', description: 'تسديد فواتير سيال عبر باريدينات.', externalUrl: 'https://baridinet.poste.dz/seaal' },
    { id: 'es-004', name: 'دفع كراء عدل AADL', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=AADL', description: 'دفع مستحقات كراء عدل.', externalUrl: 'https://www.aadlgestimmo.dz/epayement/View/index.php' },
    { id: 'es-005', name: 'OPGI - دفع الكراء', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=OPGI', description: 'الدفع الإلكتروني للكراء عبر OPGI.', externalUrl: 'https://www.opgiconstantine.dz/' },
    { id: 'es-006', name: 'الدفع الإلكتروني لوزارة التربية (BEM/BAC)', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Education+Pay', description: 'منصة دفع حقوق الامتحانات الوطنية.', externalUrl: 'https://epay.education.dz/auth' }
  );

  // بريد الجزائر
  services.push(
    { id: 'es-020', name: 'بريدي موب BaridiMob - تحميل التطبيق', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BaridiMob', description: 'تطبيق الخدمات المصرفية لبريد الجزائر.', externalUrl: 'https://play.google.com/store/apps/details?id=ru.bpc.mobilebank.bpc&hl=ar' },
    { id: 'es-021', name: 'شكاوي بريد الجزائر', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=AP+Reclamation', description: 'تقديم ومتابعة الشكاوى عبر الإنترنت.', externalUrl: 'https://reclamation.poste.dz/' }
  );

  // اتصالات الجزائر - فضاء وخدمات
  services.push(
    { id: 'es-040', name: 'فضاء الزبون اتصالات الجزائر', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=AT+Client', description: 'إنشاء/تسجيل الدخول لفضاء الزبون.', externalUrl: 'https://client.at.dz/ar' },
    { id: 'es-041', name: 'طلب التحويل إلى FTTH', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=FTTH', description: 'طلب التحويل ومتابعة إلى الألياف.', externalUrl: 'https://www.algerietelecom.dz/ar/page/migration-p232' },
    { id: 'es-042', name: 'البحث عن وكالتي - AT', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Agence', description: 'اعثر على أقرب وكالة لاتصالات الجزائر.', externalUrl: 'https://www.algerietelecom.dz/ar/page/trouver-mon-agence-p256' },
    { id: 'es-043', name: 'اكتشف رقم هاتفك الثابت FTTH', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=FTTH+Number', description: 'اكتشف رقم هاتفك الثابت.', externalUrl: 'https://www.algerietelecom.dz/ar/page/trouver-votre-numero-de-fixe-p268' },
    { id: 'es-044', name: 'تقديم طلب إلكتروني - AT', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Demande', description: 'إرسال طلبات إلكترونية لمختلف الخدمات.', externalUrl: 'https://www.algerietelecom.dz/ar/demande-na' },
    { id: 'es-045', name: 'الإبلاغ عن عطب - AT', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Derangement', description: 'تبليغ أعطال الخط أو الإنترنت.', externalUrl: 'https://www.algerietelecom.dz/ar/derangements' },
    { id: 'es-046', name: 'WEEK-END Boost - AT', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Boost', description: 'عروض نهاية الأسبوع.', externalUrl: 'https://www.algerietelecom.dz/ar/particuliers/week-end-boost-prod227' },
    { id: 'es-047', name: 'IDOOM Markit - AT', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Markit', description: 'تسويق منتجات IDOOM Markit.', externalUrl: 'https://www.algerietelecom.dz/ar/particuliers/week-end-boost-prod227' },
    { id: 'es-048', name: 'منصة معلم', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Moalim', description: 'التعلم الإلكتروني عبر منصة معلم.', externalUrl: 'https://www.moalim-dz.net/moalim_v2/login/index.php' },
    { id: 'es-049', name: 'المعلم Inkidia', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Inkidia', description: 'منصة تعليمية.', externalUrl: 'https://inkidia.com.dz/' },
    { id: 'es-050', name: 'تطبيق E-paiement - AT', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=AT+Epay', description: 'تطبيق الدفع الإلكتروني لاتصالات الجزائر.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.algerietelecom.rd.e_paiement&hl=ar' },
    { id: 'es-051', name: 'تطبيق My IDOOM - AT', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=My+IDOOM', description: 'تطبيق اتصالات الجزائر لإدارة الحساب.', externalUrl: 'https://play.google.com/store/apps/details?id=com.at.dz&hl=ar' }
  );

  // الإدارة المحلية
  services.push(
    { id: 'es-060', name: 'استخراج شهادة الميلاد', category: 'e-services', rating: 4.4, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=S12', description: 'خدمة استخراج شهادة الميلاد.', externalUrl: 'https://etatcivil.interieur.gov.dz/' },
    { id: 'es-061', name: 'استخراج عقد الزواج', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Mariage', description: 'طلب عقد الزواج عبر الإنترنت.', externalUrl: 'https://etatcivil.interieur.gov.dz/ActeMariage/' },
    { id: 'es-062', name: 'استخراج الميلاد S12', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=S12+', description: 'طلب شهادة الميلاد الخاصة S12.', externalUrl: "https://demande12s.interieur.gov.dz/Ar/WFDemande.aspx" },
    { id: 'es-063', name: 'استخراج شهادة الوفاة', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Deces', description: 'طلب شهادة الوفاة عبر الإنترنت.', externalUrl: 'https://etatcivil.interieur.gov.dz/ActeDeces/' },
    { id: 'es-064', name: 'طلب بطاقة التعريف البيومترية', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CNI', description: 'طلب بطاقة التعريف البيومترية.', externalUrl: "https://passeport.interieur.gov.dz/Ar/DemandeCNIBE/Demander%20la%20carte%20d'identit%C3%A9%20en%20ligne" },
    { id: 'es-065', name: 'طلب جواز السفر البيومتري', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Passport', description: 'طلب جواز السفر البيومتري.', externalUrl: 'https://passeport.interieur.gov.dz/Ar/Inscription/BaBou' },
    { id: 'es-066', name: 'الشباك عن بعد', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Guichet', description: 'منصة الشباك عن بعد للخدمات الإدارية.', externalUrl: 'https://prestations.interieur.gov.dz/guichet/' },
    { id: 'es-067', name: 'العرائض والشكاوى – الجماعات المحلية', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Reclamations', description: 'إرسال عريضتك أو شكواك.', externalUrl: 'https://www.interieur.gov.dz/index.php/ar/component/annuaire/?view=contacter_nous_ar' }
  );

  // التربية والتعليم
  services.push(
    { id: 'es-080', name: 'فضاء الأستاذ - Ostad', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Ostad', description: 'منصة رقمية للأساتذة.', externalUrl: 'https://ostad.education.dz/auth' },
    { id: 'es-081', name: 'تقييم المكتسبات - Taqiim', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Taqiim', description: 'منصة تقييم مكتسبات التلاميذ.', externalUrl: 'https://taqiim.education.dz/' },
    { id: 'es-082', name: 'توظيف الأساتذة المتعاقدين', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Tawdif', description: 'منصة توظيف الأساتذة.', externalUrl: 'https://tawdif.education.dz/' },
    { id: 'es-083', name: 'المنصة الرقمية للتوظيف - ONEC', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ONEC+Concours', description: 'التسجيل في مسابقات التوظيف.', externalUrl: 'https://concour.onec.dz/' },
    { id: 'es-084', name: 'خدمة فضاء الأولياء', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Awlyaa', description: 'متابعة النتائج والملفات المدرسية.', externalUrl: 'https://awlyaa.education.dz/' },
    { id: 'es-085', name: 'تحضير الفروض والاختبارات', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=DZ+Exams', description: 'موارد تعليمية للتمارين والفروض.', externalUrl: 'https://www.dzexams.com/' },
    { id: 'es-086', name: 'تسجيل شهادة التعليم المتوسط BEM', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BEM', description: 'تسجيل شهادة التعليم المتوسط.', externalUrl: 'https://bem.onec.dz/' },
    { id: 'es-087', name: 'تسجيل شهادة البكالوريا BAC', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BAC', description: 'تسجيل شهادة البكالوريا.', externalUrl: 'https://bac.onec.dz/' },
    { id: 'es-088', name: 'التسجيل في التعليم عن بعد - ONEFD', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ONEFD', description: 'التسجيل في التعليم والتكوين عن بعد.', externalUrl: 'http://inscriptic.onefd.edu.dz/' },
    { id: 'es-089', name: 'شهادة إثبات المستوى 2024/2025', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Attestation', description: 'طلب شهادة إثبات المستوى.', externalUrl: 'https://www.onefd.edu.dz/att_niv_2025/' },
    { id: 'es-090', name: 'نتائج شهادة التعليم المتوسط', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BEM+Results', description: 'الاطلاع على نتائج BEM.', externalUrl: 'https://bem.onec.dz/' },
    { id: 'es-091', name: 'نتائج شهادة البكالوريا', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=BAC+Results', description: 'الاطلاع على نتائج BAC.', externalUrl: 'https://bac.onec.dz/' }
  );

  // الخدمات الجامعية
  services.push(
    { id: 'es-100', name: 'التسجيل الأولي الجامعي', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Orientation', description: 'منصة التسجيل الأولي والتوجيه الجامعي.', externalUrl: 'https://www.orientation-esi.dz/' },
    { id: 'es-101', name: 'منصة Progres - دخول', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Progres', description: 'منصة التسيير الجامعي Progres.', externalUrl: 'https://progres.mesrs.dz/webfve/login.xhtml' },
    { id: 'es-102', name: 'Progres - دفع الإعادة', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Reinscription', description: 'دفع حقوق إعادة التسجيل.', externalUrl: 'https://progres.mesrs.dz/epaiement/epaiementI.xhtml' },
    { id: 'es-103', name: 'Progres - دفع الإيواء', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Hebergement', description: 'دفع حقوق الإيواء.', externalUrl: 'https://progres.mesrs.dz/epaiement/epaiementH.xhtml' },
    { id: 'es-104', name: 'طلبات الإيواء الجامعي', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Webonou', description: 'طلب الإيواء عبر WebOnou.', externalUrl: 'https://progres.mesrs.dz/webonou/' },
    { id: 'es-105', name: 'تطبيق Progres', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Progres+App', description: 'تطبيق Progres للهاتف.', externalUrl: 'https://play.google.com/store/apps/details?id=app.progres.webetu&hl=ar' },
    { id: 'es-106', name: 'تطبيق MYBUS للنقل الجامعي', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=MYBUS', description: 'تطبيق النقل الجامعي.', externalUrl: 'https://play.google.com/store/apps/details?id=com.mesrs.mybus.mybusapp&hl=ar' }
  );

  // التكوين والتعليم المهنيين
  services.push(
    { id: 'es-120', name: 'التسجيل في التكوين والتعليم المهنيين', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Takwin', description: 'منصة التسجيل للتكوين المهني.', externalUrl: 'https://www.takwin.dz/' },
    { id: 'es-121', name: 'تسجيلات الإمتحانات المهنية', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Exams', description: 'تسجيل الإمتحانات المهنية وفق الرزنامة.', externalUrl: 'https://takwin.dz/ProfessionalExams' }
  );

  // البوابة الجغرافية للعقار
  services.push(
    { id: 'es-140', name: 'منصة الوثائق العقارية والشهادات', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=FADA', description: 'استخراج الوثائق العقارية والشهادات.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/EDCFPUBLICHOME/' },
    { id: 'es-141', name: 'معطيات مسحية', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Cadastre', description: 'الولوج إلى المعطيات المسحية.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/mission-documentaire/index_public_35.html' },
    { id: 'es-142', name: 'مستخرج المصفوفة CC11', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CC11', description: 'طلب مستخرج CC11.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/recherche2' },
    { id: 'es-143', name: 'مستخرج حالة القسم CC12', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CC12', description: 'طلب مستخرج CC12.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/delivrance_automatique/recherche.php' },
    { id: 'es-144', name: 'معلومات مسحية CC14', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CC14', description: 'طلب معلومات ذات طابع مسحي.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/recherche4' },
    { id: 'es-145', name: 'مستخرج المصفوفة CC15', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CC15', description: 'طلب مستخرج CC15.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/recherche5' },
    { id: 'es-146', name: 'طلب الدفتر العقاري', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Livret', description: 'طلب الدفتر العقاري عبر الإنترنت.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/lf/demander_lf' },
    { id: 'es-147', name: 'متابعة طلب الدفتر العقاري', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Suivi', description: 'متابعة حالة طلب الدفتر.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/lf/suividemande' },
    { id: 'es-148', name: 'فضاء المحافظ العقاري', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Conservateur', description: 'ولوج مهني للمحافظين العقاريين.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/login2' },
    { id: 'es-149', name: 'فضاء المفتشين العقاريين', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Inspecteurs', description: 'ولوج خاص بالمفتشين.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/login1' },
    { id: 'es-150', name: 'فضاء الموثقين', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Notaires', description: 'ولوج خاص بالموثقين.', externalUrl: 'https://fadaeldjazair.mf.gov.dz/login' }
  );

  // الضمان الاجتماعي
  services.push(
    { id: 'es-160', name: 'CNAS - شهادة الإنتساب', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CNAS', description: 'استخراج شهادة الانتساب عبر الهناء.', externalUrl: 'https://elhanaa.cnas.dz/' },
    { id: 'es-161', name: 'CNAS - شهادة عدم الإنتساب', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CNAS+No', description: 'استخراج شهادة عدم الانتساب.', externalUrl: 'https://elhanaa.cnas.dz/attestation_no_affiliation.xhtml' },
    { id: 'es-162', name: 'CNAS - تطبيق فضاء الهناء', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Elhanaa+App', description: 'تطبيق CNAS للهاتف.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.cnas.mobile_elhanaa&hl=ar' },
    { id: 'es-163', name: 'CASNOS - شهادة عدم الإنتساب', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CASNOS+No', description: 'شهادة عدم الانتساب لغير الأجراء.', externalUrl: 'https://damancom.casnos.dz/non-affiliation' },
    { id: 'es-164', name: 'CASNOS - ولوج المؤمن', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CASNOS+Login', description: 'ولوج المؤمن لدى كاسنوس.', externalUrl: 'https://damancom.casnos.dz/auth/login/assure' },
    { id: 'es-165', name: 'CASNOS - طلب الإنتساب', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Affiliation', description: 'طلب الانتساب لغير الأجراء.', externalUrl: 'https://damancom.casnos.dz/affiliation' },
    { id: 'es-166', name: 'CNR - تطبيق المتقاعد', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CNR+App', description: 'تطبيق المتقاعد للهاتف.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.cnr.cnr' }
  );

  // الخدمات الجبائية الإلكترونية
  services.push(
    { id: 'es-180', name: 'اقتناء حقوق الطابع الجبائي', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Timbre', description: 'شراء الحقوق الجبائية عبر الإنترنت.', externalUrl: 'https://tabioucom.mf.gov.dz/acheter' },
    { id: 'es-181', name: 'إعادة اقتناء حقوق الطابع', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Timbre+Edit', description: 'إعادة طباعة الحقوق الجبائية.', externalUrl: 'https://tabioucom.mf.gov.dz/edit' },
    { id: 'es-182', name: 'اقتناء قسيمة السيارات', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Vignette', description: 'شراء قسيمة السيارات.', externalUrl: 'https://qassimatouka.mf.gov.dz/acheter' },
    { id: 'es-183', name: 'إعادة إصدار قسيمة السيارات', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Vignette+Edit', description: 'إعادة إصدار القسيمة.', externalUrl: 'https://qassimatouka.mf.gov.dz/edit' }
  );

  // القضاء
  services.push(
    { id: 'es-200', name: 'استخراج صحيفة السوابق القضائية', category: 'e-services', rating: 4.3, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Casier', description: 'طلب صحيفة السوابق القضائية عبر الإنترنت.', externalUrl: 'https://e-casier.mjustice.dz/' },
    { id: 'es-201', name: 'استخراج الجنسية الجزائرية', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Nationality', description: 'استخراج الجنسية الجزائرية.', externalUrl: 'https://portail.mjustice.dz/remote/login?lang=fr' },
    { id: 'es-202', name: 'مستخرج الوجود بالسجن إبان الثورة', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Archive', description: 'طلب مستخرج من الأرشيف.', externalUrl: 'https://www.mjustice.dz/ar/archive/' },
    { id: 'es-203', name: 'نسخة من عقود المحاكم', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Court+Docs', description: 'طلب نسخ من العقود.', externalUrl: 'https://www.mjustice.dz/ar/tr-ch/' },
    { id: 'es-204', name: 'رخص الاتصال بالمحبوسين', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Prison+Visit', description: 'حجز رخص الاتصال بالمحبوسين.', externalUrl: 'https://ziyarati.mjustice.dz/' },
    { id: 'es-205', name: 'النيابة الإلكترونية - تسجيل شكوى', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=e-Nyaba', description: 'تسجيل شكوى لدى النيابة.', externalUrl: 'https://e-nyaba.mjustice.dz/nouvelle_plainte.php' },
    { id: 'es-206', name: 'النيابة الإلكترونية - متابعة شكوى', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=e-Nyaba+Suivi', description: 'متابعة الشكوى إلكترونيا.', externalUrl: 'https://e-nyaba.mjustice.dz/login.php' }
  );

  // النقل وحجز التذاكر
  services.push(
    { id: 'es-220', name: 'حجز تذاكر الخطوط الجوية الجزائرية', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Air+Algerie', description: 'حجز تذاكر الطيران عبر الانترنت.', externalUrl: 'https://airalgerie.dz/ar/%d8%a7%d9%84%d8%ad%d8%ac%d8%b2/' },
    { id: 'es-221', name: 'حجز تذاكر طيران الطاسيلي', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Tassili', description: 'حجز تذاكر طيران الطاسيلي.', externalUrl: 'https://tassiliairlines.dz/' },
    { id: 'es-222', name: 'تطبيق تواصل للترامواي', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Setram', description: 'تطبيق اتواصّل للترامواي.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.setram.AppEtwassel' },
    { id: 'es-223', name: 'تطبيق محطتي SOGRAL', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Sogral', description: 'تطبيق محطتي للخطوط البرية.', externalUrl: 'https://play.google.com/store/apps/details?id=com.sogral.mobile&hl=ar' },
    { id: 'es-224', name: 'حجز تذاكر النقل البحري', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Ferries', description: 'حجز تذاكر المؤسسة الوطنية للنقل البحري.', externalUrl: 'https://afs.algerieferries.dz/booking/step1' },
    { id: 'es-225', name: 'مواقيت سير القطارات SNTF', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=SNTF', description: 'الاطلاع على مواقيت القطارات.', externalUrl: 'https://www.sntf.dz/index.php/' },
    { id: 'es-226', name: 'تطبيق ETUSA Mob', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ETUSA', description: 'تطبيق النقل الحضري.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.etusa.etusa_mob&hl=ar' }
  );

  // الوكالة الوطنية للتشغيل ANEM
  services.push(
    { id: 'es-240', name: 'التسجيل في منحة البطالة', category: 'e-services', rating: 4.2, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Minha', description: 'منصة التسجيل في منحة البطالة.', externalUrl: 'https://minha.anem.dz/pre_inscription' },
    { id: 'es-241', name: 'تمديد طلب العمل - وسيط', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Wassit', description: 'تمديد الطلب عبر وسيط.', externalUrl: 'https://wassitonline.anem.dz/postulation/prolongationDemande' },
    { id: 'es-242', name: 'فرصتي – التقديم على عروض العمل', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ANEM+Auth', description: 'الدخول والتقديم على عروض العمل.', externalUrl: 'https://auth.anem.dz/Account/Login' },
    { id: 'es-243', name: 'فرص عمل وإعلانات - ANEM', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ANEM+Jobs', description: 'إعلانات وفرص عمل.', externalUrl: 'https://www.anem.dz/opportunites/ar.html' },
    { id: 'es-244', name: 'تطبيق ANEM-Dz', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ANEM+App', description: 'التطبيق الرسمي للوكالة.', externalUrl: 'https://www.anem.dz/app_mobile/Name.apk' },
    { id: 'es-245', name: 'تطبيق Mon Agence', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Mon+Agence', description: 'العثور على وكالة التشغيل.', externalUrl: 'https://www.anem.dz/app_mobile/Mon_agence.apk' },
    { id: 'es-246', name: 'تطبيق Mon Offre', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Mon+Offre', description: 'عروض العمل عبر التطبيق.', externalUrl: 'https://www.anem.dz/app_mobile/Mon_offre.apk' }
  );

  // فضاءات ووكالات
  services.push(
    { id: 'es-260', name: 'فضاء زبائن الجزائرية للمياه', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ADE+Espace', description: 'ولوج فضاء زبائن ADE.', externalUrl: 'https://www.ade.dz/login' },
    { id: 'es-261', name: 'فضاء الزبائن سونلغاز', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Sonelgaz+Espace', description: 'فضاء زبائن الكهرباء والغاز.', externalUrl: 'https://www.sonelgaz.dz/ar/category/espace-clients-ar' },
    { id: 'es-262', name: 'فضاء الزبائن سيال SEAAL', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=SEAAL+Espace', description: 'فضاء ومتابعة الفواتير سيال.', externalUrl: 'https://wakalati.seaal.dz/' }
  );

  // التأمينات
  services.push(
    { id: 'es-280', name: 'التأمين عبر SAA', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=SAA', description: 'خدمات التأمين عبر SAA.', externalUrl: 'https://www.saa.dz/ar/' },
    { id: 'es-281', name: 'التأمين عبر CAAT', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CAAT', description: 'خدمات التأمين عبر CAAT.', externalUrl: 'https://www.caat.dz/index.php/ar' },
    { id: 'es-282', name: 'التأمين عبر CAARAMA', category: 'e-services', rating: 3.5, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=CAARAMA', description: 'خدمات التأمين عبر CAARAMA.', externalUrl: 'https://www.caarama.dz/ar-coming-soon/coming-soon.html' },
    { id: 'es-283', name: 'التأمين عبر Macir Vie', category: 'e-services', rating: 3.8, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Macir+Vie', description: 'تأمينات ماصير في.', externalUrl: 'https://www.macirvie.com/ar' },
    { id: 'es-284', name: 'التأمين عبر Amana', category: 'e-services', rating: 3.6, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Amana', description: 'خدمات تأمين آمانة.', externalUrl: 'https://www.amana.dz/#/' }
  );

  // الخدمات الصحية
  services.push(
    { id: 'es-300', name: 'التسجيل في الشبه طبي - منصة التكوين', category: 'e-services', rating: 4.0, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Sante+Formation', description: 'منصة التسجيل والتكوين في الشبه طبي.', externalUrl: 'https://formation.sante.gov.dz/index.html' },
    { id: 'es-301', name: 'العيادة الرقمية Etabib', category: 'e-services', rating: 3.9, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Etabib', description: 'خدمات طبية رقمية.', externalUrl: 'https://etabib.dz/' },
    { id: 'es-302', name: 'تطبيق أطباء الجزائر', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Doctors+DZ', description: 'دليل الأطباء في الجزائر.', externalUrl: 'https://play.google.com/store/apps/details?id=dz.sebrou.docts_guide.app&hl=ar' },
    { id: 'es-303', name: 'تطبيق الطبيب الجزائري', category: 'e-services', rating: 3.7, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Doctor+DZ', description: 'تطبيق للأطباء الجزائريين.', externalUrl: 'https://play.google.com/store/apps/details?id=com.algerian.doctor&hl=ar' },
    { id: 'es-304', name: 'تطبيق بنك الدم الجزائري', category: 'e-services', rating: 3.6, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=Blood+Bank', description: 'البحث عن متبرعي الدم.', externalUrl: 'https://play.google.com/store/apps/details?id=com.dz.bank.blood.nabilsoft.bankblooddz&hl=ar' }
  );

  // المقاول الذاتي
  services.push(
    { id: 'es-320', name: 'طلب بطاقة المقاول الذاتي', category: 'e-services', rating: 4.1, address: 'خدمة إلكترونية', phone: '+213000000000', image: 'https://via.placeholder.com/600x400?text=ANAE', description: 'التسجيل للحصول على بطاقة المقاول الذاتي.', externalUrl: 'https://anae.dz/user/ae/register' }
  );

  // --- Helpers ---
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const params = new URLSearchParams(location.search);
  const getParam = (k, def = '') => params.get(k) || def;

  function ratingStars(r) {
    const full = Math.floor(r);
    const half = r - full >= 0.5;
    let s = '★'.repeat(full);
    if (half) s += '½';
    return s.padEnd(5, '☆');
  }

  function findCategory(slug) { return categories.find(c => c.slug === slug); }
  function findService(id) { return services.find(s => s.id === id); }

  // Build an inline SVG illustration for a category (replaces raster images)
  function categorySVG(cat, opts = {}) {
    const w = opts.width || 1200;
    const h = opts.height || 900; // 4:3
    const title = (cat && cat.name) || '';
    const icon = (cat && cat.icon) || '🏷️';
    // Randomize gradient slightly based on slug for variety
    const seed = (cat?.slug || 'x').split('').reduce((a, c) => a + c.charCodeAt(0), 0);
    const hue = (seed * 17) % 360;
    const hue2 = (hue + 35) % 360;
    const grd1 = `hsl(${hue} 70% 55%)`;
    const grd2 = `hsl(${hue2} 75% 45%)`;
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" aria-hidden="true" role="img">
        <defs>
          <linearGradient id="g-${cat?.slug || 'cat'}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${grd1}"/>
            <stop offset="100%" stop-color="${grd2}"/>
          </linearGradient>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="rgba(0,0,0,0.25)"/>
          </filter>
        </defs>
        <rect width="100%" height="100%" fill="url(#g-${cat?.slug || 'cat'})"/>
        <g filter="url(#shadow)">
          <circle cx="${w/2}" cy="${h/2}" r="${Math.min(w,h)*0.22}" fill="rgba(255,255,255,0.18)" />
        </g>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="${Math.min(w,h)*0.18}" font-family="'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif">${icon}</text>
        <rect x="${w*0.02}" y="${h*0.82}" width="${w*0.96}" height="${h*0.14}" rx="24" fill="rgba(0,0,0,0.22)" />
        <text x="50%" y="${h*0.89}" dominant-baseline="middle" text-anchor="middle" font-size="${Math.min(w,h)*0.055}" fill="#fff" font-weight="700" font-family="Rubik, ui-sans-serif, system-ui, sans-serif">${title}</text>
      </svg>`;
    return svg;
  }

  // --- Navbar mobile toggle ---
  const mobileBtn = $('#mobileMenuBtn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      const m = $('#mobileMenu');
      if (!m) return;
      m.classList.toggle('hidden');
    });
  }

  // --- Theme (dark mode) toggle with persistence ---
  const root = document.documentElement;
  const THEME_KEY = 'dalildz_theme';
  function applyTheme(t) { t === 'dark' ? root.classList.add('dark') : root.classList.remove('dark'); }
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) applyTheme(saved); else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');
  $$("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener('click', () => {
      const nowDark = !root.classList.contains('dark');
      applyTheme(nowDark ? 'dark' : 'light');
      localStorage.setItem(THEME_KEY, nowDark ? 'dark' : 'light');
      const label = nowDark ? 'الوضع الفاتح' : 'الوضع الداكن';
      $$("[data-theme-toggle]").forEach(b => b.setAttribute('aria-label', label));
    });
  });

  // (deprecated) legacy renderHome removed in favor of new Homepage Renderer

  // --- Category Page Renderer ---
  (function renderCategoryPage(){
    const grid = document.getElementById('listingGrid');
    if (!grid) return;
    const params = new URLSearchParams(location.search);
    const slug = params.get('slug') || params.get('cat') || '';
    const q = (params.get('q') || '').trim();
    const cat = categories.find(c => c.slug === slug);

    // Title and breadcrumb
    const titleEl = document.getElementById('categoryTitle');
    const crumb = document.getElementById('categoryCrumb');
    if (titleEl) titleEl.textContent = cat ? `${cat.icon ? cat.icon+ ' ' : ''}${cat.name}` : 'كل الخدمات';
    if (crumb) crumb.textContent = cat ? cat.name : 'كل الخدمات';

    // Cover image
    const coverBox = document.getElementById('categoryCoverBox');
    if (coverBox) {
      if (cat) { coverBox.innerHTML = categorySVG(cat, { width: 1200, height: 360 }); coverBox.classList.remove('hidden'); }
      else { coverBox.classList.add('hidden'); coverBox.innerHTML = ''; }
    }

    // Filter services
    let list = services.slice();
    if (cat) list = list.filter(s => s.category === slug);
    if (q) {
      const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      list = list.filter(s => rx.test(s.name) || rx.test(s.description || ''));
    }

    if (!list.length) {
      grid.innerHTML = emptyState('لا توجد نتائج ضمن هذا التصنيف.');
      return;
    }

    grid.innerHTML = list.map(cardTemplate).join('');
  })();

  // (deprecated) duplicate category page renderer removed; consolidated above

  // --- Render service page ---
  (function renderServicePage() {
    const container = $('#serviceContainer');
    if (!container) return;

    const id = getParam('id');
    const s = findService(id);
    if (!s) {
      container.innerHTML = emptyState('الخدمة غير موجودة.');
      return;
    }

    // Compute category and icon
    const cat = categories.find(c => c.slug === s.category);
    const iconHTML = (typeof categorySVG === 'function' && cat)
      ? (categorySVG(cat) || `<span class="text-xl">${cat?.icon || ''}</span>`)
      : `<span class="text-xl">${cat?.icon || ''}</span>`;
    // Put an icon before the service name
    const nameEl = document.getElementById('svcName');
    if (nameEl) {
      nameEl.innerHTML = `<span class="inline-flex items-center justify-center me-2 align-middle">${iconHTML}</span><span>${s.name}</span>`;
    }
    // Render icon instead of image on service page
    const iconWrap = document.getElementById('svcIcon');
    if (iconWrap) {
      const html = (typeof categorySVG === 'function' && cat)
        ? (categorySVG(cat) || `<span class="text-6xl">${cat?.icon || '🏷️'}</span>`)
        : `<span class="text-6xl">${cat?.icon || '🏷️'}</span>`;
      iconWrap.innerHTML = html;
    }
    $('#svcRating').textContent = ratingStars(s.rating) + ` (${s.rating.toFixed(1)})`;
    $('#svcAddress').textContent = s.address;
    const phoneSpan = document.getElementById('svcPhone');
    if (phoneSpan) {
      const nice = formatPhone(s.phone || '');
      const tel = formatTel(s.phone || '');
      phoneSpan.innerHTML = tel ? `<a href="tel:${tel}" class="hover:underline" dir="ltr">${nice}</a>` : `<span dir="ltr">${nice}</span>`;
    }
    $('#svcDesc').textContent = s.description;
    // Toggle external badge near the title if this is an online service
    const badge = document.getElementById('svcExternalBadge');
    if (badge) badge.classList.toggle('hidden', !s.externalUrl);
    // If this is an online service, add CTA button
    if (s.externalUrl) {
      const descEl = $('#svcDesc');
      if (descEl && descEl.parentElement) {
        const wrap = document.createElement('div');
        wrap.className = 'mt-4';
        const a = document.createElement('a');
        a.href = s.externalUrl;
        a.target = '_blank';
        a.rel = 'noopener';
        a.className = 'inline-flex items-center gap-2 bg-primary hover:bg-sky-600 text-white px-4 py-2 rounded-lg tap';
        a.innerHTML = '<span>الانتقال إلى الخدمة الإلكترونية</span>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M3.5 10a.75.75 0 01.75-.75h9.69L9.72 5.03a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 01-1.06-1.06l4.22-4.22H4.25A.75.75 0 013.5 10z" clip-rule="evenodd"/></svg>';
        wrap.appendChild(a);
        descEl.parentElement.appendChild(wrap);
      }
    }

    const map = $('#svcMap');
    if (map) {
      if (typeof s.lat === 'number' && typeof s.lng === 'number') {
        const src = `https://www.google.com/maps?q=${s.lat},${s.lng}&hl=ar&z=14&output=embed`;
        map.src = src;
        map.loading = 'lazy';
        map.referrerPolicy = 'no-referrer-when-downgrade';
      } else {
        const art = map.closest('article');
        if (art) art.style.display = 'none';
      }
    }

    // JSON-LD LocalBusiness
    const ld = {
      '@context': 'https://schema.org',
      '@type': s.externalUrl ? 'Service' : 'LocalBusiness',
      'name': locField(s, 'name'),
      'address': { '@type': 'PostalAddress', 'streetAddress': s.address, 'addressCountry': 'DZ' },
      'telephone': s.phone,
      'description': (locField(s, 'description') || undefined),
      'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': s.rating, 'reviewCount': 25 },
      'url': s.externalUrl || location.href
    };
    if (s.image) ld.image = s.image;
    if (typeof s.lat === 'number' && typeof s.lng === 'number') {
      ld.geo = { '@type': 'GeoCoordinates', latitude: s.lat, longitude: s.lng };
    }
    injectJSONLD(ld);

    // Ensure global contact form initializer runs if a form exists on service page too
    initContactForm?.();
  })();

  // --- Templates ---
  // (no category background styling; icons only)

  function cardTemplate(s) {
    const cat = categories.find(c => c.slug === s.category) || {};
    return `
    <a href="service.html?id=${s.id}" class="group flex items-center gap-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-[1px] hover:border-primary/30 duration-200 p-3 tap focus:outline-none focus:ring-2 focus:ring-primary/40">
      <div class="relative shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 overflow-hidden flex items-center justify-center">
        <div class="scale-90 w-10 h-10 flex items-center justify-center">
          <span class=\"text-2xl\">${cat.icon || '🏷️'}</span>
        </div>
        ${s.externalUrl ? `<span class=\"absolute -top-1 -end-1 text-[10px] bg-primary text-white px-1.5 py-px rounded-full shadow\">⚡</span>` : ''}
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <h3 class="font-semibold text-base line-clamp-1 text-gray-900 dark:text-gray-100">${locField(s, 'name')}</h3>
          ${''}
        </div>
        <div class="flex items-center gap-2 text-amber-500 text-[13px] mt-0.5">${ratingStars(s.rating)}</div>
        <div class="text-gray-500 dark:text-gray-400 text-[12px] mt-1 line-clamp-1">${s.address}</div>
        <div class="text-gray-700 dark:text-gray-300 text-[12px] mt-0.5">📞 <span dir=\"ltr\">${formatPhone(s.phone)}</span></div>
      </div>
    </a>`;
  }

  function emptyState(msg) {
    return `<div class="text-center text-gray-500 py-12">${msg}</div>`;
  }

  function normalizeDigits(p) {
    return (p || '').toString().replace(/[^\d+]/g, '');
  }
  function parseDZ(p) {
    const raw = normalizeDigits(p);
    let nsn = '';
    if (raw.startsWith('+213')) nsn = raw.slice(4);
    else if (raw.startsWith('00213')) nsn = raw.slice(5);
    else if (raw.startsWith('213') && raw.length > 10) nsn = raw.slice(3);
    else if (raw.startsWith('0')) nsn = raw.slice(1);
    else nsn = raw.replace(/^\+/, '');
    nsn = nsn.replace(/\D/g, '');
    return nsn;
  }
  function formatPhone(p) {
    const nsn = parseDZ(p);
    if (!nsn) return (p || '').trim();
    // Mobile (national significant number = 9, starts 5/6/7): 0X XX XX XX XX
    if (nsn.length === 9 && /[567]/.test(nsn[0])) {
      return `0${nsn[0]} ${nsn.slice(1,3)} ${nsn.slice(3,5)} ${nsn.slice(5,7)} ${nsn.slice(7,9)}`;
    }
    // Fixed line (NSN = 8, starts 2/3/4): 0XX XX XX XX (area code 2 digits after 0)
    if (nsn.length === 8 && /[234]/.test(nsn[0])) {
      return `0${nsn.slice(0,2)} ${nsn.slice(2,4)} ${nsn.slice(4,6)} ${nsn.slice(6,8)}`;
    }
    // Fallback: show international compact
    return `+213 ${nsn}`;
  }
  function formatTel(p) {
    const nsn = parseDZ(p);
    if (!nsn) return '';
    // Ensure international format
    return `+213${nsn}`;
  }

  function injectJSONLD(obj) {
    const s = document.createElement('script');
    s.type = 'application/ld+json';
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }
  
  // --- Modal Utilities ---
  function ensureModalRoot() {
    let el = document.getElementById('appModal');
    if (el) return el;
    el = document.createElement('div');
    el.id = 'appModal';
    el.className = 'fixed inset-0 z-[100] hidden';
    el.innerHTML = `
      <div class="absolute inset-0 bg-black/50" data-modal-overlay></div>
      <div class="absolute inset-0 flex items-center justify-center p-4">
        <div class="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-100 dark:border-gray-800">
          <div class="flex items-start justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <h3 id="appModalTitle" class="font-semibold text-gray-900 dark:text-gray-100">تنبيه</h3>
            <button id="appModalClose" class="tap p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="إغلاق">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.36a1 1 0 111.415 1.414L13.414 10.586l4.36 4.361a1 1 0 01-1.414 1.415L12 12l-4.361 4.361a1 1 0 01-1.415-1.414l4.361-4.36-4.361-4.361a1 1 0 010-1.415z"/></svg>
            </button>
          </div>
          <div class="px-4 py-4 text-gray-700 dark:text-gray-300" id="appModalBody"></div>
          <div class="px-4 py-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-2">
            <button id="appModalOk" class="rounded-lg bg-primary text-white px-4 py-2 hover:bg-sky-600">حسناً</button>
          </div>
        </div>
      </div>`;
    document.body.appendChild(el);
    const close = () => hideModal();
    el.querySelector('#appModalClose')?.addEventListener('click', close);
    el.querySelector('[data-modal-overlay]')?.addEventListener('click', close);
    el.querySelector('#appModalOk')?.addEventListener('click', close);
    return el;
  }
  function showModal(title, message) {
    const root = ensureModalRoot();
    const titleEl = document.getElementById('appModalTitle');
    const bodyEl = document.getElementById('appModalBody');
    if (titleEl) titleEl.textContent = title || 'تنبيه';
    if (bodyEl) bodyEl.innerHTML = message || '';
    root.classList.remove('hidden');
  }
  function hideModal() {
    const root = document.getElementById('appModal');
    if (root) root.classList.add('hidden');
  }

  // --- Contact Form (Global) ---
  function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    if (form.dataset.bound === '1') return; // avoid double binding
    form.dataset.bound = '1';

    const nameEl = document.getElementById('contactName');
    const emailEl = document.getElementById('contactEmail');
    const msgEl = document.getElementById('contactMessage');
    const submitBtn = document.getElementById('contactSubmit');

    const setLoading = (on) => {
      if (!submitBtn) return;
      submitBtn.disabled = !!on;
      submitBtn.textContent = on ? 'جارٍ الإرسال…' : 'إرسال';
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = (nameEl?.value || '').trim();
      const email = (emailEl?.value || '').trim();
      const message = (msgEl?.value || '').trim();
      if (!name || !email || !message) {
        showModal('خطأ', 'يرجى ملء جميع الحقول المطلوبة.');
        return;
      }
      setLoading(true);
      try {
        // Send via FormSubmit (no backend required)
        const endpoint = 'https://formsubmit.co/ajax/hbouzourdaz@gmail.com';
        const body = new URLSearchParams({
          name,
          email,
          message,
          _subject: 'Dalil DZ - رسالة من نموذج الاتصال',
          _template: 'table',
          _captcha: 'false'
        });
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
          body
        });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json().catch(()=>({}));
        showModal('تم الإرسال', 'تم استلام رسالتك بنجاح. سنرد عليكم في أقرب وقت ممكن.');
        form.reset();
      } catch (err) {
        console.error('Contact form error:', err);
        showModal('تعذر الإرسال', 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة لاحقاً.');
      } finally {
        setLoading(false);
      }
    });
  }
  // Bind on load for pages that include the form (e.g., contact.html, service.html)
  initContactForm();
  
  // --- E-Services Page Renderer ---
  (function renderEServicesPage() {
    const root = document.getElementById('esPageRoot');
    if (!root) return;
    const groupsWrap = document.getElementById('esGroups');
    const quickNav = document.getElementById('esQuickNav');
    const emptyBox = document.getElementById('esEmpty');

    const allES = services.filter(s => s.category === 'e-services');
    if (!allES.length) {
      if (groupsWrap) groupsWrap.innerHTML = '';
      if (emptyBox) { emptyBox.classList.remove('hidden'); emptyBox.innerHTML = emptyState('لا توجد خدمات إلكترونية متاحة حالياً.'); }
      return;
    }

    function buildGrid(list) {
      return `<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">${list.map(cardTemplate).join('')}</div>`;
    }
    
    // Simple flat renderer for services list
    function renderFlat(list) {
      groupsWrap.innerHTML = buildGrid(list);
    }

    // Group filtering (dropdown) support
    const groupSel = document.getElementById('esGroup');
    const ES_GROUP_KEY = 'dalildz_es_group';
    const getEsGroup = () => (localStorage.getItem(ES_GROUP_KEY) || 'all');
    const setEsGroup = (v) => localStorage.setItem(ES_GROUP_KEY, v);

    // Group definitions (used only for filtering by name)
    const esGroups = {
      utilities: (n) => /ADE|SEAAL|سونلغاز|Sonelgaz|Idoom|4G|إنترنت|الدفع|فواتير/i.test(n),
      poste: (n) => /بريد|Baridi|CCP|الذهبية|Edahabia|طرود/i.test(n),
      telecom: (n) => /اتصالات الجزائر|FTTH|My IDOOM|E-paiement|وكالتي|رقم هاتفك|Idoom|Ooredoo|Mobilis|Djezzy/i.test(n),
      administration: (n) => /شهادة الميلاد|عقد الزواج|شهادة الوفاة|S12|بطاقة التعريف|جواز السفر|الشباك عن بعد|العرائض/i.test(n),
      education: (n) => /أستاذ|Ostad|Awlyaa|Taqiim|BEM|BAC|ONEC|التعليم عن بعد|إثبات المستوى/i.test(n),
      university: (n) => /Progres|Orientation|التوجيه|الإيواء|WebOnou|MYBUS/i.test(n),
      vocational: (n) => /التكوين|Takwin|امتحانات مهنية/i.test(n),
      realestate: (n) => /الوثائق العقارية|FADA|مسحية|CC1|CC11|CC12|CC14|CC15|الدفتر العقاري|الموثقين|المحافظ/i.test(n),
      social: (n) => /CNAS|CASNOS|CNR|الهناء|المتقاعد|الإنتساب|عدم الإنتساب/i.test(n),
      fiscal: (n) => /الطابع الجبائي|قسيمة السيارات|timbre|vignette/i.test(n),
      justice: (n) => /السوابق القضائية|الجنسية|الأرشيف|المحاكم|المحبوسين|النيابة|الشكاوى/i.test(n),
      transport: (n) => /الخطوط الجوية|طيران الطاسيلي|Setram|Sogral|ENTMV|SNTF|ETUSA|حجز/i.test(n),
      employment: (n) => /ANEM|منحة البطالة|وسيط|فرصتي|عروض العمل/i.test(n),
      insurance: (n) => /SAA|CAAT|CAARAMA|Macir|Amana|التأمين/i.test(n),
      health: (n) => /صحية|العيادة|طبيب|تبون|دم|Etabib|تكوين|Paramedical|Clinic/i.test(n),
      autoentre: (n) => /المقاول الذاتي|ANAE|Auto/i.test(n)
    };

    function filterByGroup(list) {
      const g = getEsGroup();
      if (g === 'all' || !esGroups[g]) return list;
      const match = esGroups[g];
      return list.filter(s => match(s.name));
    }

    function filterBySearch(list) {
      const q = (document.getElementById('esq')?.value || '').trim();
      if (!q) return list;
      const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      return list.filter(s => {
        const fields = [s.name, s.name_en, s.name_fr, s.description, s.description_en, s.description_fr];
        return fields.some(v => rx.test(v || ''));
      });
    }
    function sortServices(list, mode) {
      if (mode === 'az') return list.slice().sort((a,b)=> (a.name||'').localeCompare(b.name||'', 'ar'));
      if (mode === 'za') return list.slice().sort((a,b)=> (b.name||'').localeCompare(a.name||'', 'ar'));
      return list.slice().sort((a,b)=> (b.rating||0) - (a.rating||0));
    }
    function renderCurrent(listAll) {
      // apply filters: group -> search -> default top-rated sort
      if (groupSel) groupSel.value = getEsGroup();
      const grouped = filterByGroup(listAll);
      const searched = filterBySearch(grouped);
      const sorted = sortServices(searched, 'top');
      if (!sorted.length && emptyBox) {
        groupsWrap.innerHTML = '';
        emptyBox.classList.remove('hidden');
        emptyBox.innerHTML = emptyState('لا نتائج مطابقة لبحثك.');
        return;
      }
      if (emptyBox) emptyBox.classList.add('hidden');
      renderFlat(sorted);
    }

    // Initial render
    renderCurrent(allES);

    // Search handling
    const form = document.getElementById('esSearchForm');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = (document.getElementById('esq')?.value || '').trim();
        renderCurrent(allES);
      });
    }

    // No sort control on e-services: default is top-rated

    // Group select change
    if (groupSel) {
      groupSel.addEventListener('change', () => {
        setEsGroup(groupSel.value);
        renderCurrent(allES);
      });
      groupSel.value = getEsGroup();
    }
  })();
  
  // --- Homepage Renderer ---
  (function renderHomepage() {
    const catGrid = document.getElementById('categoriesGrid');
    const featuredGrid = document.getElementById('featuredGrid');
    const homeServicesSort = document.getElementById('homeServicesSort');
    const homeServicesGroup = document.getElementById('homeServicesGroup');
    const onHome = !!(catGrid || featuredGrid || homeServicesSort || homeServicesGroup);
    if (!onHome) return;

    // 1) Selected categories to display on homepage
    const selectedSlugs = [
      'restaurants','cafes','doctors','pharmacies','schools','car-rentals',
      'hotels','lawyers','it-services','universities','e-services','travel'
    ];
    // keep curated order only
    const order = new Map(selectedSlugs.map((s,i)=>[s,i]));
      function renderCats() {
        if (!catGrid) return;
        const cats = categories
          .filter(c => selectedSlugs.includes(c.slug))
          .slice()
          .sort((a,b)=> (order.get(a.slug)||999) - (order.get(b.slug)||999));
        catGrid.innerHTML = cats.map(c => `
          <a href="category.html?slug=${c.slug}" class="group block rounded-xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:border-primary/30 duration-200 tap focus:outline-none focus:ring-2 focus:ring-primary/40">
            <div class="relative aspect-[4/3] overflow-hidden">
              <div class="w-full h-full">${categorySVG(c)}</div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent pointer-events-none"></div>
              <div class="absolute bottom-2 inset-x-2 flex items-center justify-between text-white">
                <div class="text-sm sm:text-base font-semibold drop-shadow">
                <span class="me-2">${c.icon || ''}</span>${locCatName(c)}
                </div>
                <span class="text-[10px] sm:text-xs bg-white/80 text-gray-900 px-2 py-0.5 rounded-full">عرض</span>
              </div>
            </div>
          </a>
        `).join('');
      }
    if (catGrid) renderCats();

    // 2) Featured services (top rated)
    if (featuredGrid) {
      const HOME_SVC_SORT_KEY = 'dalildz_home_services_sort';
      const HOME_SVC_GROUP_KEY = 'dalildz_home_services_group';
      const getSvcSort = () => (localStorage.getItem(HOME_SVC_SORT_KEY) || 'top');
      const setSvcSort = (v) => localStorage.setItem(HOME_SVC_SORT_KEY, v);
      const getSvcGroup = () => (localStorage.getItem(HOME_SVC_GROUP_KEY) || 'all');
      const setSvcGroup = (v) => localStorage.setItem(HOME_SVC_GROUP_KEY, v);
      function sortServices(list, mode) {
        const lang = currentLang();
        if (mode === 'az') return list.slice().sort((a,b)=> (locField(a,'name')||'').localeCompare(locField(b,'name')||'', lang));
        if (mode === 'za') return list.slice().sort((a,b)=> (locField(b,'name')||'').localeCompare(locField(a,'name')||'', lang));
        // default 'top' by rating desc
        return list.slice().sort((a,b)=> (b.rating||0) - (a.rating||0));
      }
      function filterByGroup(list) {
        const g = getSvcGroup();
        if (!g || g === 'all') return list;
        return list.filter(s => (s.category === g));
      }
      function renderFeatured() {
        // apply group then sort
        const mode = getSvcSort();
        const group = getSvcGroup();
        if (homeServicesSort) homeServicesSort.value = mode;
        if (homeServicesGroup) homeServicesGroup.value = group;
        const grouped = filterByGroup(services);
        const sorted = sortServices(grouped, mode).slice(0, 6);
        featuredGrid.innerHTML = sorted.map(cardTemplate).join('');
      }
      renderFeatured();
      if (homeServicesSort) {
        homeServicesSort.addEventListener('change', () => { setSvcSort(homeServicesSort.value); renderFeatured(); });
        homeServicesSort.value = getSvcSort();
      }
      if (homeServicesGroup) {
        homeServicesGroup.addEventListener('change', () => { setSvcGroup(homeServicesGroup.value); renderFeatured(); });
        homeServicesGroup.value = getSvcGroup();
      }
    }
  })();
  
  // --- Floating Action Buttons (WhatsApp & Back to Top) ---
  (function initFABs() {
    try {
      const doc = document;
      if (!doc || !doc.body) return;
      if (doc.querySelector('.fab-container')) return; // prevent duplicates

      const container = doc.createElement('div');
      container.className = 'fab-container';
      container.innerHTML = `
        <a href="https://wa.me/213549523594" target="_blank" rel="noopener" class="fab-btn fab-whatsapp" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M20.52 3.48A11.77 11.77 0 0012 0 12 12 0 001.6 17.8L0 24l6.35-1.66A11.94 11.94 0 0012 24a12 12 0 0012-12 11.77 11.77 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.06-1.38l-.36-.21-3.77 1 .99-3.67-.24-.38A10 10 0 1112 22zm5.46-7.54c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.64.07a8.16 8.16 0 01-2.4-1.48 9 9 0 01-1.66-2.06c-.17-.3 0-.46.13-.61s.3-.35.45-.53.2-.3.3-.5a.56.56 0 000-.53c-.08-.15-.67-1.61-.92-2.2s-.49-.5-.67-.5h-.57a1.11 1.11 0 00-.8.38 3.34 3.34 0 00-1 2.47 5.79 5.79 0 001.24 3.07 13.22 13.22 0 005.06 4.54 17.44 17.44 0 001.73.64 4.16 4.16 0 001.92.12 3.15 3.15 0 002.06-1.45 2.58 2.58 0 00.18-1.45c-.08-.15-.27-.22-.57-.37z"/></svg>
        </a>
        <button type="button" class="fab-btn fab-top" aria-label="العودة للأعلى" title="العودة للأعلى">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 4l-7 7h4v7h6v-7h4z"/></svg>
        </button>
      `;
      doc.body.appendChild(container);

      const topBtn = container.querySelector('.fab-top');
      const toggleTop = () => {
        if (window.scrollY > 300) topBtn.classList.add('visible');
        else topBtn.classList.remove('visible');
      };
      window.addEventListener('scroll', toggleTop, { passive: true });
      toggleTop();
      topBtn.addEventListener('click', () => {
        try { window.scrollTo({ top: 0, behavior: 'smooth' }); }
        catch { window.scrollTo(0, 0); }
      });
    } catch (_) { /* no-op */ }
  })();
})();
