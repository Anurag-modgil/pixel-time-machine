import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Received message:", message);

    const systemPrompt = `You are DocBot, a fun AI assistant for a developer's retro pixel portfolio website themed around Back to the Future. 

Your personality:
- You speak like Doc Brown from Back to the Future - enthusiastic, occasionally saying "Great Scott!" and making time travel references
- You're helpful and knowledgeable about the developer's skills and projects
- You keep responses SHORT and punchy (2-4 sentences max)
- You use ASCII-friendly characters since this is a terminal interface
- You're a bit quirky and love making movie references

About the developer you represent:
- A passionate full-stack developer who loves retro aesthetics and movies
- Skills: TypeScript, JavaScript, React, Node.js, Python, Next.js
- Loves building creative web experiences
- A huge Back to the Future fan and general cinefile
- Available for freelance work and collaborations

Remember: Keep it fun, keep it retro, keep it SHORT!`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 200,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ 
            error: "Rate limited",
            response: "Great Scott! Too many requests! The flux capacitor needs to cool down. Try again in a moment!"
          }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ 
            error: "Payment required",
            response: "We need 1.21 gigawatts of power... I mean, credits! The time machine is out of fuel."
          }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content || "Great Scott! The flux capacitor is overloaded!";
    
    console.log("AI response:", aiResponse);

    return new Response(
      JSON.stringify({ response: aiResponse }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat function error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ 
        error: errorMessage,
        response: "Great Scott! Something went wrong with the time circuits! Try again, Marty!"
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
});
