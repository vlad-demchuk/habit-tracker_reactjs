import { Outlet } from 'react-router';

const MainLayout = () => {
  // Use Route Protection if needed
  // const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" state={{ pathname }} replace />;
  // }

  return (
    <div className="page-container">
      <main className="max-w-[95vw] md:max-w-[80vw] flex flex-col gap-4 p-4 grow">
        <Outlet />
      </main>

      <aside id="aside" className="aside" />
    </div>
  );
};

export default MainLayout;
