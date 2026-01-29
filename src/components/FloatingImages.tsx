import delorean from "@/assets/bttf-delorean.png";
import flux from "@/assets/bttf-flux.png";
import speedometer from "@/assets/bttf-speedometer.png";

const FloatingImages = () => {
  const images = [
    { src: delorean, alt: "DeLorean Time Machine", className: "float-1", position: "top-20 left-10", size: "w-32 md:w-48" },
    { src: flux, alt: "Flux Capacitor", className: "float-2", position: "top-40 right-10", size: "w-24 md:w-36" },
    { src: speedometer, alt: "88 MPH", className: "float-3", position: "bottom-40 left-20", size: "w-28 md:w-40" },
    { src: delorean, alt: "DeLorean", className: "float-2", position: "bottom-20 right-20", size: "w-24 md:w-32", rotate: true },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute ${img.position} ${img.className} opacity-40 hover:opacity-70 transition-opacity`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`${img.size} pixelated glitch ${img.rotate ? "scale-x-[-1]" : ""}`}
            style={{ filter: "drop-shadow(0 0 20px hsl(180 100% 50% / 0.5))" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingImages;
