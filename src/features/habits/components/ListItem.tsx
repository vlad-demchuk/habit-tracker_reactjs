import { IconButton } from '@/components';

import { Habit } from '@/features/habits/types';
import { getProgressBarValue } from '@/features/habits/utils';

interface Props {
  habit: Habit;
  onHabitSelect: (habit: Habit) => void;
}

export const ListItem = ({ habit, onHabitSelect }: Props) => {
  const { title, streak } = habit;

  const progress = getProgressBarValue(streak);

  return (
    <article className="flex items-center justify-between gap-y-2 rounded-md bg-white lg:border lg:border-gray-100 lg:bg-gray-50 lg:p-4">
      <div className="flex grow items-center gap-4">
        <div className="flex size-12 items-center justify-center bg-gray-100">
          Icon
        </div>

        <div className="grow">
          <h4 className="text-base font-medium">{title}</h4>

          <div>
            <div className="mb-1 h-1 w-full rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-black"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between">
              <div className="flex place-items-center gap-1">
                <span className="text-sm font-normal text-gray-500">
                  7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        <IconButton className="size-9 rounded-full">✔</IconButton>
        <IconButton
          onClick={() => onHabitSelect(habit)}
          className="flex size-9 items-center justify-center rounded-full"
        >
          ...
        </IconButton>
      </div>
    </article>
  );
};
