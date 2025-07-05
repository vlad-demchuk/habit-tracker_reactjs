import { Link } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

import gearIcon from '@/assets/gear-icon.svg';
import historyIcon from '@/assets/history-icon.svg';
import homeIcon from '@/assets/home-icon.svg';

export const NavigationMenu = () => {
  return (
    <nav className="sticky bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200">
      <ul className="flex justify-around">
        <li className="flex">
          <Link
            to={routePaths.home}
            className="flex flex-col justify-center items-center gap-1 p-3"
          >
            <img className="size-5" src={homeIcon} alt="Home" />
            <p>Home</p>
          </Link>
        </li>
        <li className="flex">
          <Link
            to={routePaths.history}
            className="flex flex-col justify-center items-center gap-1 p-3"
          >
            <img className="size-5" src={historyIcon} alt="History" />
            <p>History</p>
          </Link>
        </li>
        <li className="flex">
          <Link
            to={routePaths.settings}
            className="flex flex-col justify-center items-center gap-1 p-3"
          >
            <img className="size-5" src={gearIcon} alt="Settings" />
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
