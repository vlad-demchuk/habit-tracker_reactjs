import { lazy, useState } from 'react';
import { useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

import { Header } from '@/components';

import { Habits } from '@/features/habits/components';
import { Streak } from '@/features/streak/components';

import { Habit } from '@/features/habits/types';

const AddFormModal = lazy(
  () => import('@/features/habits/components/AddFormModal'),
);

const DetailsSidebar = lazy(
  () => import('@/features/habits/components/DetailsSidebar'),
);

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // TODO: Move selectedHabit to zustand store to avoid props drilling
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);

  const handleHabitSelect = (habit: Habit) => {
    setSelectedHabit(habit);
  };

  const isAdding =
    searchParams.get(searchParamsKeys.modal) === searchParamsValues.newHabit;

  const handleAddFormOpen = () => {
    setSearchParams({
      [searchParamsKeys.modal]: searchParamsValues.newHabit,
    });
  };

  const handleAddFormClose = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(searchParamsKeys.modal);
    setSearchParams(newSearchParams.toString());
  };

  const handleAddSubmit = () => ({});

  return (
    <>
      <Header onAddClick={handleAddFormOpen} />

      <Streak />

      <Habits onHabitSelect={handleHabitSelect} />

      <AddFormModal
        isOpen={isAdding}
        onClose={handleAddFormClose}
        onSubmit={handleAddSubmit}
      />

      {/* Sidebar */}
      <DetailsSidebar
        isOpen={!!selectedHabit}
        title={selectedHabit?.title}
        selectedHabit={selectedHabit}
        onClose={() => setSelectedHabit(null)}
      />
    </>
  );
};

export default HomePage;
