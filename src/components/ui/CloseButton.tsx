import { ComponentPropsWithoutRef } from 'react';

import closeIcon from '@/assets/close-icon.svg';

export const CloseButton = ({
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button {...props} onClick={onClick}>
      <img
        className="cursor-pointer hover:scale-125 transition-transform"
        src={closeIcon}
        alt="Close"
      />
    </button>
  );
};
