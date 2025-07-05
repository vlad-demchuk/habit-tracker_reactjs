import { IconButton } from '@/components';

import plusIcon from '@/assets/plus-icon.svg';

interface Props {
  onAddClick: () => void;
}

export const Header = ({ onAddClick }: Props) => {
  return (
    <header className="sticky top-0 bg-white p-4 z-10 border-b border-gray-200 flex justify-center items-center">
      <h1 className="text-2xl font-bold leading-6 tracking-normal">
        Habit Tracker
      </h1>
      <IconButton onClick={onAddClick} className="absolute right-4 size-4">
        <img
          className="cursor-pointer hover:scale-125 transition-transform"
          src={plusIcon}
          alt="Close"
        />
      </IconButton>
    </header>
  );
};
