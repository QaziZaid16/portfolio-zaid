import { PortfolioData } from "@/types";

const galleryImages = [
  { url: "/gallery/optimized/20241109-135624.webp", date: "2024-11-09" },
  { url: "/gallery/optimized/20241109-140057.webp", date: "2024-11-09" },
  { url: "/gallery/optimized/20250302-154227.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/20251227-135404.webp", date: "2025-12-27" },
  { url: "/gallery/optimized/dsc02510.webp", date: "2025-11-29" },
  { url: "/gallery/optimized/dsc02581.webp", date: "2025-11-29" },
  { url: "/gallery/optimized/dsc03348.webp", date: "2015-03-14" },
  { url: "/gallery/optimized/dsc03598.webp", date: "2015-03-14" },
  { url: "/gallery/optimized/img20261003175036-01.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-1690.webp", date: "2026-03-08" },
  { url: "/gallery/optimized/img-1745.webp", date: "2026-03-08" },
  { url: "/gallery/optimized/img-20250118-142930-1.webp", date: "2025-01-18" },
  { url: "/gallery/optimized/img-20250301-234929.webp", date: "2025-03-01" },
  { url: "/gallery/optimized/img-20250302-175153503-hdr-portrait.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250302-184453.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250302-184551298-hdr.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250302-184638900-hdr.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250302-184846140-hdr-portrait.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250302-184935516-hdr.webp", date: "2025-03-02" },
  { url: "/gallery/optimized/img-20250802-144758.webp", date: "2025-08-02" },
  { url: "/gallery/optimized/img-20250802-145458.webp", date: "2025-08-02" },
  { url: "/gallery/optimized/img-20250920-133922.webp", date: "2025-09-20" },
  { url: "/gallery/optimized/img-20251221-152105.webp", date: "2025-12-21" },
  { url: "/gallery/optimized/img-20260218-114202-1.webp", date: "2026-02-18" },
  { url: "/gallery/optimized/img-20260218-115921.webp", date: "2026-02-18" },
  { url: "/gallery/optimized/img-20260218-134127.webp", date: "2026-02-18" },
  { url: "/gallery/optimized/img-20260218-145649-1.webp", date: "2026-02-18" },
  { url: "/gallery/optimized/img-20260620-083059-1.webp", date: "2026-06-20" },
  { url: "/gallery/optimized/img-20260620-092519-1.webp", date: "2026-06-20" },
  { url: "/gallery/optimized/img-20260620-143838.webp", date: "2026-06-20" },
  { url: "/gallery/optimized/img-20260620-143849-1.webp", date: "2026-06-20" },
  { url: "/gallery/optimized/img-20260620-171251.webp", date: "2026-06-20" },
  { url: "/gallery/optimized/img-20260919-141251.webp", date: "2026-09-19" },
  { url: "/gallery/optimized/img-20260919-155532.webp", date: "2026-09-19" },
  { url: "/gallery/optimized/img-20260919-162715.webp", date: "2026-09-19" },
  { url: "/gallery/optimized/img-20260919-164327.webp", date: "2026-09-19" },
  { url: "/gallery/optimized/img-20261003-125334.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-20261003-125355.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-20261003-125419.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-20261003-170421.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-20261003-172126-1.webp", date: "2026-10-03" },
  { url: "/gallery/optimized/img-20261031-165038.webp", date: "2026-10-31" },
  { url: "/gallery/optimized/img-5095.webp", date: "2026-02-07" },
  { url: "/gallery/optimized/img-5099.webp", date: "2026-02-07" },
  { url: "/gallery/optimized/img-5106.webp", date: "2026-02-07" },
  { url: "/gallery/optimized/img-5495.webp", date: "2024-12-15" },
  { url: "/gallery/optimized/img-5498.webp", date: "2024-12-15" },
  { url: "/gallery/optimized/img-6466.webp", date: "2026-03-07" },
  { url: "/gallery/optimized/img-6861.webp", date: "2026-03-08" },
  { url: "/gallery/optimized/img-8515.webp", date: "" },
  { url: "/gallery/optimized/mvimg-20251206-170720.webp", date: "2025-12-06" },
] as const;

