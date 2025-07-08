import { Outlet } from 'react-router';

import { Header, NavigationMenuLg, NavigationMenuSm } from '@/components';

import { useAddForm } from '@/features/habits/hooks';

const MainLayout = () => {
  // Use Route Protection if needed
  // const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ pathname }} replace />;
  // }

  const { handleOpen } = useAddForm({});

  return (
    <div className="block grid-cols-12 lg:grid">
      <NavigationMenuLg />

      <main className="col-[4/-1]">
        <Header onAddClick={handleOpen} />

        <div className="page-container">
          <div className="flex grow flex-col gap-4 bg-white p-4 lg:bg-gray-50">
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
