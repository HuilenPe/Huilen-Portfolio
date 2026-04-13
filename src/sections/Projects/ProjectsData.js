import photo from "/images/heroCard.png";
import photoPortfolio from "/images/MacBook.png";
import backgroundHeroHealth from "/images/backgroundHero.png"
import mockupDashboardScreen from "/images/Dashboard.png"

export const projects = [
    {
        id: "health-client",
        title: "Agendar una cita médica sin fricción",
        description: "UX/UI Case Study — Flujo de reserva optimizado",
        img: photo,
        github: "",
        figma: "https://www.figma.com/proto/GEOaUR9zuCeRrDR2pyiCsu/Health?node-id=4-2&t=W5Sg2dUk9bwRazsg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2168%3A1663",
        details: {
            hero: {
                title: "Agendar una cita médica sin fricción",
                subtitle: "Reduciendo la complejidad en la toma de decisiones del usuario",
                tags: ["UX/UI", "Product Design", "Mobile App"],
                background: backgroundHeroHealth,
                mockup: mockupDashboardScreen,
            }, 

            context: {
                problema: "Los usuarios encuentran fricción...",
                objetivo: "Diseñar un flujo claro...",
                usuario: [
                    "Adultos digitales",
                    "Necesidad rápida",
                    "Baja tolerancia a fricción"
                ]
            },

            approach: {
                decisiones: [
                    "Fricción mínima (1 acción por pantalla)",
                    "Separar especialidad y médico",
                    "Mostrar solo horarios reales"
                ]
            },

            flowImage: "/images/flow.png",

            screens: [
                {
                    title: "Especialidad",
                    description: "Reducir tiempo de selección",
                    img: "/images/screen1.png"
                },
                {
                    title: "Médico",
                    description: "Facilitar decisión rápida",
                    img: "/images/screen2.png"
                }
            ]
        }
    },
    {
        id: "task-app",
        title: "App de tareas UX/UI & Frontend",
        description: "Diseño y desarrollo de una app para mejorar la productividad",
        img: "",
        github: "https://github.com/HuilenPe/Huilen-Portfolio",
        figma: "",
        details: {
            intro: "Diseñé una experiencia para simplificar la reserva médica.",

            sections: [
                {
                    title: "Problema",
                    content: "Los usuarios abandonaban el proceso..."
                },
                {
                    title: "Objetivo",
                    content: "Reducir fricción y pasos innecesarios..."
                },
                {
                    title: "Solución",
                    content: "Flujo en 3 pasos con feedback claro..."
                }
            ],

            images: ["/images/health1.png", "/images/health2.png"]
        }
    },
    {
        id: "portfolio",
        title: "Portfolio web personal",
        description: "Desarrollo Frontend",
        img: photoPortfolio,
        github: "https://github.com/HuilenPe/Huilen-Portfolio",
        figma: "",
        details: {
            intro: "Diseñé una experiencia para simplificar la reserva médica.",

            sections: [
                {
                    title: "Problema",
                    content: "Los usuarios abandonaban el proceso..."
                },
                {
                    title: "Objetivo",
                    content: "Reducir fricción y pasos innecesarios..."
                },
                {
                    title: "Solución",
                    content: "Flujo en 3 pasos con feedback claro..."
                }
            ],

            images: ["/images/health1.png", "/images/health2.png"]
        }
    },
];