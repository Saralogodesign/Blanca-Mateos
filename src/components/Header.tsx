import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Perfil", id: "perfil" },
    { label: "Liderazgo", id: "liderazgo" },
    { label: "Programas", id: "programas" },
    { label: "Experiencia", id: "experiencia" },
    { label: "Formación", id: "formacion" },
    { label: "Colaboraciones", id: "colaboraciones" },
    { label: "Herramientas", id: "digital" }
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
          <span className="font-sans uppercase text-[11px] tracking-[0.2em] font-light text-brand-charcoal/60 leading-none mb-1">
            DOCENTE DE SECUNDARIA
          </span>
          <span className="leading-tight">
            {PERSONAL_INFO.name}
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="#contacto"
            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest bg-brand-accent text-white py-2.5 px-5 rounded-md hover:bg-brand-accent/90 transition-all shadow-sm"
          >
            <span>Conectar</span>
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
            Conectar
          </a>
        </div>
      )}
    </header>
  );
}
