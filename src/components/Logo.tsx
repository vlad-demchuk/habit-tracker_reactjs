import { HTMLProps } from 'react';

import { twMerge } from 'tailwind-merge';

export const Logo = ({
  classname,
}: {
  classname?: HTMLProps<HTMLHeadingElement>['className'];
}) => {
  // TODO: Make a link
  return (
    <h1
      className={twMerge(
        'text-2xl font-bold leading-6 tracking-normal',
        classname,
      )}
    >
      Habit Tracker
    </h1>
  );
};
