import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Qazi Zaid",
    title: "Passionate Software Engineer",
    subtitle:
      "Software Engineer | Bridging Technical Innovation with Strategic Execution",
    bio: "A Software Engineer, Robotics & AI undergraduate, and community leader passionate about building technology that makes a difference. I develop full-stack applications, AI-driven solutions, and automation tools while continuously exploring system design and modern software architecture. Outside of development, I co-organize D4 Community, where I help create opportunities for developers through hackathons, workshops, and technical events. I believe great software is built through continuous learning, collaboration, and a focus on solving meaningful problems.",
    avatar: "/about/ayush.png",
    location: "Chandigarh, India",
    email: "qazi.zaid16@gmail.com",
    phone: "+918082771896",
    resumeUrl: "https://drive.google.com/file/d/1gm5kM_RD4QP2hrfhnx-YgyL08IC2KDHT/view?usp=sharing",
    // website: "https://itsayu.vercel.app",
    languages: [
      // { name: 'Indonesian', level: 'Native' },
      { name: "English", level: "Limited Working" },
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
      slug: "document-q&a-system",
      title: "Document Q&A System",
      description:
        "An intelligent PDF assistant that delivers fast, context-aware answers with source references.",
      longDescription:
        "Document Q&A is an intelligent document analysis system that lets you upload PDFs and ask natural language questions about them. Get instant, context-grounded answers with source citations—no more manual document scanning.",

      techStack: ["PyMuPDF (fitz)", "SentenceTransformer + FAISS", "Ollama (llama3)", "Streamlit"],
      tools: ["VS Code", "Git", "Go Modules"],

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
        },
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
      images: ["/project/studentsapi1.png", "/project/studentsapi2.png"],
    },
    {
      id: "project-2",
      slug: "neoz-ai-chatbot",
      title: "NEO-Z Chatbot",
      description: "A high-performance URL shortening service built with Go.",
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
            "**Hash-Based Generation**: Efficient algorithm for generating short URL identifiers.",
            "**Data Storage**: Persistent mapping between short and long URLs.",
            "**Optimal Performance**: Built for speed with minimal overhead.",
            "**Production-Ready**: Error handling and request validation throughout.",
          ],
        },
        {
          // title: "Learning Outcomes",
          // items: [
          //   "**URL Encoding**: Understanding URL structures and encoding schemes.",
          //   "**Hashing Algorithms**: Implementing collision-free hash functions.",
          //   "**API Design**: Building simple yet powerful RESTful endpoints.",
          //   "**Backend Patterns**: Real-world backend development best practices.",
          // ],
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
      images: ["/project/urlshortener1.png", "/project/urlshortener2.png"],
    },
  experiences: [
    // 1. PROFESSIONAL EXPERIENCE
    {
      id: "prof-0",
      company: "VIDYUTAM VERDE NCESOL PVT. LTD.",
      position: "Edge AI Intern",
      description:
        "Leading frontend development for niwi.ai and primhub.ai using Next.js, React.js, and TypeScript, focusing on fast performance, clean UI, and scalable architecture.",
      responsibilities: [
        "Building and maintaining frontend for niwi.ai and primhub.ai",
        "Developing scalable UI components with React.js and TypeScript",
        "Optimizing performance and core web vitals",
        "Architecting reusable component libraries and design systems",
      ],
      skills: [
        "Pyhton",
        "Machine Learning",
        "AI",
        "Data Analytics",
        "Deep Learning",
      ],
      startDate: "2026-02-02",
      isOngoing: false,
      location: "Hybrid",
      type: "Internship",
      logo: "/assets/niwilogo.png",
      externalLink: "",
    },
    {
      id: "prof-1",
      company: "Muztream",
      position: "UI/UX Associate",
      description:
        "Developed and maintained responsive web applications using ReactJS, PHP, Bootstrap, HTML, JavaScript, and CSS across global client projects.",
      responsibilities: [
        "Building responsive web apps with ReactJS and PHP",
        "Maintaining and extending client-facing web platforms",
        "Collaborating across global project teams",
        "Ensuring cross-browser compatibility and performance",
      ],
      skills: ["User Interface", "User Experience", "UI/UX", "Graphic Designer", "Content Creation", "Social Media"],
      startDate: "2025-01-01",
      endDate: "2025-04-02",
      isOngoing: false,
      location: "Remote",
      type: "Internship",
      logo: "/assets/betabyte.jpg",
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
      type: "Internship",
      logo: "/assets/GravityInfinity.jpg",
      externalLink: "",
    },
    {
      id: "prof-3",
      company: "Nasheedio",
      position: "Social Media Manager",
      description:
        "Led end-to-end social media strategy at Nasheedio, creating graphics and high-performing reels, scaling the main page from 100 to 123K+ followers organically.",
      responsibilities: [
        "Building user-centric web interfaces with React.js",
        "Deploying client solutions to Firebase hosting",
        "Implementing responsive and accessible UI patterns",
        "Collaborating with product team on feature delivery",
      ],
      skills: [
        "Social Media",
        "Analytical Skills",
        "Social Media Graphic Design",
        "Social Media Optimization (SMO)",
        "Social Media Communications",
      ],
      startDate: "2024-04-06",
      endDate: "2024-12-30",
      isOngoing: false,
      location: "Remote",
      type: "internship",
      logo: "/assets/zymo.png",
      externalLink: "",
    },

    // 2. LEADERSHIP & ORGANIZATIONAL EXPERIENCE
    {
      id: "lead-1",
      company: "D4 Community",
      position: "Co-Organizer",
      description:
        "An independent, non-profit open-source community centered around four core pillars: Discite (Learn), Develop, Debug, and Deploy. Connecting tech enthusiasts across India through 50+ events and 3 national hackathons.",
      responsibilities: [
        "Leading community strategy and growth",
        "Organizing 50+ events and 3 national hackathons",
        "Building open-source initiatives and contributor programs",
        "Fostering an inclusive tech ecosystem across India",
      ],
      skills: [
        "Community Building",
        "Open Source",
        "Leadership",
        "Event Management",
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
        "Connecting tech communities and AI enthusiasts with leading professionals, researchers, and engineers. Hosting live in-person and virtual events on TensorFlow, Deep Learning, and real-world AI applications.",
      responsibilities: [
        "Designing GDG Jalandhar event creatives.",
        "Coordinating speaker sessions and workshop logistics",
        "Building partnerships with local tech ecosystem players",
        "Driving member engagement around AI and Deep Learning topics",
      ],
      skills: [
        "Community Building",
        "Event Management",
        "Public Speaking",
        "Developer Relations",
      ],
      startDate: "2025-09-12",
      isOngoing: true,
      location: "Jalandhar",
      type: "volunteer",
      logo: "/assets/mlchandigarh.png",
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
        // "Only alumnus of the college appointed as a member of the Board of Studies (BOS)",
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
      logo: "/assets/dav.png",
    },
  ],
  achievements: [
    {
      id: "ach-1",
      title: "5-Day AI Agents Intensive Course with Google",
      issuer: "United Latino Students Association",
      date: "2025-12-25",
      description:
        "",
      category: "certificate",
    },
    {
      id: "cert-1",
      title: "AWS Academy Graduate - Generative AI Foundations - Training Badge",
      issuer: "Amazon Web Services (AWS)",
      date: "2026-01-28",
      credentialId: "",
      credentialUrl: "https://www.credly.com/badges/b6ef6488-b963-4d1b-8b79-a7492a151231/linked_in_profile",
      type: "Course",
      tags: ["AI", "Generative AI"],
      category: "certification",
      image: "/certificate/xyz.pdf",
    },
     {
      id: "cert-2",
      title: "UI / UX Design Specialization",
      issuer: "California Institute of the Arts",
      date: "2021-09-21",
      credentialId: "",
      credentialUrl: "https://coursera.org/share/e45ca7909fa491d841d302ce930f7f52",
      type: "Course",
      tags: ["UI", "UX", "UI/UX"],
      category: "certification",
      image: "/certificate/xyz.pdf",
    },
    {
      id: "cert-3",
      title: "Digital Skills: Artificial Intelligence",
      issuer: "Accenture",
      date: "2024-08-15",
      credentialId: "",
      credentialUrl: "https://www.futurelearn.com/certificates/6j0795j",
      type: "Course",
      tags: ["AI", "Generative AI"],
      category: "certification",
      image: "/certificate/xyz.pdf",
    },
  ],
  techStack: [
    // Core Languages
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
  gallery: [
    {
      id: "gal-1",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ayush.jpeg",
      category: "",
    },
    {
      id: "gal-2",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ioind.jpeg",
      category: "",
    },
    {
      id: "gal-3",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/devfest24.jpeg",
      category: "",
    },
    {
      id: "gal-4",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/iochd.jpeg",
      category: "",
    },
    {
      id: "gal-5",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2win.jpeg",
      category: "",
    },
    {
      id: "gal-6",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/hnw2g.jpeg",
      category: "",
    },
    {
      id: "gal-7",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/genai.jpeg",
      category: "",
    },
    {
      id: "gal-8",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/mongodb.jpg",
      category: "",
    },
    {
      id: "gal-9",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g1.jpeg",
      category: "",
    },
    {
      id: "gal-10",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g2.jpeg",
      category: "",
    },
    {
      id: "gal-11",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g3.jpeg",
      category: "",
    },
    {
      id: "gal-12",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g4.jpeg",
      category: "",
    },
    {
      id: "gal-13",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g5.jpeg",
      category: "",
    },
    {
      id: "gal-14",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g6.jpeg",
      category: "",
    },
    {
      id: "gal-15",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g7.jpeg",
      category: "",
    },
    {
      id: "gal-16",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g8.jpeg",
      category: "",
    },
    {
      id: "gal-17",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g9.jpeg",
      category: "",
    },
    {
      id: "gal-18",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g10.jpeg",
      category: "",
    },
    {
      id: "gal-19",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g11.jpeg",
      category: "",
    },
    {
      id: "gal-20",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g12.jpeg",
      category: "",
    },
    {
      id: "gal-21",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g13.jpeg",
      category: "",
    },
    {
      id: "gal-22",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g14.jpeg",
      category: "",
    },
    {
      id: "gal-23",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g15.jpeg",
      category: "",
    },
    {
      id: "gal-24",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g16.jpeg",
      category: "",
    },
    {
      id: "gal-25",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g17.jpeg",
      category: "",
    },
    {
      id: "gal-26",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g18.jpeg",
      category: "",
    },
    {
      id: "gal-27",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g19.jpeg",
      category: "",
    },
    {
      id: "gal-28",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g20.jpeg",
      category: "",
    },
    {
      id: "gal-29",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/ayush.jpeg",
      category: "",
    },
    {
      id: "gal-30",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g22.jpeg",
      category: "",
    },
    {
      id: "gal-31",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g23.jpeg",
      category: "",
    },
    {
      id: "gal-32",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g24.jpeg",
      category: "",
    },
    {
      id: "gal-33",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g25.jpeg",
      category: "",
    },
    {
      id: "gal-34",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g26.jpeg",
      category: "",
    },
    {
      id: "gal-35",
      title: "",
      description: "",
      date: "",
      type: "image",
      url: "/gallery/g27.jpeg",
      category: "",
    },
  ],
};
