import { Download } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function ResumePDFView() {
  const { t } = useLanguage();
  const pdfUrl = "https://aoojyeiqjukkihcpajfa.supabase.co/storage/v1/object/sign/Blanca/CV_Blanca_Mateos_Barbera_9px_editable.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NGRiNmQyZi03MGNlLTRlOGYtYTEzMC01NTU0MjY1M2ZiZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCbGFuY2EvQ1ZfQmxhbmNhX01hdGVvc19CYXJiZXJhXzlweF9lZGl0YWJsZS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyODM1MTM4LCJleHAiOjIwOTgxOTUxMzh9.1ABGh5CKRp0Tefi9woNBQeP_p_yVoi4kGbnvzh0_gQI";

  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-brand-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs tracking-widest text-brand-gold uppercase block mb-3">
          {t.pdf_badge}
        </span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-brand-accent mb-4">
          {t.pdf_title}
        </h2>
        <p className="text-brand-charcoal/70 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          {t.pdf_desc}
        </p>

        {/* Buttons to view or trigger printing / download */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="CV_Blanca_Mateos_Barbera.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-white font-medium text-sm rounded-lg hover:bg-brand-accent/90 transition-all shadow-sm cursor-pointer"
          >
            <Download size={16} />
            <span>{t.pdf_cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
