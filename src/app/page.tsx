// app/page.tsx (single-file drop-in)
'use client'
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Globe, ArrowRight, Stars, Sparkles, GraduationCap, Briefcase, Code2, FileText } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Public resume link (replace with your Google Drive share URL)
const RESUME_URL = 'https://drive.google.com/file/d/12UMdadoQZnky9j3iHT4KKwlsVfoA2haf/view?usp=sharing'

// Helper data (pulled from your resume)
const PROFILE = {
  name: 'Arjun Ranjan',
  title: 'Software Engineer • MS CS @ ASU',
  tagline:
    'Building fast, elegant web apps and agentic backends. Next.js, TypeScript, FastAPI, Java. Performance-focused and UX-obsessed.',
  links: [
    { href: 'mailto:aranja15@asu.edu', label: 'Email', icon: Mail },
    { href: 'https://linkedin.com/in/arjunranjan', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://arjunranjan.com', label: 'Website', icon: Globe },
    { href: RESUME_URL, label: 'Resume', icon: FileText },
  ],
}


const EXPERIENCE = [
  {
    company: 'Alleo.ai (Techstars ’22)',
    role: 'Software Engineering Intern',
    date: 'Sep 2025 – Present',
    bullets: [
      'Refactored Next.js App Router layouts into shared server components to cut JS bundle size and speed up page loads.',
      'Raised Lighthouse mobile perf 65 → 90 by restructuring hydration and fixing LCP bottlenecks.',
      'Introduced Zustand to streamline data fetching and prevent redundant re-renders.',
    ],
  },
  {
    company: 'Ira A. Fulton Schools — SCAI',
    role: 'Grader (CSE259: Logic in CS)',
    date: 'Aug 2025 – Present',
    bullets: [
      'Graded for 120+ students; designed rubrics with faculty for fair, consistent evaluation.',
      'Provided targeted feedback and office-hours coaching; cohort performance +15%.',
    ],
  },
  {
    company: 'Ira A. Fulton Schools — Capstone',
    role: 'Undergraduate Teaching Assistant',
    date: 'May 2025 – Aug 2025',
    bullets: [
      'Mentored 70+ students on scalable architecture, testing, and agile delivery.',
    ],
  },
  {
    company: 'tCognition Inc. (Capstone)',
    role: 'Backend Engineer',
    date: 'Aug 2024 – May 2025',
    bullets: [
      'Designed secure JWT auth in Spring Boot and modeled MongoDB for high-volume ATS data.',
    ],
  },
  {
    company: 'Headstarter',
    role: 'Software Engineering Fellow',
    date: 'Jul 2024 – Sep 2024',
    bullets: [
      'Shipped 3 prod-grade full-stack apps (React/Next/Firebase); CI/CD cut deploy time 50%; backend latency –40%.',
    ],
  },
]

const PROJECTS = [
  {
    name: 'AI Flashcards',
    stack: 'FastAPI • TypeScript • Ollama',
    points: [
      'Topic & PDF → structured flashcards via local LLM inference (RAG-ready).',
      'Interactive React front-end with file upload and dynamic state.',
    ],
  },
]

const EDUCATION = [
  {
    school: 'Arizona State University',
    degree: 'M.S. in Computer Science',
    date: 'Dec 2026 (Expected)',
    extra: 'Relevant: Semantic Web Mining, Applied Cryptography, KRR',
  },
  {
    school: 'Arizona State University',
    degree: 'B.S. in Computer Science — 3.92 GPA (Dean’s List, all semesters)',
    date: 'May 2025',
    extra:
      'Relevant: DS&A, Compilers, OS, DBMS, ML, Data Mining, iOS, QA, Data Viz',
  },
]

const SKILLS = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'FastAPI',
  'Python',
  'Java/Spring Boot',
  'PostgreSQL/MongoDB',
  'Docker',
  'AWS/GCP/Azure',
  'CI/CD',
  'UI/UX & Accessibility',
]

// Styled section wrapper with GSAP hooks
function Section({ id, kicker, title, icon: Icon, children }: {
  id: string
  kicker: string
  title: string
  icon: React.ElementType
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section opacity-0 translate-y-6 max-w-6xl mx-auto px-6 py-20 text-neutral-50">
      <div className="flex items-center gap-3 mb-6 text-sm uppercase tracking-widest text-neutral-200">
        <Icon className="h-4 w-4" />
        <span>{kicker}</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-10 text-neutral-50">
        {title}
      </h2>
      {children}
    </section>
  )
}

