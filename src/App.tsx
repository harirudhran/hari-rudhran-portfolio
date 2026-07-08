import { useEffect, useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ArrowUpRight,
  Menu,
  X,
  GraduationCap,
  BadgeCheck,
  Send,
  Code2,
  Terminal,
} from "lucide-react";

/* Brand marks — lucide-react no longer ships these, so inline SVGs cover them */
function GithubIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Content — single source of truth pulled from the student brief    */
/* ------------------------------------------------------------------ */

const STUDENT = {
  name: "Hari Rudhran M",
  logo: "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png",
  photo:
    "https://www.image2url.com/r2/default/images/1780421668350-a699716f-0f57-461f-b852-7f31595aa511.jpg",
  resume:
    "https://drive.google.com/file/d/1v8-uDUVS5sxvezpynAf4OTmxB_HkD34a/view?usp=sharing",
  roles: ["Developer", "Software Engineer"],
  tagline: "Full-stack developer — clean code, scalable solutions.",
  email: "mharirudhran@gmail.com",
  location: "Bengaluru, Karnataka",
  experience: 0,
  domain: "Web Development",
  socials: {
    linkedin: "https://www.linkedin.com/in/hari-rudhran-dev/",
    github: "https://github.com/harirudhran",
  },
  availability: "Open for opportunities",
};

const ABOUT_SHORT =
  "Hi, I'm Hari Rudhran M — a Java Full Stack Developer passionate about building responsive web applications and scalable backend systems. With experience in Java, Spring Boot, React, Next.js, and MySQL, I enjoy creating efficient solutions that combine clean code, great user experiences, and modern technologies. I'm constantly learning, building, and exploring new ways to solve real-world problems through software development.";

const ABOUT_DETAILED = [
  "Hello! I'm Hari Rudhran M, a passionate Full Stack Java Developer and a B.Tech graduate in Computer Science and Business Systems from Er. Perumal Manimekalai College of Engineering. I am driven by a strong interest in software development and enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.",
  "My technical expertise spans across both frontend and backend development. I work with technologies such as Java, Spring Boot, React, Next.js, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and REST APIs. I have a solid foundation in Object-Oriented Programming, Database Management Systems, and software engineering principles, enabling me to build complete end-to-end web solutions.",
  "Throughout my academic and professional journey, I have gained practical experience through internships and hands-on projects. During my internship at TAP Academy, I developed full-stack applications, designed scalable backend services, integrated databases, and collaborated in Agile development environments using Git and GitHub. Previously, as a Web Developer Intern at Adviyo Technologies, I worked on building responsive user interfaces and enhancing cross-device compatibility for web applications.",
  "I have also worked on innovative projects that combine modern technologies. My Fashion Kart e-commerce platform demonstrates my ability to develop secure and scalable web applications using Java, Servlets, JSP, and MySQL. Additionally, I contributed to a Privacy-Preserving Federated Learning Framework, where I explored the intersection of Artificial Intelligence, Blockchain, and Privacy Engineering using PyTorch, Ethereum, and Differential Privacy techniques.",
  "My dedication to innovation was recognized when my team received the Jury's Choice Award at Innovism Version 6.0, a national-level hackathon. This achievement strengthened my passion for problem-solving, teamwork, and building impactful technology solutions.",
  "As a developer, I believe in continuous learning and staying updated with emerging technologies. I enjoy taking on new challenges, improving my technical skills, and collaborating with others to create meaningful software products. My goal is to contribute to innovative organizations where I can grow as a software engineer while delivering solutions that make a positive impact.",
];

const SKILLS = [
  {
    label: "Frontend",
    items: ["React", "HTML", "CSS", "Tailwind CSS", "Next.js"],
  },
  { label: "Backend", items: ["Spring Boot", "REST APIs"] },
  { label: "Databases", items: ["MySQL"] },
  { label: "Tools", items: ["Git", "Vercel"] },
  {
    label: "AI Tools",
    items: ["ChatGPT", "Cursor", "Claude", "GitHub Copilot", "Google Gemini"],
  },
];

