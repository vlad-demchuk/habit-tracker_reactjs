import { useLocation } from 'react-router';

import { Button } from '@/components';

import { pathToTitle } from '@/data/navigation.tsx';

import plusIcon from '@/assets/plus-icon.svg';

export const TabHeader = ({ onAddClick }: { onAddClick: () => void }) => {
  const location = useLocation();

  const title = pathToTitle[location.pathname] ?? 'Dashboard';

  return (
    <>
      <div className="hidden flex-col gap-1 lg:flex">
        <h2 className="text-2xl leading-6 font-bold tracking-normal">
          {title}
        </h2>

        <p>Track your daily habits and build consistency</p>
      </div>

      <Button
        onClick={onAddClick}
        className="hidden items-center justify-center gap-1 lg:flex"
      >
        <img className="size-4" src={plusIcon} alt="Close" /> Add Habit
      </Button>
    </>
  );
};
