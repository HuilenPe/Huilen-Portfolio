import photo from "/images/hero_health_Card.png";
import backgroundHeroHealth from "/images/backgroundHero.png";
import mockupDashboardScreen from "/images/Dashboard.png";

import photoAldo from "/images/aldo/aldo_bg_card.png";
import aldoHero from "/images/aldo/aldo-pena-hero.png";

export const projects = [
  {
    id: "aldo-pena",
    slug: "aldo-pena",
    title: "Aldo Peña — Archivo Artístico Digital",
    description:
      "Diseño UX/UI y desarrollo frontend de un archivo artístico digital para preservar, organizar y explorar obra, trayectoria y documentación.",
    img: photoAldo,
    demo: "https://aldo-pena-web.vercel.app/",
    github: "https://github.com/HuilenPe/aldo-pena-web",
    figma: "",

    details: {
      hero: {
        title: "Aldo Peña — Archivo Artístico Digital",
        subtitle:
          "Diseño UX/UI y desarrollo frontend de una plataforma digital para preservar, organizar y hacer accesible la obra, trayectoria y legado de Aldo Peña.",
        tags: [
          "UI Design",
          "Product Thinking",
          "Frontend Development",
        ],
        background: aldoHero,
        mockup: "",
      },

      origin: {
        eyebrow: "El origen del proyecto",
        title:
          "De mostrar obras a organizar una trayectoria.",
        content:
          "El proyecto comenzó como una web para reunir y mostrar la obra de Aldo Peña. La diversidad del material —obras, docencia, práctica profesional y documentación histórica— llevó a ampliar la propuesta hacia un archivo digital.",
      },

      context: {
        problema:
          "Las obras, los proyectos profesionales y la información biográfica necesitan formas distintas de presentación. El reto fue definir qué secciones y fichas requería cada contenido y cómo facilitar su consulta.",

        objetivo:
          "Permitir que los visitantes recorran las obras por categoría, consulten sus imágenes y metadatos, y exploren la trayectoria y la práctica profesional del artista. El archivo está pensado para los siguientes públicos:",

        usuario: [
          "Personas interesadas en la obra y trayectoria del artista",
          "Investigadores y perfiles vinculados al ámbito artístico y cultural",
          "Usuarios que necesitan explorar un archivo amplio sin perder el contexto de navegación",
        ],
      },

      approach: {
        decisiones: [
  "Separar la obra artística de la práctica profesional, con categorías y fichas propias.",
  "Incorporar categorías y ordenación para recorrer las obras.",
  "Consultar las piezas en un modal con imágenes, metadatos y navegación anterior y siguiente.",
  "Separar las consultas de datos de los componentes de interfaz y utilizar almacenamiento externo para las imágenes."
],
      },

      process: {
        sitemap: {
          title: "Arquitectura para una trayectoria extensa",
          description:
            "La navegación distingue Biografía, Obras, Práctica y Legado y Archivo. Dentro de Obras y Práctica, las categorías permiten pasar de una vista general a las piezas y proyectos concretos. Legado y Archivo permanece como una sección pendiente de contenido.",
          img: "/images/aldo/aldo-sitemap.png",
        },

        interaction: {
          title: "Explorar la obra sin perder el contexto",
          description:
            "El archivo permite elegir una categoría y ordenar las obras por fecha, título o destacadas. La opción de mostrar más amplía el número de piezas visibles. Al abrir una obra, su detalle se consulta en un modal y la selección queda reflejada en la URL.",
          img: "/images/aldo/aldo-painting-archive-desktop.png",
        },

        responsive: {
          title: "React y Supabase: del modelo de datos a la interfaz",
          description:
            "La interfaz en React consulta Supabase para recuperar los datos del archivo. Cada obra se relaciona con su categoría, sus imágenes y sus registros de exposiciones. Los archivos de imagen se sirven desde Supabase Storage. La sección de Práctica dispone de consultas propias para sus proyectos y documentación.",
          dataModelImg: "/images/aldo/aldo-artwork-data-model.png",

          technologies: [
            "React",
            "React Router",
            "Supabase",
            "Supabase Storage",
            "i18next",
          ],
        },
      },

      artworkExperience: {
        eyebrow: "Detalle de obra",
        title: "Consultar una pieza sin abandonar el recorrido",
        description:
          "El detalle de cada obra se consulta en un modal dentro del archivo. Permite recorrer imágenes y avanzar a la obra anterior o siguiente, además de consultar los metadatos disponibles. La obra seleccionada queda reflejada en la URL para poder compartir un enlace directo a esa pieza.",
        items: [
          "Navegación continua",
          "Galería de imágenes",
          "Metadatos",
          "Teclado + swipe",
        ],
        image: "/images/aldo/aldo-artwork-modal-desktop.png",
        alt: "Detalle de una pintura con galería de imágenes, técnica, medidas y navegación entre obras",
      },

      practiceShowcase: {
  "title": "La práctica profesional en móvil",
  "description": "La página de Práctica presenta la actividad interdisciplinar del artista. Estas vistas muestran su portada y la sección de Curaduría y Diseño Expositivo, con acceso a sus categorías.",
  "heroImage": "/images/aldo/aldo-practice-hero-mobile.png",
  "heroAlt": "Portada móvil de Práctica con fotografía y presentación de la actividad interdisciplinar",
  "categoryImage": "/images/aldo/aldo-curatorship-mobile.png",
  "categoryAlt": "Sección móvil de Curaduría y Diseño Expositivo con tarjetas de categorías"
},

      result: {
        title: "Estado actual del archivo",
        content:
          "La implementación incluye un archivo de obras con categorías y ordenación, fichas con imágenes y metadatos, y una sección de práctica multidisciplinar con proyectos y documentación asociada. Las consultas de obras y práctica están conectadas a Supabase. El archivo continúa en desarrollo: la sección Legado y Archivo todavía muestra una pantalla de próxima disponibilidad.",
      },

      learnings: [
        "Diseñar para grandes volúmenes de contenido requiere pensar primero en relaciones y arquitectura, no solo en pantallas.",
        "Separar datos, lógica y presentación permite que una interfaz evolucione sin depender del volumen final del archivo.",
        "En un archivo cultural, la interacción debe facilitar la exploración sin competir visualmente con la obra.",
      ],
    },
  },

  {
    id: "equinox",
    slug: "equinox",
    title: "Equinox — Rediseño web corporativo",
    description:
      "Diseño UX/UI y desarrollo frontend de la web corporativa de Equinox, desde el diseño en Figma hasta la implementación en React.",
    img: "/images/equinox/equinox-cover.png",
    demo: "https://equinox.do/",
    github: "",
    figma: "",

    details: {
      hero: {
        title: "Equinox — Rediseño web corporativo",
        subtitle:
          "Rediseño e implementación frontend de una web B2B para presentar los servicios de Equinox y facilitar el contacto con la empresa.",
        tags: ["UX/UI Design", "Frontend Development", "React"],
        background: "",
        mockup: "/images/equinox/equinox-cover.png",
      },

      context: {
        problema:
          "El encargo fue modernizar visualmente una web antigua en WordPress y reconstruirla. El alcance inicial no incluía añadir funcionalidades ni conservar funciones existentes.",
        objetivo:
          "Rediseñar la presentación corporativa y desarrollar las páginas Home, About y Contact con adaptación a escritorio y móvil.",
      },

      result: {
        title: "Diseño y desarrollo publicados",
        content:
          "Mi trabajo abarcó los wireframes, el diseño de alta fidelidad en Figma y el desarrollo frontend en React de Home, About y Contact. La web está publicada. La propuesta utilizó fotografías de Unsplash ante la falta de imágenes propias; contar con material fotográfico real de la empresa quedó como una mejora pendiente.",
      },
    },
  },

  {
    id: "health-client",
    visible: false,
    slug: "health",
    type: "case-study",
    title: "Health — Gestión médica clara y accesible",
    description:
      "Diseño UX/UI de una aplicación móvil para gestionar citas, información médica y comunicación con profesionales.",
    img: photo,
    github: "",
    figma:"",

    details: {
      hero: {
        title: "Health — Gestión médica clara y accesible",
        subtitle:
          "Diseño UX/UI de una aplicación móvil para centralizar citas, información médica y comunicación con profesionales, desde la definición del flujo hasta un sistema visual reutilizable.",
        tags: [
          "UX/UI",
          "Product Design",
          "Design System",
          "Figma",
        ],
        background: backgroundHeroHealth,
        mockup: mockupDashboardScreen,
      },

      origin: {
        eyebrow: "El punto de partida",
        title:
          "Diseñar una experiencia médica sin convertirla en un panel de opciones.",
        content:
          "Health nació como un proyecto formativo de UX/UI centrado en explorar cómo organizar distintas tareas relacionadas con la gestión médica dentro de una única experiencia móvil. El reto no era simplemente diseñar las pantallas, sino decidir qué información debía aparecer en cada momento y cómo guiar al usuario entre citas, profesionales, mensajes e información personal sin sobrecargar la interfaz.",
      },

      context: {
        problema:
          "El proyecto partió de una necesidad amplia: organizar distintas acciones relacionadas con la gestión médica —citas, profesionales, mensajes e información personal— dentro de una experiencia móvil clara y fácil de recorrer. El principal reto era evitar que la aplicación se convirtiera en un panel saturado de opciones y mantener visibles las acciones prioritarias.",

        objetivo:
          "Diseñar una experiencia móvil que ayudara al usuario a entender qué puede hacer en cada momento, estructurando los principales recorridos antes de avanzar hacia el diseño visual y construyendo una base reutilizable para mantener consistencia entre pantallas.",

        usuario: [
          "Personas que necesitan gestionar citas e información médica desde el móvil",
          "Usuarios con distintos niveles de familiaridad digital",
          "Personas que necesitan identificar rápidamente acciones y estados importantes",
        ],
      },

      approach: {
        decisiones: [
          "Definir los principales recorridos antes de diseñar las pantallas finales",
          "Priorizar las acciones médicas más frecuentes dentro de la jerarquía visual",
          "Dividir los flujos complejos en decisiones progresivas",
          "Construir foundations y componentes reutilizables para mantener consistencia",
          "Diseñar estados de interacción, error y confirmación como parte del sistema",
        ],
      },

      flow: {
        eyebrow: "Arquitectura de experiencia",
        alt: "User flow del proyecto Health",
        title: "Antes de diseñar pantallas, ordenar el recorrido",
        description:
          "El flujo se planteó para definir cómo accedería el usuario a las principales áreas de la aplicación y qué decisiones serían necesarias en cada recorrido. Esta estructura permitió separar autenticación, navegación principal y acciones específicas antes de avanzar hacia el diseño visual.",
        img: "/images/health-flow.png",
      },

      exploration: {
        eyebrow: "Exploración e iteración",
        alt: "Wireframes iniciales del proyecto Health",
        title: "De la estructura a la interfaz",
        description:
          "Los primeros wireframes sirvieron para explorar la distribución del contenido, la navegación y la jerarquía de las acciones principales sin depender todavía de decisiones visuales. A partir de esta base, fui iterando la experiencia y refinando la interfaz a medida que el producto tomaba forma.",
        img: "/images/health-wireframes.png",
      },

      designSystem: {
        eyebrow: "Design system",
        alt: "Foundations y componentes del sistema de diseño de Health",
        title: "Una base visual para mantener consistencia",
        description:
          "Definí foundations y componentes reutilizables para mantener coherencia entre pantallas y facilitar la evolución del prototipo. El sistema incluye color, tipografía, espaciado, iconografía, radios y estados de componentes.",
        image: "/images/health-design-system.png",

        items: [
          "Color",
          "Typography",
          "Spacing",
          "Components",
          "States",
        ],
      },

      bookingFlow: {
        eyebrow: "Flujo principal",
        title: "Reservar una cita reduciendo decisiones innecesarias",
        description:
          "El flujo de reserva se estructuró como una secuencia progresiva: iniciar la acción desde el dashboard, elegir profesional, seleccionar fecha y horario y confirmar la cita. Cada pantalla concentra una decisión principal para evitar mostrar demasiadas opciones al mismo tiempo.",

        screens: [
          {
            title: "1. Punto de entrada visible",
            description:
              "La reserva aparece como una acción principal desde el dashboard, permitiendo iniciar el flujo sin recorrer otras secciones.",
            img: "/images/health-booking-entry.png",
          },
          {
            title: "2. Elegir profesional",
            description:
              "La información necesaria para comparar profesionales se agrupa antes de avanzar a la selección de disponibilidad.",
            img: "/images/health-booking-doctor.png",
          },
          {
            title: "3. Fecha y horario",
            description:
              "La selección se concentra en una única tarea, utilizando estados visuales para diferenciar disponibilidad y elección.",
            img: "/images/health-booking-date.png",
          },
          {
            title: "4. Confirmación",
            description:
              "El flujo termina con un estado explícito de éxito y un resumen de la cita para confirmar qué se ha reservado.",
            img: "/images/health-booking-confirmation.png",
          },
        ],
      },

      finalDesign: {
        eyebrow: "Final UI",
        alt: "Diseño final del prototipo Health",
        title: "Del sistema al prototipo final",
        description:
          "El sistema visual y los componentes definidos se aplicaron al prototipo de alta fidelidad, manteniendo una jerarquía clara y una experiencia consistente a lo largo de los principales flujos.",
        image: "/images/health-final-ui.png",
      },

      result: {
        title: "Alcance del proyecto",
        content:
          "Health fue desarrollado como proyecto formativo de UX/UI y llegó hasta la definición de flujos, sistema visual, componentes reutilizables y prototipo interactivo en Figma. La investigación y las pruebas de usabilidad planteadas durante el proceso fueron ejercicios metodológicos y no estudios realizados con una muestra real de pacientes.",
      },

      learnings: [
        "Pensar en sistemas, no solo en pantallas: definir foundations y componentes ayudó a mantener coherencia a medida que el prototipo crecía.",
        "Resolver primero la jerarquía: una interfaz visualmente limpia no garantiza que la acción principal sea evidente.",
        "Diseñar estados también forma parte de la experiencia: error, selección, confirmación y feedback necesitan tanta atención como el estado ideal.",
        "Separar hipótesis de evidencia: una decisión de diseño puede estar razonada, pero necesita validación con usuarios reales antes de presentarse como una conclusión.",
      ],
    },
  },
];
