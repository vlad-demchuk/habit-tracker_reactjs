import { Button } from '@/components';

interface Props {
  onAddClick: () => void;
}

export const Header = ({ onAddClick }: Props) => {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl font-semibold leading-12">Habit Tracker</h1>
      <Button onClick={onAddClick} variant="primary">
        Add Habit
      </Button>
    </header>
  );
};
