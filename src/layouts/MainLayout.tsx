import { Outlet, useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

import { Header, NavigationMenuLg, NavigationMenuSm } from '@/components';

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
    <div className="block lg:grid grid-cols-12">
      <NavigationMenuLg />

      <main className="col-[4/-1]">
        <Header onAddClick={handleAddFormOpen} />

        <div className="page-container">
          <div className="flex flex-col gap-4 p-4 grow bg-white lg:bg-gray-50">
            <Outlet />
          </div>

          <aside id="aside" className="aside" />
        </div>
      </main>

      <NavigationMenuSm />
    </div>
  );
};

export default MainLayout;
