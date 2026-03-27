"use client";

import { useRef, useEffect } from "react";

export default function InteractiveDots() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    canvas.width = width;
    canvas.height = height;

    const mouse = {
      x: width / 2,
      y: height / 2,
    };

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    const spacing = 40;
    const radius = 3;
    const revealDistance = 120;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;

          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < revealDistance) {
            const alpha = 1 - dist / revealDistance;

            ctx.beginPath();
            ctx.arc(x, y, radius + alpha * 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168,85,247,${alpha})`;
            ctx.fill();
          }
        }
      }

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
