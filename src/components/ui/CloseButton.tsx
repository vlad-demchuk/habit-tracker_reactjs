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
        className="cursor-pointer transition-transform hover:scale-125"
        src={closeIcon}
        alt="Close"
      />
    </IconButton>
  );
};
