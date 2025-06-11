import { lazy, useState } from 'react';
import { useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

import { Header } from '@/components';

import { List } from '@/features/habits/components';
import { Streak } from '@/features/streak/components';

const AddFormModal = lazy(
  () => import('@/features/habits/components/AddFormModal.tsx'),
);

const DetailsSidebar = lazy(
  () => import('@/features/habits/components/DetailsSidebar'),
);

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const [habits, setHabits] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      <List />

      <AddFormModal
        isOpen={isAdding}
        onClose={handleAddFormClose}
        onSubmit={handleAddSubmit}
      />

      {/* Sidebar */}
      <DetailsSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="Sidebar"
        createdAt="01.01.2025"
        streak="5 days"
      >
        Content
      </DetailsSidebar>
    </>
  );
};

export default HomePage;
