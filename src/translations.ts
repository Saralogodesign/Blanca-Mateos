import { 
  Experience, 
  Education, 
  InternationalTraining, 
  VolunteerWork, 
  Language, 
  ToolCategory 
} from "./types";

export interface TranslatedData {
  PERSONAL_INFO: {
    name: string;
    title: string;
    subtitles: string[];
    contact: {
      email: string;
      phone: string;
      location: string;
      linkedin: string;
      linkedinUrl: string;
    };
    bio: string;
  };
  LANGUAGES: Language[];
  LIDERAZGO_EXPERIENCE: Experience[];
  TEACHING_TIMELINE: Experience[];
  INSTITUTIONAL_PROGRAMS: string[];
  ACADEMIC_EDUCATION: Education[];
  INTERNATIONAL_TRAINING: InternationalTraining[];
  COLABORACIONES: string[];
  VOLUNTEERING: VolunteerWork[];
  DIGITAL_TOOLS: ToolCategory[];
  UI: {
    nav_perfil: string;
    nav_liderazgo: string;
    nav_programas: string;
    nav_experiencia: string;
    nav_formacion: string;
    nav_colaboraciones: string;
    nav_digital: string;
    nav_todo: string;
    nav_title: string;
    nav_cta: string;
    hero_badge: string;
    hero_cta_cv: string;
    hero_cta_contact: string;
    hero_status_label: string;
    hero_status_value: string;
    hero_metric_bil_title: string;
    hero_metric_bil_desc: string;
    hero_metric_glob_title: string;
    hero_metric_glob_desc: string;
    hero_scroll: string;
    cv_sec_profile_num: string;
    cv_sec_profile_title: string;
    cv_sec_lang_num: string;
    cv_sec_lang_title: string;
    cv_sec_lang_native: string;
    cv_sec_liderazgo_num: string;
    cv_sec_liderazgo_title: string;
    cv_sec_prog_num: string;
    cv_sec_prog_title: string;
    cv_sec_exp_num: string;
    cv_sec_exp_title: string;
    cv_sec_acad_num: string;
    cv_sec_acad_title: string;
    cv_sec_int_num: string;
    cv_sec_int_title: string;
    cv_sec_col_num: string;
    cv_sec_col_title: string;
    cv_sec_vol_num: string;
    cv_sec_vol_title: string;
    cv_sec_dig_num: string;
    cv_sec_dig_title: string;
    pdf_badge: string;
    pdf_title: string;
    pdf_desc: string;
    pdf_cta: string;
    contact_badge: string;
    contact_title: string;
    contact_subtitle: string;
    contact_desc: string;
    contact_label_email: string;
    contact_copy_email: string;
    contact_copied: string;
    contact_label_phone: string;
    contact_label_loc: string;
    contact_label_profile: string;
    contact_form_title: string;
    contact_form_success_title: string;
    contact_form_success_desc: string;
    contact_form_name: string;
    contact_form_name_placeholder: string;
    contact_form_email: string;
    contact_form_email_placeholder: string;
    contact_form_subject: string;
    contact_form_subject_placeholder: string;
    contact_form_message: string;
    contact_form_message_placeholder: string;
    contact_form_submit: string;
    footer_desc: string;
    footer_rights: string;
    footer_aesthetic: string;
  };
}

