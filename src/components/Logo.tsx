import { HTMLProps } from 'react';
import { Link } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

export const Logo = ({
  classname,
}: {
  classname?: HTMLProps<HTMLHeadingElement>['className'];
}) => {
  return (
    <Link to={routePaths.home} className={classname}>
      <h1 className={'text-2xl font-bold leading-6 tracking-normal'}>
        Habit Tracker
      </h1>
    </Link>
  );
};
