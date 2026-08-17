export const portfolio = {
  name: 'Varsha',
  title: 'Computer Science Engineering Student | Full-Stack Developer',
  tagline: 'Aspiring Software Engineer & Full-Stack Developer crafting responsive, performant web applications with Python, JavaScript, and modern database architectures.',
  education: {
    degree: 'Bachelor of Engineering (B.E.)',
    program: 'Computer Science and Engineering',
    college: 'Maharaja Institute of Technology Mysore',
    duration: '2023 – 2027',
    status: '4th Year Undergrad',
    location: 'Mandya, Karnataka',
  },
  location: 'Mysore, Karnataka, India',
  intro:
    'Building practical web applications while strengthening my skills in Python, JavaScript, databases, full-stack development and problem solving.',
  about:
    'I am a 4th-year Computer Science and Engineering student at Maharaja Institute of Technology Mysore. I have hands-on experience building interactive web applications and working with Python, JavaScript, React, SQL, DBMS, and full-stack development. I enjoy creating practical projects that solve real-world problems and continuously improving my development and software design skills.',
  socials: {
    github: 'https://github.com/Varsha-devX',
    linkedin: 'https://www.linkedin.com/in/varsha-333a44350',
    email: 'varsh6362@gmail.com',
  },
  nav: [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ],
  skillsData: [
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', desc: 'Data structures, backend logic, scripting and algorithms' },
        { name: 'JavaScript (ES6+)', desc: 'Asynchronous programming, DOM manipulation, modern syntax' },
        { name: 'SQL', desc: 'Relational schema design, complex joins, indexing & query tuning' },
      ],
    },
    {
      category: 'Web & Frontend Development',
      items: [
        { name: 'HTML5', desc: 'Accessible markup, responsive layouts, web standards' },
        { name: 'Modern CSS3 & Tailwind', desc: 'Responsive grid/flexbox, animations, glassmorphism UI' },
        { name: 'Full-Stack Architecture', desc: 'Client-server integration, REST APIs, JSON data pipelines' },
      ],
    },
    {
      category: 'Backend & APIs',
      items: [
        { name: 'Python Backend APIs', desc: 'RESTful API construction, request handling, endpoints' },
        { name: 'API Development & Integration', desc: 'Connecting frontend clients with robust backend services' },
        { name: 'Authentication & Security', desc: 'Form validation, safe data transfer, error handling' },
      ],
    },
    {
      category: 'Databases & Management',
      items: [
        { name: 'DBMS (Database Systems)', desc: 'Normalization, ACID properties, relational integrity' },
        { name: 'SQL Query Optimization', desc: 'CRUD operations, aggregate functions, relational models' },
      ],
    },
    {
      category: 'Core Computer Science',
      items: [
        { name: 'Data Structures & Algorithms', desc: 'Arrays, Trees, Graphs, Hashing, Dynamic Algorithms' },
        { name: 'Problem Solving Mindset', desc: 'Time & space complexity optimization, analytical approach' },
        { name: 'Git & Version Control', desc: 'Branching, commits, pull requests, open-source workflow' },
      ],
    },
  ],
  projects: [
    {
      id: 'quiz-platform',
      name: 'Interactive Quiz & Learning Platform',
      badge: 'Full-Stack Application',
      category: 'Full-Stack',
      tagline: 'An interactive web-based learning and quiz assessment system with live score evaluation and backend API integration.',
      description:
        'A comprehensive full-stack interactive educational application designed to deliver engaging quizzes, instant performance scoring, and comprehensive question sets. Built with an optimized frontend user experience in React and connected to a dedicated cloud backend API service.',
      highlights: [
        'Real-time quiz assessment with live scoring and instant feedback',
        'Structured modular questions with category selection and progress tracking',
        'Dedicated Python backend REST API deployed for dynamic quiz data serving',
        'Clean responsive UI with seamless question transitions'
      ],
      technologies: ['Python', 'JavaScript', 'React', 'REST API', 'SQL', 'Render'],
      featured: true,
      links: [
        { label: 'Live Frontend App', url: 'https://quiz-app-94g0.onrender.com/', primary: true },
        { label: 'Backend API Endpoint', url: 'https://hackthon1-2.onrender.com/', primary: false },
      ],
    },
    {
      id: 'veriscan',
      name: 'VeriScan — Fake Product Detection',
      badge: 'Security & Verification Web App',
      category: 'Web App',
      tagline: 'A consumer protection web application designed to identify counterfeit products via verified product workflows.',
      description:
        'A sleek, responsive verification application that assists consumers and retailers in verifying authenticity and detecting counterfeit goods through standardized verification criteria, structured product codes, and intuitive alerts.',
      highlights: [
        'Interactive verification workflow with instant product status feedback',
        'Intuitive validation forms with input sanitization and error prevention',
        'Lightweight, high-performance frontend deployed on Netlify',
        'Modern user-centric design with mobile-first responsiveness'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'Netlify', 'Full-Stack Workflow'],
      featured: true,
      links: [
        { label: 'Explore Live Demo', url: 'https://veriscanproduct.netlify.app/', primary: true },
      ],
    },
  ],
  experience: {
    company: 'wizzybox',
    role: 'Software Development Intern',
    status: 'Selected',
    badge: 'Internship Selected ✓',
    period: '2026',
    type: 'Software Engineering Internship',
    location: 'Remote / Hybrid',
    description:
      'Selected for an internship at wizzybox. Engaging in hands-on software development, modern frontend and backend architectures, and engineering high-quality web applications.',
    highlights: [
      'Selected for technical software engineering internship at wizzybox',
      'Focusing on full-stack application development, modern UI implementation, and backend connectivity',
      'Collaborating on scalable software design, clean code practices, and rapid problem resolution'
    ]
  },
  certifications: [
    {
      title: 'Database Management Systems (DBMS)',
      issuer: 'INI Certification',
      type: 'Core Technology Certification',
      skills: ['Relational DBMS', 'SQL Queries', 'Schema Design', 'Transactions'],
      date: 'Verified Credential'
    },
    {
      title: 'AI Tools Workshop',
      issuer: 'Arghya Training Program',
      type: 'Practical AI & Productivity',
      skills: ['AI-Assisted Development', 'Productivity Workflows', 'Prompt Engineering'],
      date: 'Completed'
    },
    {
      title: 'Hackathon Participation',
      issuer: 'Maharaja Institute of Technology Mysore (MITM)',
      type: 'Technical Hackathon & Innovation',
      skills: ['Rapid Prototyping', 'Team Collaboration', 'Full-Stack Solution Building'],
      date: 'Recognized'
    },
  ],
  contact: {
    email: 'varsh6362@gmail.com',
    linkedin: 'https://www.linkedin.com/in/varsha-333a44350',
    github: 'https://github.com/Varsha-devX',
    location: 'Mysore, Karnataka, India',
    availability: 'Open for Software Engineering Internships, Junior Developer Roles & Collaborations',
    intro:
      'Feel free to reach out if you are hiring interns, seeking a dedicated full-stack developer, or looking to collaborate on impactful software engineering projects.'
  },
  resumePath: '/resume.pdf',
};
