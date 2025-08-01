import { Button, Sidebar } from '@/components';

import { HabitDetailsSidebarProps } from '@/types/sidebar.types.ts';

const DetailsSidebar = ({
  isOpen,
  onClose,
  title,
  selectedHabit,
  children,
}: HabitDetailsSidebarProps) => {
  const { description, streak, createdAt } = selectedHabit ?? {};

  return (
    <Sidebar isOpen={isOpen} onClose={onClose} title={title}>
      <div className="grid gap-y-4">
        <section>
          <h4 className="text-sm text-gray-500 uppercase">Description</h4>
          <p className="text-base">{description}</p>
        </section>

        <section>
          <h4 className="text-sm text-gray-500 uppercase">Created</h4>
          <p className="text-base">{createdAt}</p>
        </section>

        <section>
          <h4 className="text-sm text-gray-500 uppercase">Streak</h4>
          <p className="text-base">{streak}</p>
        </section>

        <section className="aside-content">{children}</section>

        <section className="flex gap-2">
          <Button variant="primary" onClick={() => console.log('edit')}>
            Edit
          </Button>
          <Button variant="destructive" onClick={() => console.log('del')}>
            Delete
          </Button>
        </section>
      </div>
    </Sidebar>
  );
};

export default DetailsSidebar;
