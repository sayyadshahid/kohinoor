import { MessageSquare, Phone } from 'lucide-react';
import { NAV_LINKS, SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';

export default function MobileNav({ activeSection, onNavigate }) {
  return (
    <div
      id="mobile-navigation"
      className="md:hidden bg-canvas border-b border-line px-4 pt-3 pb-6 space-y-1"
    >
      {NAV_LINKS.map(({ href, label, icon: Icon }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={href}
            href={href}
            onClick={onNavigate}
            aria-current={isActive ? 'true' : undefined}
            className={`block py-2.5 text-base font-serif transition-colors flex items-center gap-2 ${
              isActive ? 'text-brand font-semibold' : 'text-ink hover:text-brand'
            }`}
          >
            {Icon ? <Icon className="w-4 h-4 text-silver" aria-hidden="true" /> : null}
            {label}
          </a>
        );
      })}

      <div className="pt-4 mt-3 border-t border-line flex flex-col gap-2.5">
        <a
          href={waLink(WHATSAPP_MESSAGES.stitching)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-whatsapp hover:bg-whatsapp-hover text-white text-center rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-card transition-colors"
        >
          <MessageSquare className="w-4 h-4" aria-hidden="true" />
          WhatsApp Chat
        </a>
        <a
          href={`tel:${SITE.phone}`}
          className="w-full py-3 border border-brand text-brand text-center rounded-full font-medium text-sm flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" aria-hidden="true" />
          Call {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
