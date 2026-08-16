import photo from "/images/heroCard.png";
import backgroundHeroHealth from "/images/backgroundHero.png";
import mockupDashboardScreen from "/images/Dashboard.png";

import photoAldo from "/images/aldo/aldo-pena-cover.png";
import aldoHero from "/images/aldo/aldo-pena-hero.png";

export const projects = [
  {
    id: "aldo-pena",
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
          "Diseño UX/UI y desarrollo Frontend de un archivo digital concebido como un recorrido por la obra y trayectoria del artista.",
        tags: [
          "UX/UI",
          "Frontend Development",
          "React",
          "Responsive Design",
        ],
        background: aldoHero,
        mockup: "",
      },

      origin: {
        eyebrow: "El origen del proyecto",
        title:
          "De una web para mostrar obra a un archivo digital capaz de preservar una trayectoria.",
        content:
          "La iniciativa nace de la cliente con la intención de crear un espacio digital donde reunir y mostrar la obra de Aldo Peña. Al comenzar a analizar el material, su trayectoria y la estructura inicial propuesta, el proyecto reveló un reto mayor: organizar décadas de producción artística, docencia, exposiciones, diseño y documentación dentro de una experiencia clara y coherente.",
      },

      context: {
        problema:
          "El volumen y la diversidad del contenido podían derivar en una arquitectura con demasiadas páginas o, en el extremo contrario, en grandes bloques de información difíciles de recorrer. El reto dejó de ser simplemente cómo mostrar las obras y pasó a ser cómo convertir una trayectoria extensa en un recorrido comprensible para el usuario.",

        objetivo:
          "Construir una arquitectura que permitiera descubrir progresivamente obra, biografía, práctica y archivo, manteniendo las relaciones entre los contenidos y preparando el sistema para crecer a medida que nuevos materiales fueran catalogados.",

        usuario: [
          "Personas interesadas en la obra y trayectoria del artista",
          "Investigadores y perfiles vinculados al ámbito artístico y cultural",
          "Usuarios que necesitan explorar un archivo amplio sin perder el contexto de navegación",
        ],
      },

      approach: {
        decisiones: [
          "Explorar distintas arquitecturas de información antes de definir la estructura final",
          "Reducir la fragmentación entre páginas y establecer relaciones claras entre los contenidos",
          "Plantear la experiencia desde un lenguaje editorial y museográfico",
          "Utilizar jerarquía, ritmo, imagen y espacios de lectura para construir un recorrido progresivo",
          "Diseñar una arquitectura preparada para incorporar nuevos materiales con el crecimiento del archivo",
        ],
      },

      process: {
        sitemap: {
          title: "Explorar antes de estructurar",
          description:
            "La organización del contenido pasó por distintas propuestas y versiones del sitemap. El objetivo era encontrar un equilibrio entre profundidad y simplicidad: evitar una navegación excesivamente fragmentada sin concentrar décadas de información en bloques difíciles de recorrer.",
          img: "/images/aldo/aldo-sitemap.png",
        },

        interaction: {
          title: "Del portfolio al recorrido museográfico",
          description:
            "Más que mostrar una colección de obras, el proyecto propone recorrer una trayectoria. De esta exploración surgió la decisión de no plantearlo únicamente como un portfolio artístico basado en galerías, sino como una experiencia editorial y museográfica. Obra, biografía, práctica y archivo forman parte de una misma narrativa que permite descubrir progresivamente la trayectoria del artista.",
          img: "/images/aldo/aldo-works-interaction.png",
        },

        responsive: {
          title: "Trasladar el recorrido a cada dispositivo",
          description:
            "La implementación responsive no se planteó únicamente como una reducción del layout de escritorio. Navegación, galerías, jerarquías y ritmo de lectura se adaptaron para conservar la intención editorial también en pantallas pequeñas. El proyecto se desarrolla en React e incorpora navegación entre secciones e internacionalización ES / EN.",
          img: "/images/aldo/aldo-responsive.png",

          technologies: [
            "React",
            "React Router",
            "i18next",
            "Responsive Design",
            "ES / EN",
          ],
        },
      },

      result: {
        title: "Un archivo en desarrollo",
        content:
          "El proyecto continúa creciendo en paralelo al proceso de investigación, catalogación y recuperación documental de la obra y trayectoria del artista. Actualmente se está recopilando y reorganizando material fotográfico y documental procedente tanto de archivos privados y colección familiar como de archivos históricos vinculados a las instituciones en las que el artista se formó y desarrolló gran parte de su trayectoria. Por este motivo, algunas secciones y contenidos de la web todavía se encuentran en proceso de incorporación.",
      },

      learnings: [
        "La arquitectura de información es especialmente importante cuando el contenido es extenso, heterogéneo y continuará creciendo.",
        "Diseñar un archivo cultural requiere equilibrar el protagonismo de la obra con el contexto necesario para comprenderla.",
        "Explorar diferentes estructuras antes de diseñar las interfaces permitió convertir un gran volumen de información en un recorrido más coherente.",
        "Diseñar desde el inicio para un archivo en crecimiento evita tener que replantear la experiencia cada vez que aparece nuevo material.",
      ],
    },
  },

  {
    id: "health-client",
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
        title: "Antes de diseñar pantallas, ordenar el recorrido",
        description:
          "El flujo se planteó para definir cómo accedería el usuario a las principales áreas de la aplicación y qué decisiones serían necesarias en cada recorrido. Esta estructura permitió separar autenticación, navegación principal y acciones específicas antes de avanzar hacia el diseño visual.",
        img: "/images/health-flow.png",
      },

      exploration: {
        eyebrow: "Exploración e iteración",
        title: "De la estructura a la interfaz",
        description:
          "Los primeros wireframes sirvieron para explorar la distribución del contenido, la navegación y la jerarquía de las acciones principales sin depender todavía de decisiones visuales. A partir de esta base, fui iterando la experiencia y refinando la interfaz a medida que el producto tomaba forma.",
        img: "/images/health-wireframes.png",
      },

      designSystem: {
        eyebrow: "Design system",
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