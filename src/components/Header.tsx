import { IconButton, Logo, TabHeader } from '@/components';

import plusIcon from '@/assets/plus-icon.svg';

interface Props {
  onAddClick: () => void;
}

export const Header = ({ onAddClick }: Props) => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-center border-b border-gray-200 bg-white p-4 lg:justify-between lg:p-6">
      {/* SM, MD */}
      <Logo classname="lg:hidden" />

      <IconButton
        onClick={onAddClick}
        className="absolute right-4 size-4 lg:hidden"
      >
        <img
          className="cursor-pointer transition-transform hover:scale-125"
          src={plusIcon}
          alt="Close"
        />
      </IconButton>

      {/* LG and more */}
      <TabHeader onAddClick={onAddClick} />
    </header>
  );
};
