// ============================================================================
// weddingConfig.ts
// Configuración central de la web de la boda de Flor & Mati.
// Todos los componentes consumen estos datos. No hay información
// hardcodeada repetida en los componentes.
//
// Todo lo marcado como "[COMPLETAR]" es un dato real que falta y que
// los novios deben completar antes de publicar la web. No se inventó
// ningún dato (lugar, precios, alias, CBU, WhatsApp, etc.).
// ============================================================================

export interface MenuOption {
  id: string;
  name: string;
  price: number; // en pesos argentinos, 0 si aún no está definido
  description: string;
  includes: string[];
}

export interface WeddingConfig {
  couple: {
    bride: string;
    groom: string;
  };
  /** Fecha del casamiento en formato ISO (YYYY-MM-DD), interpretada en horario de Argentina */
  date: string;
  /** Hora de inicio de la ceremonia, formato 24hs "HH:mm" */
  ceremonyTime: string;
  /** Duración estimada del evento en horas, usada para el calendario. Configurable. */
  eventDurationHours: number;
  venue: {
    name: string;
    address: string;
    cityProvince: string;
    mapUrl: string;
  };
  schedule: {
    time: string;
    title: string;
    description: string;
    icon: "rings" | "glass" | "music" | "cake";
  }[];
  dressCode: {
    style: string;
    message: string;
    colorsToAvoid: { name: string; hex: string }[];
  };
  menus: MenuOption[];
  payment: {
    deadline: string; // ISO date
    alias: string;
    holder: string;
    cuit: string;
    bank: string;
    cbu: string;
  };
  gifts: {
    alias: string;
    whatsappUrl: string;
  };
  seo: {
    title: string;
    description: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    bride: "Flor",
    groom: "Mati",
  },

  date: "2026-12-04",
  ceremonyTime: "19:30",
  eventDurationHours: 7,

  venue: {
    name: "[COMPLETAR]",
    address: "[COMPLETAR]",
    cityProvince: "[COMPLETAR]",
    mapUrl: "[COMPLETAR]",
  },

  schedule: [
    {
      time: "19:30 hs",
      title: "Ceremonia",
      description: "Inicio del evento.",
      icon: "rings",
    },
    {
      time: "Después de la ceremonia",
      title: "Recepción",
      description: "Bienvenida y brindis.",
      icon: "glass",
    },
    {
      time: "Luego",
      title: "Cena & Baile",
      description: "Diversión y celebración.",
      icon: "music",
    },
    {
      time: "03:00 hs",
      title: "Mesa Dulce",
      description: "Cierre con dulzura.",
      icon: "cake",
    },
  ],

  dressCode: {
    style: "Elegante sport",
    message:
      "Queremos verlos elegantes, cómodos y listos para celebrar con nosotros.",
    colorsToAvoid: [
      { name: "Blanco", hex: "#FBF7F0" },
      { name: "Beige", hex: "#E4D8BE" },
      { name: "Lavanda", hex: "#CBC0DA" },
      { name: "Verde olivo", hex: "#7C8358" },
    ],
  },

  menus: [
    {
      id: "menu-1",
      name: "[COMPLETAR]",
      price: 0,
      description: "[COMPLETAR]",
      includes: ["[COMPLETAR]"],
    },
  ],

  payment: {
    deadline: "2026-10-31",
    alias: "[COMPLETAR]",
    holder: "[COMPLETAR]",
    cuit: "[COMPLETAR]",
    bank: "[COMPLETAR]",
    cbu: "[COMPLETAR]",
  },

  gifts: {
    alias: "[COMPLETAR]",
    whatsappUrl: "[COMPLETAR]",
  },

  seo: {
    title: "Flor & Mati — 04.12.2026",
    description:
      "Toda la información de nuestra boda: cronograma, ubicación, menú, pago y regalos.",
  },
};
