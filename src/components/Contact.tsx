import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Contact() {
  const { data, t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    // Simulate API submission
    setSubmitted(true);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.PERSONAL_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-widest text-brand-gold uppercase block mb-3">
            {t.contact_badge}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-brand-accent">
            {t.contact_title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-brand-accent">
                {t.contact_subtitle}
              </h3>
              <p className="text-brand-charcoal/70 text-base font-sans leading-relaxed">
                {t.contact_desc}
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div className="overflow-hidden">
                  <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider">{t.contact_label_email}</p>
                  <button 
                    onClick={handleCopyEmail}
                    className="font-sans text-brand-charcoal font-semibold hover:text-brand-gold transition-colors block text-left truncate w-full"
                    title={t.contact_copy_email}
                  >
                    {data.PERSONAL_INFO.contact.email}
                  </button>
                  {copied && <span className="text-[10px] font-mono text-green-600 block mt-0.5">{t.contact_copied}</span>}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider">{t.contact_label_phone}</p>
                  <a href={`tel:${data.PERSONAL_INFO.contact.phone.replace(/\s+/g, "")}`} className="font-sans text-brand-charcoal font-semibold hover:text-brand-gold transition-colors block">
                    {data.PERSONAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider">{t.contact_label_loc}</p>
                  <span className="font-sans text-brand-charcoal font-semibold block">
                    {data.PERSONAL_INFO.contact.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-accent-light flex items-center justify-center text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-brand-charcoal/40 tracking-wider">{t.contact_label_profile}</p>
                  <a 
                    href={data.PERSONAL_INFO.contact.linkedinUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-sans text-brand-charcoal font-semibold hover:text-brand-gold transition-colors block"
                  >
                    {data.PERSONAL_INFO.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-brand-beige p-8 md:p-10 rounded-2xl border border-brand-charcoal/5 shadow-sm relative">
            <h3 className="font-serif text-xl font-bold text-brand-accent mb-6">
              {t.contact_form_title}
            </h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl flex items-start gap-4 animate-fade-in">
                <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={24} />
                <div>
                  <p className="font-semibold text-base mb-1">{t.contact_form_success_title}</p>
                  <p className="text-sm text-green-700/90 leading-relaxed">
                    {t.contact_form_success_desc}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-brand-charcoal/50 block">{t.contact_form_name}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.contact_form_name_placeholder}
                      className="w-full bg-white border border-brand-charcoal/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-brand-charcoal/35"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] uppercase text-brand-charcoal/50 block">{t.contact_form_email}</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact_form_email_placeholder}
                      className="w-full bg-white border border-brand-charcoal/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-brand-charcoal/35"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-brand-charcoal/50 block">{t.contact_form_subject}</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder={t.contact_form_subject_placeholder}
                    className="w-full bg-white border border-brand-charcoal/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-brand-charcoal/35"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] uppercase text-brand-charcoal/50 block">{t.contact_form_message}</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact_form_message_placeholder}
                    className="w-full bg-white border border-brand-charcoal/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all placeholder-brand-charcoal/35 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent hover:bg-brand-accent/90 text-white font-medium text-sm rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  <span>{t.contact_form_submit}</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
