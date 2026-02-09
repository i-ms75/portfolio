// Centralized content for the portfolio
// All text content is defined here - no Lorem Ipsum

export const heroContent = {
    greeting: "Hey, I'm",
    name: "Manmohan Kushwaha",
    tagline: "I connect systems during the day. At night, I theorize about quantum entanglement—same thing, really.",
    subtitle: "Software Engineer specializing in scalable APIs, data architecture, and making distributed systems actually talk to each other.",
    cta: {
        primary: "View My Work",
        secondary: "Get In Touch"
    }
};

export const aboutContent = {
    title: "About Me",
    paragraphs: [
        "Three years into this journey at Novo Nordisk, and I've discovered that software engineering is a lot like physics, both are about finding elegant patterns in chaos. Timing matters, systems interact in unexpected ways, and debugging feels like solving a mystery of the universe.",
        "I've built scalable APIs, wrestled with microservices, and earned an Exemplar Award in 2024 for cross-department knowledge sharing, because apparently explaining complex systems to non-engineers without their eyes glazing over is a superpower.",
        "When I'm not orchestrating data pipelines or convincing Azure and AWS to play nice, you'll find me exploring quantum mechanics (the original distributed system), carving through mountain roads on my motorcycle, or unwinding with stand-up comedy specials and movies because after debugging code all day, I deserve to let someone else do the thinking."
    ],
    highlights: [
        { label: "Years Experience", value: "3+" },
        { label: "Company", value: "Novo Nordisk" },
        { label: "Award", value: "Exemplar 2024" }
    ]
};

export const techStackContent = {
    title: "Tech Stack",
    subtitle: "The tools I use to turn caffeine into working software",
    categories: [
        {
            name: "Core",
            description: "The languages that pay the bills",
            items: ["Python", "JavaScript", "Java", "SQL"]
        },
        {
            name: "Integration & Cloud",
            description: "Making systems shake hands across the internet",
            items: ["FastAPI", "Azure", "AWS", "Docker", "Redis", "Kafka"]
        },
        {
            name: "Frontend",
            description: "Because users need pretty buttons too",
            items: ["React", "Tailwind CSS", "REST APIs"]
        }
    ]
};

export const projectsContent = {
    title: "Projects",
    subtitle: "Things I've built that actually work (most of the time)",
    projects: [
        {
            id: 1,
            title: "Netflix GPT",
            standard: {
                description: "A responsive React application featuring GPT-powered movie recommendations. Integrated OpenAI APIs to provide intelligent, context-aware suggestions based on user preferences.",
                details: [
                    "Built with React 18 and modern Hooks architecture",
                    "Integrated GPT API for natural language movie search",
                    "Implemented Tailwind CSS for responsive, elegant UI",
                    "State management with Redux Toolkit"
                ]
            },
            philosophical: {
                description: "A meditation on choice paralysis in the age of infinite content. Let an AI decide what you watch while you contemplate whether free will was ever real.",
                details: [
                    "An exploration of outsourcing decision-making to algorithms",
                    "Questions whether 'recommendation' is just manipulation with better UX",
                    "The interface is a mirror—what you search reveals who you are",
                    "Redux state as metaphor: all our choices are just reducers on previous states"
                ]
            },
            tech: ["React", "Redux", "OpenAI API", "Tailwind CSS"],
            github: "https://github.com/i-ms75",
            live: null
        },
        {
            id: 2,
            title: "FastAPI Migration POC",
            standard: {
                description: "Led a proof-of-concept replacing MuleSoft with FastAPI for high-performance API development. Implemented Redis caching and Amazon SQS for async processing.",
                details: [
                    "Designed high-throughput API architecture",
                    "Integrated Redis for sub-millisecond caching",
                    "Amazon SQS for reliable message queuing",
                    "Automated testing with 80%+ code coverage"
                ]
            },
            philosophical: {
                description: "The art of letting go: sometimes the best code you write is the code that replaces legacy systems. A study in impermanence and the courage to refactor.",
                details: [
                    "Every API endpoint is a promise to the future",
                    "Caching is just organized nostalgia for data",
                    "Message queues: proof that patience is a virtue, even in microseconds",
                    "Test coverage is insurance against our own hubris"
                ]
            },
            tech: ["Python", "FastAPI", "Redis", "AWS SQS"],
            github: null,
            live: null
        }
    ]
};

export const footerContent = {
    tagline: "Building bridges between systems, one API at a time.",
    email: "mkush575@gmail.com",
    phone: "+919845987946",
    social: {
        github: "https://github.com/i-ms75",
        linkedin: "https://www.linkedin.com/in/msingh75"
    },
    copyright: `© ${new Date().getFullYear()} Manmohan Kushwaha. Crafted with React, Tailwind, and an unreasonable amount of coffee.`
};

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];
