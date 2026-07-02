import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { data, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(data.PERSONAL_INFO.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="font-mono text-xs tracking-widest text-brand-gold uppercase block mb-3">
            {t.contact_badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-brand-accent">
            {t.contact_title}
          </h2>
        </div>

        {/* Centered Direct Contacts Block */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-accent">
              {t.contact_subtitle}
            </h3>
            <p className="text-brand-charcoal/70 text-base font-sans leading-relaxed max-w-2xl mx-auto font-light">
              {t.contact_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Email Card */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-brand-charcoal/5 flex flex-col items-center text-center space-y-4 hover:border-brand-gold/30 hover:shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100/60 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Mail size={18} />
              </div>
              <div className="w-full overflow-hidden">
                <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider mb-2">{t.contact_label_email}</p>
                <button 
                  onClick={handleCopyEmail}
                  className="font-sans text-brand-charcoal font-semibold hover:text-brand-gold transition-colors block text-sm truncate w-full cursor-pointer"
                  title={t.contact_copy_email}
                >
                  {data.PERSONAL_INFO.contact.email}
                </button>
                {copiedEmail && <span className="text-[10px] font-mono text-green-600 block mt-2 animate-fade-in">{t.contact_copied}</span>}
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-brand-charcoal/5 flex flex-col items-center text-center space-y-4 hover:border-brand-gold/30 hover:shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100/60 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <div className="w-full overflow-hidden">
                <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider mb-2">{t.contact_label_phone}</p>
                <button 
                  onClick={handleCopyPhone}
                  className="font-sans text-brand-charcoal font-semibold hover:text-brand-gold transition-colors block text-sm truncate w-full cursor-pointer"
                  title={t.contact_copy_phone}
                >
                  {data.PERSONAL_INFO.contact.phone}
                </button>
                {copiedPhone && <span className="text-[10px] font-mono text-green-600 block mt-2 animate-fade-in">{t.contact_copied}</span>}
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-brand-charcoal/5 flex flex-col items-center text-center space-y-4 hover:border-brand-gold/30 hover:shadow-sm transition-all group">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 border border-orange-100/60 flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <MapPin size={18} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider mb-2">{t.contact_label_loc}</p>
                <span className="font-sans text-brand-charcoal font-semibold text-sm block">
                  {data.PERSONAL_INFO.contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
