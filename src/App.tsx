import '@/App.css';
import { HabitTracker, Streak } from '@/components';

function App() {
  return (
    <div className="page-container">
      <main className="p-4 grow">
        <HabitTracker />
        <Streak />
      </main>

      <aside
        id="aside"
        className="aside"
      />
    </div>
  );
}

export default App;
