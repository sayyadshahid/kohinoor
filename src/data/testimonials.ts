export const TESTIMONIALS = [
  {
    name: 'Ananya Sharma',
    service: 'Bridal Lehenga Alterations',
    quote:
      '"Kohinoor altered my wedding lehenga length and fitted the waist perfectly in two days. You could not tell it had been resized. The stitching pattern is completely intact."',
  },
  {
    name: 'Priya Verma',
    service: 'Custom Suit & Embroidery',
    quote:
      '"A custom velvet Anarkali with zardozi neck embroidery. The shoulder fit and the flare are exactly as I imagined it. It was ready on the day we agreed."',
  },
  {
    name: 'Meera Patel',
    service: 'Regular Suit Stitching',
    quote:
      '"All my office suits and trousers have been stitched here for six years now. The seams still look as good as the day I collected them. The delivery dates hold."',
  },
];

export const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
