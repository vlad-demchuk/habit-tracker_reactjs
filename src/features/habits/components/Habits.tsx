import { useHabits } from '@/features/habits/hooks';

import { useSelectedHabitStore } from '@/features/habits/state/store';

import { List } from './List';

export const Habits = () => {
  const {
    isPending: isHabitsLoading,
    isError: isHabitsError,
    data: habits,
  } = useHabits();

  const setSelectedHabit = useSelectedHabitStore(
    (state) => state.setSelectedHabit,
  );

  return (
    <List
      isLoading={isHabitsLoading}
      isError={isHabitsError}
      habits={habits ?? []}
      onHabitSelect={setSelectedHabit}
    />
  );
};
