import photo from "/images/heroCard.png";
import photoPortfolio from "/images/MacBook.png";
import backgroundHeroHealth from "/images/backgroundHero.png"
import mockupDashboardScreen from "/images/Dashboard.png"

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
        "El proyecto continúa creciendo en paralelo al proceso de investigación, catalogación y recuperación documental de la obra y trayectoria del artista. Actualmente se está recopilando y reorganizando material fotográfico y documental procedente tanto del archivo personal como de fondos históricos vinculados a las instituciones en las que el artista se formó y desarrolló gran parte de su trayectoria. Por este motivo, algunas secciones y contenidos de la web todavía se encuentran en proceso de incorporación.",
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
        title: "Agendar una cita médica sin fricción",
        description: "Diseño UX/UI",
        img: photo,
        github: "",
        figma: "https://www.figma.com/proto/GEOaUR9zuCeRrDR2pyiCsu/Health?node-id=4-2&t=W5Sg2dUk9bwRazsg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2168%3A1663",
        details: {
            hero: {
                title: "Agendar una cita médica sin fricción",
                subtitle: "Diseño UX/UI de un flujo optimizado para reducir pasos, dudas y abandono en la reserva de citas médicas.",
                tags: ["UX/UI", "Product Design", "Mobile App"],
                background: backgroundHeroHealth,
                mockup: mockupDashboardScreen,
            },

            context: {
                problema:
                    "Los usuarios necesitan agendar citas médicas de forma rápida, pero los flujos tradicionales presentan demasiados pasos, opciones poco claras y generan fricción en la toma de decisiones.",
                objetivo:
                    "Diseñar un flujo simple que permita reservar una cita en pocos pasos, reduciendo el esfuerzo cognitivo y mejorando la claridad en cada decisión.",
                usuario: [
                    "Usuarios con necesidad de reserva rápida",
                    "Distintos niveles de familiaridad digital",
                    "Baja tolerancia a procesos largos o confusos",
                ],
            },

            approach: {
                decisiones: [
                    "Reducir la fricción con una acción principal por pantalla",
                    "Simplificar la elección: especialidad, médico y horario",
                    "Mostrar disponibilidad real y clara",
                    "Dar feedback inmediato en cada selección",
                ],
            },

            flowImage: "/images/flow.png",

            screens: [
                {
                    title: "Home",
                    description: "CTA principal visible para iniciar la reserva sin fricción.",
                    img: "/images/health-home.png",
                },
                {
                    title: "Selección de médico",
                    description: "Cards claras para comparar disponibilidad, especialidad y ubicación.",
                    img: "/images/health-doctor.png",
                },
                {
                    title: "Fecha y hora",
                    description: "Selección visual directa con estados claros de día y horario.",
                    img: "/images/health-date.png",
                },
                {
                    title: "Confirmación",
                    description: "Refuerzo de confianza con resumen de la cita y acciones posteriores.",
                    img: "/images/health-confirmation.png",
                },
            ],

            uxDecisions: [
                "Se priorizó un CTA claro en el home para iniciar el flujo.",
                "Se redujo el número de decisiones visibles en cada pantalla.",
                "Se utilizaron estados visuales claros para selección de día y hora.",
                "Se diseñó una confirmación final para eliminar dudas después de reservar.",
            ],

            result: {
                title: "Resultado",
                content:
                    "El flujo permite agendar una cita en pocos pasos, con decisiones claras y sin fricción innecesaria.",
            },

            learnings: [
                "Simplificar mejora la experiencia más que añadir funcionalidades.",
                "La jerarquía visual impacta directamente en la toma de decisiones.",
                "Pequeños ajustes de spacing y contraste pueden mejorar mucho la claridad.",
            ],
        },
    },
/*     {
        id: "portfolio",
        title: "Portfolio web personal",
        description: "Desarrollo Frontend",
        img: photoPortfolio,
        github: "https://github.com/HuilenPe/Huilen-Portfolio",
        figma: "",
    }, */
];