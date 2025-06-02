import React from 'react';

import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'destructive';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const defaultStyles =
  'h-10 p-1.5 border rounded-sm cursor-pointer transition-colors';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'border-black text-white bg-black hover:bg-white hover:text-black',
  destructive:
    'border-red-500 text-white bg-red-500 hover:bg-white hover:text-red-500',
};

export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: Props) => {
  return (
    <button
      className={twMerge(defaultStyles, buttonStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
