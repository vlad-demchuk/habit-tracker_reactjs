import { Logo, Menu } from '@/components';

import { navigationConfig } from '@/data/navigation';

export const NavigationMenuLg = () => {
  return (
    <nav className="col-[1/4] hidden border-r border-gray-200 lg:block">
      <header className="sticky top-0 border-b border-gray-200 bg-white p-4">
        <Logo />
      </header>

      <section className="sticky top-15 p-2">
        <Menu menuItems={navigationConfig} />
      </section>
    </nav>
  );
};
