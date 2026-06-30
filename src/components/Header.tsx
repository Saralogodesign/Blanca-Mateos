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
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-colors duration-200 ${
                activeTab === link.id
                  ? "text-brand-gold"
                  : "text-brand-charcoal/70 hover:text-brand-accent"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop / Mobile Actions and Lang switcher */}
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center gap-0.5 border border-brand-charcoal/10 rounded-full p-0.5 bg-white/80 shadow-sm">
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

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white py-2.5 px-5 rounded-md hover:bg-brand-accent/90 transition-all shadow-sm"
            >
              <span>{t.nav_cta}</span>
              <ArrowUpRight size={14} />
            </a>
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
