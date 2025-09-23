// Portfolio Data Structure - Auto-generated from CV
export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  techStack: string[];
  logoUrl?: string;
  companyUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  startDate?: string;
  endDate?: string;
  repoUrl?: string;
  liveUrl?: string;
  images: string[];
  role: string;
  impactMetrics: Record<string, string | number>;
  featured: boolean;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Tools';
  level: number; // 1-5
  years: number;
  keywords: string[];
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  socials: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  avatarUrl?: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialUrl?: string;
  imageUrl: string;
  skills: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  deliverables: string[];
  timeline: string;
  ctaText: string;
}

// Portfolio Data - Extracted from Arham's CV
export const profile: Profile = {
  name: "Arham Irfan",
  title: "Full Stack Developer",
  summary: "I'm a Full Stack Developer with 3+ years of experience building scalable web apps and cloud-native solutions. I focus on writing secure, efficient code and making sure everything works smoothly across different browsers. I have hands-on experience with responsive design, database architecture, and optimizing relational databases for performance.",
  location: "Lahore, Pakistan",
  email: "arham.irfan4@gmail.com",
  phone: "+92-320-6522050",
  socials: {
    linkedin: "https://linkedin.com/in/arham-irfan",
    github: "https://github.com/arham-irfan",
  },
};