export const portfolioData: PortfolioData = {
  personal: {
    name: "Qazi Zaid",
    title: "Building Intelligent Products & Developer Communities",
    subtitle:
      "Software Engineer | Full-Stack Developer | AI & Community Builder",
    bio: "I am a Robotics & AI undergraduate, software engineer, and community builder focused on creating intelligent products and practical software. I work across full-stack development, AI-powered applications, automation, and modern backend systems. As Co-Organizer of D4 Community, I also help lead community operations and execute developer events, bringing people together to learn, build, and collaborate.",
    avatar: "/about/Zaidpfp.png",
    location: "Mohali, Punjab, India",
    email: "qazi.zaid16@gmail.com",
    phone: "+918082771896",
    resumeUrl: "https://drive.google.com/file/d/1RDonLuuae-M-1UyDPc8MDkjqGZe3cQ4Y/view?usp=sharing",
    // website: "https://itsayu.vercel.app",
    languages: [
      // { name: 'Indonesian', level: 'Native' },
      { name: "English", level: "Professional" },
      // { name: 'French', level: 'Elementary' },
    ],
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/QaziZaid16",
        icon: "github",
        username: "QaziZaid16",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/qazi-zaid/",
        icon: "linkedin",
        username: "qazi-zaid",
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/qazizaid.dev",
        icon: "instagram",
        username: "qazizaid.dev",
      },
      {
        platform: "Twitter",
        url: "https://x.com/Qazi__Zaid",
        icon: "twitter",
        username: "Qazi__Zaid",
      },
      // {
      //   platform: "Discord",
      //   url: "https://discord.com/users/itsayu",
      //   icon: "discord",
      //   username: "itsayu.",
      // },
      // {
      //   platform: "Spotify",
      //   url: "https://open.spotify.com/user/31gsiihpgmuut5g6xlis2gtysmxe",
      //   icon: "spotify",
      //   username: "Ayush",
      // },
    ],
  },
  projects: [
    {
      id: "project-1",
      slug: "document-qa-system",
      title: "Document Q&A System",
      description:
        "An intelligent PDF assistant that delivers fast, context-aware answers with source references.",
      longDescription:
        "Document Q&A is an intelligent document analysis system that lets you upload PDFs and ask natural language questions about them. Get instant, context-grounded answers with source citations—no more manual document scanning.",

      techStack: ["PyMuPDF (fitz)", "SentenceTransformer + FAISS", "Ollama (llama3)", "Streamlit"],
      tools: ["VS Code", "Git", "Streamlit"],

      status: "completed",
      repoUrl: "https://github.com/QaziZaid16/Document-Q-A-System",
      demoUrl: "#",

      startDate: "2026-05-27",
      // role: "Go Developer",
      customTimeline: "2026",
      team: "Personal Project",

      highlights: [
        "PyMuPDF (fitz)",
        "SentenceTransformer + FAISS",
        "Ollama (llama3)",
        "Streamlit",
      ],
      category: "RAG",

      features: [
        {
          title: "Core Features",
          items: [
            "**Natural Language Q&A**: Ask questions in plain English, get instant answers",
            "**Source Attribution**: Every answer includes citations from your document",
            "**Interactive UI**: Clean, organized interface with sidebar controls and chat history",
            "**Local Processing**: All processing happens locally—your documents never leave your machine",
            "**Error Handling**: Full error handling with Ollama status checks and graceful failures",
            "**Debug Visibility**: Console logs track all pipeline stages with [DEBUG] prefixes",
          ],
        },
        {
          title: "Architecture & Design",
          items: [
            "**[PDF EXTRACTION] → Extract text, clean, create chunks (500 words, 50-word overlap)",
            "**[EMBEDDING] → Convert chunks to 384-dimensional vectors (SentenceTransformer)",
            "**[INDEXING] → Build searchable FAISS index (L2-distance similarity)",
            "**[RETRIEVAL] → Find top-K similar chunks for query (default K=3)",
            "**[GENERATION] → Inject context into prompt, query LLM (Ollama llama3)",
            "**User Gets Grounded Answer + Sources",
          ],
        },
        // {
        //   title: "Learning Focus",
        //   items: [
        //     "**Go Best Practices**: Idiomatic Go code with proper package organization.",
        //     "**Backend Fundamentals**: REST API design, routing, and request handling.",
        //     "**System Design**: Building scalable backend services from scratch.",
        //   ],
      ],

      // installation: [
      //   {
      //     title: "Clone the Repository",
      //     code: "git clone https://github.com/Itsayu/students-api.git\ncd students-api",
      //     type: "code",
      //   },
      //   {
      //     title: "Install Dependencies",
      //     code: "go mod download\ngo mod tidy",
      //     type: "code",
      //   },
      //   {
      //     title: "Configure Environment",
      //     code: "cp config/.env.example config/.env\n# Update configuration as needed",
      //     type: "code",
      //   },
      //   {
      //     title: "Run the API",
      //     code: "go run cmd/students-api/main.go\n# API starts on localhost:8080",
      //     type: "code",
      //   },
      // ],

      // challengesAndSolutions: [
      //   {
      //     problem: "Learning Go project structure and conventions",
      //     solution:
      //       "Organized code into logical layers: cmd (entry point), internal (business logic), config (configuration), and storage (data access).",
      //   },
      //   {
      //     problem: "Building scalable API endpoints",
      //     solution:
      //       "Implemented proper routing, request/response handling, and error management following Go best practices.",
      //   },
      //   {
      //     problem: "Data persistence and validation",
      //     solution:
      //       "Created efficient storage layer with proper data validation and error handling for consistency.",
      //   },
      // ],
      images: ["/project/docqa.png"],
    },
    {
      id: "project-2",
      slug: "neoz-ai-chatbot",
      title: "NEO-Z Chatbot",
      description: "A full-stack AI chatbot and multimodal workspace with text, image, file, voice, and hardware-interaction capabilities.",
      longDescription:
        "NEO-Z is a cinematic AI workspace and chatbot application. It uses a Node.js backend with MongoDB for auth/chat storage, OpenRouter for text generation, Gemini for image analysis, and an optional Python microservice for voice/audio tasks.",

      techStack: ["React (Vite)", "Tailwind CSS", "React Markdown and remark-gfm", "Web Speech API and Web Serial API", "Node.js and Express", "MongoDB", "OpenRouter (google/gemma-4-31b-it by default)", "FastAPI", "Docker", "SpeechRecognition and Pydub"],
      tools: ["VS Code", "Git"],

      status: "completed",
      repoUrl: "https://github.com/QaziZaid16/neoz-ai-chatbot",
      demoUrl: "#",

      startDate: "2026-05-12",
      role: "Full Stack Developer",
      customTimeline: "May 2026",
      team: "Personal Project",

      // highlights: [
      //   "URL Compression",
      //   "Fast Redirects",
      //   "Collision-Free Hashing",
      //   "Clean API",
      // ],
      category: "Backend & Systems",

      features: [
        {
          title: "Core Features",
          items: [
            "**Cinematic Hacker UI**: Custom dark-themed interface built with React and Tailwind CSS.",
            "**Real-Time Streaming**: Text responses stream from OpenRouter with Server-Sent Events (SSE).",
            "**Hardware Protocol**: Native Web Serial API support for connected hardware via custom <CMD> tags.",
            "**Data & Vision Processing**: Upload images for visual analysis or attach CSV files for bulk data interpretation.",
          ],
        },
        {
          title: "Technical Implementation",
          items: [
            "**AI Chat**: Streaming text generation through OpenRouter using hosted language models.",
            "**Conversation Management**: Authentication and persistent chat history backed by MongoDB.",
            "**Multimodal Input**: Image analysis and CSV/document-style data interpretation.",
            "**Voice & Hardware**: Optional Python audio service and Web Serial API integration.",
          ],
        },
      ],

      installation: [
        {
          title: "Clone the Repository",
          code: "git clone https://github.com/QaziZaid16/neoz-ai-chatbot.git",
          type: "code",
        },
        {
          title: "Setup Core Backend",
          code: "cd backend, npm install, # Create a .env file with MONGO_URI (or MONGODB_URI), OPENROUTER_API_KEY, GEMINI_API_KEY, and JWT_SECRET #, npm start",
          type: "code",
        },
        {
          title: "Setup Frontend",
          code: "cd frontend, npm install, npm run dev",
          type: "code",
        },
        {
          title: "Optional Python Microservice",
          code: "cd python-service, pip install -r requirements.txt, uvicorn main:app --reload",
          type: "code",
        },
      ],

      // challengesAndSolutions: [
      //   {
      //     problem: "Generating unique short identifiers without collisions",
      //     solution:
      //       "Implemented a base62 encoding system combined with sequential IDs or custom hashing to ensure every long URL gets a unique short code.",
      //   },
      //   {
      //     problem: "Handling high-volume redirect requests efficiently",
      //     solution:
      //       "Used fast in-memory lookups and optimized database queries to serve redirects in milliseconds without bottlenecks.",
      //   },
      //   {
      //     problem: "Keeping the implementation minimal yet complete",
      //     solution:
      //       "Focused on core functionality with clean Go code — no unnecessary frameworks or dependencies, just pure backend logic.",
      //   },
      //   {
      //     problem: "URL validation and error handling",
      //     solution:
      //       "Added comprehensive validation for incoming URLs and proper HTTP error responses for edge cases.",
      //   },
      // ],
      images: ["/project/neoz.png"],
    },
  ],
  experiences: [
    // 1. PROFESSIONAL EXPERIENCE
    {
      id: "prof-0",
      company: "VIDYUTAM VERDE NCESOL PVT. LTD.",
      position: "Edge AI Intern",
      description:
        "Worked in the AER (Advanced Energy Research) Lab with a focus on Edge AI, embedded systems, machine learning, and intelligent automation.",
      responsibilities: [
        "Exploring Edge AI applications and machine learning on edge devices",
        "Working with embedded systems and platforms such as Raspberry Pi and ESP32",
        "Using Python and C/C++ for development and experimentation",
        "Contributing to work aligned with sustainable energy systems, IoT, and intelligent automation",
      ],
      skills: ["Edge AI", "Embedded Systems", "Machine Learning", "Intelligent Automation", "Python", "C/C++", "Raspberry Pi", "ESP32"],
      startDate: "2026-02-02",
      endDate: "2026-07-30",
      isOngoing: false,
      location: "Hybrid",
      type: "internship",
      logo: "/assets/VVM.png",
      externalLink: "",
    },
    {
      id: "prof-1",
      company: "Muztream",
      position: "UI/UX Associate",
      description:
        "Worked on the product's UI/UX from the ground up, while also leading social media strategy and growing the brand's online presence.",
      responsibilities: [
        "Conducting design research and creating wireframes and high-fidelity UI designs",
        "Managing a team of two designers and maintaining design consistency",
        "Planning social media content and creating reels to build brand presence",
        "Growing the social media page organically from 0 to 10K+ followers",
      ],
      skills: ["UI/UX Design", "Figma", "Wireframing", "Prototyping", "Team Management", "Social Media Strategy", "Content Creation"],
      startDate: "2025-01-01",
      endDate: "2025-04-02",
      isOngoing: false,
      location: "Remote",
      type: "internship",
      logo: "/assets/muztream.png",
      externalLink: "",
    },
    {
      id: "prof-2",
      company: "VentureNest : CGC Jhanjeri TBI Association",
      position: "Graphic Designer",
      description:
        "Worked as a Graphic Designer at VentureNest – CGC Jhanjeri TBI Association, creating social media creatives, banners, and flyers to strengthen brand identity and event promotions.",
      responsibilities: [
        "Developing and updating responsive web applications",
        "Modernizing legacy web assets for improved UX",
        "Working with design and backend teams on client deliverables",
        "Testing and debugging across devices and browsers",
      ],
      skills: ["Graphic Designer", "Social Media", "Event Management"],
      startDate: "2024-12-10",
      endDate: "2025-03-20",
      isOngoing: false,
      location: "Hybrid",
      type: "internship",
      logo: "/assets/venturenest.png",
      externalLink: "",
    },
    {
      id: "prof-3",
      company: "Nasheedio",
      position: "Social Media Manager",
      description:
        "Led end-to-end social media strategy, creating graphics and high-performing reels and growing the main page organically from 100 to 123K+ followers. Also launched and independently managed the English page, growing it from 0 to 50K+ followers.",
      responsibilities: [
        "Planning and executing social media strategy and content calendars",
        "Creating graphics, editing videos, and producing short-form content",
        "Growing the main page from 100 to 123K+ followers organically",
        "Launching and managing the English page independently, growing it from 0 to 50K+ followers",
        "Using content performance and analytics to improve reach and engagement",
      ],
      skills: [
        "Social Media Strategy",
        "Content Creation",
        "Video Editing",
        "Social Media Graphic Design",
        "Social Media Optimization (SMO)",
        "Analytics",
      ],
      startDate: "2024-04-06",
      endDate: "2024-12-30",
      isOngoing: false,
      location: "Remote",
      type: "internship",
      logo: "/assets/nasheedio.png",
      externalLink: "",
    },

    // 2. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
    {
      id: "lead-1",
      company: "D4 Community",
      position: "Co-Organizer",
      description:
        "Co-organizing D4 Community, a non-profit, student and professional-led developer community connecting people through learning, building, debugging, and deploying technology.",
      responsibilities: [
        "Overseeing overall community operations and coordination end-to-end",
        "Planning and executing developer events, workshops, and hackathons",
        "Working with centralized and campus teams across the community",
        "Supporting community growth, contributor engagement, and cross-campus collaboration",
      ],
      skills: [
        "Community Building",
        "Leadership",
        "Operations",
        "Event Management",
        "Team Coordination",
      ],
      startDate: "2023-10-10",
      isOngoing: true,
      location: "India",
      type: "volunteer",
      logo: "/assets/d4community.png",
      externalLink: "https://d4community.com",
    },
          {
      id: "lead-2",
      company: "Google Developer Groups Jalandhar (GDG Jalandhar)",
      position: "UI/UX Designer",
      description:
        "Designing event creatives and visual communication for GDG Jalandhar while contributing to its developer community activities.",
      responsibilities: [
        "Creating event creatives and social media graphics using Figma",
        "Supporting event branding and visual communication",
        "Contributing to community activities and event execution",
        "Working on creative assets for DevFest 2025 and DevFest 2026",
      ],
      skills: [
        "UI/UX Design",
        "Figma",
        "Graphic Design",
        "Visual Communication",
        "Community Engagement",
      ],
      startDate: "2025-09-12",
      isOngoing: true,
      location: "Jalandhar",
      type: "volunteer",
      logo: "/assets/gdg.png",
      externalLink: "",
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Chandigarh Group of Colleges, Mohali, Punjab",
      degree: "Bachelor of Technology",
      major: "Robotics And AI",
      startDate: "2023",
      endDate: "2027",
      isOngoing: true,
      // gpa: "3.8/4.0",
      activities: ["Computer Science", "D4 Community"],
      achievements: [
        "Organized multiple national-level events",
      ],
      logo: "/assets/cgc.svg",
    },
    {
      id: "edu-2",
      institution: "Delhi Public School, Budgam",
      degree: "12th",
      major: "PCM",
      startDate: "2020",
      endDate: "2023",
      isOngoing: false,
      activities: ["Science Studies"],
      achievements: [
        "Strong foundation in mathematics, physics, Chemistry",
        "Analytical thinking development",
      ],
      logo: "/assets/DPS.png",
    },
  ],
  achievements: [
    {
      id: "cert-1",
      title: "Building AI-Powered Search with MongoDB Vector Search",
      issuer: "MongoDB",
      date: "2026-02-01",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/70a118b1-7ac5-4e15-b9ec-566238b3ed2c/linked_in_profile",
      type: "Certification",
      tags: ["MongoDB", "Vector Search", "AI", "Search"],
      category: "certification",
    },
    {
      id: "cert-2",
      title: "Search with MongoDB",
      issuer: "MongoDB",
      date: "2026-02-01",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/5ada583a-68ca-49ad-81be-e7c7e541d840/linked_in_profile",
      type: "Certification",
      tags: ["MongoDB", "Search", "Database"],
      category: "certification",
    },
    {
      id: "cert-3",
      title: "AWS Academy Graduate - Generative AI Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: "2026-01-01",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/b6ef6488-b963-4d1b-8b79-a7492a151231/linked_in_profile",
      type: "Training Badge",
      tags: ["AWS", "Generative AI", "Artificial Intelligence"],
      category: "certification",
    },
    {
      id: "cert-4",
      title: "5-Day AI Agents Intensive Course with Google",
      issuer: "United Latino Students Association",
      date: "2025-12-01",
      credentialId: "",
      credentialUrl: "https://www.kaggle.com/certification/badges/qazizaid/105",
      type: "Course",
      tags: ["AI Agents", "Generative AI", "Google"],
      category: "certification",
    },
    {
      id: "cert-5",
      title: "From Relational Model (SQL) to MongoDB's Document Model",
      issuer: "MongoDB",
      date: "2025-08-01",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/538762e1-470d-4d37-b446-13847dbd278b/linked_in_profile",
      type: "Certification",
      tags: ["SQL", "MongoDB", "Database Design"],
      category: "certification",
    },
    {
      id: "cert-6",
      title: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
      issuer: "MongoDB",
      date: "2025-08-01",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/e2b0f53a-8ae5-4373-a9ad-5b1d8da620be/linked_in_profile",
      type: "Skill Badge",
      tags: ["MongoDB", "Schema Design", "Database Design"],
      category: "certification",
    },
    {
      id: "cert-7",
      title: "Digital Skills: Artificial Intelligence",
      issuer: "Accenture",
      date: "2024-08-01",
      credentialId: "",
      credentialUrl: "https://www.futurelearn.com/certificates/6j0795j",
      type: "Course",
      tags: ["Artificial Intelligence", "AI"],
      category: "certification",
    },
    {
      id: "cert-8",
      title: "Introduction to MongoDB for Students",
      issuer: "MongoDB",
      date: "2024-07-01",
      credentialId: "",
      credentialUrl: "https://learn.mongodb.com/c/rWRPT2S6RvCCoMiuO18XvA",
      type: "Course",
      tags: ["MongoDB", "Database"],
      category: "certification",
    },
  ],
  techStack: [
    // Core Languages
    {
      name: "Python",
      icon: "https://cdn.simpleicons.org/python",
      category: "language",
    },
    {
      name: "Java",
      icon: "https://cdn.simpleicons.org/openjdk",
      category: "language",
    },
    {
      name: "C",
      icon: "https://cdn.simpleicons.org/c",
      category: "language",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.simpleicons.org/typescript",
      category: "language",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.simpleicons.org/javascript",
      category: "language",
    },
    {
      name: "C++",
      icon: "https://cdn.simpleicons.org/c++",
      category: "language",
    },

    // Frontend & Frameworks
    {
      name: "React.js",
      icon: "https://cdn.simpleicons.org/react",
      category: "framework",
    },
    {
      name: "Next.js",
      icon: "https://cdn.simpleicons.org/nextdotjs",
      category: "framework",
    },
    {
      name: "Flutter",
      icon: "https://cdn.simpleicons.org/flutter",
      category: "framework",
    },
    {
      name: "FastAPI",
      icon: "https://cdn.simpleicons.org/fastapi",
      category: "framework",
    },
    {
      name: "Node.js",
      icon: "https://cdn.simpleicons.org/nodedotjs",
      category: "framework",
    },

    // Libraries
    {
      name: "Tailwind CSS",
      icon: "https://cdn.simpleicons.org/tailwindcss",
      category: "library",
    },

    // Databases
    {
      name: "MongoDB",
      icon: "https://cdn.simpleicons.org/mongodb",
      category: "database",
    },
    {
      name: "Redis",
      icon: "https://cdn.simpleicons.org/redis",
      category: "database",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.simpleicons.org/postgresql",
      category: "database",
    },

    // Cloud Native & Infrastructure
    {
      name: "Supabase",
      icon: "https://cdn.simpleicons.org/supabase",
      category: "tool",
    },
    {
      name: "Docker",
      icon: "https://api.iconify.design/logos:docker-icon.svg",
      category: "tool",
    },
    {
      name: "Git",
      icon: "https://api.iconify.design/logos:git-icon.svg",
      category: "tool",
    },
    {
      name: "GitHub",
      icon: "https://api.iconify.design/logos:github-icon.svg",
      category: "tool",
    },
    { 
      name: "n8n", 
      icon: "https://cdn.simpleicons.org/n8n", category: "tool" },
    {
      name: "Postman",
      icon: "https://api.iconify.design/logos:postman-icon.svg",
      category: "tool",
    },
    {
      name: "AWS",
      icon: "https://api.iconify.design/logos:aws.svg",
      category: "tool",
    },
    {
      name: "Vercel",
      icon: "https://api.iconify.design/logos:vercel-icon.svg",
      category: "tool",
    },
    { 
      name: "v0", 
      icon: "https://cdn.simpleicons.org/v0", category: "tool" },
    {
      name: "n8n",
      icon: "https://cdn.simpleicons.org/n8n",
      category: "tool",
    },
  ],
  hardSkills: [
    // Software Engineering & Architecture
    {
      name: "Full Stack Development",
      level: "beginner",
      category: "software",
      description:
        "Engineering scalable web architectures from pixel-perfect frontends to robust databases.",
    },
    {
      name: "System Architecture",
      level: "beginner",
      category: "software",
      description:
        "Designing robust, scalable, and high-performance system architectures for complex applications.",
    },

    // Artificial Intelligence & Advanced Analytics
    {
      name: "Computer Vision",
      level: "beginner",
      category: "ai",
      description:
        "Developing real-time object detection, pattern recognition, and spatial analysis systems.",
    },
    {
      name: "Large Language Models (LLM)",
      level: "beginner",
      category: "ai",
      description:
        "Expertise in fine-tuning open-source models, RAG architectures, and complex prompt engineering.",
    },
    {
      name: "AI Agents & Autonomy",
      level: "beginner",
      category: "ai",
      description:
        "Designing autonomous systems with recursive reasoning and decision-making capabilities.",
    },

    // Cloud & DevOps
    {
      name: "Google Cloud Platform",
      level: "beginner",
      category: "cloud",
      description:
        "Utilizing cloud infrastructure and services for scalable application hosting.",
    },
  ],
  softSkills: [
    {
      name: "Problem Solving",
      description: "Innovative debugging and algorithmic optimization",
    },
    {
      name: "Systemic Thinking",
      description: "Designing robust, scalable end-to-end architectures",
    },
    {
      name: "Critical Thinking",
      description:
        "Analytical approach to solving complex engineering challenges",
    },
    {
      name: "Continuous Learning",
      description: "Staying updated with state-of-the-art AI research",
    },
    {
      name: "Analytical Thinking",
      description: "Breaking down complex data into actionable insights",
    },
    {
      name: "Adaptability",
      description: "Quickly mastering new frameworks and AI models",
    },
    {
      name: "Leadership",
      description: "Leading engineering teams and managing complex projects",
    },
    {
      name: "Communication",
      description: "Translating complex AI concepts for stakeholders",
    },
    {
      name: "Teamwork",
      description: "Collaborative development in cross-functional agile teams",
    },
  ],
  tools: [
    {
      name: "VS Code",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      category: "ide",
    },
    {
      name: "Figma",
      icon: "https://cdn.simpleicons.org/figma",
      category: "design",
    },
    {
      name: "GitHub",
      icon: "https://cdn.simpleicons.org/github",
      category: "devops",
    },
    {
      name: "Git",
      icon: "https://cdn.simpleicons.org/git",
      category: "devops",
    },
    {
      name: "Postman",
      icon: "https://cdn.simpleicons.org/postman",
      category: "devops",
    },
    {
      name: "Ollama",
      icon: "https://cdn.simpleicons.org/ollama",
      category: "devops",
    },
    {
      name: "n8n",
      icon: "https://cdn.simpleicons.org/n8n",
      category: "devops",
    },
    {
      name: "Vercel",
      icon: "https://cdn.simpleicons.org/vercel",
      category: "devops",
    },
    {
      name: "V0",
      icon: "https://cdn.simpleicons.org/v0",
      category: "devops",
    },
    {
      name: "Claude",
      icon: "https://cdn.simpleicons.org/Claude",
      category: "devops",
    },
  ],
  faqs: [
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in Full Stack Development, building scalable web applications using React, Next.js, JavaScript, Python, Java, MongoDB, and SQL. I also have experience with AI, automation, and modern software engineering.",
  },
  {
    question: "What are you currently learning?",
    answer:
      "I'm currently exploring Artificial Intelligence, Large Language Models (LLMs), system design, cloud technologies, and advanced Data Structures & Algorithms while preparing for GATE CSE 2027.",
  },
  {
    question: "Are you available for opportunities?",
    answer:
      "Yes! I'm open to software engineering internships, full-time roles, freelance projects, and collaborations involving Full Stack Development, AI-powered applications, automation, and developer tools.",
  },
  {
    question: "What communities are you involved with?",
    answer:
      "I'm a Co-Organizer at D4 Community, where I organize hackathons, workshops, and developer events that bring together students, professionals, and tech enthusiasts to learn, build, and collaborate.",
  },
  {
    question: "What kind of projects do you enjoy building?",
    answer:
      "I enjoy building full-stack web applications, AI-powered tools, automation systems, developer platforms, and products that solve real-world problems while delivering a great user experience.",
  },
],
  blogs: [],
  // blogs: [
  //   {
  //     id: "blog-1",
  //     slug: "future-of-ai-agents",
  //     title: "The Future of AI Agents in Enterprise",
  //     excerpt:
  //       "How autonomous agents are redefining software architecture and decision-making processes.",
  //     content: "Detailed exploration of AI agents...",
  //     image:
  //       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-03-20",
  //     category: "applied-ai",
  //     tags: ["AI", "Agents", "Enterprise"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "5",
  //   },
  //   {
  //     id: "blog-2",
  //     slug: "web3-ux-challenges",
  //     title: "Overcoming Web3 UX Challenges",
  //     excerpt:
  //       "Strategies for building decentralized applications that feel as smooth as Web2.",
  //     content: "UX in Web3 is critical...",
  //     image:
  //       "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-03-15",
  //     category: "more",
  //     tags: ["Web3", "Blockchain", "UX"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "4",
  //   },
  //   {
  //     id: "blog-3",
  //     slug: "mastering-nextjs-performance",
  //     title: "Mastering Next.js Performance",
  //     excerpt:
  //       "Advanced techniques for optimizing Core Web Vitals in modern React applications.",
  //     content: "Performance optimization...",
  //     image:
  //       "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-03-05",
  //     category: "software-development",
  //     tags: ["Next.js", "React", "Performance"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "6",
  //   },
  //   {
  //     id: "blog-4",
  //     slug: "ai-driven-security",
  //     title: "AI-Driven Cybersecurity",
  //     excerpt:
  //       "Using deep learning to detect and prevent modern network intrusion.",
  //     content: "Cybersecurity with AI...",
  //     image:
  //       "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-02-28",
  //     category: "applied-ai",
  //     tags: ["AI", "Security", "Deep Learning"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "7",
  //   },
  //   {
  //     id: "blog-5",
  //     slug: "llm-fine-tuning",
  //     title: "Fine-Tuning LLMs locally",
  //     excerpt:
  //       "A guide to optimizing open-source models using Ollama and LoRA techniques.",
  //     content: "Local LLM fine-tuning...",
  //     image:
  //       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-02-15",
  //     category: "applied-ai",
  //     tags: ["LLM", "Python", "Ollama"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "8",
  //   },
  //   {
  //     id: "blog-6",
  //     slug: "smart-contract-security",
  //     title: "Smart Contract Audit Patterns",
  //     excerpt: "Common vulnerabilities and how to prevent them in Solidity.",
  //     content: "Audit patterns...",
  //     image:
  //       "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-02-01",
  //     category: "more",
  //     tags: ["Solidity", "Ethereum", "Security"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "5",
  //   },
  //   {
  //     id: "blog-7",
  //     slug: "modern-state-management",
  //     title: "Modern State Management in React",
  //     excerpt:
  //       "Comparing Zustand, Redux Toolkit, and React Context for large-scale apps.",
  //     content: "State management...",
  //     image:
  //       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-01-25",
  //     category: "software-development",
  //     tags: ["React", "Zustand", "Architecture"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "4",
  //   },
  //   {
  //     id: "blog-8",
  //     slug: "iot-edge-computing",
  //     title: "Edge Computing with ESP32",
  //     excerpt:
  //       "Implementing real-time data processing at the edge for industrial IoT.",
  //     content: "Edge computing...",
  //     image:
  //       "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-01-10",
  //     category: "software-development",
  //     tags: ["IoT", "ESP32", "Edge"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "6",
  //   },
  //   {
  //     id: "blog-9",
  //     slug: "ai-in-healthcare",
  //     title: "AI Transformation in Healthcare",
  //     excerpt:
  //       "How computer vision is assisting in medical diagnostics and data analysis.",
  //     content: "Healthcare AI...",
  //     image:
  //       "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-01-05",
  //     category: "applied-ai",
  //     tags: ["Healthcare", "AI", "Ethics"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "7",
  //   },
  //   {
  //     id: "blog-10",
  //     slug: "the-architects-manifesto",
  //     title: "Digital Garden: The Architect's Manifesto",
  //     excerpt:
  //       "Reflecting on my journey as an AI Engineer and the philosophy behind building intelligent, scalable systems.",
  //     content:
  //       "My journey into the world of technology hasn't been just about code...",
  //     image:
  //       "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop",
  //     date: "2026-03-31",
  //     category: "about-me",
  //     tags: ["Philosophy", "Engineering", "About Me"],
  //     author: { name: "Ayush", avatar: "/about/ayush.jpeg" },
  //     readTime: "5",
  //   },
  // ],
  gallery: galleryImages.map((image, index) => ({
    id: `gal-${index + 1}`,
    title: "",
    description: "",
    date: image.date,
    type: "image",
    url: image.url,
    category: "",
  })),
};
