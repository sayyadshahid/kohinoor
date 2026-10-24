import type { Locale } from '../context/LocaleProvider';

/* Maps a gallery category to the matching form service value. */
export const CATEGORY_SERVICE_MAP = {
  Alterations: 'Garment Alterations & Reshaping',
  Embroidery: 'Intricate Embroidery',
  'Ladies Suit Stitching': 'Ladies Suit Stitching',
};

export const GALLERY_FILTERS = ['All', 'Alterations', 'Ladies Suit Stitching', 'Embroidery'];

export const GALLERY_ITEMS = [
  {
    id: 2,
    title: 'Elegant Dusty Rose Embroidered Suit',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-dusty-rose-embroidered-suit.webp',
    description:
      "A beautifully tailored dusty rose pink ladies' suit featuring intricate floral embroidery, an elegant straight-cut kurta, matching bottoms, and a coordinated dupatta with delicate embroidered borders. Perfect for festive occasions, family functions, and elegant traditional wear.",
    details:
      'Premium Fabric • Intricate Floral Embroidery • Custom-Fit Stitching • Matching Dupatta • Hand-Finished Borders',
  },
  {
    id: 3,
    title: 'Suit Waist & Length Resizing',
    category: 'Alterations',
    image: '/alterations/after-suit.webp',
    description:
      'A ready-made suit re-shaped at the waist and hem for a clean, tailored fit and a flattering drape.',
    details: 'Invisible Side Seams • Precision Hemming • 48-Hour Turnaround',
  },
  {
    id: 5,
    title: 'Bespoke Flared Anarkali Suit',
    category: 'Ladies Suit Stitching',
    image: '/gallery/bespoke-flared-anarkali-suit.webp',
    description:
      'Tailored flared Anarkali suit featuring a fitted bodice, elegant floral print, wide umbrella-cut skirt, and a matching dupatta with beautifully finished borders.',
    details:
      'Georgette & Pure Silk • Precision Pleating • Custom Umbrella Flare • Hand-Finished Piping',
  },
  {
    id: 6,
    title: 'Burkha Size & Length Reshaping',
    category: 'Alterations',
    image: '/alterations/burkha-after.webp',
    description:
      'Burkha re-fitted through the body, shoulders and hem for a comfortable, modest drape.',
    details: 'Side Seam Reshaping • Shoulder & Sleeve Fit • Matching Stitch Finish',
  },
  {
    id: 7,
    title: 'Elegant Cream Floral Printed Suit',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-cream-floral-printed-suit.webp',
    description:
      "A beautifully tailored cream-colored ladies' suit featuring delicate blue floral prints, a stylish buttoned neckline, a straight-cut kurta, matching blue trousers, and a contrasting blue dupatta with decorative borders. Perfect for casual outings, festive gatherings, and elegant everyday wear.",
    details:
      'Premium Printed Fabric • Blue Floral Patterns • Buttoned Neckline • Custom-Fit Stitching • Contrasting Dupatta • Decorative Sleeve & Hem Borders',
  },
  {
    id: 8,
    title: 'Jeans Waist & Length Tapering',
    category: 'Alterations',
    image: '/alterations/jeans-after.webp',
    description:
      'Jeans taken in at the waist with tapered legs and a hem finished to preserve the original look.',
    details: 'Back Seam Waist Fitting • Leg Tapering • Original Hem Finish',
  },
  {
    id: 9,
    title: 'Custom Alteration Work',
    category: 'Alterations',
    image: '/gallery/custom-alteration-1.webp',
    description:
      'Hand-finished seams and precision fitting for a garment altered to your exact measurements.',
    details: 'Hand-Finished Seams • Precise Measurements • Trial Fitting',
  },
  {
    id: 10,
    title: 'Precision Fit Adjustment',
    category: 'Alterations',
    image: '/gallery/custom-alteration-2.webp',
    description:
      'Careful reshaping and neat finishing for a comfortable fit that looks completely original.',
    details: 'Custom Reshaping • Neat Finishing • Quick Turnaround',
  },
];

