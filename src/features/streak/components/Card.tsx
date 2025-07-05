import { HTMLProps } from 'react';

import { twMerge } from 'tailwind-merge';

interface Props {
  title: string;
  value: string;
  classname?: HTMLProps<HTMLElement>['className'];
}

export const Card = ({ title, value, classname }: Props) => {
  return (
    <div
      className={twMerge(
        'p-4 border border-gray-300 rounded-md basis-1/2 sm:basis-1/3 min-h-28 sm:min-h-30',
        classname,
      )}
    >
      <h4 className="font-medium text-base mb-2">{title}</h4>
      <p className="font-bold text-2xl leading-8">{value}</p>
    </div>
  );
};
