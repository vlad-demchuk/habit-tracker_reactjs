import { ReactNode } from 'react';
import { NavLink } from 'react-router';

import { twMerge } from 'tailwind-merge';

interface MenuItem {
  readonly id: number;
  readonly title: string;
  readonly href: string;
  readonly icon: ReactNode;
}

interface Props {
  menuItems: readonly MenuItem[];
}

const defaultTextStyles = 'lg:group-hover:text-black lg:group-hover:scale-105';
const activeTextStyles = 'text-black lg:scale-105';

export const Menu = ({ menuItems }: Props) => {
  return (
    <ul className="flex justify-around gap-1 lg:flex-col">
      {menuItems.map(({ id, title, href, icon }) => (
        <li key={id} className="flex">
          <NavLink
            to={href}
            className={({ isActive }) =>
              twMerge(
                'group flex flex-col items-center justify-center gap-1 p-3 transition-colors lg:w-full lg:flex-row lg:justify-start lg:gap-2 lg:rounded-md lg:hover:bg-gray-200',
                isActive && 'lg:bg-gray-200',
              )
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={twMerge(
                    'text-gray-600 transition-colors',
                    isActive ? activeTextStyles : defaultTextStyles,
                  )}
                >
                  {icon}
                </div>
                <p
                  className={twMerge(
                    'transition-all',
                    isActive ? activeTextStyles : defaultTextStyles,
                  )}
                >
                  {title}
                </p>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
