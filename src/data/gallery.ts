import type { Locale } from '../context/LocaleProvider';

/* Maps a gallery category to the matching form service value. */
export const CATEGORY_SERVICE_MAP = {
  Alterations: 'Garment Alterations & Reshaping',
  Embroidery: 'Intricate Embroidery',
  'Ladies Suit Stitching': 'Ladies Suit Stitching',
};

export const GALLERY_FILTERS = ['All', 'Ladies Suit Stitching', 'Embroidery', 'Alterations'];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Hand-Embroidered Zardozi Bridal Suit',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    description:
      'Intricate antique-bronze zardozi threadwork on deep velvet fabric with custom fitted neckline.',
    details: 'Silk Velvet base • 60+ Craft Hours • Custom Dupatta Border',
  },
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
    title: 'Bridal Lehenga Waist & Length Resizing',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    description:
      'Seamless waist tapering, can-can padding adjustment, and hem re-alignment for a heavy bridal outfit.',
    details: 'Invisible Stitch Technique • Can-can Restructuring • Quick Turnaround',
  },
  {
    id: 4,
    title: 'Silk Kurti with Aari Needlework Motif',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    description:
      'Delicate neck & sleeve motif embroidery crafted with muted bronze and deep mocha silk threads.',
    details: 'Raw Silk • Artisanal Threadwork • Custom Color Palette',
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
    title: 'Padded Blouse & Armhole Tapering',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=80',
    description:
      'Adjusting armhole depth, adding padded inserts, and shortening sleeves without altering pattern symmetry.',
    details: 'Perfect Fit Tailoring • Soft Molded Cups • Restyled Sleeves',
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
];

export const GALLERY_ITEMS_HI = [
  {
    id: 1,
    title: 'हस्त-कढ़ाई ज़रदोज़ी ब्राइडल सूट',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    description:
      'गहरे मखमल के कपड़े पर पुरानी कांस्य रंग की ज़रदोज़ी धागे की कारीगरी और कस्टम फिट नेकलाइन।',
    details: 'सिल्क मखमल बेस • 60+ घंटे की कारीगरी • कस्टम दुपट्टा बॉर्डर',
  },
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
    title: 'ब्राइडल लहंगा कमर और लंबाई अल्टरेशन',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    description:
      'भारी ब्राइडल परिधान के लिए सीमलेस कमर टेपरिंग, कैन-कैन पैडिंग एडजस्टमेंट और हेम री-अलाइनमेंट।',
    details: 'इनविजिबल स्टिच तकनीक • कैन-कैन रीस्टक्चरिंग • तेज़ टर्नअराउंड',
  },
  {
    id: 4,
    title: 'आरी नीडलवर्क मोटिफ वाली सिल्क कुर्ती',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    description:
      'हल्के कांस्य और गहरे मोका सिल्क धागों से बनी नाज़ुक नेक और स्लीव मोटिफ कढ़ाई।',
    details: 'रॉ सिल्क • कारीगरी वाली धागे की कढ़ाई • कस्टम कलर पैलेट',
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
    title: 'पैडेड ब्लाउज और आर्महोल टेपरिंग',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=80',
    description:
      'पैटर्न सिमेट्री बदले बिना आर्महोल गहराई एडजस्ट करना, पैडेड इन्सर्ट जोड़ना और स्लीव छोटी करना।',
    details: 'परफेक्ट फिट टेलरिंग • सॉफ्ट मोल्डेड कप • रीस्टाइल्ड स्लीव',
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
];

export const GALLERY_ITEMS_MR = [
  {
    id: 1,
    title: 'हाताने भरतकाम केलेला झरदोजी लग्नाचा सूट',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    description:
      'गडद मखमली कापडावर जुन्या कांस्य रंगाचे झरदोजी धाग्याचे भरतकाम आणि कस्टम फिट नेकलाइन.',
    details: 'सिल्क मखमल बेस • ६०+ तासांची कारागिरी • कस्टम दुपट्टा बॉर्डर',
  },
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
    title: 'लग्नाचे लहंगे कंबर आणि लांबी अल्टरेशन',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80',
    description:
      'जड लग्नाच्या पोशाखासाठी सीमलेस कंबर टेपरिंग, कॅन-कॅन पॅडिंग अॅडजस्टमेंट आणि हेम री-अलाइनमेंट.',
    details: 'इनव्हिजिबल स्टिच तंत्र • कॅन-कॅन रिस्ट्रक्चरिंग • जलद टर्नअराउंड',
  },
  {
    id: 4,
    title: 'आरी नीडलवर्क मोटिफ असलेली सिल्क कुर्ती',
    category: 'Embroidery',
    image:
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80',
    description:
      'हलक्या कांस्य आणि गडद मोका सिल्क धाग्यांनी केलेले नाजूक नेक आणि स्लीव्ह मोटिफ भरतकाम.',
    details: 'रॉ सिल्क • कारागिरीचे धाग्याचे भरतकाम • कस्टम रंगसंगती',
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
    title: 'पॅडेड ब्लाउज आणि आर्महोल टेपरिंग',
    category: 'Alterations',
    image:
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=80',
    description:
      'पॅटर्नची सममिती न बदलता आर्महोलची खोली अॅडजस्ट करणे, पॅडेड इन्सर्ट जोडणे आणि स्लीव्ह लहान करणे.',
    details: 'परफेक्ट फिट टेलरिंग • मऊ मोल्डेड कप • रीस्टाइल केलेले स्लीव्ह',
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
];

export const GALLERY_ITEMS_BY_LOCALE: Record<Locale, typeof GALLERY_ITEMS> = {
  en: GALLERY_ITEMS,
  hi: GALLERY_ITEMS_HI,
  mr: GALLERY_ITEMS_MR,
};
