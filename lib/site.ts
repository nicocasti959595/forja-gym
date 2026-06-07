export const site = {
  name: "FORJA",
  fullName: "FORJA Training Club",
  tagline: "Forjá tu mejor versión",
  city: "Palermo, Buenos Aires",
  address: "Av. Córdoba 4250, Palermo, CABA",
  phoneDisplay: "+54 9 11 6789 0123",
  whatsapp: "5491167890123",
  email: "hola@forjagym.com.ar",
  instagram: "https://instagram.com/forja.gym",
  facebook: "https://facebook.com/forja.gym",
  mapsQuery: "Av.+Cordoba+4250,+Palermo,+Buenos+Aires",
  hours: [
    { d: "Lunes a Viernes", h: "06:00 – 23:00" },
    { d: "Sábados", h: "08:00 – 20:00" },
    { d: "Domingos", h: "09:00 – 14:00" },
  ],
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Disciplinas", href: "#disciplinas" },
  { label: "Planes", href: "#planes" },
  { label: "Horarios", href: "#horarios" },
  { label: "Profes", href: "#profes" },
  { label: "Contacto", href: "#contacto" },
];

export const stats = [
  { value: 12, suffix: "", label: "Años entrenando gente" },
  { value: 1800, suffix: "+", label: "Socios activos" },
  { value: 45, suffix: "", label: "Clases por semana" },
  { value: 24, suffix: "", label: "Profesores certificados" },
];

export const disciplines = [
  {
    name: "Musculación",
    desc: "Sala de 600 m² con equipamiento de última generación y peso libre premium.",
    icon: "dumbbell",
  },
  {
    name: "Funcional",
    desc: "Circuitos de fuerza y resistencia para potenciar tu día a día.",
    icon: "bolt",
  },
  {
    name: "Cross Training",
    desc: "Box equipado para WODs de alta intensidad y técnica olímpica.",
    icon: "kettlebell",
  },
  {
    name: "Indoor Cycling",
    desc: "Sala inmersiva con luces, sonido y métricas en tiempo real.",
    icon: "bike",
  },
  {
    name: "Boxeo & Kickboxing",
    desc: "Ring profesional, sacos y coaches que entrenaron competidores.",
    icon: "boxing",
  },
  {
    name: "Yoga & Movilidad",
    desc: "Espacio cálido para recuperar, respirar y ganar flexibilidad.",
    icon: "yoga",
  },
  {
    name: "HIIT",
    desc: "Quema máxima en 45 minutos. Energía pura de principio a fin.",
    icon: "fire",
  },
  {
    name: "Pilates Reformer",
    desc: "Camas reformer para trabajar core, postura y fuerza profunda.",
    icon: "spine",
  },
];

export const features = [
  "Equipamiento Technogym® y Rogue®",
  "App propia para seguir tu progreso",
  "Asesoramiento nutricional incluido",
  "Vestuarios con duchas y lockers",
  "Evaluación física inicial sin cargo",
  "Estacionamiento para socios",
];

export const plans = [
  {
    name: "Flex",
    price: "32.900",
    period: "/mes",
    blurb: "Para empezar a tu ritmo.",
    features: [
      "Acceso a sala de musculación",
      "8 clases grupales por mes",
      "App de seguimiento",
      "Evaluación física inicial",
    ],
    cta: "Quiero el plan Flex",
    featured: false,
  },
  {
    name: "Full",
    price: "44.900",
    period: "/mes",
    blurb: "El favorito de la mayoría.",
    features: [
      "Acceso ilimitado a la sala",
      "Clases grupales sin límite",
      "Plan de entrenamiento personalizado",
      "Asesoramiento nutricional",
      "1 sesión de personal trainer / mes",
    ],
    cta: "Quiero el plan Full",
    featured: true,
  },
  {
    name: "Black",
    price: "59.900",
    period: "/mes",
    blurb: "Experiencia premium completa.",
    features: [
      "Todo lo del plan Full",
      "Acceso 24/7 con huella digital",
      "4 sesiones de personal trainer / mes",
      "Recuperación: sauna y masajes",
      "Invitado free 2 veces por mes",
    ],
    cta: "Quiero el plan Black",
    featured: false,
  },
];

export const scheduleDays = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
] as const;

