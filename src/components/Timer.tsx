import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTestStore } from '../store/testStore';

export const Timer: React.FC = () => {
  const { timeRemaining, completeTest } = useTestStore();

  useEffect(() => {
    const timer = setInterval(() => {
      useTestStore.setState((state) => ({
        timeRemaining: Math.max(0, state.timeRemaining - 1)
      }));
    }, 1000);

    if (timeRemaining === 0) {
      completeTest();
    }

    return () => clearInterval(timer);
  }, [timeRemaining, completeTest]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold bg-white rounded-lg shadow-md px-4 py-2">
      <Clock className="w-5 h-5 text-blue-600" />
      <span>
        {String(hours).padStart(2, '0')}:
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};