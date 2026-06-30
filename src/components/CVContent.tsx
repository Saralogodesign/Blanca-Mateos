import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Languages, 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Laptop, 
  CheckCircle, 
  Heart, 
  ChevronRight,
  ClipboardList
} from "lucide-react";
import { 
  PERSONAL_INFO, 
  LANGUAGES, 
  LIDERAZGO_EXPERIENCE, 
  TEACHING_TIMELINE, 
  INSTITUTIONAL_PROGRAMS, 
  ACADEMIC_EDUCATION, 
  INTERNATIONAL_TRAINING, 
  COLABORACIONES, 
  VOLUNTEERING, 
  DIGITAL_TOOLS 
} from "../data";

interface CVContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function CVContent({ activeTab, setActiveTab }: CVContentProps) {
  const tabs = [
    { id: "perfil", label: "Perfil e Idiomas", icon: User },
    { id: "liderazgo", label: "Liderazgo y Programas", icon: Award },
    { id: "experiencia", label: "Experiencia Docente", icon: Briefcase },
    { id: "formacion", label: "Formación", icon: GraduationCap },
    { id: "colaboraciones", label: "Colaboraciones y Voluntariado", icon: Globe },
    { id: "digital", label: "Competencia Digital", icon: Laptop },
    { id: "todo", label: "Ver Todo", icon: ClipboardList }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* Simple Sticky Main Menu Bar */}
      <div className="sticky top-[72px] z-30 bg-brand-beige/95 backdrop-blur-md py-4 border-b border-brand-charcoal/10 mb-12">
        <div className="flex overflow-x-auto gap-2 no-scrollbar pb-1 -mb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-brand-charcoal text-white shadow-md"
                    : "bg-white text-brand-charcoal border border-brand-charcoal/10 hover:bg-brand-accent-light"
                }`}
              >
                <Icon size={14} className={isActive ? "text-brand-gold" : "text-brand-charcoal/60"} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render selected sections */}
      <div className="space-y-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            {/* 1. PERFIL E IDIOMAS */}
            {(activeTab === "perfil" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  {/* Profile section */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                      <span className="font-mono text-xs font-bold text-brand-gold">01</span>
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                        Perfil Profesional
                      </h2>
                    </div>
                    <p className="text-brand-charcoal/90 text-base md:text-lg leading-relaxed font-sans font-light">
                      {PERSONAL_INFO.bio}
                    </p>
                  </div>

                  {/* Languages section */}
                  <div className="lg:col-span-5 space-y-6 bg-brand-beige/50 p-6 md:p-8 rounded-xl border border-brand-charcoal/5">
                    <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/10">
                      <span className="font-mono text-xs font-bold text-brand-gold">02</span>
                      <h2 className="font-serif text-2xl font-semibold tracking-tight text-brand-charcoal uppercase">
                        Idiomas
                      </h2>
                    </div>
                    <div className="space-y-5">
                      {LANGUAGES.map((lang, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between items-center text-sm font-sans">
                            <span className="font-bold text-brand-charcoal">{lang.name}</span>
                            <span className="font-mono text-xs text-brand-gold font-semibold">{lang.name === "Español" ? "Materna" : lang.name === "Inglés" ? "C1" : lang.name === "Valenciano" ? "C1" : "B1"}</span>
                          </div>
                          <p className="text-xs text-brand-charcoal/60 font-sans leading-normal">
                            {lang.level}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. LIDERAZGO Y COORDINACIÓN */}
            {(activeTab === "liderazgo" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-10">
                <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                  <span className="font-mono text-xs font-bold text-brand-gold">03</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                    Liderazgo y Coordinación Educativa
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {LIDERAZGO_EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="bg-brand-beige/40 p-6 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/30 transition-all flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex flex-wrap justify-between items-baseline gap-2">
                          <h3 className="font-serif font-bold text-lg text-brand-charcoal leading-tight">
                            {exp.role}
                          </h3>
                          <span className="font-mono text-xs font-bold text-brand-gold shrink-0">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-xs font-serif italic text-brand-charcoal/60">
                          {exp.institution}, Madrid
                        </p>
                        
                        <ul className="space-y-2 pt-2 border-t border-brand-charcoal/5">
                          {exp.bullets?.map((bullet, bIdx) => (
                            <li key={bIdx} className="text-xs text-brand-charcoal/80 font-sans leading-relaxed flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. PROGRAMAS EDUCATIVOS Y ACTUACIONES */}
            {(activeTab === "programas" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-8">
                <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                  <span className="font-mono text-xs font-bold text-brand-gold">04</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                    Programas Educativos y Actuaciones Institucionales
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {INSTITUTIONAL_PROGRAMS.map((prog, idx) => (
                    <div key={idx} className="bg-brand-beige/30 p-5 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/20 transition-all flex gap-4">
                      <span className="font-mono text-xs font-bold text-brand-gold bg-white w-7 h-7 rounded-md flex items-center justify-center border border-brand-charcoal/5 shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-brand-charcoal/80 text-xs md:text-sm font-sans leading-relaxed">
                        {prog}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. EXPERIENCIA PROFESIONAL DOCENTE */}
            {(activeTab === "experiencia" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-10">
                <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                  <span className="font-mono text-xs font-bold text-brand-gold">05</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                    Experiencia Profesional Docente
                  </h2>
                </div>

                <div className="relative border-l-2 border-brand-charcoal/10 ml-4 pl-6 md:pl-10 space-y-8">
                  {TEACHING_TIMELINE.map((item, idx) => (
                    <div key={idx} className="relative group">
                      {/* Timeline Dot */}
                      <div className="absolute -left-[31px] md: -left-[47px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-brand-gold bg-white group-hover:bg-brand-gold transition-all" />
                      
                      <div className="space-y-1">
                        <div className="flex flex-wrap justify-between items-baseline gap-2">
                          <h3 className="font-serif text-lg md:text-xl font-bold text-brand-charcoal leading-snug">
                            {item.role}
                          </h3>
                          <span className="font-mono text-xs text-brand-gold font-bold">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-xs font-sans font-semibold text-brand-charcoal/70">
                          {item.institution} {item.location ? `— ${item.location}` : ""}
                        </p>
                        <p className="text-xs text-brand-charcoal/80 font-sans leading-relaxed pt-1 font-light max-w-4xl">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. FORMACIÓN (ACADÉMICA E INTERNACIONAL) */}
            {(activeTab === "formacion" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-12">
                
                {/* Academic */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                    <span className="font-mono text-xs font-bold text-brand-gold">06</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                      Formación Académica
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ACADEMIC_EDUCATION.map((edu, idx) => (
                      <div key={idx} className="bg-brand-beige/30 p-5 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/20 transition-all flex flex-col justify-between h-full">
                        <div className="space-y-2">
                          <span className="font-mono text-xs text-brand-gold font-bold">{edu.years}</span>
                          <h4 className="font-serif font-bold text-sm md:text-base text-brand-charcoal leading-tight">
                            {edu.degree}
                          </h4>
                        </div>
                        <p className="text-xs font-sans text-brand-charcoal/60 mt-3 border-t border-brand-charcoal/5 pt-2">
                          {edu.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* International specialized */}
                <div className="space-y-6 pt-6 border-t border-brand-charcoal/10">
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                    <span className="font-mono text-xs font-bold text-brand-gold">07</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                      Formación Internacional Especializada
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {INTERNATIONAL_TRAINING.map((train, idx) => (
                      <div key={idx} className="bg-brand-beige/40 p-6 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/30 transition-all space-y-3">
                        <div className="flex justify-between items-start gap-4">
                          <span className="font-mono text-xs text-brand-gold font-bold">
                            {train.date}
                          </span>
                          <span className="font-mono text-[10px] text-brand-charcoal/50 uppercase">
                            {train.location}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-base text-brand-charcoal leading-snug">
                          {train.program}
                        </h4>
                        <p className="font-serif italic text-xs text-brand-charcoal/60">
                          {train.institution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 6. COLABORACIONES Y VOLUNTARIADO */}
            {(activeTab === "colaboraciones" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-12">
                
                {/* Collaborations */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                    <span className="font-mono text-xs font-bold text-brand-gold">08</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                      Colaboraciones Institucionales
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {COLABORACIONES.map((col, idx) => (
                      <div key={idx} className="p-5 rounded-xl bg-brand-beige/20 border border-brand-charcoal/5 hover:border-brand-gold/30 transition-all flex gap-3 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-gold" />
                        <p className="text-xs md:text-sm text-brand-charcoal/90 font-sans leading-relaxed pl-2">
                          {col}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Volunteering */}
                <div className="space-y-6 pt-6 border-t border-brand-charcoal/10">
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                    <span className="font-mono text-xs font-bold text-brand-gold">09</span>
                    <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                      Voluntariado Internacional
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {VOLUNTEERING.map((vol, idx) => (
                      <div key={idx} className="bg-brand-beige/40 p-6 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/30 transition-all flex flex-col justify-between">
                        <div className="space-y-3">
                          <div className="flex justify-between items-baseline gap-2">
                            <h4 className="font-serif font-bold text-base text-brand-charcoal">
                              {vol.program}
                            </h4>
                            <span className="font-mono text-xs text-brand-gold font-bold shrink-0">{vol.date}</span>
                          </div>
                          <p className="font-mono text-[10px] text-brand-charcoal/40 uppercase">{vol.location}</p>
                          <p className="text-xs text-brand-charcoal/80 font-sans leading-relaxed pt-1 font-light">
                            {vol.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* 7. COMPETENCIA DIGITAL */}
            {(activeTab === "digital" || activeTab === "todo") && (
              <div className="bg-white p-8 md:p-12 rounded-2xl border border-brand-charcoal/5 shadow-sm mb-12 space-y-10">
                <div className="flex items-center gap-3 pb-3 border-b border-brand-charcoal/5">
                  <span className="font-mono text-xs font-bold text-brand-gold">10</span>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-brand-charcoal uppercase">
                    Competencia Digital y Herramientas de Gestión Educativa
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {DIGITAL_TOOLS.map((cat, idx) => (
                    <div key={idx} className="bg-brand-beige/40 p-6 rounded-xl border border-brand-charcoal/5 hover:border-brand-gold/20 transition-all flex flex-col justify-between">
                      <div>
                        <h4 className="font-serif font-bold text-sm text-brand-charcoal border-b border-brand-charcoal/10 pb-2 mb-3 uppercase tracking-wider">
                          {cat.category}
                        </h4>
                        <ul className="space-y-2">
                          {cat.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-xs text-brand-charcoal/80 font-sans leading-relaxed">
                              <span className="w-1 h-1 bg-brand-gold rounded-full shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
