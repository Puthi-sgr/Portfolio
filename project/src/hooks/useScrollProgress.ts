import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      setProgress(progress);
      
      // Calculate XP based on scroll progress
      const newXp = Math.floor(progress);
      setXp(newXp);
      
      // Level up every 25 XP
      const newLevel = Math.floor(newXp / 25) + 1;
      if (newLevel !== level) {
        setLevel(newLevel);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [level]);

  return { progress, level, xp };
}