/** Live site (Vercel); used for portfolio link and absolute resume PDF URLs. */
const SITE_ORIGIN = 'https://muthukrishnanfrontdev.vercel.app'
const RESUME_PDF_PATH = './MUTHUKRISHNAN.T_FlowCV_Resume_2026-04-19.pdf'

export const resume = {
  name: 'MUTHUKRISHNAN.T',
  role: 'Frontend Developer',
  stack: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  location: 'Chennai, India',
  email: 'masskrishnan18@gmail.com',
  phone: '+91-8678940399',
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muthu-krishnan-762008245',
  },
  summary: [
    'Enthusiastic and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.js. Passionate about building responsive and user-friendly web applications and continuously improving UI/UX skills.',
    'A motivated fresher with hands-on experience in React.js through academic and personal projects. Eager to contribute to a dynamic development team and grow as a frontend engineer.',
    'Self-driven React.js developer with a good understanding of component-based architecture, state management, and modern JavaScript (ES6+). Looking for an opportunity to apply and enhance skills in real-world projects.',
  ],
  experience: [
    {
      title: 'Medical Summarization Analyst',
      company: 'Adamsbridge',
      location: 'Chennai',
      period: 'Jul 2022 – May 2026',
    },
  ],
  education: [
    {
      degree: 'Frontend Developer',
      school: 'Beasant Technology',
      location: 'Chennai',
      period: 'Feb 2025 – Feb 2026',
    },
    {
      degree: 'M.Sc Biotechnology',
      school: 'Mohamed Sathak College of Arts and Science',
      location: 'Chennai',
      period: 'Sep 2022 – May 2024',
    },
    {
      degree: 'B.Sc Biotechnology',
      school: 'Mohamed Sathak College of Arts and Science',
      location: 'Chennai',
      period: 'Apr 2019 – May 2022',
    },
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Bootstrap',
    'MySQL',
    'MongoDB',
    'VS Code',
    'Cursor AI',
  ],
  projects: [
    {
      name: 'Personal portfolio',
      description:
        'Responsive portfolio built with React and TypeScript (Vite), showcasing experience, skills, and a downloadable resume. Live on Vercel.',
      liveUrl: `${SITE_ORIGIN}/`,
      tags: ['React', 'TypeScript', 'Vite'],
    },
    {
      name: 'Todo list',
      description:
        'A task manager web app to add, track, and organize todos with a clean UI. Deployed on Vercel.',
      liveUrl: 'https://todo-list-ten-sigma-82.vercel.app/',
      tags: ['React', 'JavaScript', 'Vercel'],
    },
  ],
  /** Relative path (local dev / same-origin). */
  resumeFile: RESUME_PDF_PATH,
  /** Full URL for Download CV / Download resume — points at deployed PDF on Vercel. */
  resumeDownloadUrl: `${SITE_ORIGIN}${RESUME_PDF_PATH}`,
} as const
