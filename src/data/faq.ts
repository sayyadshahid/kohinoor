import { SITE } from '../config/site';
import type { Locale } from '../context/LocaleProvider';

export type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_EN: FaqItem[] = [
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

const FAQ_HI: FaqItem[] = [
  {
    question: 'कोहिनूर टेलर्स कहां स्थित है?',
    answer: `कोहिनूर टेलर्स ${SITE.address} पर स्थित है।`,
  },
  {
    question: 'आपके खुलने का समय क्या है?',
    answer: `${SITE.hours}। ${SITE.sundayHours}।`,
  },
  {
    question: "महिला सूट सिलाई की कीमत कितनी है?",
    answer: 'महिला सूट सिलाई ₹450 से शुरू होती है; अंतिम कीमत कपड़े, डिज़ाइन, लाइनिंग और कढ़ाई पर निर्भर करती है।',
  },
  {
    question: 'अल्टरेशन की कीमत कितनी है?',
    answer: 'अल्टरेशन ₹150 से शुरू होते हैं; ब्राइडल और संरचित परिधानों की कीमत निरीक्षण के बाद बताई जाती है।',
  },
  {
    question: 'अल्टरेशन में कितना समय लगता है?',
    answer: 'अधिकांश अल्टरेशन 24–48 घंटे में पूरे होते हैं; ब्राइडल और भारी कढ़ाई वाले परिधानों में अधिक समय लग सकता है।',
  },
  {
    question: 'क्या आप ब्राइडल लहंगे अल्टर करते हैं?',
    answer: 'हाँ। हम कमर, लंबाई, कैन-कैन और ब्लाउज अल्टर करते हैं और कढ़ाई व बॉर्डर सुरक्षित रखते हैं।',
  },
  {
    question: 'क्या आप ज़रदोज़ी और आरी कढ़ाई करते हैं?',
    answer: 'हाँ। हम ज़रदोज़ी, आरी, सिल्क थ्रेड और मिरर वर्क कढ़ाई करते हैं।',
  },
  {
    question: 'क्या ट्रायल फिटिंग शामिल है?',
    answer: 'हाँ, महिला सूट सिलाई के साथ ट्रायल फिटिंग शामिल है; यदि पहला ट्रायल परफेक्ट न हो, तो हम मुफ्त में सुधार करते हैं।',
  },
  {
    question: 'फिटिंग कैसे बुक करूं?',
    answer: `व्हाट्सएप या कॉल करें ${SITE.phoneDisplay} पर, या वेबसाइट के फिटिंग फॉर्म का उपयोग करें।`,
  },
  {
    question: 'क्या आप कोंढवा के बाहर भी सेवा देते हैं?',
    answer: `हाँ। हम ${SITE.areaServed.join(', ')} से आने वाले ग्राहकों की सेवा करते हैं।`,
  },
];

const FAQ_MR: FaqItem[] = [
  {
    question: 'कोहिनूर टेलर्स कुठे आहे?',
    answer: `कोहिनूर टेलर्स ${SITE.address} येथे आहे.`,
  },
  {
    question: 'तुमचे उघडण्याचे वेळ काय आहेत?',
    answer: `${SITE.hours}. ${SITE.sundayHours}.`,
  },
  {
    question: 'महिला सूट शिवण्याची किंमत किती आहे?',
    answer: 'महिला सूट शिवण ₹४५० पासून सुरू होते; अंतिम किंमत कापड, डिझाइन, लाइनिंग आणि भरतकामावर अवलंबून असते.',
  },
  {
    question: 'अल्टरेशनची किंमत किती आहे?',
    answer: 'अल्टरेशन ₹१५० पासून सुरू होतात; लग्नाचे आणि जटिल पोशाखांचे दर तपासणीनंतर सांगितले जातात.',
  },
  {
    question: 'अल्टरेशनमध्ये किती वेळ लागतो?',
    answer: 'बहुतेक अल्टरेशन २४–४८ तासांत पूर्ण होतात; लग्नाचे किंवा जास्त भरतकाम असलेल्या पोशाखांना जास्त वेळ लागू शकतो.',
  },
  {
    question: 'तुम्ही लग्नाचे लहंगे अल्टर करता का?',
    answer: 'होय. आम्ही कंबरेचा घेर, लांबी, कॅन-कॅन आणि ब्लाउज अल्टर करतो आणि भरतकाम व बॉर्डर जतन करतो.',
  },
  {
    question: 'तुम्ही झरदोजी आणि आरी भरतकाम करता का?',
    answer: 'होय. आम्ही झरदोजी, आरी, रेशीम धागा आणि मिरर वर्क भरतकाम करतो.',
  },
  {
    question: 'ट्रायल फिटिंग समाविष्ट आहे का?',
    answer: 'होय, महिला सूट शिवणासोबत ट्रायल फिटिंग समाविष्ट आहे; पहिला ट्रायल परफेक्ट नसल्यास आम्ही मोफत दुरुस्ती करतो.',
  },
  {
    question: 'फिटिंग कसे बुक करू?',
    answer: `व्हाट्सअप किंवा कॉल करा ${SITE.phoneDisplay} वर, किंवा वेबसाइटवरील फिटिंग फॉर्म वापरा.`,
  },
  {
    question: 'तुम्ही कोंढवा बाहेर सेवा देता का?',
    answer: `होय. आम्ही ${SITE.areaServed.join(', ')} येथील ग्राहकांना सेवा देतो.`,
  },
];

export const FAQ_BY_LOCALE: Record<Locale, FaqItem[]> = {
  en: FAQ_EN,
  hi: FAQ_HI,
  mr: FAQ_MR,
};

export const FAQS = FAQ_EN;
