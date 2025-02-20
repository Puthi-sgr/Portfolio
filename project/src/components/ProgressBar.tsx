import React from 'react';
import { Trophy } from 'lucide-react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ProgressBar() {
  const { progress, level, xp } = useScrollProgress();
  
  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 transform transition-transform hover:scale-105">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="w-5 h-5 text-yellow-500" />
        <span className="text-sm font-medium dark:text-white">Level {level}</span>
      </div>
      <div className="w-48 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-blue-500"
          style={{ width: `${xp % 25 * 4}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        {xp} XP - Next level: {Math.ceil(xp / 25) * 25} XP
      </p>
    </div>
  );
}