import React, { useState } from 'react';
import { Trophy, Sparkles, Star } from 'lucide-react';

interface Level {
  title: string;
  xp: number;
  icon: React.ElementType;
}

const levels: Level[] = [
  { title: "Novice Developer", xp: 0, icon: Trophy },
  { title: "Advanced Beginner", xp: 100, icon: Star },
  { title: "Competent Coder", xp: 250, icon: Sparkles },
  { title: "Proficient Pro", xp: 500, icon: Trophy },
  { title: "Coding Expert", xp: 1000, icon: Star }
];

export default function LevelIndicator() {
  const [isHovered, setIsHovered] = useState(false);
  const currentXP = 50; // This would come from your game state
  const currentLevel = 1;

  const getCurrentLevelProgress = () => {
    const currentLevelXP = levels[currentLevel - 1].xp;
    const nextLevelXP = levels[currentLevel].xp;
    const progress = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;
    return Math.min(100, Math.max(0, progress));
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 cursor-pointer transition-all duration-300 hover:shadow-lg">
        Level {currentLevel} Developer
      </span>

      {/* Extended Level Information */}
      <div className={`absolute left-0 top-full mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transition-all duration-300 transform origin-top ${
        isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="w-72">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium dark:text-white">
              {levels[currentLevel - 1].title}
            </span>
            <span className="text-sm text-purple-600 dark:text-purple-400">
              {currentXP} XP
            </span>
          </div>

          {/* Level Progress Bar */}
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-4 relative overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${getCurrentLevelProgress()}%` }}
            />
          </div>

          {/* Next Levels Preview */}
          <div className="space-y-2">
            {levels.slice(currentLevel, currentLevel + 2).map((level, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <level.icon className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">{level.title}</span>
                </div>
                <span className="text-gray-500 dark:text-gray-500">{level.xp} XP</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}