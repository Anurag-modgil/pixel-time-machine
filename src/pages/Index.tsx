import FloatingImages from "@/components/FloatingImages";
import PixelAvatar from "@/components/PixelAvatar";
import Terminal from "@/components/Terminal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background crt-screen scanlines overflow-x-hidden">
      {/* Floating BTTF Images */}
      <FloatingImages />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex flex-col items-center gap-6">
            {/* Avatar */}
            <PixelAvatar />

            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-pixel text-xl md:text-3xl lg:text-4xl neon-text tracking-wider">
                ANURAG.DEV
              </h1>
              <p className="font-mono text-lg md:text-2xl text-secondary">
                &lt;FULL_STACK_DEVELOPER /&gt;
              </p>
              <p className="font-mono text-sm md:text-base text-muted-foreground max-w-md mx-auto">
                Building the future, one commit at a time.
                <br />
                <span className="text-accent">Powered by 1.21 gigawatts of creativity.</span>
              </p>
            </div>

            {/* Time Circuit Display */}
            <div className="mt-4 pixel-border p-4 bg-card">
              <div className="font-mono text-xs text-muted-foreground mb-2">
                DESTINATION TIME
              </div>
              <div className="time-circuit font-mono tracking-widest">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                }).toUpperCase().replace(",", "")}
              </div>
            </div>
          </div>
        </header>

        {/* Terminal Section */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <h2 className="font-pixel text-sm md:text-lg text-primary mb-2">
              &gt; INITIALIZE_CHAT_INTERFACE
            </h2>
            <p className="font-mono text-muted-foreground text-sm">
              Type commands or chat naturally with the AI
            </p>
          </div>
          <Terminal />
        </section>

        {/* About Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-lg md:text-2xl text-primary mb-2">
              &gt; ABOUT_ME
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="pixel-border p-6 md:p-8 bg-card max-w-3xl mx-auto">
            <div className="space-y-6 font-mono">
              <p className="text-foreground leading-relaxed">
                Self-motivated software engineer from <span className="text-primary">Karnal, Haryana</span> with 
                a passion for building full-stack applications and exploring AI integrations.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-secondary font-pixel text-sm">EDUCATION</h3>
                  <div className="pl-4 border-l-4 border-primary">
                    <p className="text-foreground">B.Tech CSE (2022-2026)</p>
                    <p className="text-muted-foreground text-sm">SJPMIET</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-secondary font-pixel text-sm">EXPERIENCE</h3>
                  <div className="space-y-2">
                    <div className="pl-4 border-l-4 border-accent">
                      <p className="text-foreground">GeMind</p>
                      <p className="text-muted-foreground text-sm">Software Developer Intern</p>
                    </div>
                    <div className="pl-4 border-l-4 border-accent">
                      <p className="text-foreground">Rudra Infocom</p>
                      <p className="text-muted-foreground text-sm">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-secondary font-pixel text-sm mb-3">SKILLS</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma", "LangChain", "OpenAI", "Docker", "Git"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-muted text-foreground text-sm border-2 border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-pixel text-lg md:text-2xl text-primary mb-2">
              &gt; MY_PROJECTS
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* DB Narrator */}
            <div className="pixel-border p-6 bg-card hover:bg-muted transition-colors group">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="font-pixel text-sm text-primary mb-2">DB NARRATOR</h3>
              <p className="font-mono text-foreground text-sm mb-4 leading-relaxed">
                Chat with databases using natural language. AI-powered query generation with human-like responses.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Next.js", "TypeScript", "PostgreSQL"].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 bg-primary/20 text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Shoppr */}
            <div className="pixel-border p-6 bg-card hover:bg-muted transition-colors group">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="font-pixel text-sm text-secondary mb-2">SHOPPR</h3>
              <p className="font-mono text-foreground text-sm mb-4 leading-relaxed">
                Full-stack e-commerce platform with Razorpay payments, JWT auth, and email notifications.
              </p>
              <div className="flex flex-wrap gap-1">
                {["React", "Node.js", "MongoDB"].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 bg-secondary/20 text-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Sommaire AI */}
            <div className="pixel-border p-6 bg-card hover:bg-muted transition-colors group">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-pixel text-sm text-accent mb-2">SOMMAIRE AI</h3>
              <p className="font-mono text-foreground text-sm mb-4 leading-relaxed">
                AI-powered PDF summarizer that generates reel-style summaries from documents.
              </p>
              <div className="flex flex-wrap gap-1">
                {["Next.js", "LangChain", "OpenAI"].map((tech) => (
                  <span key={tech} className="text-xs px-2 py-0.5 bg-accent/20 text-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-12 font-mono text-xs text-muted-foreground">
          <div className="pixel-border p-4 bg-card inline-block">
            <p>
              <span className="text-primary">©</span> {new Date().getFullYear()} ANURAG.DEV
            </p>
            <p className="mt-2 text-accent">
              "Roads? Where we're going, we don't need roads."
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
