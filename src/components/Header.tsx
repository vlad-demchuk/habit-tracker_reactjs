import { IconButton } from '@/components';

import plusIcon from '@/assets/plus-icon.svg';

interface Props {
  onAddClick: () => void;
}

export const Header = ({ onAddClick }: Props) => {
  return (
    <header className="relative py-2 flex justify-center items-center">
      <h1 className="text-2xl font-bold leading-6 tracking-normal">
        Habit Tracker
      </h1>
      <IconButton onClick={onAddClick} className="absolute right-0">
        <img
          className="cursor-pointer hover:scale-125 transition-transform"
          src={plusIcon}
          alt="Close"
        />
      </IconButton>
    </header>
  );
};
