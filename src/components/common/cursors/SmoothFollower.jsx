"use client";
import { useEffect, useRef } from "react";

export default function SmoothFollower() {
  const dotRef = useRef(null);
  const borderRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const dot = useRef({ x: 0, y: 0 });
  const border = useRef({ x: 0, y: 0 });

  const isHovering = useRef(false);

  const DOT_SPEED = 0.25;
  const BORDER_SPEED = 0.12;

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
      borderRef.current.style.width = "44px";
      borderRef.current.style.height = "44px";
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      borderRef.current.style.width = "28px";
      borderRef.current.style.height = "28px";
    };

    window.addEventListener("mousemove", handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      "a, button, img, input, textarea, select",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      dot.current.x = lerp(dot.current.x, mouse.current.x, DOT_SPEED);
      dot.current.y = lerp(dot.current.y, mouse.current.y, DOT_SPEED);

      border.current.x = lerp(border.current.x, mouse.current.x, BORDER_SPEED);
      border.current.y = lerp(border.current.y, mouse.current.y, BORDER_SPEED);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x}px, ${dot.current.y}px, 0)`;
      }

      if (borderRef.current) {
        borderRef.current.style.transform = `translate3d(${border.current.x}px, ${border.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <div
        ref={dotRef}
        className="absolute w-2 h-2 rounded-full"
        style={{
          transform: "translate3d(0,0,0)",
          background: "linear-gradient(135deg,#ac4bff,#e12afb,#f6339a)",
          boxShadow: "0 0 10px #ac4bff",
        }}
      />

      <div
        ref={borderRef}
        className="absolute rounded-full"
        style={{
          width: "28px",
          height: "28px",
          border: "2px solid #ac4bff",
          transform: "translate3d(0,0,0)",
          transition: "width 0.3s, height 0.3s",
          boxShadow: "0 0 12px rgba(172,75,255,0.6)",
        }}
      />
    </div>
  );
}