export const GALLERY_ITEMS_HI = [
  {
    id: 2,
    title: 'एलिगेंट डस्टी रोज़ एम्ब्रॉयडरी सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-dusty-rose-embroidered-suit.webp',
    description:
      'सुंदर ढंग से सिली गई डस्टी रोज़ पिंक महिला सूट, जिसमें बारीक फ्लोरल कढ़ाई, एलिगेंट स्ट्रेट-कट कुर्ता, मैचिंग बॉटम और नाज़ुक कढ़ाई वाले बॉर्डर वाला मैचिंग दुपट्टा है। त्योहारों, पारिवारिक समारोहों और एलिगेंट पारंपरिक पहनावे के लिए परफेक्ट।',
    details:
      'प्रीमियम कपड़ा • बारीक फ्लोरल कढ़ाई • कस्टम-फिट सिलाई • मैचिंग दुपट्टा • हाथ से फिनिश किए बॉर्डर',
  },
  {
    id: 3,
    title: 'सूट कमर और लंबाई अल्टरेशन',
    category: 'Alterations',
    image: '/alterations/after-suit.webp',
    description:
      'रेडीमेड सूट को कमर और हेम पर रीशेप कर साफ-सुथरा टेलर्ड फिट और सुंदर ड्रेप दिया गया।',
    details: 'छुपी साइड सीम • सटीक हेमिंग • 48 घंटे का टर्नअराउंड',
  },
  {
    id: 5,
    title: 'बेस्पोक फ्लेयर्ड अनारकली सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/bespoke-flared-anarkali-suit.webp',
    description:
      'फिटेड बॉडिस, एलिगेंट फ्लोरल प्रिंट, चौड़ी अम्ब्रेला-कट स्कर्ट और सुंदर फिनिश बॉर्डर वाले मैचिंग दुपट्टे के साथ सिला हुआ फ्लेयर्ड अनारकली सूट।',
    details:
      'जॉर्जेट और प्योर सिल्क • प्रिसीजन प्लीटिंग • कस्टम अम्ब्रेला फ्लेयर • हाथ से फिनिश की पाइपिंग',
  },
  {
    id: 6,
    title: 'बुर्का साइज और लंबाई अल्टरेशन',
    category: 'Alterations',
    image: '/alterations/burkha-after.webp',
    description:
      'बॉडी, कंधों और हेम पर बुर्का दोबारा फिट किया गया, जिससे आरामदायक और सभ्य ड्रेप मिले।',
    details: 'साइड सीम रीशेपिंग • कंधे और स्लीव फिट • मैचिंग सिलाई फिनिश',
  },
  {
    id: 7,
    title: 'एलिगेंट क्रीम फ्लोरल प्रिंटेड सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-cream-floral-printed-suit.webp',
    description:
      'सुंदर ढंग से सिली गई क्रीम रंग की महिला सूट, जिसमें नाज़ुक नीले फ्लोरल प्रिंट, स्टाइलिश बटन वाली नेकलाइन, स्ट्रेट-कट कुर्ता, मैचिंग नीली पतलून और डेकोरेटिव बॉर्डर वाला कंट्रास्टिंग नीला दुपट्टा है। कैजुअल आउटिंग, त्योहारों और एलिगेंट रोज़मर्रा के पहनावे के लिए परफेक्ट।',
    details:
      'प्रीमियम प्रिंटेड कपड़ा • नीले फ्लोरल पैटर्न • बटन वाली नेकलाइन • कस्टम-फिट सिलाई • कंट्रास्टिंग दुपट्टा • डेकोरेटिव स्लीव और हेम बॉर्डर',
  },
  {
    id: 8,
    title: 'जींस कमर और लंबाई टेपरिंग',
    category: 'Alterations',
    image: '/alterations/jeans-after.webp',
    description:
      'कमर से जींस कसी गई, पैर टेपर किए गए और ओरिजिनल लुक बनाए रखने के लिए हेम फिनिश किया गया।',
    details: 'बैक सीम कमर फिटिंग • पैर टेपरिंग • ओरिजिनल हेम फिनिश',
  },
  {
    id: 9,
    title: 'कस्टम अल्टरेशन कारीगरी',
    category: 'Alterations',
    image: '/gallery/custom-alteration-1.webp',
    description:
      'आपके सटीक माप के अनुसार कपड़े के लिए हाथ से फिनिश की गई सिलाई और सटीक फिटिंग।',
    details: 'हाथ से फिनिश सीम • सटीक माप • ट्रायल फिटिंग',
  },
  {
    id: 10,
    title: 'सटीक फिट एडजस्टमेंट',
    category: 'Alterations',
    image: '/gallery/custom-alteration-2.webp',
    description:
      'आरामदायक फिट के लिए सावधानी से रीशेपिंग और साफ फिनिश, जो पूरी तरह ओरिजिनल लगे।',
    details: 'कस्टम रीशेपिंग • साफ फिनिश • तेज़ टर्नअराउंड',
  },
];

