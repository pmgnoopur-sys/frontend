"use client";

import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className = "" }: AnimatedHeadingProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const lines = text.split("\n");
  const charDelay = 30; // 30ms per character

  return (
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => {
            const delay = (lineIndex * line.length * charDelay) + (charIndex * charDelay);
            return (
              <span
                key={charIndex}
                className="inline-block"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateX(0)" : "translateX(-18px)",
                  transition: "opacity 500ms ease, transform 500ms ease",
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}
