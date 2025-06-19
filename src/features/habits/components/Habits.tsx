import { useHabits } from '@/features/habits/hooks';

import { Habit } from '@/features/habits/types';

import { List } from './List';

interface Props {
  onHabitSelect: (habit: Habit) => void;
}

export const Habits = ({ onHabitSelect }: Props) => {
  const {
    isPending: isHabitsLoading,
    isError: isHabitsError,
    data: habits,
  } = useHabits();

  return (
    <List
      isLoading={isHabitsLoading}
      isError={isHabitsError}
      habits={habits ?? []}
      onHabitSelect={onHabitSelect}
    />
  );
};
