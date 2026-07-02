import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, data, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav_perfil, id: "perfil" },
    { label: t.nav_liderazgo, id: "liderazgo" },
    { label: t.nav_programas, id: "programas" },
    { label: t.nav_experiencia, id: "experiencia" },
    { label: t.nav_formacion, id: "formacion" },
    { label: t.nav_colaboraciones, id: "colaboraciones" },
    { label: t.nav_digital, id: "digital" }
  ];

  const handleLinkClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    
    // Smooth scroll to content section
    const element = document.getElementById("main-cv-content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-charcoal/5 py-4" 
        : "bg-transparent py-6"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Name (Minimal Editorial) */}
        <a 
          href="#" 
          className="font-serif text-lg font-bold tracking-tight text-brand-accent hover:text-brand-gold transition-colors flex flex-col"
        >
          <span className="font-sans uppercase text-[10px] tracking-[0.2em] font-light text-brand-charcoal/60 leading-none mb-1">
            {t.nav_title}
          </span>
          <span className="leading-tight">
            {data.PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Main dropdown category: Perfil Profesional */}
          <div className="relative group py-2">
            <button className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest cursor-pointer text-brand-charcoal hover:text-brand-accent transition-colors duration-200">
              <span>{t.nav_parent}</span>
              <span className="text-[7px] text-brand-charcoal/50 transition-transform duration-200 group-hover:rotate-180">▼</span>
            </button>

            {/* Dropdown list of sections */}
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col border border-brand-charcoal/15 bg-white shadow-md z-50 min-w-[200px]">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-[10px] font-bold uppercase tracking-widest text-left px-5 py-3.5 border-b last:border-b-0 border-brand-charcoal/5 transition-all cursor-pointer ${
                    activeTab === link.id
                      ? "bg-brand-gold text-white"
                      : "text-brand-charcoal/70 bg-white hover:bg-brand-gold hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Desktop / Mobile Actions and Lang switcher */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Layout: Button and Language Switcher side-by-side */}
          <div className="hidden lg:flex lg:flex-row lg:items-center gap-4">
            {/* Desktop CTA */}
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white py-2.5 px-5 rounded-md shadow-sm overflow-hidden"
            >
              {/* Sliding curtain background */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-orange-600 transition-all duration-300 ease-out group-hover:h-full z-0"></span>
              
              {/* Content on top */}
              <span className="relative z-10 flex items-center gap-1">
                <span>{t.nav_cta}</span>
                <ArrowUpRight size={14} />
              </span>
            </a>

            {/* Language Switcher (Desktop Dropdown on Hover) */}
            <div className="relative group py-2">
              <button className="flex items-center gap-1.5 text-[10px] font-mono font-bold px-3.5 py-2.5 border border-brand-charcoal/15 bg-white shadow-sm text-brand-charcoal cursor-pointer">
                <span>{lang === "val" ? "VAL" : lang.toUpperCase()}</span>
                <span className="text-[7px] text-brand-charcoal/50 transition-transform duration-200 group-hover:rotate-180">▼</span>
              </button>

              <div className="absolute right-0 top-full hidden group-hover:flex flex-col border border-brand-charcoal/15 bg-white shadow-md z-50 min-w-[70px]">
                {(["es", "en", "de", "val"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`text-[9px] font-mono font-bold px-3 py-2.5 text-center border-b last:border-b-0 border-brand-charcoal/5 transition-all cursor-pointer ${
                      lang === l
                        ? "bg-brand-accent text-white"
                        : "text-brand-charcoal/70 bg-white hover:text-brand-accent hover:bg-brand-accent-light"
                    }`}
                  >
                    {l === "val" ? "VAL" : l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Language Switcher (Shown only on small screens) */}
          <div className="flex lg:hidden items-center gap-0.5 border border-brand-charcoal/10 rounded-full p-0.5 bg-white/80 shadow-sm">
            {(["es", "en", "de", "val"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[9px] font-mono font-bold px-2 py-1 rounded-full transition-all cursor-pointer ${
                  lang === l
                    ? "bg-brand-accent text-white"
                    : "text-brand-charcoal/60 hover:text-brand-accent hover:bg-brand-accent-light/40"
                }`}
              >
                {l === "val" ? "VAL" : l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-brand-charcoal hover:text-brand-accent transition-colors p-1"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-brand-beige z-40 flex flex-col p-8 space-y-6 border-t border-brand-charcoal/5 animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-charcoal/50 border-b border-brand-charcoal/10 pb-2">
              {t.nav_parent}
            </span>
            <div className="flex flex-col space-y-4 pl-2 pt-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`font-serif text-2xl font-semibold text-left transition-all ${
                    activeTab === link.id ? "text-brand-gold" : "text-brand-accent hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-brand-accent text-white font-medium text-sm rounded-lg hover:bg-brand-accent/90 transition-all shadow-sm block"
          >
            {t.nav_cta}
          </a>
        </div>
      )}
    </header>
  );
}
