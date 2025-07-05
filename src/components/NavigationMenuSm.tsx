import { Menu } from '@/components/ui/Menu.tsx';

import { navigationConfig } from '@/data/navigation';

export const NavigationMenuSm = () => {
  return (
    <nav className="sticky bottom-0 left-0 right-0 lg:hidden bg-gray-50 border-t border-gray-200">
      <Menu menuItems={navigationConfig} />
    </nav>
  );
};
