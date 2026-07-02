import { motion } from "motion/react";
import { ArrowDown, Mail, Phone, MapPin, Award } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const { data, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen bg-brand-beige flex flex-col justify-between pt-24 pb-12 overflow-hidden border-b border-brand-charcoal/5">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-[0.03]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border-r border-brand-charcoal h-full" />
        ))}
      </div>

      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-accent opacity-80" />

      {/* Main Hero Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto relative z-10 w-full">
        {/* Left Side: Typography & Description */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 space-y-8 text-left"
        >
          {/* Accent Line and Category */}
          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-brand-gold block" />
            <span className="font-mono text-xs tracking-widest text-brand-gold uppercase font-medium">
              {t.hero_badge}
            </span>
          </motion.div>

          {/* Huge Title (Serif Hierarchy) */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-brand-charcoal font-semibold"
            >
              Blanca Mateos <br /> Barberá
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="font-sans text-lg md:text-xl font-medium tracking-wide text-brand-charcoal/80 max-w-2xl border-l border-brand-gold pl-5 py-1"
            >
              {data.PERSONAL_INFO.title} — {data.PERSONAL_INFO.subtitles[1]}
            </motion.p>
          </div>

          {/* Intro Text */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-brand-charcoal/70 text-base md:text-lg leading-relaxed max-w-2xl font-light"
          >
            {data.PERSONAL_INFO.subtitles[0]}. {t.footer_desc}
          </motion.p>

          {/* Action Call / Core Indicators */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <a
              href="#main-cv-content"
              className="group relative inline-flex items-center gap-1 px-6 py-3.5 bg-brand-accent text-white font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm cursor-pointer overflow-hidden"
            >
              {/* Sliding curtain background */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-orange-600 transition-all duration-300 ease-out group-hover:h-full z-0"></span>

              {/* Content on top */}
              <span className="relative z-10 flex items-center gap-1">
                {t.hero_cta_cv}
              </span>
            </a>
            <a
              href="#contacto"
              className="px-6 py-3.5 border border-brand-charcoal/20 text-brand-charcoal hover:border-brand-accent hover:bg-brand-accent-light/40 font-semibold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer"
            >
              {t.hero_cta_contact}
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Editorial Metrics Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-4 bg-white pt-8 pr-8 pb-12 pl-[33px] mb-0 rounded-2xl shadow-sm border border-brand-charcoal/5 flex flex-col justify-between h-[400px]"
        >
          <div className="space-y-6">
            <div className="flex justify-between items-start border-b border-brand-charcoal/5 pb-4">
              <span className="font-mono text-xs text-brand-charcoal/40 uppercase">{t.hero_status_label}</span>
              <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold">
                {t.hero_status_value}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-accent-light rounded-lg text-brand-accent shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-charcoal text-base">{t.hero_metric_bil_title}</h3>
                  <p className="text-xs text-brand-charcoal/60 mt-0.5">{t.hero_metric_bil_desc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-brand-accent-light rounded-lg text-brand-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-brand-charcoal text-base">{t.hero_metric_glob_title}</h3>
                  <p className="text-xs text-brand-charcoal/60 mt-0.5">{t.hero_metric_glob_desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Micro Card Contact Info */}
          <div className="border-t border-brand-charcoal/5 pt-6 mt-6 space-y-2.5 font-mono text-xs text-brand-charcoal/60">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-brand-gold shrink-0" />
              <a href={`mailto:${data.PERSONAL_INFO.contact.email}`} className="hover:text-brand-accent transition-colors truncate">
                {data.PERSONAL_INFO.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-brand-gold shrink-0" />
              <span>{data.PERSONAL_INFO.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-brand-gold shrink-0" />
              <span>{data.PERSONAL_INFO.contact.location}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Downward Page Indicator */}
      <div className="w-full flex justify-center pt-8">
        <motion.a
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          href="#perfil"
          className="flex flex-col items-center gap-2 text-brand-charcoal/40 hover:text-brand-accent transition-colors font-mono text-[10px] tracking-widest uppercase cursor-pointer"
        >
          <span>{t.hero_scroll}</span>
          <ArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
}