export const GALLERY_ITEMS_MR = [
  {
    id: 2,
    title: 'एलिगंट डस्टी रोज भरतकाम सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-dusty-rose-embroidered-suit.webp',
    description:
      'सुंदरपणे शिवलेला डस्टी रोज पिंक महिला सूट, ज्यात बारीक फुलांचे भरतकाम, एलिगंट स्ट्रेट-कट कुर्ता, मॅचिंग बॉटम आणि नाजूक भरतकामाच्या बॉर्डर असलेला मॅचिंग दुपट्टा आहे. सण, कौटुंबिक समारंभ आणि एलिगंट पारंपरिक पेहरावासाठी उत्तम.',
    details:
      'प्रीमियम कापड • बारीक फुलांचे भरतकाम • कस्टम-फिट शिवण • मॅचिंग दुपट्टा • हाताने फिनिश केलेल्या बॉर्डर',
  },
  {
    id: 3,
    title: 'सूट कंबर आणि लांबी अल्टरेशन',
    category: 'Alterations',
    image: '/alterations/after-suit.webp',
    description:
      'रेडीमेड सूट कंबर आणि हेमवर पुन्हा आकार देऊन स्वच्छ टेलर्ड फिट आणि सुंदर ड्रेप दिला.',
    details: 'लपलेली साइड सीम • अचूक हेमिंग • ४८ तासांचा टर्नअराउंड',
  },
  {
    id: 5,
    title: 'बेस्पोक फ्लेअर्ड अनारकली सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/bespoke-flared-anarkali-suit.webp',
    description:
      'फिटेड बॉडिस, एलिगंट फुलांचा प्रिंट, रुंद अंब्रेला-कट स्कर्ट आणि सुंदर फिनिश बॉर्डर असलेल्या मॅचिंग दुपट्ट्यासह शिवलेला फ्लेअर्ड अनारकली सूट.',
    details:
      'जॉर्जेट आणि प्युअर सिल्क • प्रिसिजन प्लीटिंग • कस्टम अंब्रेला फ्लेअर • हाताने फिनिश केलेली पाइपिंग',
  },
  {
    id: 6,
    title: 'बुर्का साइज आणि लांबी सुधारणे',
    category: 'Alterations',
    image: '/alterations/burkha-after.webp',
    description:
      'बॉडी, खांदे आणि हेमवर बुर्का पुन्हा फिट केला, ज्यामुळे आरामदायक आणि सभ्य ड्रेप मिळाला.',
    details: 'साइड सीम रिशेपिंग • खांदा आणि स्लीव्ह फिट • मॅचिंग शिवणी फिनिश',
  },
  {
    id: 7,
    title: 'एलिगंट क्रीम फुलांचा प्रिंटेड सूट',
    category: 'Ladies Suit Stitching',
    image: '/gallery/elegant-cream-floral-printed-suit.webp',
    description:
      'सुंदरपणे शिवलेला क्रीम रंगाचा महिला सूट, ज्यात नाजूक निळे फुलांचे प्रिंट, स्टाइलिश बटण असलेली नेकलाइन, स्ट्रेट-कट कुर्ता, मॅचिंग निळी पँट आणि डेकोरेटिव्ह बॉर्डर असलेला कॉन्ट्रास्टिंग निळा दुपट्टा आहे. कॅज्युअल आउटिंग, सण आणि एलिगंट रोजच्या पेहरावासाठी उत्तम.',
    details:
      'प्रीमियम प्रिंटेड कापड • निळे फुलांचे पॅटर्न • बटण असलेली नेकलाइन • कस्टम-फिट शिवण • कॉन्ट्रास्टिंग दुपट्टा • डेकोरेटिव्ह स्लीव्ह आणि हेम बॉर्डर',
  },
  {
    id: 8,
    title: 'जीन्स कंबर आणि लांबी टेपरिंग',
    category: 'Alterations',
    image: '/alterations/jeans-after.webp',
    description:
      'कंबरेतून जीन्स घट्ट केली, पाय टेपर केले आणि मूळ लुक टिकवण्यासाठी हेम फिनिश केला.',
    details: 'बॅक सीम कंबर फिटिंग • पाय टेपरिंग • मूळ हेम फिनिश',
  },
  {
    id: 9,
    title: 'कस्टम अल्टरेशन कारागिरी',
    category: 'Alterations',
    image: '/gallery/custom-alteration-1.webp',
    description:
      'तुमच्या अचूक मापांनुसार कपड्यासाठी हाताने फिनिश केलेली शिवण आणि अचूक फिटिंग.',
    details: 'हाताने फिनिश सीम • अचूक मापे • ट्रायल फिटिंग',
  },
  {
    id: 10,
    title: 'अचूक फिट अॅडजस्टमेंट',
    category: 'Alterations',
    image: '/gallery/custom-alteration-2.webp',
    description:
      'आरामदायक फिटसाठी काळजीपूर्वक रिशेपिंग आणि स्वच्छ फिनिश, जे पूर्णपणे मूळसारखे दिसते.',
    details: 'कस्टम रिशेपिंग • स्वच्छ फिनिश • जलद टर्नअराउंड',
  },
];

export const GALLERY_ITEMS_BY_LOCALE: Record<Locale, typeof GALLERY_ITEMS> = {
  en: GALLERY_ITEMS,
  hi: GALLERY_ITEMS_HI,
  mr: GALLERY_ITEMS_MR,
};
