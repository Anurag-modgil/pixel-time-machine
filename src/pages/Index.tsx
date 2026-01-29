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
        <section className="mb-12">
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
