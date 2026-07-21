export const profile = {
  name: 'Hari Rudhran M',
  title: "Hi, I'm Hari Rudhran M ",
  photo:
    'https://www.image2url.com/r2/default/images/1780421668350-a699716f-0f57-461f-b852-7f31595aa511.jpg',
  resumeUrl:
    'https://drive.google.com/file/d/1fhL0WX-qJ2fk6VeKhRu1-4C8dHNcjH25/view?usp=sharing',
  typingRoles: ['Software Engineer', 'Developer'],
  tagline: 'Full-stack developer — clean code, scalable solutions.',
  email: 'mharirudhran@gmail.com',
  location: 'Bengaluru, Karnataka',
  experience: 0,
  domain: 'Web Development',
  availability: 'Open for opportunities',
  ctaMessage: "Let's work together!",
  footerName: 'Hari Rudhran M',
  social: {
    linkedin: 'https://www.linkedin.com/in/hari-rudhran-dev/',
    github: 'https://github.com/harirudhran',
  },
};

export const aboutShort =
  "Hi, I'm Hari Rudhran M — a Java Full Stack Developer passionate about building responsive web applications and scalable backend systems. With experience in Java, Spring Boot, React, Next.js, and MySQL, I enjoy creating efficient solutions that combine clean code, great user experiences, and modern technologies. I'm constantly learning, building, and exploring new ways to solve real-world problems through software development.";

export const aboutDetailed = [
  "Hello! I'm Hari Rudhran M, a passionate Full Stack Java Developer and a B.Tech graduate in Computer Science and Business Systems from Er. Perumal Manimekalai College of Engineering. I am driven by a strong interest in software development and enjoy creating efficient, scalable, and user-friendly applications that solve real-world problems.",
  'My technical expertise spans across both frontend and backend development. I work with technologies such as Java, Spring Boot, React, Next.js, JavaScript, HTML, CSS, Tailwind CSS, MySQL, and REST APIs. I have a solid foundation in Object-Oriented Programming, Database Management Systems, and software engineering principles, enabling me to build complete end-to-end web solutions.',
  'Throughout my academic and professional journey, I have gained practical experience through internships and hands-on projects. During my internship at TAP Academy, I developed full-stack applications, designed scalable backend services, integrated databases, and collaborated in Agile development environments using Git and GitHub. Previously, as a Web Developer Intern at Adviyo Technologies, I worked on building responsive user interfaces and enhancing cross-device compatibility for web applications.',
  'I have also worked on innovative projects that combine modern technologies. My Fashion Kart e-commerce platform demonstrates my ability to develop secure and scalable web applications using Java, Servlets, JSP, and MySQL. Additionally, I contributed to a Privacy-Preserving Federated Learning Framework, where I explored the intersection of Artificial Intelligence, Blockchain, and Privacy Engineering using PyTorch, Ethereum, and Differential Privacy techniques.',
  "My dedication to innovation was recognized when my team received the Jury's Choice Award at Innovism Version 6.0, a national-level hackathon. This achievement strengthened my passion for problem-solving, teamwork, and building impactful technology solutions.",
  'As a developer, I believe in continuous learning and staying updated with emerging technologies. I enjoy taking on new challenges, improving my technical skills, and collaborating with others to create meaningful software products. My goal is to contribute to innovative organizations where I can grow as a software engineer while delivering solutions that make a positive impact.',
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', skills: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Spring Boot', 'REST APIs'] },
  { label: 'Databases', skills: ['MySQL'] },
  { label: 'Tools', skills: ['Git', 'Vercel'] },
  {
    label: 'AI Tools',
    skills: ['ChatGPT', 'Cursor', 'Claude', 'GitHub Copilot', 'Google Gemini'],
  },
];

export type Project = {
  title: string;
  status: string;
  category: string;
  description: string[];
  stack: string[];
  demo?: string;
  github: string;
};

export const projects: Project[] = [
  {
    title: 'FoodRush: Full-Stack Food Delivery Application',
    status: 'Completed',
    category: 'Web App',
    description: [
      'Implemented the DAO Design Pattern to streamline database interactions for authentication, cart operations, and dynamic data management.',
      'Developed a secure administrative management portal with session-based role authorization to separate customer actions from restaurant management.',
      'Built a highly responsive and dynamic frontend layout using standard web technologies to ensure a smooth user experience from login to checkout.',
    ],
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'HTML', 'CSS', 'Apache Tomcat'],
    github: 'https://github.com/harirudhran/food_app',
  },
  {
    title: 'Fashion Kart: Full-Stack E-Commerce Platform',
    status: 'Completed',
    category: 'Web App',
    description: [
      'Engineered a session-based (HttpSession) shopping cart that drastically reduces unnecessary backend database queries prior to checkout.',
      'Developed a secure administrative interface for real-time inventory oversight and dynamic product catalog updates.',
      'Designed a comprehensive MySQL relational schema to handle complex interactions between user profiles, current inventory, and active orders.',
    ],
    stack: ['Java', 'Servlets', 'JSP', 'MySQL', 'Apache Tomcat'],
    github: 'https://github.com/harirudhran/FashionKart',
  },
  {
    title: 'Privacy-Preserving Federated Learning',
    status: 'Completed',
    category: 'Web App',
    description: [
      'A production-ready federated learning system that lets hospitals train AI models together without sharing patient data — differential privacy protects each contributor, and a blockchain audit trail keeps the process HIPAA-aware and verifiable.',
    ],
    stack: ['Python', 'Next.js', 'PyTorch', 'NumPy', 'SQLite'],
    github: 'https://github.com/harirudhran/Privacy-Preserving-Federated-Learning',
  },
];

export const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

export type Education = {
  degree: string;
  institute: string;
  location: string;
  status: string;
  description: string;
};

export const education: Education[] = [
  {
    degree: 'B.Tech, Computer Science & Business Systems',
    institute: 'Er. Perumal Manimekalai College of Engineering',
    location: 'Hosur, India',
    status: 'Graduated 2026',
    description: 'CGPA 7.89',
  },
];

export type Certification = {
  name: string;
  platform: string;
  date: string;
  skills: string;
  verifyUrl: string;
};

export const certifications: Certification[] = [
  {
    name: 'Basics of Python',
    platform: 'Infosys Springboard',
    date: 'December 15, 2023',
    skills: 'Basics of Python',
    verifyUrl: 'https://drive.google.com/file/d/1gtuMhxT3xIFm9f-cVltTu59SGOdUSOIg/view?usp=sharing',
  },
  {
    name: 'Git & GitHub Bootcamp',
    platform: 'Lets Upgrade',
    date: 'September 2024',
    skills: 'Git & GitHub',
    verifyUrl: 'https://drive.google.com/file/d/1gtuMhxT3xIFm9f-cVltTu59SGOdUSOIg/view?usp=sharing',
  },
  {
    name: 'Time Management',
    platform: 'Infosys Springboard',
    date: 'March 26, 2024',
    skills: 'Time Management',
    verifyUrl: 'https://drive.google.com/file/d/13eokGSOmPe5GiLUoo2hoLyA2UvMJYF82/view?usp=sharing',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