const PROJECTS = [
  {
    title: "Privacy-Preserving Federated Learning",
    status: "Completed",
    category: "Web App",
    description:
      "A production-ready federated learning system that lets hospitals train AI models together without sharing patient data — differential privacy protects each contributor, and a blockchain audit trail keeps the process HIPAA-aware and verifiable.",
    stack: ["Python", "Next.js", "PyTorch", "NumPy", "SQLite"],
    live: null,
    github: "https://github.com/harirudhran/Privacy-Preserving-Federated-Learning",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech, Computer Science & Business Systems",
    institute: "Er. Perumal Manimekalai College of Engineering",
    location: "Hosur, India",
    status: "Graduated 2026",
    detail: "CGPA 7.89",
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

function useTypedRoles(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = deleting ? 45 : 90;
    const pause = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIndex, roles]);

  return text;
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${visible ? "reveal" : "opacity-0"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan mb-4">
      <span className="text-violet">{"//"}</span>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
            scrolled ? "glass py-2.5" : "py-1"
          }`}
        >
          <a
            href="#top"
            aria-label="Back to top"
            className="flex items-center gap-2 shrink-0"
          >
            <img
              src={STUDENT.logo}
              alt="TAP Academy"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] tracking-wide text-mist">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href={STUDENT.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-violet/15 border border-violet/40 px-4 py-2 text-[13px] font-mono text-white hover:bg-violet/25 hover:border-violet/70 transition-all glow-violet"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>

          <button
            className="md:hidden text-fog p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl px-5 py-5 flex flex-col gap-4 font-mono text-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-mist hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={STUDENT.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-violet/15 border border-violet/40 px-4 py-2.5 text-white"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const typed = useTypedRoles(STUDENT.roles);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 pb-20 overflow-hidden grid-field"
    >
      <div
        className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full blur-[120px] opacity-30"
        style={{ background: "var(--color-violet)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full blur-[120px] opacity-20"
        style={{ background: "var(--color-cyan)" }}
      />

      <div className="max-w-6xl mx-auto px-5 w-full relative z-10">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan mb-6 border border-cyan/30 rounded-full px-3 py-1 bg-cyan/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan" />
              </span>
              {STUDENT.availability}
            </div>

            <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-white">
              {STUDENT.name}
            </h1>

            <div className="mt-4 font-mono text-lg sm:text-xl text-violet h-8 flex items-center">
              <span className="text-mist mr-2">{"const role ="}</span>
              <span className="text-white">{typed}</span>
              <span className="caret ml-0.5 text-cyan">▍</span>
            </div>

            <p className="mt-6 text-base sm:text-lg text-mist max-w-xl leading-relaxed">
              {STUDENT.tagline}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white text-ink font-medium px-6 py-3 text-sm hover:bg-cyan transition-colors"
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-fog hover:border-violet hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
              {[
                { icon: GithubIcon, href: STUDENT.socials.github, label: "GitHub" },
                { icon: LinkedinIcon, href: STUDENT.socials.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${STUDENT.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-mist hover:text-white hover:border-violet hover:glow-violet transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
              <span className="font-mono text-xs text-mist flex items-center gap-1.5">
                <MapPin size={13} />
                {STUDENT.location}
              </span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-violet/40 to-cyan/30 blur-2xl opacity-60" />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-[2rem] glass glow-violet overflow-hidden">
                <img
                  src={STUDENT.photo}
                  alt={STUDENT.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-6 glass rounded-xl px-4 py-2.5 font-mono text-xs text-cyan flex items-center gap-2">
                <Terminal size={13} />
                {STUDENT.domain}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  About                                                               */
/* ------------------------------------------------------------------ */

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <Eyebrow>about.md</Eyebrow>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white mb-8">
            Who I am
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass rounded-2xl p-6 sm:p-9">
            <p className="text-fog leading-relaxed text-[15px] sm:text-base">
              {ABOUT_SHORT}
            </p>

            <div
              className={`grid transition-all duration-500 ease-out ${
                expanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <div className="space-y-4 pt-2 border-t border-line/60">
                  {ABOUT_DETAILED.map((para, i) => (
                    <p
                      key={i}
                      className="text-mist leading-relaxed text-[15px] pt-4 first:pt-6"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-cyan hover:text-white transition-colors"
            >
              {expanded ? "collapse()" : "readMore()"}
              <span className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Skills                                                              */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="py-28 px-5 relative">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Eyebrow>skills.json</Eyebrow>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white mb-12">
            What I work with
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILLS.map((group, i) => (
            <Reveal key={group.label} delay={i * 90}>
              <div className="glass rounded-2xl p-6 h-full hover:border-violet/50 transition-colors group">
                <div className="flex items-center gap-2 mb-5">
                  <Code2 size={16} className="text-violet" />
                  <h3 className="font-mono text-sm uppercase tracking-wider text-white">
                    {group.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 rounded-full border border-line text-mist group-hover:border-violet/30 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Projects                                                            */
/* ------------------------------------------------------------------ */

function Projects() {
  const categories = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 px-5">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <Eyebrow>projects/</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white">
              Things I've built
            </h2>
            <div className="flex gap-2 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full border transition-colors ${
                    filter === cat
                      ? "bg-violet/20 border-violet text-white"
                      : "border-line text-mist hover:text-white hover:border-mist"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Reveal key={project.title} delay={i * 100}>
              <div className="glass rounded-2xl p-7 h-full flex flex-col hover:glow-violet transition-all duration-300 group">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-cyan">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                    {project.status}
                  </div>
                  <span className="text-[11px] font-mono text-mist border border-line rounded-full px-2.5 py-1">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-[var(--font-display)] text-xl font-semibold text-white mb-3 group-hover:text-gradient transition-all">
                  {project.title}
                </h3>

                <p className="text-mist text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 text-fog"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-line/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white hover:text-cyan transition-colors"
                  >
                    <GithubIcon size={15} />
                    Source
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-white hover:text-cyan transition-colors"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Education + Certifications                                         */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section id="education" className="py-28 px-5">
      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-14">
        <div>
          <Reveal>
            <Eyebrow>education.log</Eyebrow>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-white mb-8">
              Education
            </h2>
          </Reveal>
          <div className="space-y-5">
            {EDUCATION.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 100}>
                <div className="glass rounded-2xl p-6 flex gap-4">
                  <div className="h-10 w-10 rounded-xl bg-violet/15 border border-violet/30 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-violet" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium leading-snug">{edu.degree}</h3>
                    <p className="text-sm text-mist mt-1">{edu.institute}</p>
                    <p className="text-xs font-mono text-mist mt-2">{edu.location}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan/10 text-cyan border border-cyan/20">
                        {edu.status}
                      </span>
                      <span className="text-[11px] font-mono text-amber">{edu.detail}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal delay={150}>
            <Eyebrow>certifications.log</Eyebrow>
            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl font-semibold text-white mb-8">
              Certifications
            </h2>
            <div className="glass rounded-2xl p-8 h-[calc(100%-4rem)] flex flex-col items-start justify-center border-dashed">
              <BadgeCheck size={22} className="text-mist mb-3" />
              <p className="text-sm text-mist leading-relaxed">
                No certifications added yet. This space is reserved for the next one
                earned.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA                                                                 */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section className="px-5 py-8">
      <Reveal>
        <div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden glow-violet">
          <div className="absolute inset-0 bg-gradient-to-br from-violet/25 via-panel to-cyan/10" />
          <div className="absolute inset-0 grid-field opacity-40" />
          <div className="relative px-8 py-14 sm:px-16 sm:py-16 text-center">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white mb-4">
              Let's work together!
            </h2>
            <p className="text-mist max-w-xl mx-auto mb-8">
              {STUDENT.availability} — currently looking for roles where I can build
              real products and keep growing as an engineer.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-ink font-medium px-7 py-3.5 text-sm hover:bg-cyan transition-colors"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact                                                             */
/* ------------------------------------------------------------------ */

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${STUDENT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-28 px-5">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <Eyebrow>contact.tsx</Eyebrow>
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-semibold text-white mb-3">
            Get in touch
          </h2>
          <p className="text-mist mb-12 max-w-lg">
            Have a role, a project, or just a question? Send a message and I'll reply
            from {STUDENT.email}.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-7 sm:p-9 grid sm:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-mist" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-violet transition-colors"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-mono text-xs text-mist" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-violet transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label className="font-mono text-xs text-mist" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-white/5 border border-line rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-violet transition-colors resize-none"
                placeholder="What's on your mind?"
              />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs text-mist font-mono">
                {sent ? "Opening your mail client…" : "No spam. Just a real reply."}
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-violet text-white font-medium px-6 py-3 text-sm hover:bg-violet/80 transition-colors glow-violet"
              >
                <Send size={15} />
                Send Message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-line/60 py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-mist">
          © {new Date().getFullYear()} {STUDENT.name}. Built with React & Tailwind.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={STUDENT.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={STUDENT.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mist hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${STUDENT.email}`}
            className="text-mist hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fog font-body selection:bg-violet">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