export const schedule: Record<string, { time: string; name: string; coach: string }[]> = {
  Lunes: [
    { time: "07:00", name: "Funcional", coach: "Caro" },
    { time: "10:00", name: "Indoor Cycling", coach: "Maxi" },
    { time: "18:00", name: "Cross Training", coach: "Tomi" },
    { time: "19:30", name: "Boxeo", coach: "Lucho" },
  ],
  Martes: [
    { time: "08:00", name: "HIIT", coach: "Flor" },
    { time: "12:00", name: "Yoga & Movilidad", coach: "Naza" },
    { time: "18:30", name: "Funcional", coach: "Caro" },
    { time: "20:00", name: "Indoor Cycling", coach: "Maxi" },
  ],
  Miércoles: [
    { time: "07:00", name: "Cross Training", coach: "Tomi" },
    { time: "10:00", name: "Pilates Reformer", coach: "Vicky" },
    { time: "18:00", name: "Boxeo", coach: "Lucho" },
    { time: "19:30", name: "HIIT", coach: "Flor" },
  ],
  Jueves: [
    { time: "08:00", name: "Indoor Cycling", coach: "Maxi" },
    { time: "12:00", name: "Funcional", coach: "Caro" },
    { time: "18:30", name: "Cross Training", coach: "Tomi" },
    { time: "20:00", name: "Yoga & Movilidad", coach: "Naza" },
  ],
  Viernes: [
    { time: "07:00", name: "HIIT", coach: "Flor" },
    { time: "10:00", name: "Funcional", coach: "Caro" },
    { time: "18:00", name: "Indoor Cycling", coach: "Maxi" },
    { time: "19:30", name: "Boxeo", coach: "Lucho" },
  ],
  Sábado: [
    { time: "09:00", name: "Cross Training", coach: "Tomi" },
    { time: "10:30", name: "Funcional", coach: "Caro" },
    { time: "12:00", name: "Yoga & Movilidad", coach: "Naza" },
  ],
};

export const trainers = [
  {
    name: "Caro Giménez",
    role: "Head Coach · Funcional",
    initials: "CG",
    accent: "from-[#c6f23e] to-[#19e0c8]",
  },
  {
    name: "Tomás Ríos",
    role: "Cross Training · Halterofilia",
    initials: "TR",
    accent: "from-[#19e0c8] to-[#5b8cff]",
  },
  {
    name: "Flor Aguirre",
    role: "HIIT · Performance",
    initials: "FA",
    accent: "from-[#ff7a59] to-[#c6f23e]",
  },
  {
    name: "Lucho Medina",
    role: "Boxeo & Kickboxing",
    initials: "LM",
    accent: "from-[#ff5a8a] to-[#ffb259]",
  },
];

export const testimonials = [
  {
    name: "Martina López",
    role: "Socia hace 2 años",
    initials: "ML",
    quote:
      "Probé un montón de gimnasios y ninguno como FORJA. Los profes te conocen por el nombre y el lugar es impecable. Bajé 9 kilos y gané fuerza real.",
  },
  {
    name: "Diego Fernández",
    role: "Socio hace 1 año",
    initials: "DF",
    quote:
      "El plan Black vale cada peso. Acceso 24/7, personal trainer y sauna para recuperar. Nunca entrené tan consistente en mi vida.",
  },
  {
    name: "Sofía Castro",
    role: "Socia hace 8 meses",
    initials: "SC",
    quote:
      "Las clases de indoor cycling son otro nivel: luces, música y energía. Voy hasta los domingos. Me cambió la cabeza y el cuerpo.",
  },
];

export const faqs = [
  {
    q: "¿Puedo probar antes de asociarme?",
    a: "Sí. Te invitamos a una clase o a un día completo de prueba sin cargo. Escribinos por WhatsApp y coordinamos el horario que mejor te quede.",
  },
  {
    q: "¿Los planes tienen permanencia o contrato?",
    a: "No. Todos nuestros planes son mes a mes, sin permanencia ni costos ocultos. Podés pausar o cambiar de plan cuando quieras.",
  },
  {
    q: "¿Necesito experiencia previa para las clases?",
    a: "Para nada. Cada clase tiene variantes para principiantes y avanzados, y siempre hay un profe acompañándote. Arrancás desde donde estés.",
  },
  {
    q: "¿Incluye asesoramiento nutricional?",
    a: "Los planes Full y Black incluyen asesoramiento nutricional. En el plan Flex podés sumarlo como adicional cuando quieras.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con estacionamiento propio para socios mientras entrenás, sujeto a disponibilidad.",
  },
];
