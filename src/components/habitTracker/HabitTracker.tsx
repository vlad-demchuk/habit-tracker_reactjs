import { DetailsSidebar } from './DetailsSidebar.tsx';
import { useState } from 'react';
import { Button } from '@/components/ui/Button.tsx';
import { Header } from '@/components/habitTracker/Header.tsx';

export const HabitTracker = () => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddClick = () => {
    setIsAdding(!isAdding)
  }

  return (
    <>
      <Header onAddClick={handleAddClick} />

      {/*<HabitTracker */}

      {/* Sidebar */}
      {/*<HabitDetailsSidebar*/}
      {/*  isOpen={isAdding}*/}
      {/*  onClose={() => setIsAdding(false)}*/}
      {/*  title="Sidebar"*/}
      {/*  createdAt="01.01.2025"*/}
      {/*  streak="5 days"*/}
      {/*>*/}
      {/*  Content*/}
      {/*</HabitDetailsSidebar>*/}
    </>
  );
};
