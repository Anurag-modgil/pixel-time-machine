
# Personalize Terminal with Anurag's Resume Data

Based on your resume, I'll update the portfolio to reflect your actual background, skills, projects, and personality. I'll also add a resume download link.

---

## Summary of Changes

1. **Update AI Personality** - Make the chatbot represent YOU (Anurag) with your real background
2. **Update Terminal Commands** - Replace placeholder data with your actual info
3. **Add Resume Command** - New "resume" command to download/view your resume
4. **Add Real Projects** - DB Narrator, Shoppr, and Sommaire AI
5. **Update Contact Info** - Your real email and GitHub

---

## Your Profile Data (from Resume)

| Field | Value |
|-------|-------|
| Name | Anurag |
| Location | Karnal, Haryana |
| Email | anuraghr02@gmail.com |
| Phone | +91 70156 69928 |
| Education | B.Tech CSE (2022-2026) - SJPMIET |
| Experience | GeMind (Aug-Nov 2025), Rudra Infocom (Nov 2024-May 2025) |

---

## Implementation Steps

### 1. Copy Resume to Project
Copy your PDF to `public/resume/anurag_resume.pdf` so it can be downloaded.

### 2. Update Terminal Commands (`Terminal.tsx`)

**Help Command** - Add "resume" option

**About Command** - Update with your real info:
- Self-motivated software engineer from Karnal, Haryana
- B.Tech in Computer Science (2022-2026)
- Experience at GeMind and Rudra Infocom
- Back to the Future enthusiast

**Skills Command** - Replace with your actual skills:
```text
LANGUAGES:
  C, C++, TypeScript, JavaScript

FRONTEND:
  Next.js, React, Tailwind CSS

BACKEND:
  Node.js, Express.js, REST APIs

DATABASES:
  PostgreSQL, MongoDB, Prisma

AI & TOOLS:
  OpenAI API, LangChain, RAG, Docker, Git
```

**Projects Command** - Your real projects:
```text
[1] DB NARRATOR
    Chat with databases using natural language
    AI-powered query generation with human-like responses
    Tech: Next.js, TypeScript, Node.js, PostgreSQL

[2] SHOPPR
    Full-stack e-commerce platform
    Razorpay payments, JWT auth, email notifications
    Tech: React, Node.js, MongoDB

[3] SOMMAIRE AI
    AI-powered PDF summarizer
    Generates reel-style summaries from documents
    Tech: Next.js, LangChain, OpenAI, PostgreSQL
```

**Contact Command** - Your real contact info:
```text
Email: anuraghr02@gmail.com
Phone: +91 70156 69928
GitHub: github.com/anurag
Location: Karnal, Haryana
```

**New Resume Command** - Opens/downloads your resume PDF

### 3. Update AI Personality (`chat/index.ts`)

Update the system prompt so the AI chatbot knows it represents Anurag:

```text
You are AnuragBot, a fun AI assistant representing Anurag's portfolio.

About Anurag:
- Full-stack developer from Karnal, Haryana
- B.Tech Computer Science student (2022-2026) at SJPMIET
- Software Developer Intern at GeMind - worked on high-traffic apps
- Full Stack Developer Intern at Rudra Infocom - built 3 full-stack apps
- Strong skills: Next.js, React, TypeScript, Node.js, PostgreSQL, MongoDB
- Passionate about AI integrations (OpenAI, LangChain, RAG)
- Huge Back to the Future fan!

Key Projects:
- DB Narrator: Chat with databases using natural language
- Shoppr: E-commerce with Razorpay integration
- Sommaire AI: AI-powered PDF summarizer

Keep the Doc Brown personality with time travel references!
```

### 4. Update Index Page

Change the header from "TIME_TRAVELER.DEV" to "ANURAG.DEV" to personalize the portfolio.

---

## Technical Details

| File | Changes |
|------|---------|
| `public/resume/anurag_resume.pdf` | Copy resume PDF here |
| `src/components/Terminal.tsx` | Update all commands with real data, add resume command |
| `supabase/functions/chat/index.ts` | Update AI personality with Anurag's background |
| `src/pages/Index.tsx` | Update header title to ANURAG.DEV |
