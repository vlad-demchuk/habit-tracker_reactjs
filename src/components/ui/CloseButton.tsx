import { ComponentPropsWithoutRef } from 'react';

import { IconButton } from '@/components';

import closeIcon from '@/assets/close-icon.svg';

export const CloseButton = ({
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <IconButton {...props} onClick={onClick}>
      <img
        className="cursor-pointer hover:scale-125 transition-transform"
        src={closeIcon}
        alt="Close"
      />
    </IconButton>
  );
};
