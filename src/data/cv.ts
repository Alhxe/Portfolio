export const PROFILE = {
  name: "Alex Pérez Álvarez",
  role: "Desarrollador Backend",
  tagline: "Java · Spring Boot · Microservicios",
  blurb:
    "Desarrollador especializado en Java y Spring Boot, con foco en el diseño y las decisiones de arquitectura de microservicios. Código limpio, testeable y pensado para escalar.",
};

export const STATS = [
  { value: "5+", label: "años de experiencia" },
  { value: "4", label: "empresas enterprise" },
  { value: "3", label: "sectores: banca · turismo · público" },
];

export const EXPERIENCE = [
  {
    role: "Desarrollador Backend",
    company: "Bluumi Mobile Apps",
    logo: "/images/logos/bluumi.png",
    period: "jul. 2025 — actualidad",
    client: "Grupo turístico líder en España",
    description:
      "Diseño y desarrollo de APIs REST para múltiples microservicios de reservas, integración con proveedores y gestión de producto turístico. Enfoque API First y revisión cruzada en PRs.",
    highlight: "Spring Boot",
    tech: ["Microservicios", "Java 17", "Java 21", "Spring Boot", "Spring Security", "PostgreSQL", "Kafka", "Kubernetes", "Tekton", "SonarQube", "Maven", "Azure DevOps"],
  },
  {
    role: "Desarrollador de Software",
    company: "NTT DATA",
    logo: "/images/logos/nttdata.png",
    period: "oct. 2024 — jul. 2025",
    client: "Sector bancario",
    description:
      "Mantenimiento y evolución de microservicios de mensajería multicanal (SMS · Push · Email) de misión crítica. Alta disponibilidad, trazabilidad, SLA y procesos batch masivos.",
    highlight: "Microservicios",
    tech: ["Microservicios", "Java 8", "Spring Boot", "Oracle DB", "Linux", "JUnit", "Maven"],
  },
  {
    role: "Desarrollador de Software",
    company: "Indra",
    logo: "/images/logos/indra.png",
    period: "ene. 2022 — oct. 2024",
    client: "",
    description:
      "Casi 3 años desarrollando servicios backend basados en microservicios Java/Spring en remoto.",
    highlight: "Java",
    tech: ["Microservicios", "Java", "Spring", "Oracle", "SQL", "Sencha ExtJS", "Maven", "SVN"],
  },
  {
    role: "Desarrollador de Software",
    company: "INGEFOR",
    logo: "/images/logos/ingefor.png",
    period: "feb. 2021 — ene. 2022",
    client: "Sector público",
    description:
      "Desarrollo de microservicios Java/Spring y frontend Angular para administración pública.",
    highlight: "Oracle",
    tech: ["Microservicios", "Java 7 / 8 / 11", "Spring", "Angular", "Git", "Clean Code", "Oracle", "MySQL", "Maven", "SVN"],
  },
];

export const MIARBITRO = {
  url: "https://miarbitro.es",
  badges: ["● En producción", "Certificación CASA"],
  description:
    "Producto real, construido de punta a punta y en marcha. Backend de microservicios, app móvil, web e infra propia. Donde pruebo decisiones de arquitectura sin red.",
  challenges: [
    { title: "Backend de microservicios", detail: "Spring Boot con API REST documentada vía OpenAPI. Infraestructura propia en VPS." },
    { title: "Sincronización offline", detail: "Cola de reintentos con persistencia local: registra en pista sin cobertura y sincroniza al recuperar red." },
    { title: "Comunicación móvil ↔ reloj", detail: "Canal bidireccional Apple Watch / Wear OS en tiempo real, con paridad iOS/Android." },
    { title: "CI/CD automatizado", detail: "Pipeline multi-job con GitHub Actions y GitHub App propia. Tests E2E (Maestro) sobre runners self-hosted." },
  ],
  stack: ["Java", "Spring Boot", "OpenAPI", "React Native", "React", "TypeScript", "Docker", "GitHub Actions"],
};

export const STACK_GROUPS = [
  { label: "Lenguaje & Core", items: ["Java 8 / 11 / 17 / 21", "Spring Boot", "Spring Security", "Spring MVC", "JPA / Hibernate"] },
  { label: "Arquitectura", items: ["Microservicios", "REST · API First", "OpenAPI", "Event-Driven · Kafka", "API Gateway", "BFF"] },
  { label: "Patrones & Diseño", items: ["Arquitectura Hexagonal", "Ports & Adapters", "Clean Architecture", "DDD", "Package by Layer", "Package by Feature", "SOLID", "Inyección de dependencias"] },
  { label: "Datos", items: ["PostgreSQL", "Oracle DB", "SQL", "Modelado relacional", "Optimización de queries"] },
  { label: "Cloud & DevOps", items: ["Azure", "AWS EC2", "AWS S3", "Docker", "Kubernetes", "Tekton", "Jenkins", "GitHub Actions", "Azure DevOps", "Maven"] },
  { label: "Calidad & Proceso", items: ["Clean Code", "JUnit", "Mockito", "SonarQube", "Git", "Scrum"] },
];

export const FRONTEND = ["TypeScript", "React", "React Native", "Angular"];

export const CERTS = [
  "Claude Code in Action — Anthropic",
  "Clean Code — OpenWebinars",
  "Spring Boot & MVC — OpenWebinars",
  "Spring Core 5 — OpenWebinars",
  "CFGS DAM — I.E.S. Punta del Verde",
];

export const SOCIALS = [
  { label: "Email", value: "alexhh1999@gmail.com", href: "mailto:alexhh1999@gmail.com" },
  { label: "LinkedIn", value: "alex-perez-alvarez", href: "https://www.linkedin.com/in/alex-perez-alvarez0" },
  { label: "GitHub", value: "@Alhxe", href: "https://github.com/Alhxe" },
  { label: "MiArbitro", value: "miarbitro.es", href: "https://miarbitro.es" },
];
