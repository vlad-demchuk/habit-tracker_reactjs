import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppRouter from '@/routes/AppRouter.tsx';

import '@/styles/global.css';

/**
 * Main application component
 */

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
};

export default App;
