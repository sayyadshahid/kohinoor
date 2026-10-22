import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Sparkles, 
  Ruler, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  Menu, 
  X, 
  Star, 
  MessageSquare, 
  ZoomIn, 
  ArrowRight, 
  ShieldCheck, 
  Award,
  ChevronDown,
  ArrowLeftRight,
  Sliders,
  Layers,
  Sparkle
} from 'lucide-react';

/* ==========================================================================
   SIGNATURE ELEMENT: Stitched Thread SVG Lines & Motifs
   Hand-drawn running-stitch motif evoking authentic tailor needlework.
   ========================================================================== */
const StitchedThreadLine = ({ className = "", color = "#C9A227", width = "100%", height = "12" }) => (
  <svg 
    className={`w-full ${className}`} 
    height={height} 
    viewBox="0 0 400 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path 
      d="M2 6 C 50 4, 100 8, 150 5 C 200 2, 250 9, 300 6 C 350 4, 380 7, 398 6" 
      stroke={color} 
      strokeWidth="2" 
      strokeDasharray="7 5" 
      strokeLinecap="round" 
    />
    <circle cx="6" cy="6" r="2.5" fill={color} />
    <circle cx="394" cy="6" r="2.5" fill={color} />
  </svg>
);

const NeedleAndThreadIcon = ({ className = "w-6 h-6", color = "#6B1E2B" }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="1.75" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2L15 9L12 22L9 9L12 2Z" />
    <circle cx="12" cy="5" r="1" fill={color} />
    <path d="M13 5C17 5 21 8 20 13C19.2 17 14 18 12 22" strokeDasharray="3 3" />
  </svg>
);

/* ==========================================================================
   INTERACTIVE DRAGGABLE BEFORE/AFTER SPLIT SLIDER COMPONENT
   Features a vertical dotted thread line with a central handle button 
   that users can drag left or right to inspect before/after fit changes.
   ========================================================================== */
