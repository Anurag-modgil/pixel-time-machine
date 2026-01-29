import avatar from "@/assets/avatar.png";

const PixelAvatar = () => {
  return (
    <div className="relative inline-block">
      {/* Outer glow */}
      <div className="absolute inset-0 blur-xl bg-primary/30 rounded-lg" />
      
      {/* Pixel border frame */}
      <div className="relative pixel-border p-2 bg-card">
        <img
          src={avatar}
          alt="Developer Avatar"
          className="w-32 h-32 md:w-48 md:h-48 pixelated"
          style={{
            filter: "drop-shadow(0 0 10px hsl(180 100% 50% / 0.8))",
          }}
        />
      </div>
      
      {/* Scanline effect on avatar */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
          }}
        />
      </div>
    </div>
  );
};

export default PixelAvatar;
