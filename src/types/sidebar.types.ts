import { Habit } from '@/features/habits/types';

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

export interface HabitDetailsSidebarProps extends SidebarProps {
  selectedHabit: Habit | null;
}
