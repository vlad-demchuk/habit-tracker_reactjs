import { Logo } from '@/components/Logo.tsx';
import { Menu } from '@/components/ui/Menu.tsx';

import { navigationConfig } from '@/data/navigation';

export const NavigationMenuLg = () => {
  return (
    <nav className="hidden lg:block col-[1/4] border-r border-gray-200">
      <header className="p-4 sticky top-0 border-b border-gray-200 bg-white">
        <Logo />
      </header>

      <section className="p-2">
        <Menu menuItems={navigationConfig} />
      </section>
    </nav>
  );
};
