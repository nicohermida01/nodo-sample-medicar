/**
 * Single source of truth for all site content and brand data.
 * To adapt the template to another professional, edit ONLY this file
 * (plus photos in src/assets and color tokens in src/styles/global.css).
 *
 * All data below is FICTITIOUS (demo site).
 */

export interface Professional {
  /** Name with title, e.g. "Dra. Julieta Ferrari". */
  name: string;
  /** Short given name used in friendly copy. */
  shortName: string;
  specialty: string;
  /** Display title, e.g. "Médica Dermatóloga". */
  title: string;
  license: { type: 'MP' | 'MN'; number: string };
  yearsOfPractice: number;
  education: string[];
  memberships: string[];
  bio: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Lucide icon name (e.g. "scan-search"). */
  icon: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface OpeningHours {
  /** Human-readable label. */
  label: string;
  /** schema.org day names, used for JSON-LD. */
  days: Array<
    'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  >;
  opens: string; // "HH:MM"
  closes: string; // "HH:MM"
}

export interface Address {
  street: string;
  detail?: string;
  city: string;
  region: string;
  postalCode: string;
  country: string; // ISO 3166-1 alpha-2
  /** Google Maps embed URL, loaded only on click (facade). */
  mapEmbedUrl: string;
  /** Link to open the location in a maps app. */
  mapLink: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  /** true = example content, must never be presented as a real review. */
  isPlaceholder: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export type SectionId =
  | 'credentials'
  | 'about'
  | 'services'
  | 'firstVisit'
  | 'insurances'
  | 'testimonials'
  | 'office'
  | 'faq';

export interface SectionCopy {
  /** Anchor id used by the navigation. */
  anchor: string;
  /** Short label for the navigation, when the section is linked. */
  navLabel?: string;
  title: string;
  titleMuted?: string;
  intro?: string;
}

export interface UiCopy {
  skipLink: string;
  menuOpen: string;
  menuClose: string;
  navLabel: string;
  homeLabel: string;
  licensePrefix: string;
  credentials: {
    yearsSuffix: string;
    yearsLabel: string;
    licenseLabel: string;
    educationLabel: string;
    insurancesLabel: string;
    insurancesMore: string;
  };
  status: {
    openNow: string;
    closedNow: string;
    opensAt: string;
    todayHours: string;
    closedToday: string;
    staticLabel: string;
    until: string;
    today: string;
    tomorrow: string;
    /** Word placed before a weekday name, e.g. "el" in "Abre el lunes". */
    weekdayPrefix: string;
    /** Word before an opening time, e.g. "a las" in "Abre mañana a las 9 h". */
    at: string;
    hoursSuffix: string;
  };
  about: { photoAlt: string; quote: string; facts: string[] };
  insurances: { particularLabel: string };
  testimonials: { placeholderNotice: string };
  office: {
    addressLabel: string;
    hoursLabel: string;
    contactLabel: string;
    mapButton: string;
    mapTitle: string;
    mapOpenExternal: string;
    photos: Array<{ key: 'sala-espera' | 'consultorio' | 'fachada'; alt: string }>;
  };
  footer: { contactTitle: string; hoursTitle: string; rights: string; credit: string };
  stickyBar: { booking: string; whatsapp: string };
}

export interface SiteContent {
  meta: {
    siteName: string;
    title: string;
    description: string;
    locale: string;
    lang: string;
  };
  professional: Professional;
  hero: {
    /** First line of the headline. */
    headline: string;
    /** Second line, rendered in a muted tone. */
    headlineMuted: string;
    /** Follows the professional's name in the hero lead, e.g. "dermatóloga en Rosario." */
    byline: string;
    lead: string;
    /** Image alt text for the hero portrait. */
    portraitAlt: string;
  };
  /** Section titles and intros. `titleMuted` renders as a muted second line. */
  sections: Record<SectionId, SectionCopy>;
  /** Interface strings (navigation, labels, statuses). */
  ui: UiCopy;
  services: Service[];
  firstVisit: Step[];
  insurances: { list: string[]; note: string };
  testimonials: Testimonial[];
  office: {
    name: string;
    address: Address;
    hours: OpeningHours[];
    /** IANA time zone used for the live open/closed status. */
    timeZone: string;
    notes: string[];
  };
  contact: {
    /** E.164 without "+", used for wa.me and tel: links. */
    phoneE164: string;
    phoneDisplay: string;
    email: string;
    whatsappMessage: string;
    /** External booking system URL. */
    bookingUrl: string;
  };
  cta: {
    primaryLabel: string;
    whatsappLabel: string;
    finalTitle: string;
    finalTitleMuted: string;
    finalText: string;
    finalNote: string;
  };
  faq: FaqItem[];
  social: SocialLink[];
  footer: {
    legal: string;
    /** Demo disclaimer. Set `show: false` when using the template with a real client. */
    demoNotice: { show: boolean; text: string };
  };
}

export const site: SiteContent = {
  meta: {
    siteName: 'Dra. Julieta Ferrari — Dermatología',
    title: 'Dermatóloga en Rosario | Dra. Julieta Ferrari',
    description:
      'Dermatóloga en Rosario, Santa Fe. Dermatología clínica, control de lunares, acné, caída del cabello y dermatología pediátrica. Pedí turno por WhatsApp.',
    locale: 'es_AR',
    lang: 'es-AR',
  },

  professional: {
    name: 'Dra. Julieta Ferrari',
    shortName: 'Julieta',
    specialty: 'Dermatología',
    title: 'Médica Dermatóloga',
    // Obvious placeholder: never use a number that looks real.
    license: { type: 'MP', number: '00000' },
    yearsOfPractice: 12,
    education: [
      'Médica, Universidad Nacional de Rosario (UNR)',
      'Especialista en Dermatología',
    ],
    memberships: ['Miembro de una sociedad dermatológica nacional'],
    bio: [
      'Hace más de 12 años que acompaño a pacientes de todas las edades en el cuidado de su piel, desde un lunar que preocupa hasta un tratamiento que lleva meses.',
      'Creo en una dermatología basada en evidencia y cercana: escuchar primero, revisar con atención y armar juntos un plan que se pueda sostener en el día a día.',
    ],
  },

  hero: {
    headline: 'Cuidamos tu piel',
    headlineMuted: 'con tiempo, ciencia y cercanía.',
    byline: 'dermatóloga en Rosario.',
    lead: 'Consultas para toda la familia, con diagnóstico cuidadoso y tratamientos pensados para vos.',
    portraitAlt: 'Retrato de la Dra. Julieta Ferrari en su consultorio (imagen de ejemplo)',
  },

  sections: {
    credentials: { anchor: 'credenciales', title: 'Formación y trayectoria' },
    about: {
      anchor: 'sobre-mi',
      navLabel: 'Sobre mí',
      title: 'Una consulta sin apuro,',
      titleMuted: 'con explicaciones claras.',
    },
    services: {
      anchor: 'tratamientos',
      navLabel: 'Tratamientos',
      title: '¿En qué te puedo ayudar?',
      titleMuted: 'Motivos de consulta frecuentes.',
      intro: 'Si tu consulta no está en la lista, escribinos igual: te orientamos sobre si es para dermatología.',
    },
    firstVisit: {
      anchor: 'primera-consulta',
      title: 'Cómo es la primera consulta',
      intro: 'Cuatro pasos simples, sin sorpresas.',
    },
    insurances: {
      anchor: 'obras-sociales',
      navLabel: 'Obras sociales',
      title: 'Obras sociales y prepagas',
    },
    testimonials: {
      anchor: 'testimonios',
      title: 'Lo que cuentan los pacientes',
    },
    office: {
      anchor: 'consultorio',
      navLabel: 'Consultorio',
      title: 'El consultorio',
      titleMuted: 'en Bv. Oroño, Rosario.',
    },
    faq: {
      anchor: 'preguntas',
      navLabel: 'Preguntas',
      title: 'Preguntas frecuentes',
    },
  },

  ui: {
    skipLink: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    navLabel: 'Navegación principal',
    homeLabel: 'Inicio',
    licensePrefix: 'Matrícula',
    credentials: {
      yearsSuffix: '+',
      yearsLabel: 'años de práctica clínica',
      licenseLabel: 'Matrícula provincial',
      educationLabel: 'Médica egresada de la UNR, especialista en Dermatología',
      insurancesLabel: 'obras sociales y prepagas',
      insurancesMore: 'Ver coberturas',
    },
    status: {
      openNow: 'Abierto ahora',
      closedNow: 'Cerrado ahora',
      opensAt: 'Abre',
      todayHours: 'Hoy de',
      closedToday: 'Hoy no hay atención',
      staticLabel: 'Horarios de atención',
      until: 'hasta las',
      today: 'hoy',
      tomorrow: 'mañana',
      weekdayPrefix: 'el',
      at: 'a las',
      hoursSuffix: 'h',
    },
    about: {
      photoAlt: 'La Dra. Julieta Ferrari en su escritorio de consulta (imagen de ejemplo)',
      quote: 'Prefiero que salgas de la consulta entendiendo qué tenés y qué hacer.',
      facts: [
        'Consultas para adultos, chicos y adolescentes',
        'Dermatoscopía en el mismo consultorio',
        'Tiempo en cada turno para que preguntes lo que necesites',
      ],
    },
    insurances: { particularLabel: 'Particulares' },
    testimonials: {
      placeholderNotice:
        'Testimonios de ejemplo: este es un sitio de demostración y no corresponden a pacientes reales.',
    },
    office: {
      addressLabel: 'Dirección',
      hoursLabel: 'Horarios',
      contactLabel: 'Contacto',
      mapButton: 'Ver mapa',
      mapTitle: 'Mapa de ubicación del consultorio',
      mapOpenExternal: 'Abrir en Google Maps',
      photos: [
        { key: 'sala-espera', alt: 'Sala de espera del consultorio (imagen de ejemplo)' },
        { key: 'consultorio', alt: 'Consultorio con camilla y escritorio (imagen de ejemplo)' },
        { key: 'fachada', alt: 'Entrada del edificio sobre Bv. Oroño (imagen de ejemplo)' },
      ],
    },
    footer: {
      contactTitle: 'Contacto',
      hoursTitle: 'Horarios',
      rights: 'Todos los derechos reservados.',
      credit: 'Sitio realizado por Estudio Nodo',
    },
    stickyBar: { booking: 'Pedir turno', whatsapp: 'WhatsApp' },
  },

  services: [
    {
      id: 'clinica',
      title: 'Dermatología clínica',
      description: 'Diagnóstico y tratamiento de manchas, alergias, eccemas, psoriasis y otras afecciones de la piel.',
      icon: 'microscope',
    },
    {
      id: 'lunares',
      title: 'Control de lunares y dermatoscopía',
      description: 'Revisión de lunares con dermatoscopio para detectar cambios a tiempo. Recomendado una vez al año.',
      icon: 'scan-search',
    },
    {
      id: 'acne',
      title: 'Acné y rosácea',
      description: 'Tratamientos graduales y realistas para cada etapa, acompañando la evolución en cada control.',
      icon: 'droplets',
    },
    {
      id: 'pediatrica',
      title: 'Dermatología pediátrica',
      description: 'Atención de la piel de bebés, chicos y adolescentes, con un trato tranquilo para toda la familia.',
      icon: 'baby',
    },
    {
      id: 'cabello',
      title: 'Caída del cabello',
      description: 'Evaluación de la causa de la caída y un plan de tratamiento acorde a cada caso.',
      icon: 'wind',
    },
    {
      id: 'estetica',
      title: 'Dermatología estética',
      description: 'Peelings y láser indicados con criterio médico, priorizando la salud de tu piel.',
      icon: 'sparkles',
    },
  ],

  firstVisit: [
    {
      title: 'Pedí tu turno',
      description: 'Por WhatsApp o desde el sistema de reservas online, en el horario que te quede cómodo.',
    },
    {
      title: 'Contanos qué te pasa',
      description: 'En la consulta charlamos sobre tus antecedentes y lo que te preocupa, sin apuro.',
    },
    {
      title: 'Revisión y diagnóstico',
      description: 'Examen de la piel, con dermatoscopía si hace falta, y una explicación clara de lo que vemos.',
    },
    {
      title: 'Plan y seguimiento',
      description: 'Te llevás un plan por escrito y coordinamos el próximo control si es necesario.',
    },
  ],

  insurances: {
    list: ['OSDE', 'Swiss Medical', 'Galeno', 'Medifé', 'IAPOS'],
    note: 'También atendemos de forma particular. Consultá por tu cobertura al pedir el turno.',
  },

  // PLACEHOLDER testimonials: example content only, not real patients.
  testimonials: [
    {
      quote: 'Me explicó todo con mucha paciencia y salí de la consulta sabiendo exactamente qué hacer.',
      author: 'Paciente de ejemplo',
      isPlaceholder: true,
    },
    {
      quote: 'Llevé a mi hijo por un problema de piel y el trato fue cálido y muy claro.',
      author: 'Paciente de ejemplo',
      isPlaceholder: true,
    },
    {
      quote: 'Se tomó el tiempo de revisar cada lunar y responder todas mis dudas.',
      author: 'Paciente de ejemplo',
      isPlaceholder: true,
    },
  ],

  office: {
    name: 'Consultorio Dra. Julieta Ferrari',
    address: {
      street: 'Bv. Oroño 1234',
      detail: 'Piso 3',
      city: 'Rosario',
      region: 'Santa Fe',
      postalCode: '2000',
      country: 'AR',
      mapEmbedUrl:
        'https://www.google.com/maps?q=Bv.+Oro%C3%B1o+1234,+Rosario,+Santa+Fe&output=embed',
      mapLink: 'https://www.google.com/maps/search/?api=1&query=Bv.+Oro%C3%B1o+1234+Rosario',
    },
    hours: [
      {
        label: 'Lunes a viernes, de 9 a 18 h',
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        label: 'Sábados, de 9 a 13 h',
        days: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    timeZone: 'America/Argentina/Buenos_Aires',
    notes: ['Atención con turno previo.'],
  },

  contact: {
    phoneE164: '5493410000000',
    phoneDisplay: '+54 9 341 000-0000',
    email: 'turnos@dra-ejemplo.com',
    whatsappMessage: 'Hola, quisiera pedir un turno con la Dra. Julieta Ferrari.',
    // TODO: replace with the real booking system URL.
    bookingUrl: 'https://reservas.dra-ejemplo.com',
  },

  cta: {
    primaryLabel: 'Pedir turno',
    whatsappLabel: 'Escribir por WhatsApp',
    finalTitle: '¿Querés que revisemos',
    finalTitleMuted: 'tu piel?',
    finalText: 'Pedí tu turno en pocos pasos. Te respondemos a la brevedad.',
    finalNote: 'Sin formularios: reservás online o escribís por WhatsApp.',
  },

  faq: [
    {
      question: '¿Cómo pido un turno?',
      answer: 'Podés escribir por WhatsApp o reservar directamente desde el sistema de turnos online.',
    },
    {
      question: '¿Qué obras sociales atienden?',
      answer: 'OSDE, Swiss Medical, Galeno, Medifé e IAPOS. También atendemos de forma particular.',
    },
    {
      question: '¿Cada cuánto conviene controlar los lunares?',
      answer: 'En general se recomienda un control anual, o antes si notás un lunar nuevo o que cambia de forma, color o tamaño.',
    },
    {
      question: '¿Atienden a chicos?',
      answer: 'Sí, hay atención de dermatología pediátrica para bebés, chicos y adolescentes.',
    },
    {
      question: '¿Qué tengo que llevar a la primera consulta?',
      answer: 'Tu credencial de obra social o prepaga, DNI y, si tenés, estudios previos o los productos que estás usando.',
    },
  ],

  social: [
    { label: 'Instagram', href: 'https://instagram.com/', icon: 'instagram' },
  ],

  footer: {
    legal:
      'La información de este sitio es orientativa y no reemplaza la consulta médica.',
    demoNotice: {
      show: true,
      text: 'Sitio de demostración: los datos y la profesional son ficticios',
    },
  },
};

/** Derived helpers so components never rebuild links by hand. */
export const links = {
  whatsapp: `https://wa.me/${site.contact.phoneE164}?text=${encodeURIComponent(site.contact.whatsappMessage)}`,
  phone: `tel:+${site.contact.phoneE164}`,
  email: `mailto:${site.contact.email}`,
  booking: site.contact.bookingUrl,
} as const;

export const licenseLabel = `${site.professional.license.type} ${site.professional.license.number}`;
