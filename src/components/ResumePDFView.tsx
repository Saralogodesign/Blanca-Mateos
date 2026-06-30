import { useState } from "react";
import { Download } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ResumePDFView() {
  const [isOpen] = useState(true);

  const pdfUrl = "https://aoojyeiqjukkihcpajfa.supabase.co/storage/v1/object/sign/Blanca/CV_Blanca_Mateos_Barbera_9px_editable.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83NGRiNmQyZi03MGNlLTRlOGYtYTEzMC01NTU0MjY1M2ZiZTUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJCbGFuY2EvQ1ZfQmxhbmNhX01hdGVvc19CYXJiZXJhXzlweF9lZGl0YWJsZS5wZGYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzgyODM1MTM4LCJleHAiOjIwOTgxOTUxMzh9.1ABGh5CKRp0Tefi9woNBQeP_p_yVoi4kGbnvzh0_gQI";

  return (
    <section className="py-24 bg-[#FAF8F5] border-b border-brand-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-mono text-xs tracking-widest text-brand-gold uppercase block mb-3">
          Documentación Oficial
        </span>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-brand-accent mb-4">
          Currículum Vitae Completo
        </h2>
        <p className="text-brand-charcoal/70 max-w-xl mx-auto text-sm leading-relaxed mb-8">
          Accede al documento profesional estructurado en dos páginas, listo para visualizar en pantalla, descargar en formato PDF o imprimir con formato optimizado.
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
            <span>Descargar CV (PDF)</span>
          </a>
        </div>

        {/* Integrated Printable 2-Page Document Sheet Container */}
        {isOpen && (
          <div className="mt-12 text-left bg-white p-6 md:p-12 rounded-2xl shadow-lg border border-brand-charcoal/10 max-w-3xl mx-auto animate-fade-in overflow-hidden">
            
            {/* Page 1 Header */}
            <div className="border-b-2 border-brand-accent pb-6">
              <h3 className="font-sans text-3xl font-extrabold tracking-tight text-brand-accent uppercase">
                {PERSONAL_INFO.name}
              </h3>
              <p className="font-sans text-lg font-bold text-brand-accent mt-1 uppercase">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-xs text-brand-charcoal/70 font-semibold mt-1">
                Funcionaria de carrera del Cuerpo de Profesores de Enseñanza Secundaria (Inglés)
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-xs font-mono text-brand-charcoal/70">
                <div>
                  <span className="block font-bold text-brand-accent text-[9px] uppercase">EMAIL</span>
                  <span>{PERSONAL_INFO.contact.email}</span>
                </div>
                <div>
                  <span className="block font-bold text-brand-accent text-[9px] uppercase">TELÉFONO</span>
                  <span>{PERSONAL_INFO.contact.phone}</span>
                </div>
                <div>
                  <span className="block font-bold text-brand-accent text-[9px] uppercase">UBICACIÓN</span>
                  <span>{PERSONAL_INFO.contact.location}</span>
                </div>
                <div>
                  <span className="block font-bold text-brand-accent text-[9px] uppercase">LINKEDIN</span>
                  <span className="truncate block">{PERSONAL_INFO.contact.linkedin}</span>
                </div>
              </div>
            </div>

            {/* Resume Body */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {/* Left sidebar column (Profile & Languages) */}
              <div className="md:col-span-1 space-y-6">
                <div>
                  <h4 className="font-sans text-sm font-bold text-brand-accent uppercase border-b border-brand-accent pb-1 mb-3">
                    01 Perfil Profesional
                  </h4>
                  <p className="text-xs text-brand-charcoal/80 leading-relaxed font-sans font-light">
                    {PERSONAL_INFO.bio}
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-brand-accent uppercase border-b border-brand-accent pb-1 mb-3">
                    02 Idiomas
                  </h4>
                  <ul className="space-y-2 text-xs font-sans">
                    <li><strong className="text-brand-accent">Español:</strong> Lengua materna</li>
                    <li><strong className="text-brand-accent">Inglés:</strong> C1 – Cambridge English Qualifications</li>
                    <li><strong className="text-brand-accent">Alemán:</strong> B1 – Escuela Oficial de Idiomas</li>
                    <li><strong className="text-brand-accent">Valenciano:</strong> C1 – JQCV</li>
                  </ul>
                </div>
              </div>

              {/* Right main column (Leadership, Coordination & Programs) */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="font-sans text-sm font-bold text-brand-accent uppercase border-b border-brand-accent pb-1 mb-4">
                    03 Liderazgo y Coordinación
                  </h4>
                  
                  <div className="space-y-4 text-xs font-sans">
                    <div>
                      <div className="flex justify-between font-bold text-brand-accent">
                        <span>Coordinadora de Bilingüismo</span>
                        <span>2022 – Actualidad</span>
                      </div>
                      <p className="italic text-brand-charcoal/60">IES Ana Frank, Madrid</p>
                      <ul className="list-disc pl-4 mt-1.5 space-y-1 text-[11px] text-brand-charcoal/80">
                        <li>Planificación, implementación, coordinación y evaluación del Programa Bilingüe.</li>
                        <li>Gestión integral del programa de auxiliares de conversación en AuxMadrid.</li>
                        <li>Organización de pruebas externas y certificaciones lingüísticas.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-brand-accent">
                        <span>Jefa del Departamento de Inglés</span>
                        <span>2022 – Actualidad</span>
                      </div>
                      <p className="italic text-brand-charcoal/60">IES Ana Frank, Madrid</p>
                      <p className="mt-1 text-[11px] text-brand-charcoal/80">
                        Coordinación pedagógica, programaciones de departamento e impulso de la innovación metodológica.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-brand-accent uppercase border-b border-brand-accent pb-1 mb-3">
                    04 Programas e Hitos
                  </h4>
                  <ul className="list-disc pl-4 text-[11px] text-brand-charcoal/80 space-y-1.5 font-sans">
                    <li>Profesora coordinadora del programa Global Classrooms.</li>
                    <li>Coordinación del intercambio escolar con Alemania y Nueva Zelanda.</li>
                    <li>Traducción de materiales digitales didácticos para Next Generation EU.</li>
                    <li>Correctora de las Pruebas de Acceso a la Universidad (EvAU), Tribunal de Inglés.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Note to reader */}
            <div className="mt-8 pt-4 border-t border-brand-charcoal/10 flex justify-between items-center text-[10px] font-mono text-brand-charcoal/40">
              <span>Blanca Mateos Barberá • CV oficial</span>
              <span>Página 1 de 2</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
