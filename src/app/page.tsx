import type { ElementType } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from 'lucide-react'

import { PortfolioMotion } from '@/components/portfolio/portfolio-motion'
import {
  CAPABILITIES,
  EDUCATION,
  EXPERIENCE,
  METRICS,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  type ProfileLink,
} from '@/data/portfolio'

const LINK_ICONS: Record<ProfileLink['kind'], ElementType> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  resume: FileText,
}

const HERO_LINK_ORDER: readonly ProfileLink['kind'][] = [
  'resume',
  'github',
  'linkedin',
  'email',
]

const NAV_ITEMS = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Systems', href: '#projects' },
  { label: 'Stack', href: '#skills' },
] as const

function ActionLink({
  link,
  primary = false,
}: {
  link: ProfileLink
  primary?: boolean
}) {
  const Icon = LINK_ICONS[link.kind]

  return (
    <a
      className={`action-link${primary ? ' action-link--primary' : ''}`}
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
    >
      <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
      <span>{link.label}</span>
      {link.external ? (
        <ArrowUpRight
          aria-hidden="true"
          className="action-link__arrow"
          size={15}
          strokeWidth={1.8}
        />
      ) : null}
    </a>
  )
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-heading__index">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div className="section-heading__copy">
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  const heroLinks = HERO_LINK_ORDER.flatMap((kind) => {
    const link = PROFILE.links.find((item) => item.kind === kind)
    return link ? [link] : []
  })

  return (
    <PortfolioMotion>
      <div className="site-shell">
        <a className="skip-link" href="#content">
          Skip to content
        </a>

        <header className="site-header">
          <div className="header-inner">
            <a className="index-mark" href="#top" aria-label="Arjun Ranjan, home">
              <span>AR</span>
              <span>MODEL / 01</span>
            </a>

            <nav className="header-nav" aria-label="Primary navigation">
              {NAV_ITEMS.map((item, index) => (
                <a key={item.href} href={item.href}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              className="header-resume"
              href={PROFILE.links.find((link) => link.kind === 'resume')?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
            </a>
          </div>
        </header>

        <main id="content">
          <section className="hero-section" id="top">
            <div className="technical-grid" aria-hidden="true" />
            <div className="page-frame hero-grid">
              <div className="hero-main">
                <div className="status-line" data-hero-status>
                  <span className="status-dot" aria-hidden="true" />
                  <span>{PROFILE.status}</span>
                  <span className="status-line__location">
                    <MapPin aria-hidden="true" size={13} strokeWidth={1.8} />
                    {PROFILE.location}
                  </span>
                </div>

                <h1 data-hero-title>
                  <span>{PROFILE.name}</span>
                  <span className="hero-title__role">{PROFILE.title}</span>
                </h1>

                <div className="hero-copy" data-hero-copy>
                  <p className="hero-tagline">{PROFILE.tagline}</p>
                  <p className="hero-description">{PROFILE.description}</p>
                </div>

                <div className="hero-actions" data-hero-actions>
                  {heroLinks.map((link) => (
                    <ActionLink
                      key={link.kind}
                      link={link}
                      primary={link.kind === 'resume'}
                    />
                  ))}
                  <a className="text-link" href="#projects">
                    View selected systems
                    <ArrowDown aria-hidden="true" size={15} strokeWidth={1.8} />
                  </a>
                </div>
              </div>

              <aside className="model-index" data-model-index aria-label="Profile index">
                <div className="model-index__header">
                  <span>Model card</span>
                  <span>AR / 2026</span>
                </div>
                <dl>
                  <div>
                    <dt>Function</dt>
                    <dd>AI systems engineering</dd>
                  </div>
                  <div>
                    <dt>Training</dt>
                    <dd>MS Computer Science · Dec ’26</dd>
                  </div>
                  <div>
                    <dt>Focus</dt>
                    <dd>Agents, retrieval, product</dd>
                  </div>
                  <div>
                    <dt>Mode</dt>
                    <dd>Research → production</dd>
                  </div>
                </dl>
                <div className="model-index__stamp" aria-hidden="true">
                  <span>BUILD</span>
                  <strong>USEFUL</strong>
                  <span>SYSTEMS</span>
                </div>
              </aside>
            </div>

            <div className="page-frame metric-grid" aria-label="Selected engineering outcomes">
              {METRICS.map((metric, index) => (
                <article key={metric.label} className="metric" data-metric>
                  <span className="metric__index">
                    EVAL {String(index + 1).padStart(2, '0')}
                  </span>
                  <strong>{metric.value}</strong>
                  <span className="metric__label">{metric.label}</span>
                  <span className="metric__note">{metric.note}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="dossier-section" id="profile">
            <div className="page-frame">
              <SectionHeading
                index="01"
                eyebrow="Operating profile"
                title="Designed for the path from prototype to production."
                description="I work where model behavior, reliable systems, and the product surface meet."
              />

              <div className="section-rule" data-rule />

              <div className="capability-list">
                {CAPABILITIES.map((capability, index) => (
                  <article className="capability-row" key={capability.title} data-reveal>
                    <span className="capability-row__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                    <span className="capability-row__evidence">{capability.evidence}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="dossier-section dossier-section--ink" id="experience">
            <div className="page-frame">
              <SectionHeading
                index="02"
                eyebrow="Experience"
                title="Shipping history, measured in outcomes."
                description="Production AI, full-stack systems, and engineering instruction across fast-moving teams."
              />

              <div className="section-rule" data-rule />

              <div className="experience-ledger">
                {EXPERIENCE.map((experience, index) => (
                  <article
                    className={`experience-record${experience.latest ? ' experience-record--latest' : ''}`}
                    key={`${experience.company}-${experience.role}`}
                    data-reveal
                  >
                    <span className="experience-record__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="experience-record__meta">
                      <span>{experience.date}</span>
                      {experience.location ? <span>{experience.location}</span> : null}
                    </div>
                    <div className="experience-record__body">
                      <div className="experience-record__heading">
                        <div>
                          <h3>{experience.company}</h3>
                          <p>{experience.role}</p>
                        </div>
                        {experience.latest ? <span className="latest-tag">Latest signal</span> : null}
                      </div>
                      <ul className="experience-signals">
                        {experience.points.map((point, pointIndex) => (
                          <li className="experience-signal" key={point.label}>
                            <span>
                              {String(pointIndex + 1).padStart(2, '0')} / {point.label}
                            </span>
                            <p>{point.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="dossier-section" id="projects">
            <div className="page-frame">
              <SectionHeading
                index="03"
                eyebrow="Selected systems"
                title="Two systems. Clear inputs, legible decisions, useful outputs."
                description="Project work framed as architecture and evidence—not a gallery of screenshots."
              />

              <div className="section-rule" data-rule />

              <div className="project-grid">
                {PROJECTS.map((project, projectIndex) => (
                  <article
                    className={`project-card${projectIndex % 2 ? ' project-card--inverse' : ''}`}
                    key={project.name}
                    data-reveal
                  >
                    <div className="project-card__topline">
                      <span>SYS / {String(projectIndex + 1).padStart(2, '0')}</span>
                      <span>Case study</span>
                    </div>

                    <div className="project-card__heading">
                      <h3>{project.name}</h3>
                      <a
                        className="repo-link"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${project.name} repository on GitHub`}
                      >
                        <Github aria-hidden="true" size={17} strokeWidth={1.8} />
                        <span>{project.repoLabel}</span>
                        <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
                      </a>
                    </div>

                    <div
                      className="architecture-flow"
                      role="img"
                      aria-label={`${project.name} architecture: ${project.architecture.join(' to ')}`}
                    >
                      {project.architecture.map((stage, index) => (
                        <div className="architecture-step" key={stage}>
                          <span className="architecture-node">{stage}</span>
                          {index < project.architecture.length - 1 ? (
                            <span
                              className="architecture-line"
                              data-architecture-line
                              aria-hidden="true"
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <dl className="case-study-table">
                      <div>
                        <dt>Problem</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt>System</dt>
                        <dd>{project.system}</dd>
                      </div>
                      <div>
                        <dt>Outcome</dt>
                        <dd>{project.outcome}</dd>
                      </div>
                    </dl>

                    <div className="project-stack">
                      <span>Stack</span>
                      <p>{project.stack.join(' / ')}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="dossier-section dossier-section--muted" id="skills">
            <div className="page-frame">
              <SectionHeading
                index="04"
                eyebrow="Technical range"
                title="A stack organized around the work."
                description="Model behavior, application systems, and the infrastructure between them."
              />

              <div className="section-rule" data-rule />

              <div className="skill-table">
                {SKILL_GROUPS.map((group, index) => (
                  <div className="skill-row" key={group.label} data-reveal>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{group.label}</h3>
                    <p>{group.items.join(' · ')}</p>
                  </div>
                ))}
              </div>

              <section className="education-block" id="education">
                <div className="education-block__label" data-reveal>
                  <span>05</span>
                  <h2>Education</h2>
                </div>
                <div className="education-list">
                  {EDUCATION.map((item) => (
                    <article key={item.degree} data-reveal>
                      <div>
                        <span>{item.school}</span>
                        <span>{item.date}</span>
                      </div>
                      <h3>{item.degree}</h3>
                      <p>{item.extra}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="page-frame contact-grid">
              <div className="contact-index" data-reveal>
                <span>06</span>
                <span>Contact / next run</span>
              </div>
              <div className="contact-main" data-reveal>
                <p>Have a difficult system to make useful?</p>
                <h2>Let&apos;s build the next one.</h2>
                <div className="contact-actions">
                  {PROFILE.links.map((link) => (
                    <ActionLink key={link.kind} link={link} primary={link.kind === 'email'} />
                  ))}
                </div>
              </div>
            </div>

            <footer className="page-frame site-footer">
              <span>© {new Date().getFullYear()} {PROFILE.name}</span>
              <span>Next.js / TypeScript / GSAP</span>
              <a href="#top">
                Back to index
                <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
              </a>
            </footer>
          </section>
        </main>
      </div>
    </PortfolioMotion>
  )
}
