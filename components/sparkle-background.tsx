"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 10, // ✨ 20–40px
      delay: Math.random() * 2,
      duration: Math.random() * 5 + 3, // 3–8s
    }));
    setSparkles(generated);
  }, []);

  if (sparkles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.svg
          key={sparkle.id}
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            opacity: 0.8,
            filter: "drop-shadow(0 0 8px white)",
          }}
          animate={{
            scale: [0.8, 1.4, 0.8],
            opacity: [0, 1, 0],
            x: [0, 10, -10, 0],
            y: [0, -10, 10, 0],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeOut",
          }}
        >
          <path d="M12 2L13.09 8.26L18 9.27L14.5 13.14L15.18 19.02L12 16.77L8.82 19.02L9.5 13.14L6 9.27L10.91 8.26L12 2Z" />
        </motion.svg>
      ))}
    </div>
  );
}
