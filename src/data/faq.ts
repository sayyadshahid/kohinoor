import { SITE } from '../config/site';

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: 'Where is Kohinoor Tailors located?',
    answer: `Kohinoor Tailors is at ${SITE.address}.`,
  },
  {
    question: 'What are your opening hours?',
    answer: `${SITE.hours}. ${SITE.sundayHours}.`,
  },
  {
    question: "How much does ladies' suit stitching cost?",
    answer:
      "Ladies' suit stitching starts from ₹450; the final price depends on fabric, design, lining and embroidery.",
  },
  {
    question: 'How much do alterations cost?',
    answer:
      'Alterations start from ₹100; bridal/structured garments are quoted after inspection.',
  },
  {
    question: 'How long do alterations take?',
    answer:
      'Most alterations take 24–48 hours; bridal/heavily embroidered pieces may take longer.',
  },
  {
    question: 'Do you alter bridal lehengas?',
    answer:
      'Yes. We adjust the waist, length, can-can and blouse; embroidery/borders are preserved.',
  },
  {
    question: 'Do you do zardozi and Aari embroidery?',
    answer: 'Yes. We do zardozi and Aari embroidery, along with silk thread and mirror work.',
  },
  {
    question: 'Is a trial fitting included?',
    answer:
      "Yes, a trial fitting is included with ladies' suit stitching; if the first trial isn't perfect, we make free adjustments.",
  },
  {
    question: 'How do I book a fitting?',
    answer: `Book by WhatsApp or call at ${SITE.phoneDisplay}, or use the website fitting form.`,
  },
  {
    question: 'Do you serve customers outside Kondhwa?',
    answer: `Yes. We serve customers from ${SITE.areaServed.join(', ')}.`,
  },
];
