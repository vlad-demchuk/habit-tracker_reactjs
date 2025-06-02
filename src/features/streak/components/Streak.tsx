import { useState } from 'react';

import { clsx } from 'clsx';

import expandIcon from '@/assets/expand-icon.svg';
import fireIcon from '@/assets/fire-icon.svg';

export const Streak = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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

          <span className="text-3xl font-[900] text-indigo-700">15 days </span>
        </div>

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
              <div className="relative flex flex-col place-items-center">
                <div
                  className={clsx(
                    'relative flex place-items-center size-10 bg-indigo-700 rounded-full',
                  )}
                >
                  <span className="absolute left-[50%] top-[50%] -translate-1/2 text-xl">
                    🔥
                  </span>
                </div>

                <p>Mon</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-indigo-700 rounded-full')} />
                <p>Tue</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-indigo-700 rounded-full')} />
                <p>Wed</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-gray-400 rounded-full')} />
                <p>Thu</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-gray-400 rounded-full')} />
                <p>Fri</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-gray-400 rounded-full')} />
                <p>Sat</p>
              </div>
              <div className="flex flex-col place-items-center">
                <div className={clsx('size-10 bg-gray-400 rounded-full')} />
                <p>Sun</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
