import { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { formatWeekDays } from '@/utils/dates.ts';

import streakDataMock from '@/data/mocks/streak.json';

import expandIcon from '@/assets/expand-icon.svg';
import fireIcon from '@/assets/fire-icon.svg';

import { Streak as IStreak } from '@/features/streak/types';

export const Streak = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [streakData, setStreakData] = useState<IStreak | null>(null);

  const { daysCount = 0, weekDays = [] } = streakData ?? {};

  const formattedWeekDays = formatWeekDays(weekDays);

  useEffect(() => {
    setTimeout(() => {
      setStreakData(streakDataMock);
    }, 2000);
  }, []);

  return (
    <section className="mb-2 shadow-xl bg-white rounded-lg">
      <header className="flex p-4 justify-between items-center">
        <div className="flex items-center">
          <img className="m-2" src={fireIcon} alt="Close" />

          <div className="mr-4">
            <h2 className=" text-2xl font-semibold">Daily Streak</h2>
            <p className="text-balance text-gray-500">
              Keep going! You&apos;re doing great!
            </p>
          </div>

          {daysCount > 0 && (
            <span className="text-3xl font-[900] text-indigo-700">{`${daysCount} days`}</span>
          )}
        </div>

        {streakData ? (
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <img
              className={clsx(
                'cursor-pointer hover:scale-125 transition-transform',
                isExpanded && 'rotate-180',
              )}
              src={expandIcon}
              alt="Close"
            />
          </button>
        ) : (
          'Loading...'
        )}
      </header>

      <div className="relative border-t border-t-gray-200 overflow-hidden">
        <div
          className={clsx(
            'transition-all duration-500 ease-in-out origin-top',
            isExpanded
              ? 'max-h-42 opacity-100 scale-y-100'
              : 'max-h-0 opacity-0 scale-y-0',
          )}
        >
          <div className="p-4">
            <div className="mb-1 w-full h-6 bg-indigo-700 rounded-lg" />

            <div className="flex justify-between">
              <span className="text-gray-500">0 Days</span>
              <span className="text-gray-500">30 Days</span>
            </div>

            <div className="p-6 flex justify-between">
              {formattedWeekDays.map(({ label, completed, isPast }) => (
                <div
                  key={label}
                  className="relative flex flex-col place-items-center"
                >
                  <div
                    className={clsx(
                      'relative flex place-items-center size-10 rounded-full',
                      isPast ? 'bg-indigo-700' : 'bg-gray-400',
                    )}
                  >
                    {completed && (
                      <span className="absolute left-[50%] top-[50%] -translate-1/2 text-xl">
                        🔥
                      </span>
                    )}
                  </div>

                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
