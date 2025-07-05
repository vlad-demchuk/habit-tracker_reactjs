import { routePaths } from '@/routes/paths';

import { GearIcon } from '@/components/icons/GearIcon';
import { HistoryIcon } from '@/components/icons/HistoryIcon';
import { HomeIcon } from '@/components/icons/HomeIcon';

export const navigationConfig = [
  {
    id: 1,
    title: 'Home',
    href: routePaths.home,
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: 'History',
    href: routePaths.history,
    icon: <HistoryIcon />,
  },
  {
    id: 3,
    title: 'Settings',
    href: routePaths.settings,
    icon: <GearIcon />,
  },
] as const;
