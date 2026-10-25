'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const updateCursor = () => {
      setPosition((prev) => {
        const dx = mouseX - prev.x;
        const dy = mouseY - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25,
        };
      });
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-9999 hidden md:flex items-center justify-center will-change-transform"
      style={{
        transform: `translate3d(${position.x - 12}px, ${position.y - 12}px, 0)`,
      }}
    >
      <div className="w-6 h-6 rounded-full bg-lavender-300/20 border border-lavender-300/60 backdrop-blur-[2px] flex items-center justify-center text-lavender-300 shadow-sm">
        {/* Vector SVG Spade Icon */}
        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6 9 3 12 3 15a4 4 0 004 4c1.5 0 2.8-.8 3.5-2V22h3v-5c.7 1.2 2 2 3.5 2a4 4 0 004-4c0-3-3-6-9-13z" />
        </svg>
      </div>
    </div>
  );
}