function BeforeAfterSlider({ beforeImage, afterImage, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="space-y-2">
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden border-2 border-[#6B1E2B] shadow-lg select-none bg-[#2B2420]">
        {/* AFTER IMAGE (Bottom base layer) */}
        <img 
          src={afterImage} 
          alt={`After alteration fit: ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-[#6B1E2B] text-[#FAF7F2] rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md pointer-events-none flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" /> AFTER (Kohinoor Precision Fit)
        </div>

        {/* BEFORE IMAGE (Top clipped layer) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={beforeImage} 
            alt={`Before alteration fit: ${title}`}
            className="w-full h-full object-cover filter contrast-95 brightness-95"
          />
          <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#2B2420]/90 backdrop-blur-sm text-[#FAF7F2] rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md pointer-events-none border border-white/20">
            BEFORE (Ill-Fitting)
          </div>
        </div>

        {/* DOTTED VERTICAL LINE & SEPARATOR HANDLE */}
        <div 
          className="absolute top-0 bottom-0 z-20 pointer-events-none transform -translate-x-1/2 flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Vertical Dotted Thread Line */}
          <div className="h-full w-0.5 border-r-2 border-dashed border-[#C9A227] shadow-sm" />

          {/* Central Handle Button */}
          <div className="absolute w-10 h-10 rounded-full bg-[#6B1E2B] text-[#C9A227] border-2 border-[#C9A227] shadow-xl flex items-center justify-center pointer-events-none">
            <Scissors className="w-4 h-4 rotate-90" />
          </div>
        </div>

        {/* DRAGGABLE RANGE INPUT OVERLAY */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
          aria-label="Drag slider to compare Before and After alteration"
        />

        {/* DRAG HINT BADGE */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3.5 py-1 bg-[#2B2420]/85 backdrop-blur-sm text-[#FAF7F2] rounded-full text-[10px] uppercase font-bold tracking-widest pointer-events-none border border-[#C9A227]/40 flex items-center gap-1.5 shadow-md">
          <ArrowLeftRight className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Drag Vertical Line Left / Right</span>
        </div>
      </div>
      
      <p className="text-center text-[11px] text-[#2B2420]/75 font-medium">
        💡 Move the gold dotted thread line horizontally to compare fabric fit & seams in real time.
      </p>
    </div>
  );
}

/* ==========================================================================
   MAIN APP COMPONENT
   ========================================================================== */
export default function App() {
  // Mobile navigation state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Selected gallery image for Lightbox Modal
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  // Active Gallery Filter Category
  const [galleryFilter, setGalleryFilter] = useState('All');

  // Before & After Active Case Selection
  const [activeBeforeAfterCase, setActiveBeforeAfterCase] = useState(0);

  // Before & After View Mode ('slider' | 'side-by-side' | 'toggle')
  const [beforeAfterViewMode, setBeforeAfterViewMode] = useState('slider');
  const [toggleState, setToggleState] = useState('after'); // 'before' or 'after' in toggle mode

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Garment Alterations & Reshaping',
    preferredDate: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll effect for sticky navbar highlight & animations
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle contact form field change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle contact form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Pre-fill service in contact form when clicking a service swatch CTA
  const selectServiceForBooking = (serviceTitle) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Gallery Data with Real High-Res Photography Links
  const galleryItems = [
    {
      id: 1,
      title: "Hand-Embroidered Zardozi Bridal Suit",
      category: "Embroidery",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      description: "Intricate metallic gold zardozi threadwork on deep velvet fabric with custom fitted neckline.",
      details: "Silk Velvet base • 60+ Craft Hours • Custom Dupatta Border"
    },
    {
      id: 2,
      title: "Bespoke Flared Anarkali Suit",
      category: "Ladies Suit Stitching",
      image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      description: "Tailored 16-kali flared Anarkali with fitted churidar and hand-finished piping.",
      details: "Georgette & Pure Silk • Precision Pleating • Custom Flare"
    },
    {
      id: 3,
      title: "Bridal Lehenga Waist & Length Resizing",
      category: "Alterations",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=80",
      description: "Seamless waist tapering, can-can padding adjustment, and hem re-alignment for a heavy bridal outfit.",
      details: "Invisible Stitch Technique • Can-can Restructuring • Quick Turnaround"
    },
    {
      id: 4,
      title: "Silk Kurti with Aari Needlework Motif",
      category: "Embroidery",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80",
      description: "Delicate neck & sleeve motif embroidery crafted with muted gold and maroon silk threads.",
      details: "Raw Silk • Artisanal Threadwork • Custom Color Palette"
    },
    {
      id: 5,
      title: "Straight Cut Punjabi Suit Fitting",
      category: "Ladies Suit Stitching",
      image: "https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&w=1000&q=80",
      description: "Contemporary straight-cut kameez with tailor-fitted trousers, side slit reinforcement, and neat neck binding.",
      details: "Cotton Silk Blend • Reinforced Seams • Custom Side Slits"
    },
    {
      id: 6,
      title: "Padded Blouse & Armhole Tapering",
      category: "Alterations",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=1000&q=80",
      description: "Adjusting armhole depth, adding padded inserts, and shortening sleeves without altering pattern symmetry.",
      details: "Perfect Fit Fitting • Soft Molded Cups • Restyled Sleeves"
    }
  ];

  // Before & After Alteration Showcase Cases
  const beforeAfterCases = [
    {
      id: "lehenga-resizing",
      title: "Bridal Lehenga Waist & Length Resizing",
      tag: "Bridal Alteration",
      turnaround: "48 Hours",
      beforeImage: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80",
      afterImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80",
      beforeProblem: "Off-the-rack bridal lehenga was 3 inches too loose at the waist with an uneven floor drag causing tripping.",
      afterSolution: "Precision waist tucking with invisible side zipper, interior can-can restructuring, and hem elevated to clear 3-inch heels.",
      alterationSteps: [
        "Waist reduced by 2.8 inches without cutting border threadwork",
        "Added concealed inner hook closure for heavy garment support",
        "Hand-hemmed bottom border aligned symmetrically to floor height"
      ]
    },
    {
      id: "blouse-tapering",
      title: "Blouse Armhole Depth & Shoulder Tapering",
      tag: "Blouse Fitting",
      turnaround: "24 Hours",
      beforeImage: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=900&q=80",
      afterImage: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80",
      beforeProblem: "Drooping shoulder seams, excess gaping under arms, and lack of bust structure.",
      afterSolution: "Curved armhole re-drafting, soft padded cup insertion, and clean neck piping alignment.",
      alterationSteps: [
        "Shoulder width tapered by 1.5 inches for upright posture",
        "Soft molded padded cups inserted into lining for seamless shape",
        "Armhole circumference reduced to eliminate armpit folds"
      ]
    },
    {
      id: "suit-side-slits",
      title: "Salwar Kameez Waist & Side Slit Reshaping",
      tag: "Suit Fitting",
      turnaround: "24 Hours",
      beforeImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=900&q=80",
      afterImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=80",
      beforeProblem: "Boxy, unflattering rectangular drape with weak side slit tearing under tension.",
      afterSolution: "Tailored hourglass side darts inserted, side slit reinforced with double stitching and matching piping.",
      alterationSteps: [
        "Waist contour darts added for natural body shape",
        "Side slits reinforced with contrast silk piping to prevent fabric tear",
        "Sleeve length adjusted to wrist bone precision"
      ]
    }
  ];

  const currentCase = beforeAfterCases[activeBeforeAfterCase];

  const filteredGallery = galleryFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2420] font-sans antialiased selection:bg-[#6B1E2B] selection:text-[#FAF7F2]">
      
      {/* ===================================================================
          1. NAVBAR SECTION
          Sticky navigation with soft ivory glassmorphism & boutique styling
          =================================================================== */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm border-b border-[#EFE6D8] py-3' 
            : 'bg-[#FAF7F2] border-b border-[#EFE6D8]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-9 h-9 rounded-full bg-[#6B1E2B] text-[#C9A227] flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform group-hover:scale-105">
              K
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#6B1E2B] block leading-none">
                Kohinoor
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#2B2420]/70 block mt-1">
                Atelier & Tailoring
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2B2420]">
            <a 
              href="#home" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
            >
              Home
            </a>
            <a 
              href="#services" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
            >
              Services
            </a>
            <a 
              href="#alterations" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all flex items-center gap-1"
            >
              <Scissors className="w-3.5 h-3.5 text-[#C9A227]" />
              Before & After
            </a>
            <a 
              href="#gallery" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
            >
              Gallery
            </a>
            <a 
              href="#about" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="hover:text-[#6B1E2B] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919876543210"
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#6B1E2B] hover:bg-[#EFE6D8] rounded-md transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Atelier
            </a>
            <a
              href="https://wa.me/919876543210?text=Hello%20Kohinoor%20Tailors,%20I%20would%20like%20to%20book%20a%20fitting%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase bg-[#6B1E2B] text-[#FAF7F2] hover:bg-[#501520] rounded-full transition-colors shadow-sm inline-flex items-center gap-2"
            >
              Book Fitting
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#6B1E2B] rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b border-[#EFE6D8] px-4 pt-3 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#2B2420] hover:text-[#6B1E2B]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#2B2420] hover:text-[#6B1E2B]"
            >
              Services & Swatches
            </a>
            <a
              href="#alterations"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#6B1E2B] font-semibold"
            >
              ✂️ Alterations Before & After
            </a>
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#2B2420] hover:text-[#6B1E2B]"
            >
              Gallery & Work
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#2B2420] hover:text-[#6B1E2B]"
            >
              About Artisans
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-serif text-[#2B2420] hover:text-[#6B1E2B]"
            >
              Contact & Directions
            </a>

            <div className="pt-3 border-t border-[#EFE6D8] flex flex-col gap-2.5">
              <a
                href="https://wa.me/919876543210?text=Hello%20Kohinoor%20Tailors,%20I%20would%20like%20to%20inquire%20about..."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-center rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Chat
              </a>
              <a
                href="tel:+919876543210"
                className="w-full py-3 border border-[#6B1E2B] text-[#6B1E2B] text-center rounded-full font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call +91 98765 43210
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ===================================================================
          2. HERO SECTION
          =================================================================== */}
      <section id="home" className="relative pt-6 pb-16 lg:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column (7 Cols on desktop) */}
            <div className="lg:col-span-7 z-10 space-y-6">
              
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE6D8] border border-[#DFD3BF]">
                <Scissors className="w-3.5 h-3.5 text-[#6B1E2B]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
                  Est. 1998 • Master Ladies Tailoring
                </span>
              </div>

              {/* Heading */}
              <div className="space-y-2">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-[#6B1E2B]">
                  Precision Tailoring <br />
                  <span className="italic font-normal text-[#2B2420]">for Every Silhouette.</span>
                </h1>
                <StitchedThreadLine color="#C9A227" className="w-48 sm:w-64 pt-2" />
              </div>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-[#2B2420]/80 max-w-xl font-normal leading-relaxed">
                Specializing in master ladies suit stitching, hand zardozi & thread embroidery, 
                and flawless garment alterations. Shaped to your exact body measurements 
                with artisanal care.
              </p>

              {/* Action Buttons: WhatsApp Pill + Call Outline */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Kohinoor%20Tailors,%20I%20would%20like%20to%20inquire%20about%20stitching/alterations."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white hover:bg-[#1EBE5A] rounded-full px-6 py-3.5 shadow-md font-medium text-sm inline-flex items-center gap-2.5 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <a
                  href="tel:+919876543210"
                  className="border border-[#6B1E2B] text-[#6B1E2B] hover:bg-[#6B1E2B] hover:text-[#FAF7F2] rounded-full px-6 py-3.5 font-medium text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Direct Call</span>
                </a>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-6 border-t border-[#EFE6D8] grid grid-cols-3 gap-4 max-w-lg">
                <div className="space-y-0.5">
                  <div className="text-xl font-serif font-bold text-[#6B1E2B]">100%</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium">Bespoke Fit</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl font-serif font-bold text-[#6B1E2B]">24-48h</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium">Alteration Speed</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-xl font-serif font-bold text-[#6B1E2B]">25+ Yrs</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium">Craft Heritage</div>
                </div>
              </div>

            </div>

            {/* Right Asymmetric Bleed Image Column (5 Cols on desktop) */}
            <div className="lg:col-span-5 relative mt-6 lg:mt-0">
              <div className="relative mx-auto lg:mr-0 max-w-md lg:max-w-none">
                
                {/* Decorative Swatch Tag Badge Overlapping Image */}
                <div className="absolute -top-4 -left-4 z-20 bg-[#EFE6D8] border border-[#DFD3BF] px-4 py-3 rounded-lg shadow-md max-w-[200px] hidden sm:block">
                  <div className="flex items-center gap-2 text-[#6B1E2B] font-serif font-bold text-sm">
                    <NeedleAndThreadIcon className="w-4 h-4" />
                    Atelier Quality
                  </div>
                  <p className="text-[11px] text-[#2B2420]/80 mt-1 leading-tight">
                    Every seam hand-checked & reinforced for long durability.
                  </p>
                </div>

                {/* Main Asymmetric Bleed Garment Photo with Real Unsplash Photography */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FAF7F2] ring-1 ring-[#DFD3BF]">
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80"
                    alt="Master tailor measuring silk fabric at cutting table"
                    className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B1E2B]/70 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-[#FAF7F2] p-4 rounded-xl bg-[#2B2420]/40 backdrop-blur-sm border border-white/10">
                    <p className="font-serif text-lg font-semibold italic">"A suit isn't just stitched; it's sculpted."</p>
                    <p className="text-xs text-[#C9A227] tracking-wider uppercase font-medium mt-0.5">— Master Tailor at Kohinoor</p>
                  </div>
                </div>

                {/* Stitched motif backdrop accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-dashed border-[#C9A227] rounded-full -z-10 opacity-60 hidden sm:block" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          3. SERVICES SECTION
          =================================================================== */}
      <section id="services" className="py-16 md:py-24 bg-[#EFE6D8]/50 border-y border-[#EFE6D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
              Our Tailoring Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">
              Crafted Swatches of Expertise
            </h2>
            <StitchedThreadLine color="#C9A227" className="max-w-xs mx-auto" />
            <p className="text-sm sm:text-base text-[#2B2420]/80">
              Select a service below to view specific fitting details, turnaround times, and custom alterations options.
            </p>
          </div>

          {/* Service Fabric Swatch Tag Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Swatch 1: Alterations */}
            <div className="group relative bg-[#FAF7F2] rounded-xl border border-[#DFD3BF] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-[#EFE6D8] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C9A227] bg-[#EFE6D8] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B1E2B]" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#6B1E2B]/80 uppercase">
                    SWATCH #ALT-01
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-[#EFE6D8] text-[#6B1E2B] rounded-full">
                  Fast 24-48h
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#6B1E2B]">
                    Garment Alterations & Reshaping
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#2B2420]/80 leading-relaxed">
                  Precision waist tapering, hem shortening, sleeve adjustment, side seam reshaping, 
                  and shoulder corrections for suits, blouses, kurtis, and heavy bridal lehengas.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[#2B2420]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Waist, bust, and armhole custom resizing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Bridal lehenga length & can-can adjustment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Invisible zip replacements & hook stitching</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#DFD3BF] flex items-center justify-between">
                <span className="text-xs text-[#2B2420]/70 font-medium">Starting from ₹150</span>
                <button
                  onClick={() => selectServiceForBooking('Garment Alterations & Reshaping')}
                  className="text-xs font-semibold text-[#6B1E2B] hover:text-[#C9A227] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform focus:outline-none"
                >
                  Book Fitting <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Swatch 2: Embroidery */}
            <div className="group relative bg-[#FAF7F2] rounded-xl border border-[#DFD3BF] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-[#EFE6D8] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C9A227] bg-[#EFE6D8] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B1E2B]" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#6B1E2B]/80 uppercase">
                    SWATCH #EMB-02
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-[#EFE6D8] text-[#6B1E2B] rounded-full">
                  Hand-Crafted
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#6B1E2B]">
                    Intricate Hand & Machine Embroidery
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#2B2420]/80 leading-relaxed">
                  Traditional Zardozi, Aari needlework, silk thread motifs, mirror work, 
                  and custom necklines or sleeve borders tailored for festive & bridal wear.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[#2B2420]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Zardozi metallic thread & sequin embellishments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Custom neckline & sleeve border patterns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Dupatta border attachment & tassel work</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#DFD3BF] flex items-center justify-between">
                <span className="text-xs text-[#2B2420]/70 font-medium">Custom Quote by Design</span>
                <button
                  onClick={() => selectServiceForBooking('Intricate Embroidery')}
                  className="text-xs font-semibold text-[#6B1E2B] hover:text-[#C9A227] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform focus:outline-none"
                >
                  Request Quote <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Swatch 3: Ladies Suit Stitching */}
            <div className="group relative bg-[#FAF7F2] rounded-xl border border-[#DFD3BF] p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-[#EFE6D8] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full border-2 border-[#C9A227] bg-[#EFE6D8] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B1E2B]" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold tracking-wider text-[#6B1E2B]/80 uppercase">
                    SWATCH #STITCH-03
                  </span>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-[#EFE6D8] text-[#6B1E2B] rounded-full">
                  Signature Fit
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center">
                    <Ruler className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#6B1E2B]">
                    Ladies Suit & Ensemble Stitching
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#2B2420]/80 leading-relaxed">
                  Bespoke stitching for Punjabi salwar kameez, Anarkali suits, straight trousers, 
                  sharara sets, padded blouses, and Indo-Western dresses cut to precise measurements.
                </p>

                <ul className="space-y-2 pt-2 text-xs text-[#2B2420]/90">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Personalized body measurement mapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Interlining, canvas collar & neat inner piping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>Trial fitting session included prior to delivery</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-dashed border-[#DFD3BF] flex items-center justify-between">
                <span className="text-xs text-[#2B2420]/70 font-medium">Starting from ₹450</span>
                <button
                  onClick={() => selectServiceForBooking('Ladies Suit Stitching')}
                  className="text-xs font-semibold text-[#6B1E2B] hover:text-[#C9A227] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform focus:outline-none"
                >
                  Order Stitching <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          NEW FEATURE: ALTERATIONS BEFORE & AFTER INTERACTIVE SHOWCASE
          Interactive split-screen slider with draggable dotted vertical line
          =================================================================== */}
      <section id="alterations" className="py-16 md:py-24 relative overflow-hidden bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6B1E2B] text-[#FAF7F2]">
              <Scissors className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#FAF7F2]">
                Interactive Transformation Studio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">
              Alterations: Before vs After
            </h2>
            <StitchedThreadLine color="#C9A227" className="max-w-xs mx-auto" />
            <p className="text-sm sm:text-base text-[#2B2420]/80">
              Drag the <strong>vertical dotted line left or right</strong> on the image below to inspect our tailoring craftsmanship in real time.
            </p>
          </div>

          {/* Case Study Switcher Tabs */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            {beforeAfterCases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveBeforeAfterCase(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all focus:outline-none flex items-center gap-2 ${
                  activeBeforeAfterCase === idx
                    ? 'bg-[#6B1E2B] text-[#FAF7F2] shadow-md ring-2 ring-[#C9A227]'
                    : 'bg-[#EFE6D8] text-[#2B2420] hover:bg-[#DFD3BF]'
                }`}
              >
                <Scissors className="w-3.5 h-3.5" />
                {c.tag}: {c.title.split(' ')[0]} {c.title.split(' ')[1]}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Slider vs Side-by-Side vs Toggle */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-2 text-xs">
            <span className="text-[#2B2420]/70 font-medium">Compare Mode:</span>
            <button
              onClick={() => setBeforeAfterViewMode('slider')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                beforeAfterViewMode === 'slider'
                  ? 'bg-[#6B1E2B] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6D8] text-[#2B2420] hover:bg-[#DFD3BF]'
              }`}
            >
              <ArrowLeftRight className="w-3.5 h-3.5 text-[#C9A227]" /> Interactive Dotted Slider
            </button>
            <button
              onClick={() => setBeforeAfterViewMode('side-by-side')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                beforeAfterViewMode === 'side-by-side'
                  ? 'bg-[#6B1E2B] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6D8] text-[#2B2420] hover:bg-[#DFD3BF]'
              }`}
            >
              <ColumnsIcon className="w-3.5 h-3.5" /> Side-by-Side
            </button>
            <button
              onClick={() => setBeforeAfterViewMode('toggle')}
              className={`px-3.5 py-1.5 rounded-md font-semibold transition-colors flex items-center gap-1.5 ${
                beforeAfterViewMode === 'toggle'
                  ? 'bg-[#6B1E2B] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#EFE6D8] text-[#2B2420] hover:bg-[#DFD3BF]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" /> Toggle Button View
            </button>
          </div>

          {/* Main Before / After Display Box */}
          <div className="mt-8 bg-[#EFE6D8] rounded-2xl border border-[#DFD3BF] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Images Display */}
              <div className="lg:col-span-7">
                {beforeAfterViewMode === 'slider' ? (
                  /* Interactive Draggable Dotted Line Split Slider */
                  <BeforeAfterSlider 
                    beforeImage={currentCase.beforeImage} 
                    afterImage={currentCase.afterImage} 
                    title={currentCase.title} 
                  />
                ) : beforeAfterViewMode === 'side-by-side' ? (
                  /* Side by Side Mode */
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Before Image */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-[#DFD3BF] bg-[#FAF7F2]">
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#2B2420]/80 backdrop-blur-sm text-[#FAF7F2] rounded-full text-[11px] font-bold uppercase tracking-wider">
                        BEFORE (Unfitted)
                      </div>
                      <img 
                        src={currentCase.beforeImage} 
                        alt={`Before alteration: ${currentCase.title}`}
                        className="w-full h-72 sm:h-80 object-cover filter contrast-95 brightness-95"
                      />
                      <div className="p-3 bg-[#FAF7F2] border-t border-[#DFD3BF] text-xs text-[#2B2420]">
                        <span className="font-semibold text-red-800 block">Issue:</span>
                        {currentCase.beforeProblem}
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative rounded-xl overflow-hidden border-2 border-[#6B1E2B] bg-[#FAF7F2] shadow-md">
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#6B1E2B] text-[#FAF7F2] rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                        <Sparkle className="w-3 h-3 text-[#C9A227]" /> AFTER (Kohinoor Fit)
                      </div>
                      <img 
                        src={currentCase.afterImage} 
                        alt={`After alteration: ${currentCase.title}`}
                        className="w-full h-72 sm:h-80 object-cover"
                      />
                      <div className="p-3 bg-[#FAF7F2] border-t border-[#DFD3BF] text-xs text-[#2B2420]">
                        <span className="font-semibold text-[#6B1E2B] block">Result:</span>
                        {currentCase.afterSolution}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Toggle View Mode */
                  <div className="space-y-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => setToggleState('before')}
                        className={`px-4 py-2 text-xs font-bold rounded-full transition-colors ${
                          toggleState === 'before'
                            ? 'bg-[#2B2420] text-[#FAF7F2]'
                            : 'bg-[#FAF7F2] text-[#2B2420] border border-[#DFD3BF]'
                        }`}
                      >
                        Show BEFORE
                      </button>
                      <button
                        onClick={() => setToggleState('after')}
                        className={`px-4 py-2 text-xs font-bold rounded-full transition-colors ${
                          toggleState === 'after'
                            ? 'bg-[#6B1E2B] text-[#FAF7F2]'
                            : 'bg-[#FAF7F2] text-[#2B2420] border border-[#DFD3BF]'
                        }`}
                      >
                        Show AFTER (Bespoke)
                      </button>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border-2 border-[#6B1E2B] bg-[#FAF7F2]">
                      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#6B1E2B] text-[#FAF7F2] rounded-full text-[11px] font-bold uppercase tracking-wider">
                        {toggleState === 'before' ? 'BEFORE (Ill-Fitting)' : 'AFTER (Kohinoor Precision Fit)'}
                      </div>
                      <img 
                        src={toggleState === 'before' ? currentCase.beforeImage : currentCase.afterImage} 
                        alt={`${toggleState} alteration`}
                        className="w-full h-80 sm:h-96 object-cover transition-all duration-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Side: Transformation Details & Craft Specs */}
              <div className="lg:col-span-5 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider bg-[#6B1E2B] text-[#FAF7F2] px-2.5 py-1 rounded">
                      {currentCase.tag}
                    </span>
                    <span className="text-xs font-medium text-[#6B1E2B] bg-[#FAF7F2] border border-[#DFD3BF] px-2.5 py-1 rounded-full">
                      Turnaround: {currentCase.turnaround}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#6B1E2B]">
                    {currentCase.title}
                  </h3>
                </div>

                <div className="p-4 bg-[#FAF7F2] rounded-xl border border-[#DFD3BF] space-y-3">
                  <h4 className="font-serif font-bold text-sm text-[#6B1E2B] flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#C9A227]" />
                    Specific Alteration Steps Performed:
                  </h4>

                  <ul className="space-y-2 text-xs text-[#2B2420]/90">
                    {currentCase.alterationSteps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => selectServiceForBooking(`Alteration: ${currentCase.title}`)}
                    className="w-full py-3.5 bg-[#6B1E2B] text-[#FAF7F2] hover:bg-[#501520] rounded-full text-xs font-bold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Scissors className="w-4 h-4" />
                    Book This Specific Alteration
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ===================================================================
          4. GALLERY SECTION
          Grid of finished works with scroll fade-in & Lightbox modal
          =================================================================== */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
                Portfolio of Finished Works
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">
                The Kohinoor Showcase
              </h2>
              <StitchedThreadLine color="#C9A227" className="w-48" />
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Ladies Suit Stitching', 'Embroidery', 'Alterations'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setGalleryFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all focus:outline-none ${
                    galleryFilter === cat
                      ? 'bg-[#6B1E2B] text-[#FAF7F2] shadow-sm'
                      : 'bg-[#EFE6D8] text-[#2B2420]/80 hover:bg-[#DFD3BF]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid with High-Res Images */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedGalleryItem(item)}
                className="group relative bg-[#EFE6D8] rounded-xl overflow-hidden border border-[#DFD3BF] cursor-pointer hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-[#2B2420]/5 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#6B1E2B]/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <div className="space-y-2 text-[#FAF7F2] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/20 mx-auto flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-[#FAF7F2]" />
                      </div>
                      <h4 className="font-serif font-bold text-lg">{item.title}</h4>
                      <p className="text-xs text-[#EFE6D8]">{item.category}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-[#FAF7F2] border-t border-[#EFE6D8] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#6B1E2B] line-clamp-1">
                      {item.title}
                    </h3>
                    <span className="text-[11px] text-[#2B2420]/70">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-xs text-[#C9A227] font-medium flex items-center gap-1">
                    View <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===================================================================
          LIGHTBOX MODAL FOR GALLERY ITEM
          =================================================================== */}
      {selectedGalleryItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#2B2420]/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryItem(null)}
        >
          <div 
            className="bg-[#FAF7F2] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#DFD3BF] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGalleryItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FAF7F2]/90 text-[#2B2420] hover:bg-[#6B1E2B] hover:text-[#FAF7F2] flex items-center justify-center transition-colors shadow-md"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#2B2420] aspect-[4/5] md:aspect-auto">
                <img 
                  src={selectedGalleryItem.image} 
                  alt={selectedGalleryItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] bg-[#6B1E2B] px-3 py-1 rounded-full inline-block">
                    {selectedGalleryItem.category}
                  </span>
                  
                  <h3 className="font-serif text-2xl font-bold text-[#6B1E2B]">
                    {selectedGalleryItem.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#2B2420]/80 leading-relaxed">
                    {selectedGalleryItem.description}
                  </p>

                  <div className="p-3 bg-[#EFE6D8]/60 rounded-lg border border-[#DFD3BF] text-xs text-[#2B2420]">
                    <span className="font-semibold block mb-1 text-[#6B1E2B]">Craft Specification:</span>
                    {selectedGalleryItem.details}
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#EFE6D8]">
                  <button
                    onClick={() => {
                      selectServiceForBooking(selectedGalleryItem.category);
                      setSelectedGalleryItem(null);
                    }}
                    className="w-full py-3 bg-[#6B1E2B] text-[#FAF7F2] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#501520] transition-colors"
                  >
                    Inquire About Similar Design
                  </button>
                  <button
                    onClick={() => setSelectedGalleryItem(null)}
                    className="w-full py-2 text-xs text-[#2B2420]/70 hover:text-[#2B2420] font-medium"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================
          5. ABOUT SECTION
          Two-column heritage story + understated stat counter & guarantee box
          =================================================================== */}
      <section id="about" className="py-16 md:py-24 bg-[#EFE6D8]/40 border-y border-[#EFE6D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
                About Kohinoor Atelier
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">
                Two Decades of Tailoring Precision & Fabric Mastery
              </h2>

              <StitchedThreadLine color="#C9A227" className="w-56" />

              <div className="space-y-4 text-sm sm:text-base text-[#2B2420]/85 leading-relaxed font-normal">
                <p>
                  Founded over 25 years ago, <strong>Kohinoor</strong> began with a simple belief: 
                  every garment should feel like a second skin. Located in the heart of the tailoring 
                  district, our atelier combines traditional hand-stitching techniques with modern silhouette 
                  cuts to deliver clothing that fits effortlessly.
                </p>
                <p>
                  Whether it is altering a cherished vintage sari dress, crafting an intricate hand-zardozi 
                  bridal suit, or stitching daily office suits with reinforced seams, our master tailors treat 
                  every piece of fabric with meticulous attention.
                </p>
              </div>

              {/* Minimalist Stat Counter (Not generic SaaS cards) */}
              <div className="py-4 border-y border-[#DFD3BF] grid grid-cols-3 gap-6">
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">25+</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium mt-1">Years Crafting</div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">15k+</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium mt-1">Suits Fitted</div>
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">100%</div>
                  <div className="text-xs text-[#2B2420]/70 font-medium mt-1">Fit Guarantee</div>
                </div>
              </div>

              {/* Tailor's Guarantee Callout with running-stitch border */}
              <div className="p-5 rounded-xl border-2 border-dashed border-[#C9A227] bg-[#FAF7F2] flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-[#6B1E2B] shrink-0 mt-1" />
                <div className="space-y-1">
                  <h4 className="font-serif font-bold text-sm text-[#6B1E2B]">The Kohinoor Trial-Fitting Guarantee</h4>
                  <p className="text-xs text-[#2B2420]/80">
                    If your suit doesn't fit with absolute perfection during your initial trial, 
                    we re-adjust and fine-tune it free of cost until it satisfies your expectations.
                  </p>
                </div>
              </div>

            </div>

            {/* Tailor Photo (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-[#FAF7F2] ring-1 ring-[#DFD3BF]">
                <img
                  src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1000&q=80"
                  alt="Master tailor crafting custom dress at cutting table"
                  className="w-full h-[450px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2420]/70 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] space-y-1">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#C9A227]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227]">Master Tailors at Work</span>
                  </div>
                  <p className="font-serif text-base">Hand-drafted patterns for every individual garment.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          6. TESTIMONIALS SECTION
          =================================================================== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
              Customer Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#6B1E2B]">
              Words From Our Clients
            </h2>
            <StitchedThreadLine color="#C9A227" className="max-w-xs mx-auto" />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Quote 1 */}
            <div className="bg-[#EFE6D8] p-6 rounded-xl border border-[#DFD3BF] space-y-4 flex flex-col justify-between relative">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C9A227]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#2B2420] italic leading-relaxed">
                  "Kohinoor altered my heavy wedding lehenga length and fitted the waist perfectly in 2 days. 
                  You couldn't tell it was resized—the stitching pattern remained completely intact!"
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFD3BF] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#6B1E2B]">Ananya Sharma</h4>
                  <span className="text-[11px] text-[#2B2420]/70">Bridal Lehenga Alterations</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#DFD3BF] flex items-center justify-center font-serif text-xs font-bold text-[#6B1E2B]">
                  AS
                </div>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-[#EFE6D8] p-6 rounded-xl border border-[#DFD3BF] space-y-4 flex flex-col justify-between relative">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C9A227]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#2B2420] italic leading-relaxed">
                  "I had a custom velvet Anarkali stitched here with Zardozi neck embroidery. 
                  The fitting around the shoulders and flare is incredible. Hands down the best tailor in town."
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFD3BF] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#6B1E2B]">Priya Verma</h4>
                  <span className="text-[11px] text-[#2B2420]/70">Custom Suit & Embroidery</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#DFD3BF] flex items-center justify-center font-serif text-xs font-bold text-[#6B1E2B]">
                  PV
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-[#EFE6D8] p-6 rounded-xl border border-[#DFD3BF] space-y-4 flex flex-col justify-between relative">
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#C9A227]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#2B2420] italic leading-relaxed">
                  "I've been getting all my daily suits and trousers stitched at Kohinoor for over 6 years. 
                  Their seam consistency and prompt delivery times are unmatched."
                </p>
              </div>

              <div className="pt-4 border-t border-[#DFD3BF] flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#6B1E2B]">Meera Patel</h4>
                  <span className="text-[11px] text-[#2B2420]/70">Regular Suit Stitching</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#DFD3BF] flex items-center justify-center font-serif text-xs font-bold text-[#6B1E2B]">
                  MP
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ===================================================================
          7. CONTACT SECTION
          =================================================================== */}
      <section id="contact" className="py-16 md:py-24 bg-[#EFE6D8]/50 border-t border-[#EFE6D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#DFD3BF] shadow-sm space-y-6">
              
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#6B1E2B]">
                  Schedule or Inquire
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#6B1E2B] mt-1">
                  Book a Fitting or Send a Note
                </h2>
                <StitchedThreadLine color="#C9A227" className="w-44 pt-1" />
              </div>

              {formSubmitted ? (
                <div className="p-6 bg-[#EFE6D8] rounded-xl border border-[#C9A227] space-y-3 text-center">
                  <div className="w-12 h-12 rounded-full bg-[#6B1E2B] text-[#FAF7F2] flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#6B1E2B]">Inquiry Received!</h3>
                  <p className="text-xs sm:text-sm text-[#2B2420]/80">
                    Thank you, <strong>{formData.name}</strong>. Master Tailor will call you shortly 
                    at <strong>{formData.phone}</strong> regarding your <em>{formData.service}</em> request.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          service: 'Garment Alterations & Reshaping',
                          preferredDate: '',
                          message: ''
                        });
                      }}
                      className="px-4 py-2 bg-[#6B1E2B] text-[#FAF7F2] text-xs font-semibold rounded-full hover:bg-[#501520]"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2420]">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#DFD3BF] text-sm text-[#2B2420] placeholder-[#2B2420]/40 focus:border-[#6B1E2B] focus:ring-1 focus:ring-[#6B1E2B] outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2420]">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#DFD3BF] text-sm text-[#2B2420] placeholder-[#2B2420]/40 focus:border-[#6B1E2B] focus:ring-1 focus:ring-[#6B1E2B] outline-none transition-colors"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Service Selection */}
                    <div className="space-y-1.5">
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2420]">
                        Select Tailoring Service *
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#DFD3BF] text-sm text-[#2B2420] appearance-none focus:border-[#6B1E2B] focus:ring-1 focus:ring-[#6B1E2B] outline-none transition-colors pr-10"
                        >
                          <option value="Garment Alterations & Reshaping">Garment Alterations & Reshaping</option>
                          <option value="Ladies Suit Stitching">Ladies Suit & Lehenga Stitching</option>
                          <option value="Intricate Embroidery">Intricate Zardozi & Thread Embroidery</option>
                          <option value="General Inquiry">General Fitting Inquiry</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#6B1E2B] absolute right-3 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label htmlFor="preferredDate" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2420]">
                        Preferred Fitting Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#DFD3BF] text-sm text-[#2B2420] focus:border-[#6B1E2B] focus:ring-1 focus:ring-[#6B1E2B] outline-none transition-colors"
                      />
                    </div>

                  </div>

                  {/* Message / Special Instructions */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#2B2420]">
                      Details / Specific Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your fabric, stitching pattern, or alteration requirements..."
                      className="w-full px-4 py-3 rounded-lg bg-[#FAF7F2] border border-[#DFD3BF] text-sm text-[#2B2420] placeholder-[#2B2420]/40 focus:border-[#6B1E2B] focus:ring-1 focus:ring-[#6B1E2B] outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#6B1E2B] text-[#FAF7F2] hover:bg-[#501520] rounded-full font-bold text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Fitting Inquiry
                  </button>
                </form>
              )}

            </div>

            {/* Shop Details & Map Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#DFD3BF] space-y-6">
                <h3 className="font-serif text-xl font-bold text-[#6B1E2B]">
                  Atelier Address & Hours
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-[#2B2420]">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-[#6B1E2B]">Shop Location</span>
                      <span>Kohinoor Tailors, Main Market Road, Near Clock Tower, Sector 4, City Center</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-[#6B1E2B]">Operating Hours</span>
                      <span>Monday – Saturday: 10:00 AM – 8:30 PM</span>
                      <span className="block text-[#6B1E2B]/80 text-[11px] mt-0.5">Sunday: 11:00 AM – 5:00 PM (Trial Fittings Only)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#6B1E2B]/10 text-[#6B1E2B] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold block text-[#6B1E2B]">Direct Hotline</span>
                      <a href="tel:+919876543210" className="hover:underline text-[#6B1E2B] font-medium">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Kohinoor%20Tailors,%20I%20am%20outside%20the%20shop/would%20like%20directions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] text-white rounded-full text-center font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1EBE5A] transition-colors shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Direct Click-to-Chat
                  </a>
                </div>

              </div>

              {/* Embedded Google Map Placeholder */}
              <div className="bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#DFD3BF] shadow-sm relative">
                <div className="p-3 bg-[#EFE6D8] border-b border-[#DFD3BF] flex items-center justify-between text-xs font-semibold text-[#6B1E2B]">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    Interactive Map Preview
                  </span>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#6B1E2B] hover:underline text-[11px]"
                  >
                    Open Google Maps
                  </a>
                </div>

                <div className="relative h-48 w-full bg-[#EFE6D8] flex items-center justify-center text-center p-4">
                  <iframe
                    title="Kohinoor Tailors Map Location"
                    className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
                    loading="lazy"
                    src="https://maps.google.com/maps?q=tailor+shop&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          8. FOOTER SECTION
          =================================================================== */}
      <footer className="bg-[#2B2420] text-[#FAF7F2] pt-14 pb-8 border-t border-[#6B1E2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-[#FAF7F2]/10">
            
            {/* Col 1: Brand & Tagline */}
            <div className="space-y-4 md:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#C9A227] text-[#6B1E2B] flex items-center justify-center font-serif text-lg font-bold">
                  K
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F2]">
                  Kohinoor
                </span>
              </div>
              <p className="text-xs text-[#FAF7F2]/70 leading-relaxed">
                Precision alterations, bespoke ladies suit stitching, and artisanal hand embroidery. 
                Sculpting fabric to celebrate individual elegance since 1998.
              </p>
              <div className="pt-1">
                <StitchedThreadLine color="#C9A227" className="w-32" />
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C9A227]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
                <li><a href="#home" className="hover:text-[#C9A227] transition-colors">Home Atelier</a></li>
                <li><a href="#services" className="hover:text-[#C9A227] transition-colors">Tailoring Services</a></li>
                <li><a href="#alterations" className="hover:text-[#C9A227] transition-colors">Before & After Alterations</a></li>
                <li><a href="#gallery" className="hover:text-[#C9A227] transition-colors">Work Showcase</a></li>
                <li><a href="#about" className="hover:text-[#C9A227] transition-colors">Our Heritage</a></li>
                <li><a href="#contact" className="hover:text-[#C9A227] transition-colors">Contact & Fitting</a></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C9A227]">
                Specialties
              </h4>
              <ul className="space-y-2 text-xs text-[#FAF7F2]/80">
                <li>Ladies Suit & Lehenga Stitching</li>
                <li>Fast Garment Alterations (24-48h)</li>
                <li>Hand Zardozi & Threadwork</li>
                <li>Anarkali & Designer Blouse Fitting</li>
                <li>Can-Can & Flared Hem Reshaping</li>
              </ul>
            </div>

            {/* Col 4: Social & Atelier Hours */}
            <div className="space-y-3">
              <h4 className="font-serif font-bold text-sm tracking-wider uppercase text-[#C9A227]">
                Connect With Us
              </h4>
              <p className="text-xs text-[#FAF7F2]/70">
                Visit our atelier or message us on social media for quick fitting consultations.
              </p>
              
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#25D366] text-[#FAF7F2] flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#6B1E2B] text-[#FAF7F2] flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#C9A227] hover:text-[#2B2420] text-[#FAF7F2] flex items-center justify-center transition-colors"
                  aria-label="Map"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 gap-4">
            <p>© {new Date().getFullYear()} Kohinoor Tailors. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Hand-stitched with care</span>
              <span className="text-[#C9A227]">★</span>
              <span>Atelier Craftsmanship</span>
            </p>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Mobile Action Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Kohinoor%20Tailors,%20I%20would%20like%20to%20inquire%20about%20stitching."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#1EBE5A] transition-transform hover:scale-110 md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
        aria-label="Contact on WhatsApp"
      >
        <MessageSquare className="w-7 h-7 fill-current" />
      </a>

    </div>
  );
}

// Helper icon component for columns
function ColumnsIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4.5v15m6-15v15m-12-15h18a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V6a1.5 1.5 0 011.5-1.5z" />
    </svg>
  );
}
