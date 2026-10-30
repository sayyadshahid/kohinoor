import { SITE } from '../config/site';
import type { Locale } from '../context/LocaleProvider';

export type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_EN: FaqItem[] = [
  {
    question: 'Where is Kohinoor Tailors located?',
    answer: `Kohinoor Tailors is at ${SITE.address}. The atelier is a short drive from Kondhwa, Undri, NIBM and Hadapsar, with easy two-wheeler and car access. Call ${SITE.phoneDisplay} before visiting for exact directions, parking guidance and appointment availability.`,
  },
  {
    question: 'What are your opening hours?',
    answer: `Kohinoor Tailors is open ${SITE.hours}. ${SITE.sundayHours}. For urgent alterations, call or WhatsApp ${SITE.phoneDisplay} before visiting so we can confirm a slot that suits your schedule and garment deadline.`,
  },
  {
    question: "How much does ladies' suit stitching cost?",
    answer:
      "Ladies' suit stitching starts from ₹450 and depends on the fabric, design, lining, embroidery and number of pieces. Simple salwar kameez sets sit at the lower end, while Anarkali, sharara and bridal ensembles are quoted after a fitting. Share your reference photo on WhatsApp for an accurate estimate.",
  },
  {
    question: 'How much do alterations cost?',
    answer:
      'Alterations start from ₹100 for simple hemming and basic adjustments. Waist tapering, sleeve reshaping, shoulder corrections and bridal lehenga work are quoted after inspecting the garment. Bring the outfit to the Kondhwa atelier or send clear photos on WhatsApp for a firm price before you commit.',
  },
  {
    question: 'How long do alterations take?',
    answer:
      'Most alterations are completed within 24 to 48 hours. Simple hems and waist adjustments are often ready the next day, while bridal lehengas, heavily embroidered suits and structured blouses need extra time for hand finishing. Confirm your occasion date when booking so we can schedule the work comfortably.',
  },
  {
    question: 'Do you alter bridal lehengas?',
    answer:
      'Yes. Kohinoor Tailors adjusts bridal lehenga waistlines, length, can-can volume, blouse fit and dupatta setting while protecting the embroidery and borders. We inspect the garment first, explain what can be altered safely, and complete a trial fitting before delivery. Book at least one week before the wedding for stress-free results.',
  },
  {
    question: 'Do you do zardozi and Aari embroidery?',
    answer:
      'Yes. We offer traditional zardozi, Aari needlework, silk thread motifs, mirror work and custom neckline or sleeve borders for festive and bridal wear. Designs are matched to your fabric and occasion, then quoted by detail and turnaround. Visit the atelier with inspiration photos to discuss your embroidery.',
  },
  {
    question: 'What is zardozi embroidery?',
    answer:
      'Zardozi is a traditional Indian embroidery that uses metallic threads, sequins, beads and sometimes precious stones to create raised, ornate patterns. It is commonly used on bridal lehengas, blouses and dupattas. Kohinoor Tailors applies zardozi by hand and machine, matching motifs to your fabric, budget and occasion.',
  },
  {
    question: 'Do you offer a free trial fitting?',
    answer:
      "Yes. A free trial fitting is included with ladies' suit stitching at Kohinoor Tailors. If the first trial is not perfect, we re-adjust the garment at no extra cost until it sits comfortably. Trial fittings are held at our Kondhwa atelier, with Sunday slots available by prior appointment.",
  },
  {
    question: 'How do I book a fitting?',
    answer: `Book a fitting by calling or WhatsApp messaging ${SITE.phoneDisplay}, or use the fitting form on this website. Share your garment type, occasion date and preferred time. We will confirm a slot at the Kondhwa atelier, usually within the same working day, and guide you on what to bring.`,
  },
  {
    question: 'Do you serve customers outside Kondhwa?',
    answer: `Yes. Customers travel to Kohinoor Tailors from ${SITE.areaServed.join(', ')}. The atelier is easy to reach by road, and we share directions on WhatsApp. For bridal or bulk orders, call ahead so we can reserve enough consultation and trial-fitting time for your visit.`,
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

const FAQ_HINGLISH: FaqItem[] = [
  {
    question: 'Kohinoor Tailors kahan located hai?',
    answer: `Kohinoor Tailors ${SITE.address} par hai.`,
  },
  {
    question: 'Aapke opening hours kya hain?',
    answer: `${SITE.hours}. ${SITE.sundayHours}.`,
  },
  {
    question: 'Ladies suit stitching ka kitna charge hai?',
    answer:
      'Ladies suit stitching ₹450 se shuru hoti hai; final price fabric, design, lining aur embroidery par depend karta hai.',
  },
  {
    question: 'Alterations ka kitna charge hai?',
    answer:
      'Alterations ₹150 se shuru hote hain; bridal aur structured garments ka quote inspection ke baad diya jaata hai.',
  },
  {
    question: 'Alterations mein kitna time lagta hai?',
    answer:
      'Zyada tar alterations 24–48 hours mein ho jaate hain; bridal ya heavy embroidered pieces mein zyada time lag sakta hai.',
  },
  {
    question: 'Kya aap bridal lehengas alter karte hain?',
    answer:
      'Haan. Hum waist, length, can-can aur blouse adjust karte hain; embroidery aur borders preserve kiye jaate hain.',
  },
  {
    question: 'Kya aap zardozi aur Aari embroidery karte hain?',
    answer: 'Haan. Hum zardozi aur Aari embroidery ke saath silk thread aur mirror work bhi karte hain.',
  },
  {
    question: 'Kya trial fitting included hai?',
    answer:
      'Haan, ladies suit stitching ke saath trial fitting included hai; agar pehla trial perfect na ho toh hum free adjustments karte hain.',
  },
  {
    question: 'Fitting kaise book karoon?',
    answer: `WhatsApp ya ${SITE.phoneDisplay} par call karein, ya website ka fitting form use karein.`,
  },
  {
    question: 'Kya aap Kondhwa ke bahar bhi service dete hain?',
    answer: `Haan. Hum ${SITE.areaServed.join(', ')} ke customers ko service dete hain.`,
  },
];

export const FAQ_BY_LOCALE: Record<Locale, FaqItem[]> = {
  en: FAQ_EN,
  hi: FAQ_HI,
  mr: FAQ_MR,
  hinglish: FAQ_HINGLISH,
};

export const FAQS = FAQ_EN;
