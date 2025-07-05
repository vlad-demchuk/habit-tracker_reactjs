import { Outlet, useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

import { Header, NavigationMenu } from '@/components';

const MainLayout = () => {
  // Use Route Protection if needed
  // const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ pathname }} replace />;
  // }
  const [, setSearchParams] = useSearchParams();

  const handleAddFormOpen = () => {
    setSearchParams({
      [searchParamsKeys.modal]: searchParamsValues.newHabit,
    });
  };

  return (
    <>
      <Header onAddClick={handleAddFormOpen} />
      <div className="page-container">
        <main className="max-w-screen md:max-w-[80vw] flex flex-col gap-4 p-4 grow">
          <Outlet />
        </main>

        <aside id="aside" className="aside" />
      </div>

      <NavigationMenu />
    </>
  );
};

export default MainLayout;
