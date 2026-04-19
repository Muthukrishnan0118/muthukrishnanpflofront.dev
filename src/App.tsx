import { Fragment } from 'react'
import './App.css'
import { resume } from './data/resume'

const navLinks = [
  { href: '#summary', label: 'Summary' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  const initials = resume.name
    .split(/[.\s]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join('')
    .toUpperCase()

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          <span className="brand-text">{resume.name}</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn btn-primary header-cta" href={resume.resumeFile} download>
          Download CV
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-visual" aria-hidden="true">
            <span className="avatar">{initials}</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">{resume.role}</p>
            <h1 id="hero-title">{resume.name}</h1>
            <p className="tagline">{resume.stack.join(' · ')}</p>
            <p className="location">{resume.location}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={resume.resumeFile} download>
                Download resume (PDF)
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </section>

        <section id="summary" className="section" aria-labelledby="summary-heading">
          <h2 id="summary-heading">Professional summary</h2>
          <ul className="bullet-list">
            {resume.summary.map((paragraph, index) => (
              <li key={index}>{paragraph}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Work experience</h2>
          <ul className="timeline">
            {resume.experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="timeline-item">
                <div className="timeline-head">
                  <h3>{job.title}</h3>
                  <span className="period">{job.period}</span>
                </div>
                <p className="org">
                  {job.company}
                  <span className="dot" aria-hidden="true">
                    ·
                  </span>
                  {job.location}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Technical skills</h2>
          <ul className="skill-pills" role="list">
            {resume.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="education" className="section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul className="timeline">
            {resume.education.map((edu) => (
              <li key={`${edu.degree}-${edu.period}`} className="timeline-item">
                <div className="timeline-head">
                  <h3>{edu.degree}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <p className="org">
                  {edu.school}
                  <span className="dot" aria-hidden="true">
                    ·
                  </span>
                  {edu.location}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <ul className="project-cards">
            {resume.projects.map((project, index) => (
              <Fragment key={project.name}>
                <li className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {'liveUrl' in project && project.liveUrl ? (
                    <p className="project-live">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-live-link">
                        <svg className="project-live-icon" width={18} height={18} aria-hidden="true" focusable="false">
                          <use href="/icons.svg#external-link-icon" />
                        </svg>
                        <span className="project-live-url">
                          {project.liveUrl.replace(/^https:\/\//, '')}
                        </span>
                        <span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </p>
                  ) : null}
                  <ul className="project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </li>
                {index < resume.projects.length - 1 ? (
                  <li className="project-separator" aria-hidden="true">
                    <span className="project-separator-dash">--</span>
                  </li>
                ) : null}
              </Fragment>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section-contact" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p className="lede">Open to frontend roles and collaborations. Reach out anytime.</p>
          <ul className="contact-list">
            <li>
              <span className="contact-label">Email</span>
              <a href={`mailto:${resume.email}`}>{resume.email}</a>
            </li>
            <li>
              <span className="contact-label">Phone</span>
              <a href={`tel:${resume.phone.replace(/\s/g, '')}`}>{resume.phone}</a>
            </li>
            <li>
              <span className="contact-label">LinkedIn</span>
              <a href={resume.linkedin.href} target="_blank" rel="noreferrer">
                {resume.linkedin.href.replace('https://www.', '')}
              </a>
            </li>
            <li>
              <span className="contact-label">Location</span>
              <span>{resume.location}</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {resume.name}. Built with React &amp; Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
