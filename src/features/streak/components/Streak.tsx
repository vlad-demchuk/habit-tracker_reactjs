import { useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { IconButton } from '@/components';

import streakDataMock from '@/data/mocks/streak.json';

import expandIcon from '@/assets/expand-icon.svg';

import { Card } from '@/features/streak/components/Card.tsx';

import { Streak as IStreak } from '@/features/streak/types';

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
    <section className="mb-2 rounded-lg bg-white lg:bg-gray-50">
      <header className="flex items-center justify-between">
        <h2 className="flex items-center text-2xl leading-6 font-semibold tracking-normal">
          Streaks
        </h2>

        {streakData ? (
          <IconButton onClick={() => setIsExpanded(!isExpanded)}>
            <img
              className={clsx(
                'cursor-pointer transition-transform hover:scale-125',
                isExpanded && 'rotate-180',
              )}
              src={expandIcon}
              alt="Close"
            />
          </IconButton>
        ) : (
          'Loading...'
        )}
      </header>

      <div className="relative overflow-hidden border-t-gray-200">
        <div
          className={clsx(
            'origin-top transition-all duration-500 ease-in-out',
            isExpanded
              ? 'mt-4 max-h-42 scale-y-100 opacity-100'
              : 'max-h-0 scale-y-0 opacity-0',
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
