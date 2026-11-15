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
    eyebrow: string;
    headline: string;
    lead: string;
  };
  services: Service[];
  firstVisit: Step[];
  insurances: { list: string[]; note: string };
  testimonials: Testimonial[];
  office: {
    name: string;
    address: Address;
    hours: OpeningHours[];
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
    finalText: string;
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
      'Hace más de 12 años que acompaño a mis pacientes en el cuidado de su piel, con consultas sin apuro y explicaciones claras.',
      'Creo en una dermatología basada en evidencia y cercana: escuchar primero, revisar con atención y armar juntos un plan que se pueda sostener en el día a día.',
    ],
  },

  hero: {
    eyebrow: 'Dermatología en Rosario',
    headline: 'Cuidamos tu piel con tiempo, ciencia y cercanía.',
    lead: 'Consultas para toda la familia, con diagnóstico cuidadoso y tratamientos pensados para vos.',
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
    finalTitle: '¿Querés que revisemos tu piel?',
    finalText: 'Pedí tu turno en pocos pasos. Te respondemos a la brevedad.',
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
