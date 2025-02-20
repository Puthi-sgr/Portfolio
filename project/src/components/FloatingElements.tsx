import React from 'react';
import { Code, Sparkles, Star, Zap } from 'lucide-react';
import { useMousePosition } from '../hooks/useMousePosition';

interface FloatingElement {
  Icon: React.ElementType;
  initialPosition: { x: number; y: number };
  size: number;
  delay: number;
}

const elements: FloatingElement[] = [
  { Icon: Code, initialPosition: { x: 25, y: 25 }, size: 24, delay: 0 },
  { Icon: Sparkles, initialPosition: { x: 75, y: 30 }, size: 20, delay: 1 },
  { Icon: Star, initialPosition: { x: 20, y: 70 }, size: 16, delay: 2 },
  { Icon: Zap, initialPosition: { x: 80, y: 60 }, size: 22, delay: 1.5 },
  { Icon: Code, initialPosition: { x: 40, y: 80 }, size: 18, delay: 0.5 },
];

export default function FloatingElements() {
  const mousePosition = useMousePosition();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => {
        const dx = mousePosition.x / 20;
        const dy = mousePosition.y / 20;
        
        return (
          <div
            key={index}
            className="absolute transition-transform duration-1000 ease-out"
            style={{
              left: `${element.initialPosition.x}%`,
              top: `${element.initialPosition.y}%`,
              transform: `translate(${dx}px, ${dy}px)`,
              animation: `float 6s ease-in-out infinite`,
              animationDelay: `${element.delay}s`,
            }}
          >
            <element.Icon 
              className="text-purple-500/30 dark:text-purple-400/30"
              size={element.size}
            />
          </div>
        );
      })}
    </div>
  );
}