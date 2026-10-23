import { NAV_LINKS } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import LanguageSwitcher from './LanguageSwitcher';

const LABEL_KEYS: Record<string, string> = {
  '/#home': 'nav_home',
  '/#services': 'nav_services',
  '/#alterations': 'nav_alterations',
  '/#gallery': 'nav_gallery',
  '/#about': 'nav_about',
  '/#faq': 'nav_faq',
  '/#contact': 'nav_contact',
};

export default function DesktopNav({ activeSection }: { activeSection: string }) {
  const { locale } = useLocale();

  return (
    <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-ink relative z-[60]" aria-label="Primary">
      {NAV_LINKS.map(({ href, label, icon: Icon }) => {
        const isActive = activeSection === href.slice(1);
        const labelKey = LABEL_KEYS[href];
        const displayLabel = labelKey ? t(locale, labelKey) : label;
        return (
          <a
            key={href}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={`py-1 relative flex items-center gap-1.5 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-silver after:transition-all hover:after:w-full ${
              isActive
                ? 'text-brand font-semibold after:w-full'
                : 'text-ink hover:text-brand after:w-0'
            }`}
          >
            {Icon ? <Icon className="w-3.5 h-3.5 text-silver" aria-hidden="true" /> : null}
            {displayLabel}
          </a>
        );
      })}
      <LanguageSwitcher />
    </nav>
  );
}
