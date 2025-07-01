import { ComponentPropsWithoutRef } from 'react';

export const IconButton = ({
  onClick,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button {...props} onClick={onClick}>
      {props?.children}
    </button>
  );
};
