import { ListItem } from './ListItem';

const habits = ['Habit 1', 'Habit 2', 'Habit 3'];

export const List = () => {
  return (
    <section className="grid gap-y-2">
      {habits.map((habit) => (
        <ListItem key={habit} title={habit} />
      ))}
    </section>
  );
};
