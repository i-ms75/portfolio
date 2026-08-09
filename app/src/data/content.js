// Centralized content for the portfolio
// All text content is defined here - no Lorem Ipsum

export const heroContent = {
    greeting: "Hey, I'm",
    name: "Manmohan Kushwaha",
    tagline: "I connect systems during the day. At night, I theorize about quantum entanglement—same thing, really.",
    subtitle: "Software Engineer specializing in scalable APIs, data architecture, and making distributed systems actually talk to each other.",
    cta: {
        primary: "View Projects",
        secondary: "Contact Me"
    }
};

export const aboutContent = {
    title: "About Me",
    paragraphs: [
        "Three years into this journey at Novo Nordisk, and I've discovered that software engineering is a lot like physics, both are about finding elegant patterns in chaos. Timing matters, systems interact in unexpected ways, and debugging feels like solving a mystery of the universe.",
        "I've built scalable APIs, wrestled with microservices, and earned an Exemplar Award in 2024 for cross-department knowledge sharing, because apparently explaining complex systems to non-engineers without their eyes glazing over is a superpower.",
        "When I'm not orchestrating data pipelines or convincing Azure and AWS to play nice, you'll find me exploring quantum mechanics (the original distributed system), carving through mountain roads on my motorcycle, or unwinding with stand-up comedy specials and movies because after debugging code all day, I deserve to let someone else do the thinking."
    ],
    whatIDo: [
        "🔗 Building scalable APIs & microservices at Novo Nordisk",
        "🚀 Designing data pipelines & integration architectures",
        "☁️ Orchestrating cloud infrastructure on Azure & AWS",
        "🧠 Exploring quantum mechanics in my spare time",
        "🏍️ Carving mountain roads on my motorcycle"
    ],
    highlights: [
        { label: "Years Experience", value: "3.5+" },
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
            items: ["Java", "JavaScript", "Python", "SQL"]
        },
        {
            name: "Integration & Cloud",
            description: "Making systems shake hands across the internet",
            items: ["Spring Boot", "Azure", "AWS", "Docker", "Redis"]
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
            id: 0,
            title: "OTP Service",
            standard: {
                description: "A Spring Boot + Redis microservice that gates sensitive actions behind multi-owner OTP approval. One request fans out a unique 6-digit code to every configured approver by email; all codes must be collected and submitted together to pass.",
                details: [
                    "Java 17 + Spring Boot with a stateless /generate and /verify REST API",
                    "OTPs stored only as HMAC-SHA256 digests in Redis with a 5-minute TTL",
                    "Constant-time verification, 3-attempt lockout, and single-use records",
                    "Dockerized and shipped via GitHub Actions → GHCR → EC2 on version tags"
                ]
            },
            philosophical: {
                description: "Trust, distributed. No single person holds the keys—consensus is enforced in code, and the secret exists only in transit, never at rest. A study in verifying without remembering.",
                details: [
                    "Authority split across many owners so no one hand can turn the lock alone",
                    "Codes live as hashes: the system can confirm truth it can never reveal",
                    "TTL as impermanence—every secret is born already expiring",
                    "The service trusts no client; the boundary is the whole point"
                ]
            },
            tech: ["Java", "Spring Boot", "Redis", "Docker"],
            github: "https://github.com/i-ms75/otpservice",
            live: null
        },
        {
            id: 1,
            title: "Document Processor",
            standard: {
                description: "A Spring Boot service that ingests PDFs, stores them in Amazon S3, and processes them asynchronously via Amazon SQS. Uploads return immediately while a queue listener downloads each file and extracts its text with Apache PDFBox.",
                details: [
                    "Java 17 + Spring Boot with a multipart /pdf upload and presigned-URL download API",
                    "S3 for object storage, SQS (@SqsListener) to decouple upload from processing",
                    "Apache PDFBox for text extraction off the request thread",
                    "Spring Cloud AWS integration plus a PostgreSQL/JPA persistence layer"
                ]
            },
            philosophical: {
                description: "Patience as architecture. The upload finishes the moment the work begins—the file waits in a queue, processed when the system is ready, not when you are. A pipeline that separates receiving from understanding.",
                details: [
                    "Queues are a promise: what is accepted now will be understood later",
                    "Decoupling as humility—the fast path refuses to pretend it did the hard work",
                    "A presigned URL is trust with an expiry date",
                    "Extraction is interpretation: the document exists, but its meaning must be pulled out"
                ]
            },
            tech: ["Java", "Spring Boot", "AWS S3", "AWS SQS", "PDFBox"],
            github: "https://github.com/i-ms75/documentProcessor",
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
    social: {
        github: "https://github.com/i-ms75",
        linkedin: "https://www.linkedin.com/in/msingh75"
    },
    copyright: `© ${new Date().getFullYear()} Manmohan Kushwaha. Crafted with React, Tailwind, claude and an unreasonable amount of coffee.`
};

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
];

// VS Code file tree structure
export const fileTree = [
    {
        name: "src",
        type: "folder",
        isOpen: true,
        children: [
            {
                name: "components",
                type: "folder",
                isOpen: true,
                children: [
                    { name: "Home.jsx", type: "file", fileKey: "home" },
                    { name: "Skills.jsx", type: "file", fileKey: "skills" }
                ]
            },
            {
                name: "pages",
                type: "folder",
                isOpen: true,
                children: [
                    { name: "About.md", type: "file", fileKey: "about" }
                ]
            }
        ]
    },
    {
        name: "data",
        type: "folder",
        isOpen: true,
        children: [
            { name: "projects.json", type: "file", fileKey: "projects" }
        ]
    },
    {
        name: "styles",
        type: "folder",
        isOpen: true,
        children: [
            { name: "contact.css", type: "file", fileKey: "contact" }
        ]
    },
    { name: "README.md", type: "file", fileKey: "about" },
    { name: "package.json", type: "file", fileKey: "package" }
];

// Tab definitions
export const tabDefinitions = {
    home: { name: "Home.jsx", icon: "jsx", path: "src > components > Home.jsx" },
    about: { name: "About.md", icon: "md", path: "src > pages > About.md" },
    projects: { name: "projects.json", icon: "json", path: "data > projects.json" },
    skills: { name: "Skills.jsx", icon: "jsx", path: "src > components > Skills.jsx" },
    contact: { name: "contact.css", icon: "css", path: "styles > contact.css" },
    package: { name: "package.json", icon: "json", path: "package.json" }
};