export default function PortfolioPage() {
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return

      // Hero entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } })
      tl.from('.hero-kicker', { y: 20, opacity: 0 })
        .from('.hero-title', { y: 40, opacity: 0 }, '-=0.4')
        .from('.hero-sub', { y: 20, opacity: 0 }, '-=0.5')
        .from('.hero-cta', { y: 10, opacity: 0 }, '-=0.5')

      // Sections on scroll
      gsap.utils.toArray<HTMLElement>('.section').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%'
          },
          delay: i * 0.05,
        })
      })

      // Parallax blobs
      gsap.to('.blob', {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: { trigger: '#about', scrub: 0.3 },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={root} className="relative min-h-screen overflow-x-clip bg-neutral-950 text-neutral-50">

      {/* Background aesthetics */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(236,72,153,0.2),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_500px_at_90%_20%,rgba(34,197,94,0.15),transparent)]" />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-neutral-950/60">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-semibold tracking-tight">AR</div>
          <nav className="hidden md:flex gap-6 text-sm text-neutral-200">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20">
        <div className="absolute -top-24 right-0 w-64 h-64 blur-3xl rounded-full bg-indigo-500/20 blob" />
        <p className="hero-kicker text-sm uppercase tracking-widest text-neutral-200 flex items-center gap-2">
          <Stars className="h-4 w-4" /> Portfolio
        </p>
        <h1 className="hero-title mt-4 text-4xl md:text-6xl font-semibold tracking-tight">
          {PROFILE.name}
        </h1>
        <p className="hero-sub mt-3 text-xl text-neutral-200">
          {PROFILE.title}
        </p>
        <p className="hero-sub mt-4 max-w-2xl text-neutral-200">
          {PROFILE.tagline}
        </p>
        <div className="hero-cta mt-8 flex gap-3 flex-wrap">
          {PROFILE.links.map(({ href, label, icon: Icon }) => (
            <Button key={label} asChild className="rounded-xl">
              <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Icon className="h-4 w-4" /> {label}
              </a>
            </Button>
          ))}
          <a href="#experience" className="group inline-flex items-center gap-2 text-neutral-200 hover:text-white">
            See work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* About */}
      <Section id="about" kicker="About" title="Builder of fast, beautiful software" icon={Sparkles}>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <p className="text-neutral-200">
                I blend product taste with systems thinking. Recent work focuses on performance-first Next.js, pragmatic backend services, and agentic workflows.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <p className="text-neutral-200">
                I care about craft: crisp type, accessible motion, and measurable speed. My favorite PRs delete code and make pages feel instant.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-6">
              <p className="text-neutral-200">
                Tooling I reach for: Next.js, TypeScript, GSAP, Framer Motion, FastAPI, Spring Boot, Postgres, MongoDB, Docker, and solid observability.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" kicker="Experience" title="Where I learned by shipping" icon={Briefcase}>
        <div className="grid gap-6">
          {EXPERIENCE.map((e) => (
            <Card key={e.company + e.role} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-50">{e.role} · <span className="text-neutral-200">{e.company}</span></h3>
                  </div>
                  <div className="text-neutral-200 text-sm">{e.date}</div>
                </div>
                <ul className="mt-4 list-disc list-inside space-y-2 text-neutral-200">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" kicker="Projects" title="Featured work" icon={Code2}>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.name} className="group bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-neutral-50">{p.name}</h3>
                  <span className="text-xs text-neutral-200 uppercase tracking-widest">{p.stack}</span>
                </div>
                <ul className="mt-4 space-y-2 text-neutral-200">
                  {p.points.map((pt, i) => (
                    <li key={i} className="leading-relaxed">{pt}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" kicker="Stack" title="Tools I move fast with" icon={Sparkles}>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((s) => (
            <span key={s} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-sm">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" kicker="Education" title="Foundations" icon={GraduationCap}>
        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((ed) => (
            <Card key={ed.degree} className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-neutral-50">{ed.degree}</h3>
                <div className="text-neutral-200 mt-1">{ed.school} • {ed.date}</div>
                <p className="text-neutral-200 mt-3">{ed.extra}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" kicker="Contact" title="Let’s build something excellent" icon={Mail}>
        <div className="flex flex-wrap items-center gap-3">
          {PROFILE.links.map(({ href, label, icon: Icon }) => (
            <Button key={label} asChild variant="secondary" className="rounded-xl">
              <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Icon className="h-4 w-4" /> {label}
              </a>
            </Button>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-neutral-200 text-sm">
        © {new Date().getFullYear()} {PROFILE.name}. Crafted with Next.js, TypeScript & GSAP.
      </footer>
    </main>
  )
}

