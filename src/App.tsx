import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Mail,
  MoveRight,
  Terminal,
} from "lucide-react";

// Directly importing the resume from the src folder


const navItems = ["About", "Education", "Skills", "Projects", "Experience", "Achievements", "Contact"];

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "University School of Information and Communication Technology (GGSIPU)",
    period: "Aug 2025 - Present",
    description: "Maintaining top academic standing (CGPA: 8.96 / 10.0). Currently specializing in software engineering and artificial intelligence.",
  },
  {
    degree: "Higher Secondary School Certificate (Class XII, CBSE)",
    institution: "Modern Public School, Shalimar Bagh, Delhi",
    period: "Graduated May 2025",
    description: "Graduated with 95.2%. Cleared the Joint Entrance Examination (JEE Mains 2025) with 95.6%ile.",
  },
  {
    degree: "Secondary School Examination (Class X, CBSE)",
    institution: "Modern Public School, Shalimar Bagh, Delhi",
    period: "Graduated May 2023",
    description: "Graduated with 95.5%, building a strong early foundation in mathematics and computer science.",
  }
];

const skills = [
  {
    category: "Core Languages",
    items: ["C++", "Python", "C", "SQL", "HTML/CSS"],
  },
  {
    category: "Development & AI/ML",
    items: ["Data Structures & Algorithms (DSA)", "Object-Oriented Programming (OOP)", "Machine Learning", "Generative AI", "Git/GitHub", "REST APIs"],
  },
  {
    category: "Creative & Workflow Tools",
    items: ["VS Code", "Canva", "VN Editor", "Eleven Labs", "Antigravity"],
  },
];

const projects = [
  {
    name: "The Aura Series Ecosystem",
    stack: ["Python", "AI/ML", "C++", "API Integrations"],
    summary:
      "Architected and launched a comprehensive AI-native project ecosystem inspired by NASA's solar system. This includes the overarching Aura Hub, which connects various intelligent micro-services into a unified architecture.",
    live: "https://aura-hub-3d.vercel.app/", 
    github: "https://github.com/ANSHPATEL-ap123/YOUR_REPO_NAME",
  },
  {
    name: "Aura BI",
    stack: ["Python", "SQL", "Data Visualization", "LLMs"],
    summary:
      "Co-developed an AI-driven data visualization tool for a college hackathon that converts raw datasets into structured, interactive dashboards. Managed backend logic and API connections as the lead architect for Team APEX.",
    live: "https://ai-data-visualizer-drab.vercel.app/",
    github: "https://github.com/ANSHPATEL-ap123/YOUR_REPO_NAME",
  },
  {
    name: "RiskLens",
    stack: ["Python", "Machine Learning", "Data Analytics"],
    summary:
      "Built an intelligent risk assessment platform leveraging machine learning to predict and visualize potential vulnerabilities, providing actionable insights through a streamlined interface.",
    live: "https://risk-lens.vercel.app/",
    github: "https://github.com/ANSHPATEL-ap123/YOUR_REPO_NAME",
  },
  {
    name: "DermLens",
    stack: ["Computer Vision", "Deep Learning", "React"],
    summary:
      "Developed a computer vision application designed to analyze dermatological images, assisting in the early detection and classification of various skin conditions using trained neural networks.",
    live: "https://dermlens-brown.vercel.app/",
    github: "https://github.com/ANSHPATEL-ap123/YOUR_REPO_NAME",
  },
];

const experiences = [
  {
    period: "2025 - Present",
    role: "Technical Lead, Team APEX",
    details:
      "Serving as the backend architect and team leader for competitive hackathons, guiding development sprints, structuring API logic, and coordinating pitch strategies.",
  },
  {
    period: "Nov 2025 - Present",
    role: "Member & Event Coordinator, ACM LENS",
    details:
      "Collaborated with club members to organize event coverage timelines and manage visual content production. Organized the campus-wide Photo Story Competition, managing promotional materials and submissions.",
  }
];

