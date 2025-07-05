import { Button, IconButton, Logo } from '@/components';

import plusIcon from '@/assets/plus-icon.svg';

interface Props {
  onAddClick: () => void;
}

export const Header = ({ onAddClick }: Props) => {
  return (
    <header className="sticky top-0 bg-white p-4 z-10 border-b border-gray-200 flex justify-center items-center lg:justify-between lg:p-6">
      <Logo classname="lg:hidden" />

      <IconButton
        onClick={onAddClick}
        className="absolute right-4 size-4 lg:hidden"
      >
        <img
          className="cursor-pointer hover:scale-125 transition-transform"
          src={plusIcon}
          alt="Close"
        />
      </IconButton>

      <div className="hidden lg:flex flex-col gap-1">
        <h2 className="text-2xl font-bold leading-6 tracking-normal">
          Dashboard
        </h2>

        <p>Track your daily habits and build consistency</p>
      </div>

      <Button
        onClick={onAddClick}
        className="hidden lg:flex justify-center items-center gap-1"
      >
        <img className="size-4" src={plusIcon} alt="Close" /> Add Habit
      </Button>
    </header>
  );
};
