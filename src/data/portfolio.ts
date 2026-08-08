export type ProfileLink = {
  label: string
  href: string
  kind: 'email' | 'github' | 'linkedin' | 'resume'
  external?: boolean
}

export type ExperienceItem = {
  company: string
  role: string
  date: string
  location?: string
  points: readonly {
    label: string
    text: string
  }[]
  latest?: boolean
}

export type ProjectItem = {
  name: string
  repoLabel: string
  repoUrl: string
  stack: readonly string[]
  architecture: readonly string[]
  problem: string
  system: string
  outcome: string
  externalAction?: {
    label: string
    href: string
  }
}

export const RESUME_URL =
  'https://drive.google.com/drive/folders/1MyDgV55VevOOOUPDc8G2_EJfIqarCOIn?dmr=1&ec=wgc-drive-globalnav-goto'

export const PROFILE = {
  name: 'Arjun Ranjan',
  title: 'AI Engineer',
  location: 'Tempe, AZ',
  status: 'Open to AI engineering opportunities',
  tagline:
    'I build production agent systems that plan, retrieve, use tools, and ship inside fast, thoughtful products.',
  description:
    'MS Computer Science candidate at Arizona State University, working across agent orchestration, semantic retrieval, production AI workflows, and full-stack delivery.',
  links: [
    {
      href: 'mailto:arjunranjanwork@gmail.com',
      label: 'Email',
      kind: 'email',
    },
    {
      href: 'https://github.com/aranja15',
      label: 'GitHub',
      kind: 'github',
      external: true,
    },
    {
      href: 'https://linkedin.com/in/arjunranjan',
      label: 'LinkedIn',
      kind: 'linkedin',
      external: true,
    },
    {
      href: RESUME_URL,
      label: 'Resume',
      kind: 'resume',
      external: true,
    },
  ] satisfies readonly ProfileLink[],
}

export const METRICS = [
  { value: '23', label: 'production AI workflows', note: 'across 4 providers' },
  { value: '95%', label: 'tool-call success', note: 'from 75% baseline' },
  { value: '+60%', label: 'retrieval accuracy', note: 'semantic memory' },
  { value: '90', label: 'mobile Lighthouse', note: 'from a score of 65' },
] as const

export const CAPABILITIES = [
  {
    title: 'Agent orchestration',
    description:
      'Tool-aware systems that decompose work, coordinate specialized agents, and keep execution legible.',
    evidence: 'LangGraph / tool execution / multi-agent planning',
  },
  {
    title: 'Semantic retrieval',
    description:
      'Memory and retrieval layers designed around task relevance, context continuity, and measurable precision.',
    evidence: 'Embeddings / semantic memory / deterministic ranking',
  },
  {
    title: 'Production AI',
    description:
      'Provider-agnostic workflows with secure tenant boundaries, resilient error paths, and observable outcomes.',
    evidence: 'AWS Bedrock / PostgreSQL / edge functions',
  },
  {
    title: 'Full-stack delivery',
    description:
      'Fast interfaces and pragmatic services built together, with performance treated as a product feature.',
    evidence: 'Next.js / TypeScript / FastAPI / Spring Boot',
  },
] as const