const achievementsData = [
  {
    title: "Semi-Finalist, Gridlock Hackathon by Flipkart",
    year: "2026",
    description: "Secured a semi-finalist position in a highly competitive national hackathon, showcasing advanced problem-solving, scalable system design, and rapid prototyping.",
  },
  {
    title: "3rd Position, Commit Happens Hackathon",
    year: "2026",
    description: "Achieved 3rd place overall by developing an innovative and robust technical solution under strict time constraints, leading Team APEX through a successful deployment.",
  },
  {
    title: "IBM AI Certifications",
    year: "2025",
    description: "Earned certifications in Machine Learning, Introduction to LLMs, Getting Started with Generative AI, and Ethical Considerations for GenAI.",
  },
  {
    title: "Anthropic AI Fluency",
    year: "2025",
    description: "Completed comprehensive frameworks and foundations training regarding AI implementation and logic design.",
  }
];

const socials = [
  { label: "GitHub", href: "https://github.com/ANSHPATEL-ap123", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/ansh-patel-609251304", icon: BriefcaseBusiness },
];

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="text-xs font-medium uppercase tracking-[0.32em] text-neutral-500">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-neutral-950 sm:text-5xl md:text-6xl">
        {title}
      </h2>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-950 transition-colors duration-300 hover:text-neutral-500"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <a href="#top" className="font-serif text-xl tracking-[-0.04em] text-neutral-950">
          Ansh Patel
        </a>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600 sm:gap-x-7">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors duration-300 hover:text-neutral-950"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="grid items-end gap-12 border-b border-neutral-200 py-20 sm:py-24 lg:grid-cols-[1.35fr_0.65fr] lg:py-28">
        <div className="animate-rise space-y-8">
          <p className="text-sm font-medium uppercase tracking-[0.36em] text-neutral-500">Portfolio</p>
          <div className="space-y-5">
            <p className="font-serif text-5xl leading-[0.92] tracking-[-0.065em] text-neutral-950 sm:text-7xl md:text-8xl lg:text-9xl">
              Ansh Patel
            </p>
            <h1 className="max-w-5xl font-serif text-4xl leading-[0.96] tracking-[-0.06em] text-neutral-950 sm:text-6xl md:text-7xl lg:text-8xl">
              Software Developer & AI Enthusiast.
            </h1>
          </div>
          <div className="flex flex-col gap-4 sm:max-w-2xl sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-8 text-neutral-600 sm:text-lg">
              I am driven to build impactful, real-world solutions by bridging fundamental engineering principles with emerging AI technologies.
            </p>
            <div className="flex shrink-0 gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950"
              >
                View Work
              </a>
       <a
  href="https://drive.google.com/file/d/1Jmrf1pAccLz7n9GStYOdwxRtiKuNAgpU/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 justify-center border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950"
>
  <Download className="h-4 w-4" />
  View Resume
</a>
            </div>
          </div>
        </div>
        <div className="animate-rise self-stretch border-l-0 border-neutral-200 pt-4 lg:border-l lg:pl-10" style={{ animationDelay: "120ms" }}>
          <p className="max-w-sm text-sm uppercase tracking-[0.28em] text-neutral-500">Currently</p>
          <p className="mt-4 max-w-md text-2xl leading-snug tracking-[-0.03em] text-neutral-950 sm:text-3xl">
            Pursuing B.Tech in Computer Science and Engineering at GGSIPU while building practical products across web, AI/ML, and digital media.
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
          <img
            src="/ansh-photo.png"
            alt="Ansh Patel"
            className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
        <div className="space-y-10">
          <SectionIntro eyebrow="About Me" title="Driven by logic, guided by innovation." />
          <div className="space-y-6 text-lg leading-relaxed text-neutral-600">
            <p>
              I am a passionate undergraduate specializing in computer science and artificial intelligence. I believe the best solutions emerge at the intersection of rigorous programming logic and creative problem-solving.
            </p>
            <p>
              With a strong foundation in Data Structures and Algorithms via C++, I focus on optimizing time and space complexity while building backend pipelines. Currently, I am expanding my expertise to transition into an AI Engineering role, training machine learning models and leveraging APIs.
            </p>
            <p>
              Beyond the IDE, my involvement in campus photography and video editing continually shapes my technical work. It ensures that every product I build not only functions flawlessly but also delivers a compelling user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Education" title="Academic foundations and rigorous study." />
          <div className="border-t border-neutral-200">
            {educationData.map((item, i) => (
              <div key={i} className="grid gap-4 border-b border-neutral-200 py-8 sm:grid-cols-[0.28fr_0.72fr]">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">{item.period}</p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-neutral-950">{item.degree}</h3>
                  <p className="text-sm font-medium text-neutral-950">{item.institution}</p>
                  <p className="max-w-2xl leading-8 text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-neutral-200 bg-neutral-50/70">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Skills" title="A focused stack for building useful, intelligent software." />
          <div className="space-y-8">
            
            {/* White LeetCode & DSA Featured Card */}
            <div className="flex flex-col justify-between gap-6 border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-950 sm:flex-row sm:items-center sm:p-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
                  <Terminal className="h-4 w-4" />
                  Competitive Programming
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-950">C++ Data Structures & Algorithms</h3>
                <p className="text-neutral-600">Successfully solved over 270+ problems on LeetCode, mastering fundamental data structures and optimizing algorithm complexities.</p>
              </div>
              <a
                href="https://leetcode.com/u/ANSH-PATEL/" 
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 border border-neutral-300 bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-950"
              >
                View Profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Standard Skills Grid */}
            <div className="grid gap-4">
              {skills.map((group, index) => (
                <div
                  key={group.category}
                  className="animate-rise border border-neutral-200 bg-white p-6 transition-colors duration-300 hover:border-neutral-950 sm:p-8"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="grid gap-6 sm:grid-cols-[0.35fr_0.65fr] sm:items-start">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-neutral-950">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm text-neutral-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <article
      className="animate-rise group flex min-h-[430px] flex-col justify-between border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-950 sm:p-8"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="space-y-7">
        <div className="flex items-start justify-between gap-8">
          <h3 className="max-w-md text-2xl font-semibold tracking-[-0.04em] text-neutral-950 sm:text-3xl">
            {project.name}
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-neutral-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-950" />
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
             <span key={tech} className="border border-neutral-200 px-2.5 py-1 text-xs text-neutral-500">
               {tech}
             </span>
          ))}
        </div>
        <p className="max-w-xl text-base leading-8 text-neutral-600">{project.summary}</p>
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-neutral-950 px-4 py-2.5 text-sm font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-950 hover:text-white"
        >
          Live Link
          <MoveRight className="h-4 w-4" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-neutral-300 px-4 py-2.5 text-sm font-medium text-neutral-950 transition-all duration-300 hover:border-neutral-950"
        >
          <Code2 className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="flex flex-col gap-8 border-b border-neutral-200 pb-12 lg:flex-row lg:items-end lg:justify-between">
        <SectionIntro eyebrow="Projects" title="Selected work with clear outcomes and careful execution." />
        <TextLink href="#contact">Discuss a project</TextLink>
      </div>
      <div className="grid gap-4 pt-12 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-y border-neutral-200 bg-neutral-50/70">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Experience" title="Leadership shaped through teams, events, and fast builds." />
          <div className="border-t border-neutral-200">
            {experiences.map((item) => (
              <div key={item.role} className="grid gap-4 border-b border-neutral-200 py-8 sm:grid-cols-[0.28fr_0.72fr]">
                <p className="text-sm uppercase tracking-[0.22em] text-neutral-500">{item.period}</p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-neutral-950">{item.role}</h3>
                  <p className="max-w-2xl leading-8 text-neutral-600">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section id="achievements" className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionIntro eyebrow="Achievements" title="Milestones, recognitions, and competitive wins." />
          <div className="grid gap-4 sm:grid-cols-2">
            {achievementsData.map((item, i) => (
              <div key={i} className="space-y-4 border border-neutral-200 p-8 transition-colors duration-300 hover:border-neutral-950">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">{item.year}</p>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-neutral-950">{item.title}</h3>
                <p className="leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="grid gap-14 border-b border-neutral-200 pb-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div className="space-y-8">
          <SectionIntro eyebrow="Contact" title="Let us build something precise and useful." />
          <a
            href="mailto:anshp6188@gmail.com"
            className="group inline-flex items-center gap-3 font-serif text-3xl tracking-[-0.04em] text-neutral-950 transition-colors duration-300 hover:text-neutral-500 sm:text-5xl"
          >
            anshp6188@gmail.com
            <Mail className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
          <p className="text-lg text-neutral-600">+91 8851677685</p>
        </div>
        <div className="flex flex-col justify-end gap-4">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-t border-neutral-200 py-5 text-neutral-950 transition-colors duration-300 hover:text-neutral-500"
              >
                <span className="inline-flex items-center gap-3 text-lg font-medium tracking-[-0.02em]">
                  <Icon className="h-5 w-5" />
                  {social.label}
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 pb-10 text-sm text-neutral-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
      <p>(c) 2026 Ansh Patel.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-950 antialiased">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}