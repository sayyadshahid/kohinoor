import type { Locale } from '../../context/LocaleProvider';

export const labels: Record<Locale, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_services: 'Services',
    nav_alterations: 'Before & After',
    nav_gallery: 'Gallery',
    nav_about: 'About',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    lang_label: 'Language',
    lang_en: 'English',
    lang_hi: 'Hindi',
    lang_mr: 'Marathi',
  },
  hi: {
    nav_home: 'होम',
    nav_services: 'सेवाएँ',
    nav_alterations: 'पहले और बाद में',
    nav_gallery: 'गैलरी',
    nav_about: 'हमारे बारे में',
    nav_faq: 'सामान्य प्रश्न',
    nav_contact: 'संपर्क',
    lang_label: 'भाषा',
    lang_en: 'अंग्रेज़ी',
    lang_hi: 'हिंदी',
    lang_mr: 'मराठी',
  },
  mr: {
    nav_home: 'मुख्यपृष्ठ',
    nav_services: 'सेवा',
    nav_alterations: 'पूर्व आणि नंतर',
    nav_gallery: 'गॅलरी',
    nav_about: 'आमच्याबद्दल',
    nav_faq: 'वारंवार विचारले जाणारे प्रश्न',
    nav_contact: 'संपर्क',
    lang_label: 'भाषा',
    lang_en: 'इंग्रजी',
    lang_hi: 'हिंदी',
    lang_mr: 'मराठी',
  },
};

export function t(locale: Locale, key: string) {
  return labels[locale][key] ?? labels.en[key] ?? key;
}
