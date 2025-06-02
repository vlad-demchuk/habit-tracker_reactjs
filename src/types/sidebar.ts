export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface HabitDetailsSidebarProps extends SidebarProps {
  createdAt: string;
  streak: string;
}
