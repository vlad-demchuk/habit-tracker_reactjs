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
    <article className="md:pb-10 flex justify-between items-center gap-y-2 rounded-lg bg-white">
      <div className="flex grow items-center gap-4">
        <div className="size-12 flex justify-center items-center bg-gray-100">
          Icon
        </div>

        <div className="grow">
          <h4 className="text-base font-medium">{title}</h4>

          <div>
            <div className="mb-1 w-full h-1 bg-gray-200 rounded-full">
              <div
                className="h-full bg-black rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-1 place-items-center">
                <span className="text-sm text-gray-500 font-normal">
                  7 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1">
        <IconButton className="rounded-full size-9">✔</IconButton>
        <IconButton
          onClick={() => onHabitSelect(habit)}
          className="rounded-full flex items-center justify-center size-9"
        >
          ...
        </IconButton>
      </div>
    </article>
  );
};
