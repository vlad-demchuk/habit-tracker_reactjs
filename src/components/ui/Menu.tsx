import { ReactNode } from 'react';
import { Link } from 'react-router';

interface MenuItem {
  readonly id: number;
  readonly title: string;
  readonly href: string;
  readonly icon: ReactNode;
}

interface Props {
  menuItems: readonly MenuItem[];
}

export const Menu = ({ menuItems }: Props) => {
  return (
    <ul className="flex justify-around lg:flex-col">
      {menuItems.map(({ id, title, href, icon }) => (
        <li key={id} className="flex">
          <Link
            to={href}
            className="flex flex-col justify-center items-center gap-1 lg:flex-row lg:gap-2 lg:w-full lg:justify-start lg:hover:bg-gray-200 group transition-colors lg:rounded-md p-3"
          >
            <div className="text-gray-600 lg:group-hover:text-black lg:group-hover:scale-105 transition-colors">
              {icon}
            </div>
            <p className="lg:group-hover:text-black lg:group-hover:scale-105 transition-all">
              {title}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
