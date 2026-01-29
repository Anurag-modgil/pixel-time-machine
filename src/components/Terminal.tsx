import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  type: "input" | "output" | "system" | "error";
  content: string;
}

const Terminal = () => {
  const [messages, setMessages] = useState<Message[]>([
    { type: "system", content: "████████████████████████████████████████" },
    { type: "system", content: "█  GREAT SCOTT! TIME TRAVEL TERMINAL  █" },
    { type: "system", content: "█      FLUX CAPACITOR: ENGAGED        █" },
    { type: "system", content: "████████████████████████████████████████" },
    { type: "system", content: "" },
    { type: "output", content: "Welcome, time traveler! I'm an AI assistant." },
    { type: "output", content: "Ask me anything about the developer's portfolio," },
    { type: "output", content: "skills, projects, or just chat about BTTF!" },
    { type: "system", content: "" },
    { type: "output", content: 'Type "help" for available commands.' },
    { type: "system", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Built-in commands
    if (trimmedCmd === "help") {
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║       AVAILABLE COMMANDS           ║" },
        { type: "output" as const, content: "╠════════════════════════════════════╣" },
        { type: "output" as const, content: "║ help    - Show this menu           ║" },
        { type: "output" as const, content: "║ about   - About Anurag             ║" },
        { type: "output" as const, content: "║ skills  - Technical skills         ║" },
        { type: "output" as const, content: "║ projects- View projects            ║" },
        { type: "output" as const, content: "║ contact - Contact information      ║" },
        { type: "output" as const, content: "║ resume  - Download my resume       ║" },
        { type: "output" as const, content: "║ clear   - Clear terminal           ║" },
        { type: "output" as const, content: "║ 88mph   - Time travel easter egg!  ║" },
        { type: "output" as const, content: "╠════════════════════════════════════╣" },
        { type: "output" as const, content: "║ Or just chat with me naturally!    ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
      ];
    }

    if (trimmedCmd === "clear") {
      setMessages([]);
      return [];
    }

    if (trimmedCmd === "88mph") {
      return [
        { type: "system" as const, content: "⚡⚡⚡ HITTING 88 MILES PER HOUR! ⚡⚡⚡" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "    ████████████████████" },
        { type: "output" as const, content: "   █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█" },
        { type: "output" as const, content: "   █  ╔═══════════╗    █" },
        { type: "output" as const, content: "   █  ║ OCT 26 1985 ║   █" },
        { type: "output" as const, content: "   █  ╚═══════════╝    █" },
        { type: "output" as const, content: "   █▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█" },
        { type: "output" as const, content: "    ████████████████████" },
        { type: "output" as const, content: "" },
        { type: "system" as const, content: "Roads? Where we're going, we don't need roads!" },
      ];
    }

    if (trimmedCmd === "about") {
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║           ABOUT ANURAG             ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "Self-motivated software engineer from" },
        { type: "output" as const, content: "Karnal, Haryana with a passion for" },
        { type: "output" as const, content: "building full-stack applications." },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "EDUCATION:" },
        { type: "output" as const, content: "  B.Tech CSE (2022-2026) - SJPMIET" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "EXPERIENCE:" },
        { type: "output" as const, content: "  → GeMind - Software Developer Intern" },
        { type: "output" as const, content: "  → Rudra Infocom - Full Stack Developer" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "And yes, a huge Back to the Future fan!" },
      ];
    }

    if (trimmedCmd === "skills") {
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║         TECHNICAL SKILLS           ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "LANGUAGES:" },
        { type: "output" as const, content: "  C, C++, TypeScript, JavaScript" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "FRONTEND:" },
        { type: "output" as const, content: "  Next.js, React, Tailwind CSS" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "BACKEND:" },
        { type: "output" as const, content: "  Node.js, Express.js, REST APIs" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "DATABASES:" },
        { type: "output" as const, content: "  PostgreSQL, MongoDB, Prisma" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "AI & TOOLS:" },
        { type: "output" as const, content: "  OpenAI API, LangChain, RAG, Docker, Git" },
      ];
    }

    if (trimmedCmd === "projects") {
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║           MY PROJECTS              ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "[1] DB NARRATOR" },
        { type: "output" as const, content: "    Chat with databases using natural" },
        { type: "output" as const, content: "    language. AI-powered query generation" },
        { type: "output" as const, content: "    Tech: Next.js, TypeScript, PostgreSQL" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "[2] SHOPPR" },
        { type: "output" as const, content: "    Full-stack e-commerce platform" },
        { type: "output" as const, content: "    Razorpay payments, JWT auth, emails" },
        { type: "output" as const, content: "    Tech: React, Node.js, MongoDB" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "[3] SOMMAIRE AI" },
        { type: "output" as const, content: "    AI-powered PDF summarizer" },
        { type: "output" as const, content: "    Generates reel-style summaries" },
        { type: "output" as const, content: "    Tech: Next.js, LangChain, OpenAI" },
      ];
    }

    if (trimmedCmd === "contact") {
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║         CONTACT INFO               ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "📧 Email: anuraghr02@gmail.com" },
        { type: "output" as const, content: "📱 Phone: +91 70156 69928" },
        { type: "output" as const, content: "🐙 GitHub: github.com/anurag" },
        { type: "output" as const, content: "📍 Location: Karnal, Haryana" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "Feel free to reach out anytime!" },
      ];
    }

    if (trimmedCmd === "resume") {
      window.open("/resume/anurag_resume.pdf", "_blank");
      return [
        { type: "output" as const, content: "╔════════════════════════════════════╗" },
        { type: "output" as const, content: "║         RESUME DOWNLOAD            ║" },
        { type: "output" as const, content: "╚════════════════════════════════════╝" },
        { type: "output" as const, content: "" },
        { type: "output" as const, content: "Opening resume in a new tab..." },
        { type: "output" as const, content: "Great Scott! My credentials are ready!" },
      ];
    }

    // AI chat for everything else
    try {
      setIsLoading(true);
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { message: cmd },
      });

      if (error) throw error;

      const response = data?.response || "Great Scott! Something went wrong with the flux capacitor!";
      
      // Split long responses into multiple lines
      const lines = response.split("\n").filter((line: string) => line.trim());
      return lines.map((line: string) => ({ type: "output" as const, content: line }));
    } catch (error) {
      console.error("Chat error:", error);
      return [
        { type: "error" as const, content: "ERROR: Flux capacitor malfunction!" },
        { type: "error" as const, content: "The time circuits are experiencing issues." },
      ];
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userInput = input;
    setInput("");

    // Add user input to messages
    setMessages((prev) => [...prev, { type: "input", content: `> ${userInput}` }]);

    // Get response
    const response = await handleCommand(userInput);
    if (response.length > 0) {
      setMessages((prev) => [...prev, { type: "system", content: "" }, ...response]);
    }
  };

  const getMessageColor = (type: Message["type"]) => {
    switch (type) {
      case "input":
        return "text-secondary";
      case "output":
        return "text-foreground";
      case "system":
        return "text-primary";
      case "error":
        return "text-destructive";
      default:
        return "text-foreground";
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="terminal pixel-border p-1">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-2 border-b-4 border-border bg-muted">
          <div className="w-3 h-3 bg-destructive" />
          <div className="w-3 h-3 bg-secondary" />
          <div className="w-3 h-3 bg-primary" />
          <span className="ml-4 font-pixel text-xs text-muted-foreground">
            TEMPORAL_TERMINAL_v1.21_GIGAWATTS
          </span>
        </div>

        {/* Terminal content */}
        <div className="h-96 overflow-y-auto p-4 font-mono text-sm md:text-base crt-screen">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`${getMessageColor(msg.type)} leading-relaxed ${
                msg.type === "system" && msg.content === "" ? "h-2" : ""
              }`}
            >
              {msg.content}
            </div>
          ))}

          {isLoading && (
            <div className="text-primary animate-pulse">
              Processing temporal data...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="border-t-4 border-border p-4 bg-muted">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-primary">MARTY@DELOREAN:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 terminal-input text-foreground text-sm md:text-base"
              placeholder={isLoading ? "Processing..." : "Enter command..."}
              disabled={isLoading}
              autoComplete="off"
              spellCheck={false}
            />
            <span className="text-foreground blink-cursor" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Terminal;
