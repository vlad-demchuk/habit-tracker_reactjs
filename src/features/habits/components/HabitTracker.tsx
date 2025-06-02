import { useState } from 'react';

import { AddFormModal, Header, List } from '@/features/habits/components';
import { Streak } from '@/features/streak/components/Streak.tsx';

import { DetailsSidebar } from './DetailsSidebar.tsx';

export const HabitTracker = () => {
  // TODO: use URL instead of React state
  const [isAdding, setIsAdding] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const [habits, setHabits] = useState([]);

  const handleAddFormOpen = () => {
    setIsAdding(true);
  };

  const handleAddFormClose = () => {
    setIsAdding(false);
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
