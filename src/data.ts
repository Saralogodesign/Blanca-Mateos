import { 
  Experience, 
  Education, 
  InternationalTraining, 
  VolunteerWork, 
  Language, 
  ToolCategory 
} from "./types";

export const PERSONAL_INFO = {
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
};

export const LANGUAGES: Language[] = [
  { name: "Español", level: "Lengua materna", flag: "🇪🇸" },
  { name: "Inglés", level: "C1 — Cambridge English Qualifications", flag: "🇬🇧" },
  { name: "Valenciano", level: "C1 — Junta Qualificadora de Coneixements de Valencià", flag: "📸" },
  { name: "Alemán", level: "B1 — Escuela Oficial de Idiomas", flag: "🇩🇪" }
];

export const LIDERAZGO_EXPERIENCE: Experience[] = [
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
];

export const TEACHING_TIMELINE: Experience[] = [
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
    institution: "IES Ortega y Gasset",
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
];

export const INSTITUTIONAL_PROGRAMS = [
  "Organización de las pruebas externas de certificación lingüística (planificación de espacios, coordinación con la entidad examinadora, matriculación del alumnado y comunicación con las familias).",
  "Organización de las pruebas de acceso a la Sección Bilingüe.",
  "Profesora coordinadora del programa Global Classrooms en el centro, promovido por la Subdirección General de Bilingüismo.",
  "Coordinación del intercambio escolar con Alemania y desarrollo de un nuevo proyecto de intercambio con un centro educativo de Nueva Zelanda.",
  "Coordinación de programas de inmersión lingüística en España y en Reino Unido para alumnado de Educación Secundaria Obligatoria (ESO).",
  "Coordinación de la participación del centro en el Concurso de Cortometrajes en Lengua Extranjera, promovido por la Subdirección General de Bilingüismo.",
  "Coordinación integral del programa de auxiliares de conversación del centro."
];

export const ACADEMIC_EDUCATION: Education[] = [
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
];

export const INTERNATIONAL_TRAINING: InternationalTraining[] = [
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
];

export const COLABORACIONES = [
  "Traductora de materiales digitales didácticos para ciclos formativos de Grado Superior dentro de la actuación Next Generation EU, financiada por el Fondo Social Europeo, para la elaboración de recursos multimedia digitales destinados a la Formación Profesional.",
  "Correctora de las Pruebas de Acceso a la Universidad (PAU/EvAU), Tribunal de Inglés. Universidad Complutense de Madrid (Convocatorias: 2018-2019, 2019-2020 y 2025-2026).",
  "Examinadora acreditada DELE (niveles A1 y A2) por el Instituto Cervantes.",
  "Mentora certificada de funcionarios en prácticas (cursos 2023-2024 y 2025-2026)."
];

export const VOLUNTEERING: VolunteerWork[] = [
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
];

export const DIGITAL_TOOLS: ToolCategory[] = [
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
];
