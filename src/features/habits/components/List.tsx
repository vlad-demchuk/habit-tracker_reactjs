import { Habit } from '@/features/habits/types';

import { ListItem } from './ListItem';

interface Props {
  isLoading: boolean;
  isError: boolean;
  habits: Habit[];
  onHabitSelect: (habit: Habit) => void;
}

export const List = ({ isLoading, isError, habits, onHabitSelect }: Props) => {
  if (isLoading) {
    return 'Loading...';
  }

  if (isError) {
    return 'Something went wrong';
  }

  return (
    <section className="grid gap-y-2">
      {habits.map((habit) => (
        <ListItem key={habit.id} habit={habit} onHabitSelect={onHabitSelect} />
      ))}
    </section>
  );
};
