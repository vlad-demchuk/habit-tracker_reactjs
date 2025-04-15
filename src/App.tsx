import './App.css';
import { HabitTracker, Sidebar, Streak } from './components';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="page-container">
      <main className="main grow">
        <Streak />
        <HabitTracker />
        <button onClick={() => setIsOpen(true)}>Open</button>
      </main>


      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>sidebar</Sidebar>

      <aside
        id="aside"
        className="aside"
      />
    </div>
  );
}

export default App;