export const TRANSLATIONS: Record<"es" | "en" | "de" | "val", TranslatedData> = {
  es: {
    PERSONAL_INFO: {
      name: "Blanca Mateos Barberá",
      title: "Docente de Educación Secundaria",
      subtitles: [
        "Funcionaria de carrera del Cuerpo de Profesores de Enseñanza Secundaria",
        "Especialista en Programas Bilingües, Liderazgo e Internacionalización Educativa"
      ],
      contact: {
        email: "blanca.mateosbarbera@educa.madrid.org",
        phone: "+34 629 503 361",
        location: "Madrid, España",
        linkedin: "linkedin.com/in/blanca-mateos-564424189",
        linkedinUrl: "https://linkedin.com/in/blanca-mateos-564424189"
      },
      bio: "Docente de Inglés con más de 10 años de experiencia en la Comunidad de Madrid, especializada en la coordinación, liderazgo e implantación de programas bilingües y en la internacionalización educativa. Amplia trayectoria en la gestión de equipos docentes, coordinación de auxiliares de conversación, planificación de programas lingüísticos y promoción de la excelencia educativa. Experiencia docente internacional en Estados Unidos y Reino Unido, que me ha permitido conocer diferentes modelos educativos, fortalecer mi capacidad de adaptación y trasladar buenas prácticas al desarrollo del Programa Bilingüe en la Comunidad de Madrid. Comprometida con la innovación educativa, la mejora continua y el desarrollo integral del alumnado."
    },
    LANGUAGES: [
      { name: "Español", level: "Lengua materna", flag: "🇪🇸" },
      { name: "Inglés", level: "C1 — Cambridge English Qualifications", flag: "🇬🇧" },
      { name: "Valenciano", level: "C1 — Junta Qualificadora de Coneixements de Valencià", flag: "📸" },
      { name: "Alemán", level: "B1 — Escuela Oficial de Idiomas", flag: "🇩🇪" }
    ],
    LIDERAZGO_EXPERIENCE: [
      {
        year: "2022 – Actualidad",
        role: "Coordinadora de Bilingüismo",
        institution: "IES Ana Frank",
        location: "Madrid, España",
        description: "Planificación, implementación y evaluación del Programa Bilingüe del centro.",
        bullets: [
          "Planificación, implementación, coordinación y evaluación del Programa Bilingüe del centro.",
          "Elaboración del Plan de Acción y de la Memoria Anual de Bilingüismo.",
          "Coordinación de reuniones del equipo bilingüe y elaboración de actas de seguimiento.",
          "Gestión integral del programa de auxiliares de conversación: acogida, horarios, seguimiento, evaluación y gestión en AuxMadrid.",
          "Gestión del Módulo de Enseñanzas Bilingües en Raíces y coordinación de todo el proceso administrativo vinculado al programa.",
          "Organización de pruebas externas, certificaciones lingüísticas y acceso a la Sección Bilingüe.",
          "Coordinación de proyectos de movilidad e internacionalización.",
          "Asesoramiento al equipo docente en metodologías bilingües y atención a la diversidad."
        ],
        category: "liderazgo"
      },
      {
        year: "2022 – Actualidad",
        role: "Jefa del Departamento de Inglés",
        institution: "IES Ana Frank",
        location: "Madrid, España",
        description: "Dirección pedagógica y organizativa del departamento de idiomas.",
        bullets: [
          "Coordinación pedagógica del departamento: elaboración de programaciones, gestión de recursos y evaluación de resultados.",
          "Liderazgo y coordinación del equipo docente.",
          "Impulso de la innovación metodológica y mejora continua.",
          "Colaboración estrecha con el Equipo Directivo y el Claustro."
        ],
        category: "liderazgo"
      },
      {
        year: "2022-2023 & 2025-2026",
        role: "Mentora de funcionarios en prácticas",
        institution: "IES Ana Frank",
        location: "Madrid, España",
        description: "Acompañamiento, orientación y asesoramiento a nuevos docentes.",
        bullets: [
          "Acompañamiento y orientación de docentes en prácticas.",
          "Asesoramiento en planificación, gestión del aula, evaluación y adaptación al contexto educativo."
        ],
        category: "liderazgo"
      },
      {
        year: "2020 – Actualidad",
        role: "Tutora del programa That’s English!",
        institution: "EOI de Madrid",
        location: "Madrid, España",
        description: "Tutorización y docencia online de idiomas para adultos.",
        bullets: [
          "Tutora de grupos en modalidad online en los niveles A2, B1 y B2.",
          "Seguimiento académico, evaluación y tutorización del alumnado mediante el uso de plataformas digitales."
        ],
        category: "liderazgo"
      }
    ],
    TEACHING_TIMELINE: [
      {
        year: "2022 – Actualidad",
        role: "Profesora de Inglés (Funcionaria)",
        institution: "IES Ana Frank",
        location: "Madrid, España",
        description: "Docencia en Educación Secundaria Obligatoria (ESO) y Bachillerato. Coordinación y liderazgo de proyectos de centro.",
        category: "docente"
      },
      {
        year: "2021 – 2022",
        role: "Profesora Visitante (EE. UU.)",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, EE. UU.",
        description: "Docencia en Middle School (6.º, 7.º y 8.º curso) en un entorno educativo internacional bilingüe. Inmersión e intercambio de mejores prácticas globales.",
        category: "docente"
      },
      {
        year: "2017 – 2021",
        role: "Profesora de Inglés (Funcionaria de Carrera)",
        institution: "Institutos de Enseñanza Secundaria de la Comunidad de Madrid",
        location: "Madrid, España",
        description: "Docencia activa, preparación de exámenes de certificación y dinamización del departamento.",
        category: "docente"
      },
      {
        year: "2016 – 2017",
        role: "Profesora de Inglés (Funcionaria en Prácticas)",
        institution: "IES San Isidoro de Sevilla",
        location: "Sevilla, España",
        description: "Docencia en Educación Secundaria Obligatoria y Bachillerato en un centro histórico de la ciudad.",
        category: "docente"
      },
      {
        year: "2011 – 2016",
        role: "Profesora de Inglés (Funcionaria Interina)",
        institution: "Diferentes IES de las provincias de Castellón y Valencia",
        location: "Comunidad Valenciana, España",
        description: "Docencia en ESO y Bachillerato, cubriendo diversos entornos pedagógicos y adaptando metodologías.",
        category: "docente"
      },
      {
        year: "2008 – 2009",
        role: "Auxiliar de conversación de español",
        institution: "Dame Alice Harpur School",
        location: "Bedford, Reino Unido",
        description: "Programa de auxiliares de conversación del Ministerio de Educación, apoyando la docencia de español y promoviendo el intercambio cultural.",
        category: "docente"
      }
    ],
    INSTITUTIONAL_PROGRAMS: [
      "Organización de las pruebas externas de certificación lingüística (planificación de espacios, coordinación con la entidad examinadora, matriculación del alumnado y comunicación con las familias).",
      "Organización de las pruebas de acceso a la Sección Bilingüe.",
      "Profesora coordinadora del programa Global Classrooms en el centro, promovido por la Subdirección General de Bilingüismo.",
      "Coordinación del intercambio escolar con Alemania y desarrollo de un nuevo proyecto de intercambio con un centro educativo de Nueva Zelanda.",
      "Coordinación de programas de inmersión lingüística en España y en Reino Unido para alumnado de Educación Secundaria Obligatoria (ESO).",
      "Coordinación de la participación del centro en el Concurso de Cortometrajes en Lengua Extranjera, promovido por la Subdirección General de Bilingüismo.",
      "Coordinación integral del programa de auxiliares de conversación del centro."
    ],
    ACADEMIC_EDUCATION: [
      {
        years: "2016 – 2018",
        degree: "Máster en Nuevas Tecnologías Aplicadas a la Educación",
        institution: "Universitat Oberta de Catalunya (UOC)",
        location: "Online"
      },
      {
        years: "2008 – 2009",
        degree: "Certificado de Aptitud Pedagógica (CAP)",
        institution: "Universidad Complutense de Madrid",
        location: "Madrid, España"
      },
      {
        years: "2002 – 2008",
        degree: "Licenciatura en Traducción e Interpretación (Inglés y Alemán)",
        institution: "Universitat Jaume I",
        location: "Castellón, España"
      }
    ],
    INTERNATIONAL_TRAINING: [
      {
        date: "2024 (julio)",
        program: "Madrid Educational Leadership Program",
        institution: "Simon Fraser University – Faculty of Education",
        location: "Burnaby, Canadá"
      },
      {
        date: "2023 (julio)",
        program: "CLIL Leaders’ Training Program",
        institution: "Ottawa-Carleton District School Board",
        location: "Ottawa, Canadá"
      },
      {
        date: "2017 (julio)",
        program: "Danforth Educational Leadership Program – Leadership Institute",
        institution: "University of Washington – College of Education",
        location: "Seattle, EE. UU."
      },
      {
        date: "2021 – 2022",
        program: "International School of Arizona – Formación docente internacional",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, EE. UU."
      }
    ],
    COLABORACIONES: [
      "Traductora de materiales digitales didácticos para ciclos formativos de Grado Superior dentro de la actuación Next Generation EU, financiada por el Fondo Social Europeo, para la elaboración de recursos multimedia digitales destinados a la Formación Profesional.",
      "Correctora de las Pruebas de Acceso a la Universidad (PAU/EvAU), Tribunal de Inglés. Universidad Complutense de Madrid (Convocatorias: 2018-2019, 2019-2020 y 2025-2026).",
      "Examinadora acreditada DELE (niveles A1 y A2) por el Instituto Cervantes.",
      "Mentora certificada de funcionarios en prácticas (cursos 2023-2024 y 2025-2026)."
    ],
    VOLUNTEERING: [
      {
        date: "Julio 2026",
        program: "Voluntariado educativo en Arusha, Tanzania (Próxima experiencia)",
        location: "Arusha, Tanzania",
        description: "Apoyo en tareas de mejora y reparación de infraestructuras escolares; pintura de aulas y muros, reconstrucción de áreas dañadas y acondicionamiento de espacios para el aprendizaje."
      },
      {
        date: "Agosto 2019",
        program: "Voluntariado educativo en Vietnam",
        location: "Vietnam",
        description: "Centro de apoyo educativo a niños y jóvenes en situación de vulnerabilidad. Enseñanza de inglés y apoyo escolar interactivo."
      }
    ],
    DIGITAL_TOOLS: [
      {
        category: "Gestión Educativa & Bilingüismo",
        items: ["Raíces (Módulo Bilingüe)", "AuxMadrid (Auxiliares de Conversación)", "Gestión de Actas", "Módulo de Seguimiento"]
      },
      {
        category: "LMS & Aula Virtual",
        items: ["Moodle", "That's English! LMS", "Aulas Virtuales", "Google Classroom"]
      },
      {
        category: "Colaboración & Productividad",
        items: ["Google Workspace for Education", "Microsoft Teams", "Zoom", "Office 365"]
      },
      {
        category: "Creación de Contenidos & IA",
        items: ["Canva", "Genially", "Padlet", "Trello", "Integración de IA en el Aula (Seminario 25-26)", "Herramientas Multimedia"]
      }
    ],
    UI: {
      nav_perfil: "Perfil e Idiomas",
      nav_liderazgo: "Liderazgo",
      nav_programas: "Programas",
      nav_experiencia: "Experiencia",
      nav_formacion: "Formación",
      nav_colaboraciones: "Colaboraciones",
      nav_digital: "Herramientas",
      nav_todo: "Ver Todo",
      nav_title: "DOCENTE DE SECUNDARIA",
      nav_cta: "Conectar",
      hero_badge: "Educación Pública • Liderazgo • Bilingüismo",
      hero_cta_cv: "Ver Secciones de Currículum",
      hero_cta_contact: "Información de Contacto",
      hero_status_label: "Estatus actual",
      hero_status_value: "● FUNCIONARIA DE CARRERA",
      hero_metric_bil_title: "Programa Bilingüe",
      hero_metric_bil_desc: "Coordinación & Dirección de Departamento",
      hero_metric_glob_title: "Inmersión Global",
      hero_metric_glob_desc: "USA, Canadá, Reino Unido, Tanzania & Vietnam",
      hero_scroll: "Deslizar",
      cv_sec_profile_num: "01",
      cv_sec_profile_title: "Perfil Profesional",
      cv_sec_lang_num: "02",
      cv_sec_lang_title: "Idiomas",
      cv_sec_lang_native: "Materna",
      cv_sec_liderazgo_num: "03",
      cv_sec_liderazgo_title: "Liderazgo y Coordinación Educativa",
      cv_sec_prog_num: "04",
      cv_sec_prog_title: "Programas Educativos y Actuaciones Institucionales",
      cv_sec_exp_num: "05",
      cv_sec_exp_title: "Experiencia Profesional Docente",
      cv_sec_acad_num: "06",
      cv_sec_acad_title: "Formación Académica",
      cv_sec_int_num: "07",
      cv_sec_int_title: "Formación Internacional Especializada",
      cv_sec_col_num: "08",
      cv_sec_col_title: "Colaboraciones Institucionales",
      cv_sec_vol_num: "09",
      cv_sec_vol_title: "Voluntariado Internacional",
      cv_sec_dig_num: "10",
      cv_sec_dig_title: "Competencia Digital y Herramientas de Gestión Educativa",
      pdf_badge: "Documentación Oficial",
      pdf_title: "Currículum Vitae Completo",
      pdf_desc: "Accede al documento profesional estructurado en dos páginas, listo para visualizar en pantalla, descargar en formato PDF o imprimir con formato optimizado.",
      pdf_cta: "Descargar CV (PDF)",
      contact_badge: "06 / Conectar",
      contact_title: "Información de Contacto & Consulta",
      contact_subtitle: "Hablemos sobre bilingüismo, programas de centro e internacionalización.",
      contact_desc: "Disponible para consultas de mentoría, proyectos bilingües colaborativos de centro o intercambios educativos internacionales.",
      contact_label_email: "Correo Electrónico Oficial",
      contact_copy_email: "Copiar correo",
      contact_copied: "¡Copiado al portapapeles!",
      contact_label_phone: "Teléfono de Contacto",
      contact_label_loc: "Ubicación principal",
      contact_label_profile: "Perfil Profesional",
      contact_form_title: "Enviar Mensaje Directo",
      contact_form_success_title: "¡Mensaje enviado con éxito!",
      contact_form_success_desc: "Gracias por ponerte en contacto. Blanca te responderá a la mayor brevedad posible al correo electrónico proporcionado.",
      contact_form_name: "Nombre Completo *",
      contact_form_name_placeholder: "p. ej. María G.",
      contact_form_email: "Correo Electrónico *",
      contact_form_email_placeholder: "p. ej. tu@correo.com",
      contact_form_subject: "Asunto de consulta",
      contact_form_subject_placeholder: "p. ej. Propuesta de Intercambio / Colaboración",
      contact_form_message: "Detalle de mensaje *",
      contact_form_message_placeholder: "Describe los detalles de tu consulta...",
      contact_form_submit: "Enviar Mensaje",
      footer_desc: "Dedicada al fortalecimiento de la educación pública bilingüe y el liderazgo metodológico de excelencia en el aula de secundaria.",
      footer_rights: "Blanca Mateos Barberá. Todos los derechos reservados.",
      footer_aesthetic: "Diseñado con un enfoque editorial minimalista y contemporáneo."
    }
  },
  en: {
    PERSONAL_INFO: {
      name: "Blanca Mateos Barberá",
      title: "Secondary Education Teacher",
      subtitles: [
        "Tenured Civil Servant Teacher of the Secondary Education Corps",
        "Specialist in Bilingual Programs, Leadership, and Educational Internationalization"
      ],
      contact: {
        email: "blanca.mateosbarbera@educa.madrid.org",
        phone: "+34 629 503 361",
        location: "Madrid, Spain",
        linkedin: "linkedin.com/in/blanca-mateos-564424189",
        linkedinUrl: "https://linkedin.com/in/blanca-mateos-564424189"
      },
      bio: "English teacher with over 10 years of experience in the Community of Madrid, specializing in the coordination, leadership, and implementation of bilingual programs and educational internationalization. Extensive track record in managing teaching teams, coordinating language assistants, planning linguistic programs, and promoting educational excellence. International teaching experience in the United States and the United Kingdom, which has allowed me to understand different educational models, strengthen my adaptability, and transfer best practices to the development of the Bilingual Program in the Community of Madrid. Committed to educational innovation, continuous improvement, and the integral development of students."
    },
    LANGUAGES: [
      { name: "Spanish", level: "Native language", flag: "🇪🇸" },
      { name: "English", level: "C1 — Cambridge English Qualifications", flag: "🇬🇧" },
      { name: "Valencian", level: "C1 — Valencian Language Knowledge Board (JQCV)", flag: "📸" },
      { name: "German", level: "B1 — Official School of Languages (EOI)", flag: "🇩🇪" }
    ],
    LIDERAZGO_EXPERIENCE: [
      {
        year: "2022 – Present",
        role: "Bilingual Program Coordinator",
        institution: "IES Ana Frank",
        location: "Madrid, Spain",
        description: "Planning, implementation, and evaluation of the school's Bilingual Program.",
        bullets: [
          "Planning, implementation, coordination, and evaluation of the school's Bilingual Program.",
          "Preparation of the Bilingualism Action Plan and Annual Report.",
          "Coordination of bilingual team meetings and preparation of follow-up minutes.",
          "Comprehensive management of the language assistants program: welcome, schedules, tracking, evaluation, and management in AuxMadrid.",
          "Management of the Bilingual Education Module in Raíces and coordination of all administrative processes linked to the program.",
          "Organization of external testing, language certifications, and access to the Bilingual Section.",
          "Coordination of mobility and internationalization projects.",
          "Advising the teaching staff on bilingual methodologies and attention to diversity."
        ],
        category: "liderazgo"
      },
      {
        year: "2022 – Present",
        role: "Head of the English Department",
        institution: "IES Ana Frank",
        location: "Madrid, Spain",
        description: "Pedagogical and organizational direction of the language department.",
        bullets: [
          "Pedagogical coordination of the department: preparation of syllabus planning, resource management, and evaluation of results.",
          "Leadership and coordination of the teaching team.",
          "Promotion of methodological innovation and continuous improvement.",
          "Close collaboration with the School Management Team and the Faculty."
        ],
        category: "liderazgo"
      },
      {
        year: "2022-2023 & 2025-2026",
        role: "Mentor of Newly Qualified Teachers",
        institution: "IES Ana Frank",
        location: "Madrid, Spain",
        description: "Support, guidance, and counseling for new teachers.",
        bullets: [
          "Support and orientation of newly qualified teachers in practice.",
          "Advising on planning, classroom management, assessment, and adaptation to the educational context."
        ],
        category: "liderazgo"
      },
      {
        year: "2020 – Present",
        role: "Tutor of the That’s English! Program",
        institution: "EOI de Madrid",
        location: "Madrid, Spain",
        description: "Online tutoring and language teaching for adults.",
        bullets: [
          "Tutor of online groups at A2, B1, and B2 levels.",
          "Academic tracking, assessment, and tutoring of students using digital platforms."
        ],
        category: "liderazgo"
      }
    ],
    TEACHING_TIMELINE: [
      {
        year: "2022 – Present",
        role: "English Teacher (Tenured)",
        institution: "IES Ana Frank",
        location: "Madrid, Spain",
        description: "Teaching in Compulsory Secondary Education (ESO) and Baccalaureate. Coordination and leadership of school projects.",
        category: "docente"
      },
      {
        year: "2021 – 2022",
        role: "Visiting Teacher (USA)",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, USA",
        description: "Teaching in Middle School (6th, 7th, and 8th grades) in an international bilingual educational environment. Immersion and exchange of global best practices.",
        category: "docente"
      },
      {
        year: "2017 – 2021",
        role: "English Teacher (Tenured Civil Servant)",
        institution: "Institutos de Enseñanza Secundaria de la Comunidad de Madrid",
        location: "Madrid, Spain",
        description: "Active teaching, preparation for certification exams, and revitalization of the department.",
        category: "docente"
      },
      {
        year: "2016 – 2017",
        role: "English Teacher (Newly Qualified Teacher)",
        institution: "IES San Isidoro de Sevilla",
        location: "Seville, Spain",
        description: "Teaching in Compulsory Secondary Education and Baccalaureate in a historic school in the city.",
        category: "docente"
      },
      {
        year: "2011 – 2016",
        role: "English Teacher (Temporary Civil Servant)",
        institution: "Diferentes IES de las provincias de Castellón y Valencia",
        location: "Comunidad Valenciana, Spain",
        description: "Teaching in ESO and Baccalaureate, covering various pedagogical environments and adapting methodologies.",
        category: "docente"
      },
      {
        year: "2008 – 2009",
        role: "Spanish Language Assistant",
        institution: "Dame Alice Harpur School",
        location: "Bedford, United Kingdom",
        description: "Language assistant program of the Ministry of Education, supporting Spanish teaching and promoting cultural exchange.",
        category: "docente"
      }
    ],
    INSTITUTIONAL_PROGRAMS: [
      "Organization of external language certification tests (room planning, coordination with the examining board, student registration, and parent communication).",
      "Organization of access tests to the Bilingual Section.",
      "Teacher coordinator for the Global Classrooms program at the school, promoted by the General Subdirectorate of Bilingualism.",
      "Coordination of the school exchange program with Germany and development of a new exchange project with an educational center in New Zealand.",
      "Coordination of language immersion programs in Spain and the UK for Secondary Education (ESO) students.",
      "Coordination of the school's participation in the Foreign Language Short Film Contest, promoted by the General Subdirectorate of Bilingualism.",
      "Comprehensive coordination of the school's language assistants program."
    ],
    ACADEMIC_EDUCATION: [
      {
        years: "2016 – 2018",
        degree: "Master's Degree in Educational Technology",
        institution: "Universitat Oberta de Catalunya (UOC)",
        location: "Online"
      },
      {
        years: "2008 – 2009",
        degree: "Postgraduate Certificate in Education (CAP)",
        institution: "Complutense University of Madrid",
        location: "Madrid, Spain"
      },
      {
        years: "2002 – 2008",
        degree: "Bachelor's Degree in Translation and Interpreting (English & German)",
        institution: "Universitat Jaume I",
        location: "Castellón, Spain"
      }
    ],
    INTERNATIONAL_TRAINING: [
      {
        date: "2024 (July)",
        program: "Madrid Educational Leadership Program",
        institution: "Simon Fraser University – Faculty of Education",
        location: "Burnaby, Canada"
      },
      {
        date: "2023 (July)",
        program: "CLIL Leaders’ Training Program",
        institution: "Ottawa-Carleton District School Board",
        location: "Ottawa, Canada"
      },
      {
        date: "2017 (July)",
        program: "Danforth Educational Leadership Program – Leadership Institute",
        institution: "University of Washington – College of Education",
        location: "Seattle, USA"
      },
      {
        date: "2021 – 2022",
        program: "International School of Arizona – International Teacher Training",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, USA"
      }
    ],
    COLABORACIONES: [
      "Translator of digital educational materials for Higher Vocational Training under the Next Generation EU initiative, funded by the European Social Fund, for developing digital multimedia resources for Vocational Training.",
      "Grader of University Entrance Exams (PAU/EvAU), English Panel. Complutense University of Madrid (Exam terms: 2018-2019, 2019-2020, and 2025-2026).",
      "Accredited DELE examiner (A1 & A2 levels) by the Instituto Cervantes.",
      "Certified mentor for newly qualified teachers in practice (academic years 2023-2024 and 2025-2026)."
    ],
    VOLUNTEERING: [
      {
        date: "July 2026",
        program: "Educational volunteering in Arusha, Tanzania (Upcoming experience)",
        location: "Arusha, Tanzania",
        description: "Supporting the improvement and repair of school infrastructure; painting classrooms and walls, rebuilding damaged areas, and setting up learning spaces."
      },
      {
        date: "August 2019",
        program: "Educational volunteering in Vietnam",
        location: "Vietnam",
        description: "Support center for vulnerable children and youth. English teaching and interactive homework support."
      }
    ],
    DIGITAL_TOOLS: [
      {
        category: "Bilingual Program & School Management",
        items: ["Raíces (Bilingual Module)", "AuxMadrid (Language Assistants)", "Minutes Management", "Tracking Module"]
      },
      {
        category: "LMS & Virtual Classrooms",
        items: ["Moodle", "That's English! LMS", "Virtual Classrooms", "Google Classroom"]
      },
      {
        category: "Collaboration & Productivity",
        items: ["Google Workspace for Education", "Microsoft Teams", "Zoom", "Office 365"]
      },
      {
        category: "Content Creation & AI",
        items: ["Canva", "Genially", "Padlet", "Trello", "AI Integration in the Classroom (25-26 Seminar)", "Multimedia Tools"]
      }
    ],
    UI: {
      nav_perfil: "Profile & Languages",
      nav_liderazgo: "Leadership",
      nav_programas: "Programs",
      nav_experiencia: "Experience",
      nav_formacion: "Education",
      nav_colaboraciones: "Collaborations",
      nav_digital: "Tools",
      nav_todo: "View All",
      nav_title: "SECONDARY TEACHER",
      nav_cta: "Connect",
      hero_badge: "Public Education • Leadership • Bilingualism",
      hero_cta_cv: "View CV Sections",
      hero_cta_contact: "Contact Information",
      hero_status_label: "Current status",
      hero_status_value: "● TENURED CIVIL SERVANT",
      hero_metric_bil_title: "Bilingual Program",
      hero_metric_bil_desc: "Coordination & Department Leadership",
      hero_metric_glob_title: "Global Immersion",
      hero_metric_glob_desc: "USA, Canada, United Kingdom, Tanzania & Vietnam",
      hero_scroll: "Scroll",
      cv_sec_profile_num: "01",
      cv_sec_profile_title: "Professional Profile",
      cv_sec_lang_num: "02",
      cv_sec_lang_title: "Languages",
      cv_sec_lang_native: "Native",
      cv_sec_liderazgo_num: "03",
      cv_sec_liderazgo_title: "Educational Leadership & Coordination",
      cv_sec_prog_num: "04",
      cv_sec_prog_title: "Educational Programs & Institutional Actions",
      cv_sec_exp_num: "05",
      cv_sec_exp_title: "Professional Teaching Experience",
      cv_sec_acad_num: "06",
      cv_sec_acad_title: "Academic Education",
      cv_sec_int_num: "07",
      cv_sec_int_title: "Specialized International Training",
      cv_sec_col_num: "08",
      cv_sec_col_title: "Institutional Collaborations",
      cv_sec_vol_num: "09",
      cv_sec_vol_title: "International Volunteering",
      cv_sec_dig_num: "10",
      cv_sec_dig_title: "Digital Competence & Educational Management Tools",
      pdf_badge: "Official Documentation",
      pdf_title: "Complete Curriculum Vitae",
      pdf_desc: "Access the two-page professional document, ready to view on screen, download in PDF format, or print with an optimized layout.",
      pdf_cta: "Download CV (PDF)",
      contact_badge: "06 / Connect",
      contact_title: "Contact Info & Inquiry",
      contact_subtitle: "Let's talk about bilingualism, school programs, and internationalization.",
      contact_desc: "Available for mentoring inquiries, collaborative school bilingual projects, or international educational exchanges.",
      contact_label_email: "Official Email Address",
      contact_copy_email: "Copy email",
      contact_copied: "Copied to clipboard!",
      contact_label_phone: "Contact Phone Number",
      contact_label_loc: "Primary Location",
      contact_label_profile: "Professional Profile",
      contact_form_title: "Send Direct Message",
      contact_form_success_title: "Message sent successfully!",
      contact_form_success_desc: "Thank you for getting in touch. Blanca will reply as soon as possible to the email address provided.",
      contact_form_name: "Full Name *",
      contact_form_name_placeholder: "e.g. Mary G.",
      contact_form_email: "Email Address *",
      contact_form_email_placeholder: "e.g. you@email.com",
      contact_form_subject: "Subject of inquiry",
      contact_form_subject_placeholder: "e.g. Exchange / Collaboration Proposal",
      contact_form_message: "Message detail *",
      contact_form_message_placeholder: "Describe the details of your inquiry...",
      contact_form_submit: "Send Message",
      footer_desc: "Dedicated to strengthening bilingual public education and outstanding methodological leadership in the secondary classroom.",
      footer_rights: "Blanca Mateos Barberá. All rights reserved.",
      footer_aesthetic: "Designed with a minimalist and contemporary editorial approach."
    }
  },
  de: {
    PERSONAL_INFO: {
      name: "Blanca Mateos Barberá",
      title: "Lehrerin für Sekundarstufe",
      subtitles: [
        "Verbeamtete Lehrerin im Sekundarschuldienst",
        "Spezialistin für bilinguale Programme, Führung und pädagogische Internationalisierung"
      ],
      contact: {
        email: "blanca.mateosbarbera@educa.madrid.org",
        phone: "+34 629 503 361",
        location: "Madrid, Spanien",
        linkedin: "linkedin.com/in/blanca-mateos-564424189",
        linkedinUrl: "https://linkedin.com/in/blanca-mateos-564424189"
      },
      bio: "Englischlehrerin mit über 10 Jahren Erfahrung in der Autonomen Gemeinschaft Madrid, spezialisiert auf die Koordination, Führung und Umsetzung von bilingualen Programmen sowie die pädagogische Internationalisierung. Umfassende Erfahrung in der Leitung von Lehrkräfte-Teams, Koordination von Fremdsprachenassistenten, Planung von Sprachprogrammen und Förderung pädagogischer Exzellenz. Internationale Lehrerfahrung in den USA und im Vereinigten Königreich, wodurch ich verschiedene Bildungsmodelle kennenlernen, meine Anpassungsfähigkeit stärken und bewährte Verfahren auf die Entwicklung des bilingualen Programms in Madrid übertragen konnte. Engagiert für pädagogische Innovation, kontinuierliche Verbesserung und die ganzheitliche Entwicklung der Schülerinnen und Schüler."
    },
    LANGUAGES: [
      { name: "Spanisch", level: "Muttersprache", flag: "🇪🇸" },
      { name: "Englisch", level: "C1 — Cambridge English Qualifications", flag: "🇬🇧" },
      { name: "Valencianisch", level: "C1 — Qualifizierungsstelle für Valencianisch-Kenntnisse (JQCV)", flag: "📸" },
      { name: "Deutsch", level: "B1 — Staatliche Sprachenschule (EOI)", flag: "🇩🇪" }
    ],
    LIDERAZGO_EXPERIENCE: [
      {
        year: "2022 – Gegenwärtig",
        role: "Koordinatorin für Bilingualismus",
        institution: "IES Ana Frank",
        location: "Madrid, Spanien",
        description: "Planung, Umsetzung und Bewertung des bilingualen Programms des Zentrums.",
        bullets: [
          "Planung, Umsetzung, Koordination und Bewertung des bilingualen Programms des Zentrums.",
          "Erstellung des Aktionsplans und des jährlichen Berichts zur Zweisprachigkeit.",
          "Koordination von Treffen des bilingualen Teams und Erstellung von Protokollen.",
          "Umfassende Verwaltung des Programms für Fremdsprachenassistenten: Aufnahme, Stundenpläne, Nachbereitung, Bewertung und Verwaltung in AuxMadrid.",
          "Verwaltung des bilingualen Bildungsmoduls in Raíces und Koordination des gesamten damit verbundenen Verwaltungsprozesses.",
          "Organisation von externen Prüfungen, Sprachzertifikaten und Zugang zur bilingualen Abteilung.",
          "Koordination von Mobilitäts- und Internationalisierungsprojekten.",
          "Beratung des Lehrerkollegiums zu bilingualen Methodiken und Berücksichtigung von Vielfalt."
        ],
        category: "liderazgo"
      },
      {
        year: "2022 – Gegenwärtig",
        role: "Leiterin der Englischabteilung",
        institution: "IES Ana Frank",
        location: "Madrid, Spanien",
        description: "Pädagogische und organisatorische Leitung der Fremdsprachenabteilung.",
        bullets: [
          "Pädagogische Koordination der Abteilung: Lehrplanerstellung, Ressourcenverwaltung und Ergebnisbewertung.",
          "Führung und Koordination des Lehrkräfteteams.",
          "Förderung methodischer Innovationen und kontinuierliche Verbesserung.",
          "Enge Zusammenarbeit mit der Schulleitung und dem Lehrerkollegium."
        ],
        category: "liderazgo"
      },
      {
        year: "2022-2023 & 2025-2026",
        role: "Mentorin für Lehramtsanwärter",
        institution: "IES Ana Frank",
        location: "Madrid, Spanien",
        description: "Begleitung, Orientierung und Beratung neuer Lehrkräfte.",
        bullets: [
          "Begleitung und Orientierung von Lehramtsanwärtern in der Praxis.",
          "Beratung zu Unterrichtsplanung, Klassenführung, Leistungsbewertung und Anpassung an den Schulalltag."
        ],
        category: "liderazgo"
      },
      {
        year: "2020 – Gegenwärtig",
        role: "Tutorin im Programm That’s English!",
        institution: "EOI de Madrid",
        location: "Madrid, Spanien",
        description: "Online-Tutorium und Sprachunterricht für Erwachsene.",
        bullets: [
          "Tutorin für Online-Gruppen auf den Niveaustufen A2, B1 und B2.",
          "Akademische Begleitung, Leistungsbewertung und Betreuung der Studierenden über digitale Plattformen."
        ],
        category: "liderazgo"
      }
    ],
    TEACHING_TIMELINE: [
      {
        year: "2022 – Gegenwärtig",
        role: "Englischlehrerin (Verbeamtet)",
        institution: "IES Ana Frank",
        location: "Madrid, Spanien",
        description: "Unterricht in der obligatorischen Sekundarstufe (ESO) und im Abitur (Bachillerato). Koordination und Leitung von Schulprojekten.",
        category: "docente"
      },
      {
        year: "2021 – 2022",
        role: "Gastlehrerin (USA)",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, USA",
        description: "Unterricht an einer Middle School (6., 7. und 8. Klasse) in einem internationalen bilingualen Bildungsumfeld. Immersion und Austausch globaler Best Practices.",
        category: "docente"
      },
      {
        year: "2017 – 2021",
        role: "Englischlehrerin (Verbeamtete Beamtin auf Lebenszeit)",
        institution: "Institutos de Enseñanza Secundaria de la Comunidad de Madrid",
        location: "Madrid, Spanien",
        description: "Aktiver Unterricht, Vorbereitung auf Zertifizierungsprüfungen und Belebung der Abteilung.",
        category: "docente"
      },
      {
        year: "2016 – 2017",
        role: "Englischlehrerin (Lehramtsanwärterin)",
        institution: "IES San Isidoro de Sevilla",
        location: "Sevilla, Spanien",
        description: "Unterricht in der Sekundarstufe und im Abitur an einer historischen Schule der Stadt.",
        category: "docente"
      },
      {
        year: "2011 – 2016",
        role: "Englischlehrerin (Vertretungslehrerin)",
        institution: "Diferentes IES de las provincias de Castellón y Valencia",
        location: "Comunidad Valenciana, Spanien",
        description: "Unterricht in der Sekundarstufe (ESO) und im Abitur (Bachillerato) in verschiedenen pädagogischen Umgebungen und Anpassung der Methoden.",
        category: "docente"
      },
      {
        year: "2008 – 2009",
        role: "Spanisch-Fremdsprachenassistentin",
        institution: "Dame Alice Harpur School",
        location: "Bedford, Großbritannien",
        description: "Fremdsprachenassistentenprogramm des Bildungsministeriums zur Unterstützung des Spanischunterrichts und zur Förderung des kulturellen Austauschs.",
        category: "docente"
      }
    ],
    INSTITUTIONAL_PROGRAMS: [
      "Organisation externer Sprachzertifizierungsprüfungen (Raumplanung, Koordination mit der Prüfungskommission, Schülerregistrierung und Elternkommunikation).",
      "Organisation von Zugangstests für die bilingualen Abteilungen.",
      "Lehrerkoordinatorin für das Global Classrooms-Programm an der Schule, gefördert durch die Unterdirektion für Zweisprachigkeit.",
      "Koordination des Schüleraustauschs mit Deutschland und Entwicklung eines neuen Austauschprojekts mit einer Schule in Neuseeland.",
      "Koordination von Sprachimmersionsprogrammen in Spanien und Großbritannien für Sekundarschüler (ESO).",
      "Koordination der Teilnahme der Schule am Fremdsprachen-Kurzfilmwettbewerb, gefördert durch die Unterdirektion für Zweisprachigkeit.",
      "Umfassende Koordination des Fremdsprachenassistentenprogramms der Schule."
    ],
    ACADEMIC_EDUCATION: [
      {
        years: "2016 – 2018",
        degree: "Master in Angewandten Neuen Technologien im Bildungswesen",
        institution: "Universitat Oberta de Catalunya (UOC)",
        location: "Online"
      },
      {
        years: "2008 – 2009",
        degree: "Pädagogisches Eignungszertifikat (CAP)",
        institution: "Universität Complutense Madrid",
        location: "Madrid, Spanien"
      },
      {
        years: "2002 – 2008",
        degree: "Bachelor/Lizentiat in Übersetzung und Dolmetschen (Englisch & Deutsch)",
        institution: "Universitat Jaume I",
        location: "Castellón, Spanien"
      }
    ],
    INTERNATIONAL_TRAINING: [
      {
        date: "2024 (Juli)",
        program: "Madrid Educational Leadership Program",
        institution: "Simon Fraser University – Faculty of Education",
        location: "Burnaby, Kanada"
      },
      {
        date: "2023 (Juli)",
        program: "CLIL Leaders’ Training Program",
        institution: "Ottawa-Carleton District School Board",
        location: "Ottawa, Kanada"
      },
      {
        date: "2017 (Juli)",
        program: "Danforth Educational Leadership Program – Leadership Institute",
        institution: "University of Washington – College of Education",
        location: "Seattle, USA"
      },
      {
        date: "2021 – 2022",
        program: "International School of Arizona – Internationale Lehrerausbildung",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, USA"
      }
    ],
    COLABORACIONES: [
      "Übersetzerin von digitalen Lehrmaterialien für die höhere Berufsausbildung im Rahmen der Next Generation EU-Initiative, finanziert durch den Europäischen Sozialfonds, zur Erstellung digitaler Multimedia-Ressourcen für die Berufsbildung.",
      "Korrektorin der Universitätsaufnahmeprüfungen (PAU/EvAU), Englischausschuss. Universität Complutense Madrid (Prüfungszeiträume: 2018-2019, 2019-2020 und 2025-2026).",
      "Akkreditierte DELE-Prüferin (Niveaus A1 & A2) durch das Instituto Cervantes.",
      "Zertifizierte Mentorin für Lehramtsanwärter in der Praxis (Schuljahre 2023-2024 und 2025-2026)."
    ],
    VOLUNTEERING: [
      {
        date: "Juli 2026",
        program: "Pädagogische Freiwilligenarbeit in Arusha, Tansania (Kommende Erfahrung)",
        location: "Arusha, Tansania",
        description: "Unterstützung bei der Verbesserung und Reparatur der Schulinfrastruktur; Streichen von Klassenzimmern und Wänden, Wiederaufbau beschädigter Bereiche und Einrichtung von Lernräumen."
      },
      {
        date: "August 2019",
        program: "Pädagogische Freiwilligenarbeit in Vietnam",
        location: "Vietnam",
        description: "Unterstützungszentrum für gefährdete Kinder und Jugendliche. Englischunterricht und interaktive Hausaufgabenbetreuung."
      }
    ],
    DIGITAL_TOOLS: [
      {
        category: "Bilinguales Programm & Schulmanagement",
        items: ["Raíces (Bilinguales Modul)", "AuxMadrid (Fremdsprachenassistenten)", "Protokollverwaltung", "Verfolgung-Modul"]
      },
      {
        category: "LMS & Virtuelle Klassenzimmer",
        items: ["Moodle", "That's English! LMS", "Virtuelle Klassenzimmer", "Google Classroom"]
      },
      {
        category: "Zusammenarbeit & Produktivität",
        items: ["Google Workspace for Education", "Microsoft Teams", "Zoom", "Office 365"]
      },
      {
        category: "Inhaltserstellung & KI",
        items: ["Canva", "Genially", "Padlet", "Trello", "KI-Integration im Klassenzimmer (Seminar 25-26)", "Multimedia-Tools"]
      }
    ],
    UI: {
      nav_perfil: "Profil & Sprachen",
      nav_liderazgo: "Führung",
      nav_programas: "Programme",
      nav_experiencia: "Erfahrung",
      nav_formacion: "Ausbildung",
      nav_colaboraciones: "Kooperationen",
      nav_digital: "Werkzeuge",
      nav_todo: "Alles anzeigen",
      nav_title: "SEKUNDARSTUFENLEHRERIN",
      nav_cta: "Kontaktieren",
      hero_badge: "Öffentliches Schulwesen • Führung • Bilingualismus",
      hero_cta_cv: "Lebenslauf-Abschnitte ansehen",
      hero_cta_contact: "Kontaktinformationen",
      hero_status_label: "Aktueller Status",
      hero_status_value: "● VERBEAMTETE LEHRERIN",
      hero_metric_bil_title: "Bilinguales Programm",
      hero_metric_bil_desc: "Koordination & Abteilungsleitung",
      hero_metric_glob_title: "Globale Immersion",
      hero_metric_glob_desc: "USA, Kanada, Großbritannien, Tansania & Vietnam",
      hero_scroll: "Scrollen",
      cv_sec_profile_num: "01",
      cv_sec_profile_title: "Berufliches Profil",
      cv_sec_lang_num: "02",
      cv_sec_lang_title: "Sprachen",
      cv_sec_lang_native: "Muttersprache",
      cv_sec_liderazgo_num: "03",
      cv_sec_liderazgo_title: "Pädagogische Führung & Koordination",
      cv_sec_prog_num: "04",
      cv_sec_prog_title: "Bildungsprogramme & Institutionelle Aktivitäten",
      cv_sec_exp_num: "05",
      cv_sec_exp_title: "Professionelle Lehrerfahrung",
      cv_sec_acad_num: "06",
      cv_sec_acad_title: "Akademische Ausbildung",
      cv_sec_int_num: "07",
      cv_sec_int_title: "Spezialisierte Internationale Fortbildung",
      cv_sec_col_num: "08",
      cv_sec_col_title: "Institutionelle Zusammenarbeit",
      cv_sec_vol_num: "09",
      cv_sec_vol_title: "Internationale Freiwilligenarbeit",
      cv_sec_dig_num: "10",
      cv_sec_dig_title: "Digitale Kompetenz & Schulmanagement-Werkzeuge",
      pdf_badge: "Offizielle Dokumentation",
      pdf_title: "Vollständiger Lebenslauf",
      pdf_desc: "Greifen Sie auf das zweiseitige professionelle Dokument zu, bereit zur Bildschirmansicht, zum PDF-Download oder zum Ausdruck im optimierten Layout.",
      pdf_cta: "Lebenslauf herunterladen (PDF)",
      contact_badge: "06 / Kontaktieren",
      contact_title: "Kontaktinfo & Anfrage",
      contact_subtitle: "Lassen Sie uns über Zweisprachigkeit, Schulprogramme und Internationalisierung sprechen.",
      contact_desc: "Verfügbar für Mentoring-Anfragen, kollaborative bilinguale Schulprojekte oder internationalen Schüleraustausch.",
      contact_label_email: "Offizielle E-Mail-Adresse",
      contact_copy_email: "E-Mail kopieren",
      contact_copied: "In die Zwischenablage kopiert!",
      contact_label_phone: "Kontakt-Telefonnummer",
      contact_label_loc: "Hauptstandort",
      contact_label_profile: "Berufliches Profil",
      contact_form_title: "Direkte Nachricht senden",
      contact_form_success_title: "Nachricht erfolgreich gesendet!",
      contact_form_success_desc: "Vielen Dank für Ihre Kontaktaufnahme. Blanca wird sich so schnell wie möglich unter der angegebenen E-Mail-Adresse bei Ihnen melden.",
      contact_form_name: "Vollständiger Name *",
      contact_form_name_placeholder: "z.B. Maria G.",
      contact_form_email: "E-Mail-Adresse *",
      contact_form_email_placeholder: "z.B. deine@mail.de",
      contact_form_subject: "Betreff der Anfrage",
      contact_form_subject_placeholder: "z.B. Austausch- / Kooperationsvorschlag",
      contact_form_message: "Nachrichtendetails *",
      contact_form_message_placeholder: "Beschreiben Sie die Details Ihrer Anfrage...",
      contact_form_submit: "Nachricht senden",
      footer_desc: "Engagiert für die Stärkung des bilingualen öffentlichen Schulwesens und herausragende methodische Führung im Sekundarschulunterricht.",
      footer_rights: "Blanca Mateos Barberá. Alle Rechte vorbehalten.",
      footer_aesthetic: "Gestaltet mit einem minimalistischen und modernen redaktionellen Ansatz."
    }
  },
  val: {
    PERSONAL_INFO: {
      name: "Blanca Mateos Barberá",
      title: "Docent d'Educació Secundària",
      subtitles: [
        "Funcionària de carrera del Cos de Professors d'Ensenyament Secundari",
        "Especialista en Programes Bilingües, Lideratge i Internacionalització Educativa"
      ],
      contact: {
        email: "blanca.mateosbarbera@educa.madrid.org",
        phone: "+34 629 503 361",
        location: "Madrid, Espanya",
        linkedin: "linkedin.com/in/blanca-mateos-564424189",
        linkedinUrl: "https://linkedin.com/in/blanca-mateos-564424189"
      },
      bio: "Docent d'Anglés amb més de 10 anys d'experiència en la Comunitat de Madrid, especialitzada en la coordinació, lideratge i implantació de programes bilingües i en la internacionalització educativa. Àmplia trajectòria en la gestió d'equips docents, coordinació d'auxiliars de conversa, planificació de programes lingüístics i promoció de l'excel·lència educativa. Experiència docent internacional als Estats Units i Regne Unit, que m'ha permés conéixer diferents models educatius, enfortir la meua capacitat d'adaptació i traslladar bones pràctiques al desenvolupament del Programa Bilingüe en la Comunitat de Madrid. Compromesa amb la innovació educativa, la millora contínua i el desenvolupament integral de l'alumnat."
    },
    LANGUAGES: [
      { name: "Castellà", level: "Llengua materna", flag: "🇪🇸" },
      { name: "Anglés", level: "C1 — Cambridge English Qualifications", flag: "🇬🇧" },
      { name: "Valencià", level: "C1 — Junta Qualificadora de Coneixements de Valencià", flag: "📸" },
      { name: "Alemany", level: "B1 — Escola Oficial d'Idiomes", flag: "🇩🇪" }
    ],
    LIDERAZGO_EXPERIENCE: [
      {
        year: "2022 – Actualitat",
        role: "Coordinadora de Bilingüisme",
        institution: "IES Ana Frank",
        location: "Madrid, Espanya",
        description: "Planificació, implantació i avaluació del Programa Bilingüe del centre.",
        bullets: [
          "Planificació, implantació, coordinació i avaluació del Programa Bilingüe del centre.",
          "Elaboració del Pla d'Acció i de la Memòria Anual de Bilingüisme.",
          "Coordinació de reunions de l'equip bilingüe i elaboració d'actes de seguiment.",
          "Gestió integral del programa d'auxiliars de conversa: acollida, horaris, seguiment, avaluació i gestió en AuxMadrid.",
          "Gestió del Mòdul d'Ensenyaments Bilingües en Raíces i coordinació de tot el procés administratiu vinculat al programa.",
          "Organització de proves externes, certificacions lingüístiques i accés a la Secció Bilingüe.",
          "Coordinació de projectes de mobilitat i internacionalització.",
          "Assessorament a l'equip docent en metodologies bilingües i atenció a la diversitat."
        ],
        category: "liderazgo"
      },
      {
        year: "2022 – Actualitat",
        role: "Cap del Departament d'Anglés",
        institution: "IES Ana Frank",
        location: "Madrid, Espanya",
        description: "Direcció pedagògica i organitzativa del departament d'idiomes.",
        bullets: [
          "Coordinación pedagògica del departament: elaboració de programacions, gestió de recursos i avaluació de resultats.",
          "Lideratge i coordinació de l'equip docent.",
          "Impulso de la innovació metodològica i millora contínua.",
          "Col·laboració estreta amb l'Equip Directiu i el Claustre."
        ],
        category: "liderazgo"
      },
      {
        year: "2022-2023 & 2025-2026",
        role: "Mentora de funcionaris en pràctiques",
        institution: "IES Ana Frank",
        location: "Madrid, Espanya",
        description: "Acompanyament, orientació i assessorament a nous docents.",
        bullets: [
          "Acompanyament i orientació de docents en pràctiques.",
          "Assessorament en planificació, gestió de l'aula, avaluació i adaptació al context educatiu."
        ],
        category: "liderazgo"
      },
      {
        year: "2020 – Actualitat",
        role: "Tutora del programa That’s English!",
        institution: "EOI de Madrid",
        location: "Madrid, Espanya",
        description: "Tutorització i docència online d'idiomes per a adults.",
        bullets: [
          "Tutora de grups en modalitat online en els nivells A2, B1 i B2.",
          "Seguiment acadèmic, avaluació i tutorització de l'alumnat mitjançant l'ús de plataformes digitals."
        ],
        category: "liderazgo"
      }
    ],
    TEACHING_TIMELINE: [
      {
        year: "2022 – Actualitat",
        role: "Profesora d'Anglés (Funcionària)",
        institution: "IES Ana Frank",
        location: "Madrid, Espanya",
        description: "Docència en Educació Secundària Obligatòria (ESO) i Batxillerat. Coordinació i lideratge de projectes de centre.",
        category: "docente"
      },
      {
        year: "2021 – 2022",
        role: "Profesora Visitant (EUA)",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, EUA",
        description: "Docència en Middle School (6é, 7é i 8é curs) en un entorn educatiu internacional bilingüe. Immersió i intercanvi de millors pràctiques globals.",
        category: "docente"
      },
      {
        year: "2017 – 2021",
        role: "Profesora d'Anglés (Funcionària de Carrera)",
        institution: "Instituts de Ensenyament Secundari de la Comunitat de Madrid",
        location: "Madrid, Espanya",
        description: "Docència activa, preparació d'exàmens de certificació i dinamització del departament.",
        category: "docente"
      },
      {
        year: "2016 – 2017",
        role: "Profesora d'Anglés (Funcionària en Pràctiques)",
        institution: "IES San Isidoro de Sevilla",
        location: "Sevilla, Espanya",
        description: "Docència en Educació Secundària Obligatòria i Batxillerat en un centre històric de la ciutat.",
        category: "docente"
      },
      {
        year: "2011 – 2016",
        role: "Profesora d'Anglés (Funcionària Interina)",
        institution: "Diferents IES de les províncies de Castelló i València",
        location: "Comunitat Valenciana, Espanya",
        description: "Docència en ESO i Batxillerat, cobrint diversos entorns pedagògics i adaptant metodologies.",
        category: "docente"
      },
      {
        year: "2008 – 2009",
        role: "Auxiliar de conversa d'espanyol",
        institution: "Dame Alice Harpur School",
        location: "Bedford, Regne Unit",
        description: "Programa d'auxiliars de conversa del Ministeri d'Educació, recolzant la docència d'espanyol i promovent l'intercanvi cultural.",
        category: "docente"
      }
    ],
    INSTITUTIONAL_PROGRAMS: [
      "Organització de les proves externes de certificació lingüística (planificació d'espais, coordinació amb l'entitat examinadora, matriculació de l'alumnat i comunicació amb les famílies).",
      "Organització de les proves d'accés a la Secció Bilingüe.",
      "Profesora coordinadora del programa Global Classrooms al centre, promogut per la Subdirecció General de Bilingüisme.",
      "Coordinació de l'intercanvi escolar amb Alemanya i desenvolupament d'un nou projecte d'intercanvi amb un centre educatiu de Nova Zelanda.",
      "Coordinació de programes d'immersió lingüística a Espanya i al Regne Unit per a alumnat d'Educació Secundària Obligatòria (ESO).",
      "Coordinació de la participació del centre al Concurso de Cortometrajes en Lengua Extranjera, promogut per la Subdirecció General de Bilingüisme.",
      "Coordinació integral del programa d'auxiliars de conversa del centre."
    ],
    ACADEMIC_EDUCATION: [
      {
        years: "2016 – 2018",
        degree: "Màster en Noves Tecnologies Aplicades a l'Educació",
        institution: "Universitat Oberta de Catalunya (UOC)",
        location: "Online"
      },
      {
        years: "2008 – 2009",
        degree: "Certificat d'Aptitud Pedagògica (CAP)",
        institution: "Universitat Complutense de Madrid",
        location: "Madrid, Espanya"
      },
      {
        years: "2002 – 2008",
        degree: "Llicenciatura en Traducció i Interpretació (Anglés i Alemany)",
        institution: "Universitat Jaume I",
        location: "Castelló, Espanya"
      }
    ],
    INTERNATIONAL_TRAINING: [
      {
        date: "2024 (juliol)",
        program: "Madrid Educational Leadership Program",
        institution: "Simon Fraser University – Faculty of Education",
        location: "Burnaby, Canadà"
      },
      {
        date: "2023 (juliol)",
        program: "CLIL Leaders’ Training Program",
        institution: "Ottawa-Carleton District School Board",
        location: "Ottawa, Canadà"
      },
      {
        date: "2017 (juliol)",
        program: "Danforth Educational Leadership Program – Leadership Institute",
        institution: "University of Washington – College of Education",
        location: "Seattle, EUA"
      },
      {
        date: "2021 – 2022",
        program: "International School of Arizona – Formació docent internacional",
        institution: "International School of Arizona",
        location: "Scottsdale, Arizona, EUA"
      }
    ],
    COLABORACIONES: [
      "Traductora de materials digitals didàctics per a cicles formatius de Grau Superior dins de l'actuació Next Generation EU, finançada pel Fons Social Europeu, per a l'elaboració de recursos multimèdia digitals destinats a la Formació Professional.",
      "Correctora de les Proves d'Accés a la Universitat (PAU/EvAU), Tribunal d'Anglés. Universitat Complutense de Madrid (Convocatòries: 2018-2019, 2019-2020 i 2025-2026).",
      "Examinadora acreditada DELE (nivells A1 i A2) per l'Instituto Cervantes.",
      "Mentora certificada de funcionaris en pràctiques (cursos 2023-2024 i 2025-2026)."
    ],
    VOLUNTEERING: [
      {
        date: "Juliol 2026",
        program: "Voluntariat educatiu a Arusha, Tanzània (Pròxima experiència)",
        location: "Arusha, Tanzània",
        description: "Suport en tasques de millora i reparació d'infraestructures escolars; pintura d'aules i murs, reconstrucció d'àrees danyades i condicionament d'espais per a l'aprenentatge."
      },
      {
        date: "Agost 2019",
        program: "Voluntariat educatiu a Vietnam",
        location: "Vietnam",
        description: "Centre de suport educatiu a xiquets i joves en situació de vulnerabilitat. Ensenyament d'anglés i suport escolar interactiu."
      }
    ],
    DIGITAL_TOOLS: [
      {
        category: "Gestió Educativa & Bilingüisme",
        items: ["Raíces (Mòdul Bilingüe)", "AuxMadrid (Auxiliars de Conversa)", "Gestió d'Actes", "Mòdul de Seguiment"]
      },
      {
        category: "LMS & Aula Virtual",
        items: ["Moodle", "That's English! LMS", "Aules Virtuals", "Google Classroom"]
      },
      {
        category: "Col·laboració & Productivitat",
        items: ["Google Workspace for Education", "Microsoft Teams", "Zoom", "Office 365"]
      },
      {
        category: "Creació de Continguts & IA",
        items: ["Canva", "Genially", "Padlet", "Trello", "Integració d'IA a l'Aula (Seminari 25-26)", "Eines Multimèdia"]
      }
    ],
    UI: {
      nav_perfil: "Perfil i Idiomes",
      nav_liderazgo: "Lideratge",
      nav_programas: "Programes",
      nav_experiencia: "Experiència",
      nav_formacion: "Formació",
      nav_colaboraciones: "Col·laboracions",
      nav_digital: "Eines",
      nav_todo: "Veure Tot",
      nav_title: "DOCENT DE SECUNDÀRIA",
      nav_cta: "Connectar",
      hero_badge: "Educació Pública • Lideratge • Bilingüisme",
      hero_cta_cv: "Veure Seccions de Currículum",
      hero_cta_contact: "Informació de Contacte",
      hero_status_label: "Estatus actual",
      hero_status_value: "● FUNCIONÀRIA DE CARRERA",
      hero_metric_bil_title: "Programa Bilingüe",
      hero_metric_bil_desc: "Coordinació & Direcció de Departament",
      hero_metric_glob_title: "Immersió Global",
      hero_metric_glob_desc: "EUA, Canadà, Regne Unit, Tanzània & Vietnam",
      hero_scroll: "Lliscar",
      cv_sec_profile_num: "01",
      cv_sec_profile_title: "Perfil Professional",
      cv_sec_lang_num: "02",
      cv_sec_lang_title: "Idiomes",
      cv_sec_lang_native: "Materna",
      cv_sec_liderazgo_num: "03",
      cv_sec_liderazgo_title: "Lideratge i Coordinació Educativa",
      cv_sec_prog_num: "04",
      cv_sec_prog_title: "Programes Educatius i Actuacions Institucionals",
      cv_sec_exp_num: "05",
      cv_sec_exp_title: "Experiència Professional Docent",
      cv_sec_acad_num: "06",
      cv_sec_acad_title: "Formació Acadèmica",
      cv_sec_int_num: "07",
      cv_sec_int_title: "Formació Internacional Especialitzada",
      cv_sec_col_num: "08",
      cv_sec_col_title: "Col·laboracions Institucionals",
      cv_sec_vol_num: "09",
      cv_sec_vol_title: "Voluntariat Internacional",
      cv_sec_dig_num: "10",
      cv_sec_dig_title: "Competència Digital i Eines de Gestió Educativa",
      pdf_badge: "Documentació Oficial",
      pdf_title: "Currículum Vitae Complet",
      pdf_desc: "Accedeix al document professional estructurat en dos pàgines, llest per a visualitzar en pantalla, descarregar en format PDF o imprimir amb format optimitzat.",
      pdf_cta: "Descarregar CV (PDF)",
      contact_badge: "06 / Connectar",
      contact_title: "Informació de Contacte & Consulta",
      contact_subtitle: "Parlem sobre bilingüisme, programes de centre i internacionalització.",
      contact_desc: "Disponible per a consultes de mentoria, projectes bilingües col·laboratius de centre o intercanvis educatius internacionals.",
      contact_label_email: "Correu Electrònic Oficial",
      contact_copy_email: "Copiar correu",
      contact_copied: "Copiat al portapapeles!",
      contact_label_phone: "Telèfon de Contacte",
      contact_label_loc: "Ubicació principal",
      contact_label_profile: "Perfil Professional",
      contact_form_title: "Enviar Missatge Directe",
      contact_form_success_title: "Missatge enviat amb èxit!",
      contact_form_success_desc: "Gràcies per posar-te en contacte. Blanca et respondrà al més prompte possible al correu electrònic proporcionat.",
      contact_form_name: "Nom Complet *",
      contact_form_name_placeholder: "p. ex. Maria G.",
      contact_form_email: "Correu Electrònic *",
      contact_form_email_placeholder: "p. ex. tu@correu.com",
      contact_form_subject: "Assumpte de consulta",
      contact_form_subject_placeholder: "p. ex. Proposta d'Intercanvi / Col·laboració",
      contact_form_message: "Detall de missatge *",
      contact_form_message_placeholder: "Descriu els detalls de la teua consulta...",
      contact_form_submit: "Enviar Missatge",
      footer_desc: "Dedicada a l'enfortiment de l'educació pública bilingüe i el lideratge metodològic d'excel·lència a l'aula de secundària.",
      footer_rights: "Blanca Mateos Barberá. Tots els drets reservats.",
      footer_aesthetic: "Dissenyat amb un enfocament editorial minimalista i contemporani."
    }
  }
};