export const experience: Experience[] = [
  {
    id: "devinity-2023",
    company: "Devinity Solutions",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    startDate: "2023-05",
    endDate: null,
    description: "Designing scalable MERN apps and cloud-native solutions",
    achievements: [
      "Built and deployed an AI chatbot using ChatGPT APIs and n8n, cutting customer support response times by ~60%",
      "Created responsive email templates validated across 120+ devices/browsers using Email on Acid",
      "Designed marketing creatives for Google Marketing Platform with optimized sizing and performance",
      "Deployed Node.js on Azure and set up CI/CD for Next.js to streamline releases",
      "Mentored junior developers on modern frontend/backend practices"
    ],
    techStack: ["Next.js", "Node.js", "Express", "MongoDB", "Azure", "CI/CD", "n8n", "ChatGPT API"],
    companyUrl: "https://devinitysolutions.com"
  },
  {
    id: "logicon-2022",
    company: "LOGICON, LLC",
    role: "Software Engineer", 
    location: "Lahore, Pakistan",
    startDate: "2022-08",
    endDate: "2023-05",
    description: "Full-stack development of Web3 NFT platforms",
    achievements: [
      "Full-stack build of INSID3RS.IO, an NFT ticketing platform handling 10K+ transactions",
      "Web3 integration with Solidity (ERC-1155) and Web3.js achieving ~98% tx success",
      "Hybrid auth (MetaMask + Google OAuth) reducing onboarding friction by ~50%",
      "30% faster loads via Next.js SSR/ISR, Redis caching and AWS optimization"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Web3.js", "Solidity", "AWS S3", "Redis", "Stripe"],
    companyUrl: "https://logicon.com"
  },
  {
    id: "ascend-2022",
    company: "Ascend BPO Services, Inc.",
    role: "Junior Software Engineer",
    location: "Lahore, Pakistan", 
    startDate: "2022-03",
    endDate: "2022-08",
    description: "Enterprise application development and automation",
    achievements: [
      "Developed enterprise apps with ASP.NET MVC/.NET Core and Angular",
      "Implemented automation using Selenium/jQuery boosting efficiency by ~75%",
      "Led migration from .NET Framework 4.8 to .NET 6 improving performance/security",
      "Designed SQL Server schemas and complex stored procedures"
    ],
    techStack: ["ASP.NET", ".NET Core", "Angular", "TypeScript", "SQL Server", "Selenium"],
    companyUrl: "https://ascendbpo.com"
  },
  {
    id: "augersoft-2021", 
    company: "Augersoft — Blockchain & Mobile",
    role: "Junior Software Engineer",
    location: "Remote",
    startDate: "2021-04",
    endDate: "2021-10", 
    description: "Mobile app development with real-time features",
    achievements: [
      "Built an Uber-style app (Flutter/Firebase) with real-time tracking, booking, and auth",
      "Contributed responsive UI screens to an Airbnb-like app",
      "Worked with Firestore/Auth/Cloud Functions following clean architecture"
    ],
    techStack: ["Flutter", "Firebase", "Firestore", "Cloud Functions"],
    companyUrl: "https://augersoft.com"
  }
];

export const projects: Project[] = [
  {
    id: "mcgrocer",
    name: "McGrocer",
    tagline: "AI-Powered Automated Procurement",
    description: "n8n + OpenAI orchestration with AWS SQS FIFO/Lambda and BullMQ workers for vendor selection, anti-bot evasion, and cart integration.",
    highlights: [
      "Orchestrated n8n workflows integrated with OpenAI to rank multi-vendor products by quality, price, and stock",
      "Built event-driven, serverless procurement pipeline with AWS SQS FIFO + Lambda and Redis/BullMQ",
      "Achieved ~5x faster end-to-end carting via distributed workers and low-latency queues",
      "Reduced manual carting effort ~80% through autonomous orchestration"
    ],
    techStack: ["Node.js", "PostgreSQL", "n8n", "OpenAI", "AWS", "SQS FIFO", "Lambda", "Redis"],
    liveUrl: "https://mcgrocer.com/",
    images: ["/src/assets/projects/mcgrocer.png"],
    role: "Lead Full Stack Developer",
    impactMetrics: {
      "Performance Improvement": "5x faster",
      "Automation Rate": "80%",
      "Architecture": "Serverless"
    },
    featured: true
  },
  {
    id: "abelmed",
    name: "Abelmed",
    tagline: "AI Medical Chatbot", 
    description: "Python backend integrating OpenAI GPT for real-time medical assistance; Next.js frontend widget for context-aware Q&A.",
    highlights: [
      "Built Python backend integrating OpenAI GPT for intelligent medical Q&A",
      "Trained AI model using custom medical documentation for domain-specific responses",
      "Implemented context-aware queries adapting tone for clinicians vs. patients",
      "Structured modular architecture for future medicine/domain expansion"
    ],
    techStack: ["Next.js", "Python", "Azure", "OpenAI", "NLP"],
    liveUrl: "https://innchatbot-gwdke2ghe3gsgtct.northcentralus-01.azurewebsites.net/",
    images: ["/src/assets/projects/abelmed.png"],
    role: "AI Integration Developer",
    impactMetrics: {
      "Response Accuracy": "Domain-specific",
      "Context Adaptation": "Dual persona",
      "Platform": "Azure"
    },
    featured: true
  },
  {
    id: "insid3rs",
    name: "Global Pass (INSID3RS.IO)",
    tagline: "Web3 NFT Ticketing Platform",
    description: "Web3 NFT ticketing platform with ERC-1155, fiat-NFT minting, auctions, and resale.",
    highlights: [
      "Built full-stack ERC-1155 NFT ticketing platform with MERN + Web3.js",
      "Implemented hybrid auth (MetaMask + Google) cutting onboarding friction ~40%",
      "Created Stripe-NFT bridge for fiat payments with automatic NFT delivery",
      "Improved performance via Next.js SSR/ISR, Redis caching, AWS S3 optimization"
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "Web3.js", "Solidity", "AWS S3", "Lambda", "Redis", "Stripe"],
    liveUrl: "http://insid3rs.io/",
    images: ["/src/assets/projects/globalpass.png"],
    role: "Lead Web3 Developer",
    impactMetrics: {
      "Transactions": "10K+",
      "Success Rate": "98%",
      "Onboarding Improvement": "40%",
      "Performance Gain": "30%"
    },
    featured: true
  },
  {
    id: "dynamic-estimations",
    name: "Dynamic Estimations",
    tagline: "Construction Estimation SaaS",
    description: "Lead-gen WordPress site + Next.js/Firebase CRM with dashboards and Python-based mass email automation.",
    highlights: [
      "Delivered end-to-end lead-to-estimate pipeline: WordPress + Next.js/Firebase CRM",
      "Built role-based CRM with granular permissions and audit trails",
      "Added real-time dashboards with server-driven filters and exports",
      "Implemented targeted email campaigns with delivery tracking"
    ],
    techStack: ["Next.js", "Python", "Firebase", "WordPress", "REST APIs"],
    liveUrl: "https://dynamicestimation.net/",
    images: [],
    role: "Full Stack Developer",
    impactMetrics: {
      "Pipeline": "End-to-end",
      "Automation": "Email campaigns",
      "Analytics": "Real-time dashboards"
    },
    featured: false
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: "javascript", name: "JavaScript (ES6+)", category: "Frontend", level: 5, years: 3, keywords: ["ES6", "Modern JS"] },
  { id: "react", name: "React.js", category: "Frontend", level: 5, years: 3, keywords: ["Hooks", "Context", "Performance"] },
  { id: "nextjs", name: "Next.js 14", category: "Frontend", level: 5, years: 2, keywords: ["SSR", "ISR", "App Router"] },
  { id: "typescript", name: "TypeScript", category: "Frontend", level: 4, years: 2, keywords: ["Type Safety", "Generics"] },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", level: 5, years: 2, keywords: ["Utility-first", "Responsive"] },
  { id: "html5", name: "HTML5", category: "Frontend", level: 5, years: 3, keywords: ["Semantic", "Accessibility"] },
  
  // Backend
  { id: "nodejs", name: "Node.js", category: "Backend", level: 5, years: 3, keywords: ["Runtime", "NPM"] },
  { id: "express", name: "Express.js", category: "Backend", level: 5, years: 3, keywords: ["REST API", "Middleware"] },
  { id: "python", name: "Python", category: "Backend", level: 4, years: 2, keywords: ["Automation", "AI Integration"] },
  
  // Databases  
  { id: "postgresql", name: "PostgreSQL", category: "Database", level: 4, years: 2, keywords: ["Relational", "Performance"] },
  { id: "mongodb", name: "MongoDB", category: "Database", level: 5, years: 3, keywords: ["NoSQL", "Mongoose"] },
  { id: "redis", name: "Redis", category: "Database", level: 4, years: 2, keywords: ["Caching", "Sessions"] },
  
  // DevOps
  { id: "aws", name: "AWS", category: "DevOps", level: 4, years: 2, keywords: ["S3", "Lambda", "EC2"] },
  { id: "azure", name: "Azure", category: "DevOps", level: 3, years: 1, keywords: ["Cloud Services", "Deployment"] },
  { id: "docker", name: "Docker", category: "DevOps", level: 3, years: 1, keywords: ["Containerization"] },
  
  // Tools
  { id: "web3", name: "Web3.js", category: "Tools", level: 4, years: 1, keywords: ["Blockchain", "Smart Contracts"] },
  { id: "openai", name: "OpenAI", category: "Tools", level: 4, years: 1, keywords: ["GPT", "AI Integration"] },
  { id: "stripe", name: "Stripe", category: "Tools", level: 4, years: 2, keywords: ["Payments", "Webhooks"] }
];

export const education: Education[] = [
  {
    id: "nuces-2022",
    school: "National University of Computer and Emerging Sciences (NUCES)",
    degree: "BS Computer Science", 
    startDate: "2018",
    endDate: "2022",
    highlights: [
      "Graduated with strong foundation in computer science fundamentals",
      "Specialized in software engineering and web development"
    ]
  }
];

export const certificates: Certificate[] = [
  {
    id: "augersoft-cert",
    name: "Software Development Internship", 
    organization: "Augersoft — Blockchain & Mobile",
    issueDate: "2021-10",
    imageUrl: "/src/assets/certificates/augersoft.png",
    skills: ["Flutter", "Firebase", "Mobile Development"]
  },
  {
    id: "python-coursera",
    name: "Python for Everybody Specialization",
    organization: "University of Michigan (Coursera)",
    issueDate: "2021-03",
    imageUrl: "/src/assets/certificates/python-coursera.png", 
    skills: ["Python", "Data Structures", "Web Scraping", "Databases"]
  },
  {
    id: "react-coursera", 
    name: "Front-End Web Development with React",
    organization: "The Hong Kong University of Science and Technology (Coursera)",
    issueDate: "2021-07",
    imageUrl: "/src/assets/certificates/react-coursera.png",
    skills: ["React", "Redux", "Bootstrap", "JavaScript"]
  },
  {
    id: "bootstrap-coursera",
    name: "Front-End Web UI Frameworks and Tools: Bootstrap 4", 
    organization: "The Hong Kong University of Science and Technology (Coursera)",
    issueDate: "2021-06",
    imageUrl: "/src/assets/certificates/bootstrap-coursera.png",
    skills: ["Bootstrap", "CSS", "Responsive Design", "SASS"]
  },
  {
    id: "microsoft-cert",
    name: "Microsoft Technology Associate: Software Development Fundamentals",
    organization: "Microsoft",
    issueDate: "2020-12",
    imageUrl: "/src/assets/certificates/microsoft.png",
    skills: [".NET", "C#", "Software Engineering", "Object-Oriented Programming"]
  }
];

export const services: Service[] = [
  {
    id: "fullstack-dev",
    name: "Full Stack Web Development",
    description: "End-to-end web application development using modern technologies like React, Next.js, Node.js, and cloud platforms.",
    priceFrom: 2000,
    deliverables: [
      "Responsive web application",
      "Database design & optimization", 
      "API development & integration",
      "Cloud deployment & CI/CD",
      "Performance optimization",
      "Security implementation"
    ],
    timeline: "4-8 weeks",
    ctaText: "Start Your Project"
  },
  {
    id: "web3-development",
    name: "Web3 & Blockchain Development", 
    description: "Build decentralized applications, smart contracts, and integrate blockchain functionality into existing systems.",
    priceFrom: 3000,
    deliverables: [
      "Smart contract development",
      "Web3 wallet integration",
      "NFT marketplace features",
      "DApp frontend development", 
      "Blockchain data integration",
      "Security auditing"
    ],
    timeline: "6-10 weeks", 
    ctaText: "Build Web3 Solution"
  },
  {
    id: "ai-integration",
    name: "AI & Automation Solutions",
    description: "Integrate AI capabilities, build chatbots, and create automation workflows to streamline business processes.", 
    priceFrom: 1500,
    deliverables: [
      "AI chatbot development",
      "OpenAI API integration",
      "Workflow automation",
      "Data processing pipelines",
      "Custom AI training",
      "Performance monitoring"
    ],
    timeline: "3-6 weeks",
    ctaText: "Automate with AI"
  }
];