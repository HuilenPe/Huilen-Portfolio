import photo from "/images/hero_health_Card.png";
import backgroundHeroHealth from "/images/backgroundHero.png";
import mockupDashboardScreen from "/images/Dashboard.png";

import photoAldo from "/images/aldo/aldo-pena-cover.png";
import aldoHero from "/images/aldo/aldo-pena-hero.png";

export const projects = [
  {
    id: "aldo-pena",
    slug: "aldo-pena",
    title: "Aldo Peña — Archivo Artístico Digital",
    description:
      "Diseño UX/UI y desarrollo Frontend de un archivo digital con enfoque editorial y museográfico.",
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
          "UX/UI",
          "Frontend Development",
          "React",
          "Supabase",
        ],
        background: aldoHero,
        mockup: "",
      },

      origin: {
        eyebrow: "El origen del proyecto",
        title:
          "De una web para mostrar obra a un archivo digital capaz de preservar una trayectoria.",
        content:
          "La iniciativa nació con la intención de crear un espacio digital donde reunir y mostrar la obra de Aldo Peña. Al analizar el volumen y la diversidad del material —obra artística, trayectoria, docencia, práctica multidisciplinar y documentación histórica— el proyecto evolucionó hacia un reto mayor: diseñar un archivo capaz de organizar, relacionar y hacer accesible una trayectoria extensa sin reducirla a una simple galería.",
      },

      context: {
        problema:
          "El archivo reúne contenidos de naturaleza muy distinta: obras, documentación, trayectoria, práctica profesional y material histórico. El principal reto de UX fue definir una arquitectura que permitiera explorar este volumen de información sin fragmentar excesivamente la navegación ni perder las relaciones entre los contenidos.",

        objetivo:
          "Diseñar un sistema de archivo digital claro y escalable, donde la obra pudiera explorarse por categorías y cada pieza conservara su contexto mediante información, imágenes y registros asociados. La estructura debía permitir incorporar progresivamente nuevos materiales sin replantear la experiencia.",

        usuario: [
          "Personas interesadas en la obra y trayectoria del artista",
          "Investigadores y perfiles vinculados al ámbito artístico y cultural",
          "Usuarios que necesitan explorar un archivo amplio sin perder el contexto de navegación",
        ],
      },

      approach: {
        decisiones: [
          "Organizar una trayectoria extensa mediante una arquitectura de información clara y progresiva",
          "Relacionar obra, biografía, práctica multidisciplinar y archivo sin fragmentar la experiencia",
          "Diseñar la exploración de obras mediante categorías, filtros y ordenación",
          "Mantener el contexto de cada pieza a través de imágenes, metadatos y registros asociados",
          "Construir una estructura preparada para incorporar nuevos materiales de forma progresiva",
        ],
      },

      process: {
        sitemap: {
          title: "Arquitectura para una trayectoria extensa",
          description:
            "La primera decisión fue ordenar el contenido en grandes áreas capaces de convivir dentro de una misma experiencia: Biografía, Obra, Práctica multidisciplinar y Legado y Archivo. La estructura evita convertir cada tipo de material en una página aislada y permite que el usuario avance desde una visión general hacia contenidos cada vez más específicos.",
          img: "/images/aldo/aldo-sitemap.png",
        },

        interaction: {
          title: "Explorar la obra sin perder el contexto",
          description:
            "El archivo de obras se diseñó como una herramienta de exploración, no como una galería estática. Las piezas pueden recorrerse por categorías, filtros y criterios de ordenación, mientras la carga progresiva permite manejar un volumen creciente de contenido sin saturar la interfaz.",
          img: "/images/aldo/aldo-archive-exploration.webp",
        },

        responsive: {
          title: "Del diseño a un sistema preparado para crecer",
          description:
            "La interfaz se desarrolló en React con una arquitectura responsive adaptada a distintos tamaños de pantalla. La gestión del archivo se conectó con Supabase para separar contenido y presentación, relacionando obras, categorías, imágenes y exposiciones. Supabase Storage centraliza los archivos visuales y permite ampliar el archivo progresivamente sin reconstruir las vistas.",
          img: "/images/aldo/aldo-responsive.webp",

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
          "El detalle de cada obra mantiene al usuario dentro del archivo mientras consulta su información. La navegación anterior y siguiente permite avanzar entre piezas sin cerrar el modal, mientras la galería reúne múltiples registros fotográficos y los metadatos aportan contexto sobre técnica, dimensiones, colección y exposiciones asociadas.",
        items: [
          "Navegación continua",
          "Galería de imágenes",
          "Metadatos",
          "Teclado + swipe",
        ],
        image: "/images/aldo/aldo-artwork-detail.webp",
        alt: "Detalle de una obra dentro del archivo artístico digital",
      },

      result: {
        title: "Un archivo preparado para crecer",
        content:
          "El proyecto evolucionó hasta convertirse en un archivo artístico digital funcional, donde obra, trayectoria y documentación conviven dentro de una misma experiencia. La arquitectura de contenidos y la integración con Supabase permiten incorporar progresivamente nuevas piezas, imágenes y registros sin replantear la interfaz ni la navegación.",
      },

      learnings: [
        "Diseñar para grandes volúmenes de contenido requiere pensar primero en relaciones y arquitectura, no solo en pantallas.",
        "Separar datos, lógica y presentación permite que una interfaz evolucione sin depender del volumen final del archivo.",
        "En un archivo cultural, la interacción debe facilitar la exploración sin competir visualmente con la obra.",
      ],
    },
  },

  {
    id: "health-client",
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
