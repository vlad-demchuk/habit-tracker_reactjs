import { lazy } from 'react';
import { useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

import { Header } from '@/components';

import { Habits } from '@/features/habits/components';
import { Streak } from '@/features/streak/components';

import { useSelectedHabitStore } from '@/features/habits/state/store';

const AddFormModal = lazy(
  () => import('@/features/habits/components/AddFormModal'),
);

const DetailsSidebar = lazy(
  () => import('@/features/habits/components/DetailsSidebar'),
);

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedHabit = useSelectedHabitStore((state) => state.selectedHabit);
  const unselectHabit = useSelectedHabitStore((state) => state.unselectHabit);

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

      <Habits />

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
        onClose={() => unselectHabit()}
      />
    </>
  );
};

export default HomePage;
