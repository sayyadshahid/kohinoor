'use client';

import CurvedMenu from '@/components/ui/curved-menu';
import { MessageCircle, Phone } from 'lucide-react';
import { SITE, WHATSAPP_MESSAGES, waLink } from '../../config/site';

const DemoFooter = () => (
  <div className="flex w-full items-center justify-between gap-3 border-t border-line px-10 py-5 text-sm md:px-24">
    <a
      href={waLink(WHATSAPP_MESSAGES.stitching)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 font-semibold text-brand"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      WhatsApp
    </a>
    <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 font-semibold text-brand">
      <Phone className="h-4 w-4" aria-hidden="true" />
      {SITE.phoneDisplay}
    </a>
  </div>
);

const DemoOne = () => {
  return (
    <div className="min-h-screen bg-canvas">
      <CurvedMenu footer={<DemoFooter />} />

      <div className="flex h-screen items-center justify-center text-center text-7xl text-ink">
        hello<span className="italic">!</span>
      </div>
    </div>
  );
};

export { DemoOne };
