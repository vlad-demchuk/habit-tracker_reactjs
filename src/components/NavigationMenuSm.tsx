import { Menu } from '@/components';

import { navigationConfig } from '@/data/navigation';

export const NavigationMenuSm = () => {
  return (
    <nav className="sticky right-0 bottom-0 left-0 border-t border-gray-200 bg-gray-50 lg:hidden">
      <Menu menuItems={navigationConfig} />
    </nav>
  );
};
