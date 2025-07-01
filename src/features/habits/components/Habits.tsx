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
    <section className="grid gap-y-6">
      <h2 className="text-2xl font-semibold leading-6 tracking-normal">
        Habits
      </h2>

      <List
        isLoading={isHabitsLoading}
        isError={isHabitsError}
        habits={habits ?? []}
        onHabitSelect={setSelectedHabit}
      />
    </section>
  );
};
