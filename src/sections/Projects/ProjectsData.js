import photo from "/images/heroCard.png";
import photoPortfolio from "/images/MacBook.png";
import backgroundHeroHealth from "/images/backgroundHero.png"
import mockupDashboardScreen from "/images/Dashboard.png"

export const projects = [
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
        id: "task-app",
        title: "App de tareas UX/UI & Frontend",
        description: "Diseño y desarrollo de una app para mejorar la productividad",
        img: "",
        github: "https://github.com/HuilenPe/Huilen-Portfolio",
        figma: "",
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