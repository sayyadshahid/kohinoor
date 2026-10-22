import { NAV_LINKS } from '../../config/site';

export default function DesktopNav({ activeSection }) {
  return (
    <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink" aria-label="Primary">
      {NAV_LINKS.map(({ href, label, icon: Icon }) => {
        const isActive = activeSection === href.slice(1);
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
            {label}
          </a>
        );
      })}
    </nav>
  );
}
