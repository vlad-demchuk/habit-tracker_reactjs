import { lazy } from 'react';

import { Habits } from '@/features/habits/components';
import { useAddForm } from '@/features/habits/hooks';
import { Streak } from '@/features/streak/components';

import { useSelectedHabitStore } from '@/features/habits/state/store';

const AddFormModal = lazy(
  () => import('@/features/habits/components/AddFormModal'),
);

const DetailsSidebar = lazy(
  () => import('@/features/habits/components/DetailsSidebar'),
);

const HomePage = () => {
  const selectedHabit = useSelectedHabitStore((state) => state.selectedHabit);
  const unselectHabit = useSelectedHabitStore((state) => state.unselectHabit);

  const { isOpen, handleClose } = useAddForm({});

  const handleAddSubmit = () => ({});

  return (
    <>
      <Streak />

      <Habits />

      <AddFormModal
        isOpen={isOpen}
        onClose={handleClose}
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
