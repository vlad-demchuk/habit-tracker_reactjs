import { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import streakDataMock from '@/data/mocks/streak.json';

import { Card } from '@/features/streak/components/Card.tsx';

import { Streak as IStreak } from '@/features/streak/types';

import expandIcon from '../../../assets/expand-icon.svg';

export const Streak = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [streakData, setStreakData] = useState<IStreak | null>(null);

  const { daysCount = 0 } = streakData ?? {};

  // const formattedWeekDays = formatWeekDays(weekDays);

  const cardData = [
    { id: 1, title: 'Current Streak', value: daysCount.toString() },
    { id: 2, title: 'Highest Streak', value: '7' },
  ];

  const smCardData = [{ id: 3, title: 'Total Habits', value: '12' }];

  useEffect(() => {
    setTimeout(() => {
      setStreakData(streakDataMock);
    }, 2000);
  }, []);

  return (
    <section className="mb-2 bg-white rounded-lg">
      <header className="flex justify-between items-center">
        <h2 className="flex items-center text-2xl font-semibold leading-6 tracking-normal">
          Streaks
        </h2>

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

      <div className="relative border-t-gray-200 overflow-hidden">
        <div
          className={clsx(
            'transition-all duration-500 ease-in-out origin-top',
            isExpanded
              ? 'max-h-42 mt-4 opacity-100 scale-y-100'
              : 'max-h-0 opacity-0 scale-y-0',
          )}
        >
          <div className="flex justify-evenly gap-4">
            {cardData.map((card) => (
              <Card key={card.id} title={card.title} value={card.value} />
            ))}

            {smCardData.map((card) => (
              <Card
                classname="hidden sm:block"
                key={card.id}
                title={card.title}
                value={card.value}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
