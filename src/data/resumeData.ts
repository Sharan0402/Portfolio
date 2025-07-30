import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Sharan Vaitheeswaran",
    title: "Software Engineer",
    location: "Seattle, WA",
    phone: "+1 425 625 3579",
    email: "vsharan0402@gmail.com", 
    linkedin: "https://linkedin.com/in/sharan-vaitheeswaran",
    github: "https://github.com/Sharan0402",
    short_summary:"I’m a Software Engineer building scalable web apps and backend systems. I’ve worked across the stack using tools like React, Angular, and Python, with a strong focus on designing APIs, optimizing databases, and deploying services on AWS with Kubernetes. I care deeply about writing clean, maintainable code and solving complex problems through collaboration.",
    summary: "Software Engineer with over 2 years of full-stack experience building scalable web applications and backend systems. Comfortable working across the stack with tools like React, Angular, and Python, and experienced in designing APIs, optimizing database queries, and deploying services on AWS with Kubernetes. Focused on performance, maintainability, and clean code, with a collaborative approach to solving real-world engineering problems."
  },
  
  education: [
    {
      institution: "University of Washington",
      degree: "Master of Science",
      field: "Computer Science",
      gpa: "3.9/4",
      endDate: "Jun 2025"
    },
    {
      institution: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor of Science", 
      field: "Computer Science",
      gpa: "3.7/4",
      endDate: "Jun 2023"
    }
  ],

  experience: [
    {
      company: "University of Washington",
      position: "Graduate Research Assistant",
      startDate: "Feb 2024",
      endDate: "May 2025",
      achievements: [
        "Developed full-stack solutions by creating backend microservices and dynamic UI components for a college affordability platform, supporting government-level applications.",
        "Refactored RESTful APIs and profiled system performance, reducing latency by 30% and achieving 56ms response times.",
        "Secured AWS infrastructure by enforcing data separation through subnet isolation and strategic VPC peering, aligning with cloud-based architecture best practices.",
        "Managed CI/CD pipelines using Kubernetes (K3S) and migrated container registries to GitHub Container Registry, optimizing the Software Development Lifecycle.",
        "Implemented a robust testing framework with Locust and Puppeteer to simulate over 500 concurrent sessions, ensuring response integrity and system scalability.",
        "Configured Prometheus alerts and Grafana dashboards for Linux server monitoring, upholding system reliability and uptime.",
        "Built interactive UI components with React.js and Recharts to render dynamic 2D plots, enhancing user experience and data visualization in real time."
      ]
    },
    {
      company: "Fitx120",
      position: "Software Development Engineer",
      startDate: "Jan 2023",
      endDate: "Sep 2023",
      achievements: [
        "Constructed a Progressive Web App using Angular (v15) to streamline workflows such as registration, onboarding, and cohort-based learning, resulting in a 25% increase in customer retention for 2000+ users.",
        "Designed a smart data extraction pipeline powered by TensorFlow to derive insights from user food and lifestyle data, thereby enhancing personalized coaching effectiveness.",
        "Optimized NoSQL database interactions with MongoDB, improving data retrieval turnaround time by 35% and ensuring efficient database design.",
        "Enhanced system robustness by extending test coverage from 65% to 88% with Jest, reducing QA-reported bugs and building deployment confidence.",
        "Improved UI responsiveness by 45% (80ms) through Webpack optimizations such as lazy loading and bundle splitting, fortifying frontend performance."
      ]
    },
    {
      company: "Amrita Vishwa Vidyapeetham",
      position: "Software Engineer Intern",
      startDate: "Sep 2022",
      endDate: "Dec 2022",
      achievements: [
        "Engineered a distributed load-balancing middleware using the Least-Connections algorithm with C++ and OpenMP, reducing average response time by 35% under peak loads and enhancing backend scalability.",
        "Devised a dynamic, data-driven failover strategy for leader nodes across a 12-node cluster, bolstering overall system availability.",
        "Co-authored and published a research paper on distributed LMS architecture at IEEE ICCNT 2023 (Paper ID: 1214), contributing to advanced academic and technical dialogue."
      ]
    }
  ],

  projects: [
    {
      name: "TicketAssist",
      description: "AI-Powered Support Ticket Management System that auto-categorized and routed 1,000+ tickets using the Gemini API, achieving 95% accuracy and cutting assignment time by 60%.",
      url: "https://github.com/Sharan0402/TicketAssist",
      technologies: ["Python", "Django", "React", "Node.js", "Express", "MongoDB", "Google Gemini API", "Inngest"],
      achievements: [
        "Built a smart ticketing platform that auto-categorized and routed 1,000+ tickets using the Gemini API, achieving 95% accuracy and cutting assignment time by 60%",
        "Implemented RBAC (role-based access control) for REST APIs using JWT for securing the moderator assignment and management",
        "Engineered event-driven processing with Inngest to enable real-time ticket assignment, boosting turnaround time by 45%"
      ]
    },
    {
      name: "LeetAI",
      description: "Smart Chrome Extension for LeetCode that provides step-by-step AI guidance, used by 200+ early testers with GPT-4 and Gemini 1.5 APIs integration.",
      url: "https://github.com/Sharan0402/LeetAI",
      technologies: ["TypeScript", "React", "Vite", "GPT-4", "Gemini 1.5", "IndexedDB"],
      achievements: [
        "Built a Chrome extension used by 200+ early testers to get step-by-step AI guidance on LeetCode, integrating GPT-4 and Gemini 1.5 APIs for real-time problem-solving support",
        "Implemented local chat memory using IndexedDB and enabled dynamic model switching, improving user retention and reducing repeated queries by 40%"
      ]
    }
  ],

  skills: [
    {
      category: "Languages",
      skills: ["Java", "C", "C++", "Python", "TypeScript", "JavaScript", "C#", "SQL", "GraphQL", "Bash"]
    },
    {
      category: "Frameworks",
      skills: [".NET", "Django", "Angular", "Springboot", "Express", "React.js", "Flutter", "Jest", "Next.js", "Locust"]
    },
    {
      category: "Amazon Web Services",
      skills: ["S3", "EC2", "AWS Lambda", "DynamoDB"]
    },
    {
      category: "Cloud Technologies",
      skills: ["Google Firebase", "Kubernetes", "Docker", "Azure"]
    },
    {
      category: "Database",
      skills: ["DynamoDB", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Development Practices",
      skills: ["Test-driven development", "Object-oriented design", "Continuous Integration & Continuous Delivery (CI/CD)"]
    },
    {
      category: "Other Tools",
      skills: ["Bitbucket", "Git", "Jira", "GitHub Actions", "Grafana", "Prometheus", "Jenkins"]
    },
    {
      category: "System Design",
      skills: ["RESTful APIs", "Database design", "Event-driven architectures"]
    }
  ]
};