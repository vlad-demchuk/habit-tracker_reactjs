import { create } from 'zustand';

import { Habit } from '@/features/habits/types';

interface State {
  selectedHabit: Habit | null;
}

interface Action {
  setSelectedHabit: (habit: Habit) => void;
  unselectHabit: () => void;
}

export const useSelectedHabitStore = create<State & Action>((set) => ({
  selectedHabit: null,
  setSelectedHabit: (habit) => {
    set(() => ({ selectedHabit: habit }));
  },
  unselectHabit: () => {
    set({ selectedHabit: null });
  },
}));
