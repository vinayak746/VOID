import { useRef, useEffect } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 1,
      speedX: 0.3 + Math.random() * 0.5,
      speedY: -0.1 + Math.random() * 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(248,69,101,0.15)";
        ctx.shadowColor = "rgba(248,69,101,0.15)";
        ctx.shadowBlur = 6;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > width || p.y < 0 || p.y > height) {
          p.x = 0;
          p.y = Math.random() * height;
        }
      }
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ filter: "blur(1px)", opacity: 0.4 }}
    />
  );
};

export default ParticleCanvas;