export const EXPERIENCE: readonly ExperienceItem[] = [
  {
    company: 'Selfmadee.ai',
    role: 'AI Engineer Intern',
    date: 'June 2026 – August 2026',
    location: 'Waddell, AZ',
    latest: true,
    points: [
      {
        label: 'Catalog ops / 04 brands',
        text: 'Turned Amazon and Shopify catalog onboarding into a repeatable AI-assisted mapping flow for four brands.',
      },
      {
        label: 'Workflow fabric / 23 × 04',
        text: 'Unified 23 production AI workflows across four providers behind Bedrock, embeddings, and tool execution.',
      },
      {
        label: 'Query compression / -90%',
        text: 'Collapsed Gmail count traffic by 90% and replaced 10K-row email transfers with one PostgreSQL response.',
      },
      {
        label: 'Tenant defense / 14 + 69',
        text: 'Closed cross-tenant gaps across 14 integrations and hardened error handling for 69 Edge Functions.',
      },
    ],
  },
  {
    company: 'Alleo.ai (Techstars ’23)',
    role: 'AI Engineer Intern',
    date: 'Aug 2025 – May 2026',
    points: [
      {
        label: 'Agent runtime / 75 → 95%',
        text: 'Re-platformed chat as a tool-orchestrated agent runtime, lifting successful tool calls from 75% to 95%.',
      },
      {
        label: 'Memory layer / +60%',
        text: 'Replaced baseline RAG with semantic memory retrieval and raised retrieval accuracy by 60%.',
      },
      {
        label: 'Multi-agent / -35% time',
        text: 'Engineered LangGraph workflows for research and planning that cut task completion time by 35%.',
      },
      {
        label: 'Performance / 65 → 90',
        text: 'Collapsed duplicated App Router layouts into shared server components and moved mobile Lighthouse from 65 to 90.',
      },
    ],
  },
  {
    company: 'Ira A. Fulton Schools — SCAI',
    role: 'Grader (CSE259: Logic in CS)',
    date: 'Aug 2025 – Present',
    points: [
      {
        label: 'Evaluation system / 120+',
        text: 'Co-designed transparent rubrics that made assessment consistent across a 120+ student cohort.',
      },
      {
        label: 'Feedback loop / +15%',
        text: 'Turned grading signals into targeted feedback and office-hour coaching, improving cohort performance by 15%.',
      },
    ],
  },
  {
    company: 'Ira A. Fulton Schools — Capstone',
    role: 'Undergraduate Teaching Assistant',
    date: 'May 2025 – Aug 2025',
    points: [
      {
        label: 'Engineering mentorship / 70+',
        text: 'Helped 70+ builders turn architecture, testing, and agile trade-offs into software they could confidently ship.',
      },
    ],
  },
  {
    company: 'tCognition Inc. (Capstone)',
    role: 'Backend Engineer',
    date: 'Aug 2024 – May 2025',
    points: [
      {
        label: 'Secure ATS core / JWT + MongoDB',
        text: 'Designed the authentication and data layer for a high-volume applicant system using Spring Boot, JWT, and MongoDB.',
      },
    ],
  },
  {
    company: 'Headstarter',
    role: 'Software Engineering Fellow',
    date: 'Jul 2024 – Sep 2024',
    points: [
      {
        label: 'Ship loop / 03 products',
        text: 'Shipped three production-grade React and Next.js products; CI/CD halved deploy time while backend work cut latency by 40%.',
      },
    ],
  },
]

export const PROJECTS: readonly ProjectItem[] = [
  {
    name: 'AI Flashcards',
    repoLabel: 'aranja15 / ai-flashcards',
    repoUrl: 'https://github.com/aranja15/ai-flashcards',
    stack: ['React', 'TypeScript', 'FastAPI', 'Ollama'],
    architecture: ['Topic / PDF', 'FastAPI', 'Ollama', 'Card UI'],
    problem:
      'Turn dense topics and uploaded PDFs into usable study material without sending documents through a paid cloud model.',
    system:
      'A React client hands topics and documents to FastAPI, where structured prompts run against local LLaMA inference and parse into card pairs.',
    outcome:
      'An end-to-end learning flow with file upload, dynamic card state, response parsing, and zero external inference cost.',
  },
  {
    name: 'Agentic Buying Guide',
    repoLabel: 'KhushManchanda / clickless',
    repoUrl: 'https://github.com/KhushManchanda/clickless',
    stack: ['Python', 'FastAPI', 'Streamlit', 'LangGraph', 'OpenAI'],
    architecture: ['Query', 'Planner', 'Retrieve / Rank', 'Explain'],
    problem:
      'Translate ambiguous shopping intent into confident purchase decisions across 12K+ headphones and aggregated review data.',
    system:
      'A stateful planner extracts constraints, retrieves and deterministically ranks candidates, then explains each recommendation using supporting signals.',
    outcome:
      'Reduced irrelevant recommendations by 70% per iteration while preserving budget, feature, and use-case preferences across turns.',
  },
]

export const SKILL_GROUPS = [
  {
    label: 'AI systems',
    items: [
      'LangGraph',
      'LLMs',
      'RAG',
      'Semantic Retrieval',
      'Multi-Agent Systems',
      'Vector Embeddings',
      'Tool Orchestration',
      'AWS Bedrock',
    ],
  },
  {
    label: 'Application',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'FastAPI',
      'Python',
      'Java',
      'Spring Boot',
      'REST APIs',
    ],
  },
  {
    label: 'Data / infrastructure',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Supabase',
      'Docker',
      'AWS',
      'GCP',
      'CI/CD',
      'Linux',
      'Git',
    ],
  },
] as const

export const EDUCATION = [
  {
    school: 'Arizona State University',
    degree: 'M.S. in Computer Science',
    date: 'December 2026',
    extra: 'Relevant: Semantic Web Mining, Applied Cryptography, KRR',
  },
  {
    school: 'Arizona State University',
    degree: 'B.S. in Computer Science — 3.92 GPA (Dean’s List, all semesters)',
    date: 'May 2025',
    extra: 'Relevant: DS&A, Compilers, OS, DBMS, ML, Data Mining, iOS, QA, Data Viz',
  },
] as const
