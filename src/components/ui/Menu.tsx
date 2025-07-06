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

const defaultTextStyles = 'lg:text-black lg:scale-105';
const activeTextStyles = 'lg:group-hover:text-black lg:group-hover:scale-105';

export const Menu = ({ menuItems }: Props) => {
  return (
    <ul className="flex justify-around lg:flex-col">
      {menuItems.map(({ id, title, href, icon }) => (
        <li key={id} className="flex">
          <NavLink
            to={href}
            className={({ isActive }) =>
              twMerge(
                'flex flex-col justify-center items-center gap-1 lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:hover:bg-gray-200  group transition-colors lg:rounded-md p-3',
                isActive && 'lg:bg-gray-200',
              )
            }
          >
            {({ isActive }) => (
              <>
                <div
                  className={twMerge(
                    'text-gray-600 transition-colors',
                    isActive ? defaultTextStyles : activeTextStyles,
                  )}
                >
                  {icon}
                </div>
                <p
                  className={twMerge(
                    ' transition-all',
                    isActive ? defaultTextStyles : activeTextStyles,
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
