import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CVContent from "./components/CVContent";
import ResumePDFView from "./components/ResumePDFView";
import Contact from "./components/Contact";
import { useLanguage } from "./LanguageContext";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("perfil");
  const { data, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-brand-beige selection:bg-brand-gold selection:text-brand-charcoal overflow-x-hidden">
      {/* Dynamic Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Editorial Cover Page */}
        <Hero />

        {/* Unified CV Sections Container with Simple Main Menu */}
        <div id="main-cv-content" className="scroll-mt-20">
          <CVContent activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Printable/Saveable CV Viewer */}
        <ResumePDFView />

        {/* Contact Form & Coordinates */}
        <Contact />
      </main>

      {/* Minimal Aesthetic Editorial Footer */}
      <footer className="bg-brand-charcoal text-white/90 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-serif text-2xl font-semibold tracking-tight text-brand-gold">
              {data.PERSONAL_INFO.name}
            </h4>
            <p className="text-xs font-mono uppercase tracking-widest text-white/40">
              {data.PERSONAL_INFO.title}
            </p>
            <p className="text-sm text-white/60 font-sans max-w-sm leading-relaxed">
              {t.footer_desc}
            </p>
          </div>

          <div className="md:col-span-6 flex flex-col md:items-end justify-between gap-6">
            <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-white/50">
              <button onClick={() => setActiveTab("perfil")} className="hover:text-brand-gold transition-colors">{t.nav_perfil}</button>
              <button onClick={() => setActiveTab("experiencia")} className="hover:text-brand-gold transition-colors">{t.nav_experiencia}</button>
              <a href="#contacto" className="hover:text-brand-gold transition-colors">{t.nav_cta}</a>
            </div>

            <div className="text-left md:text-right space-y-1">
              <p className="text-xs text-white/40 font-mono">
                © {new Date().getFullYear()} {t.footer_rights}
              </p>
              <p className="text-[10px] text-white/30 font-mono">
                {t.footer_aesthetic}
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
