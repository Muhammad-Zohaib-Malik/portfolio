"use client";

import { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles: Particle[] = [];
    const particleCount = 700;

    class Particle {
      x: number;
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      size: number;
      speed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 200;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.speed = Math.random() * 0.01 + 0.005;
      }

      update(time: number) {
        // Create a wave effect using sine and cosine functions
        const wave1 = Math.sin(time * this.speed + this.baseX * 0.005) * 50;
        const wave2 = Math.cos(time * this.speed + this.baseY * 0.005) * 50;
        
        this.x = this.baseX + wave1;
        this.y = this.baseY + wave2;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = (time: number) => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw(ctx);
      });

      requestAnimationFrame(animate);
    };

    init();
    let animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60"
      style={{
        maskImage: "radial-gradient(ellipse at center right, black, transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse at center right, black, transparent 80%)",
      }}
    />
  );
}
