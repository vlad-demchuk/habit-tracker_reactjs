import { Link } from 'react-router';

import { routePaths } from '@/routes/paths.ts';

export const Logo = ({
  classname,
}: {
  classname?: React.ComponentPropsWithoutRef<'a'>['className'];
}) => {
  return (
    <Link to={routePaths.home} className={classname}>
      <h1 className={'text-2xl leading-6 font-bold tracking-normal'}>
        Habit Tracker
      </h1>
    </Link>
  );
};
