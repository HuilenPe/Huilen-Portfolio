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
    description: "Diseño UX/UI y desarrollo Frontend de una plataforma cultural para preservar y difundir la obra y trayectoria de un artista.",
    img: photoAldo,
    demo: "https://aldo-pena-web.vercel.app/",
    github: "https://github.com/HuilenPe/aldo-pena-web",
    figma: "",
    details: {
        hero: {
            title: "Aldo Peña — Archivo Artístico Digital",
            subtitle:
            "Diseño UX/UI y desarrollo Frontend de una plataforma cultural para preservar, organizar y difundir la obra y trayectoria del artista.",
            tags: [
            "UX/UI",
            "Frontend Development",
            "React",
            "Responsive Design"
            ],
            background: aldoHero,
            mockup: "",
        },
        origin: {
        eyebrow: "El origen del proyecto",
        title: "Un archivo digital creado para preservar una trayectoria artística y cultural.",
        content:
            "Aldo Peña fue mi padre, artista, docente y gestor cultural. Tras su fallecimiento, mi madre impulsó como clienta la creación de un archivo digital que permitiera preservar, organizar y difundir su obra y trayectoria. A partir de este encargo, asumí el diseño UX/UI y el desarrollo Frontend de una plataforma pensada para conservar su legado y hacerlo accesible a largo plazo.",
        },
        context: {
            problema:
            "El archivo artístico de Aldo Peña necesitaba una estructura digital clara, visual y escalable que permitiera organizar obra, trayectoria, documentación y legado en una misma experiencia.",
            objetivo:
            "Diseñar y desarrollar una plataforma editorial que facilite la exploración del archivo, mantenga una identidad visual coherente y pueda crecer con nuevos contenidos y secciones.",
            usuario: [
            "Personas interesadas en la obra y trayectoria del artista",
            "Investigadores y perfiles vinculados al ámbito cultural",
            "Usuarios que acceden desde dispositivos móviles y desktop",
            ],
        },

        approach: {
            decisiones: [
            "Diseño editorial inspirado en archivos culturales y museos",
            "Arquitectura de información por áreas: obra, biografía, práctica y legado",
            "Desarrollo mobile-first y responsive",
            "Internacionalización ES / EN desde el inicio",
            "Componentización orientada a escalabilidad y mantenimiento",
            ],
        },
        process: {
        sitemap: {
            title: "Arquitectura de información",
            description:
            "La estructura del archivo se organizó en cinco áreas principales, definiendo jerarquías, categorías y recorridos antes de abordar el diseño de las interfaces.",
            img: "/images/aldo/aldo-sitemap.png",
        },

        interaction: {
            title: "Diseño de interacción",
            description:
            "El sistema de Obras se diseñó para permitir explorar el archivo por categorías y acceder progresivamente al detalle de cada pieza o serie sin perder el contexto de navegación.",
            img: "/images/aldo/aldo-works-interaction.png",
        },

        responsive: {
            title: "Diseño responsive e implementación",
            description:
            "Las decisiones definidas en Figma se trasladaron a una implementación responsive en React, adaptando navegación, composición y jerarquía visual a desktop y móvil.",
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
            title: "Resultado",
            content:
            "Una plataforma cultural en desarrollo con navegación responsive, sistema bilingüe, arquitectura escalable y una experiencia visual coherente con la identidad del artista.",
        },

        learnings: [
            "Diseñar para contenido cultural requiere equilibrar jerarquía visual y protagonismo de la obra.",
            "La arquitectura de información es clave cuando el contenido crecerá con el tiempo.",
            "La internacionalización y el responsive funcionan mejor cuando se plantean desde el inicio.",
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
    {
        id: "portfolio",
        title: "Portfolio web personal",
        description: "Desarrollo Frontend",
        img: photoPortfolio,
        github: "https://github.com/HuilenPe/Huilen-Portfolio",
        figma: "",
    },
];