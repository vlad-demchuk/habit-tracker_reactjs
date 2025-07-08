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
        'min-h-28 basis-1/2 rounded-md border border-gray-300 bg-white p-4 sm:min-h-30 sm:basis-1/3',
        classname,
      )}
    >
      <h4 className="mb-2 text-base font-medium">{title}</h4>
      <p className="text-2xl leading-8 font-bold">{value}</p>
    </div>
  );
};
