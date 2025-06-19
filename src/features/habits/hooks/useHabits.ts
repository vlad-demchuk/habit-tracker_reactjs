import { useQuery } from '@tanstack/react-query';

import { habitService } from '@/features/habits/services';

export const useHabits = () => {
  return useQuery({
    queryKey: ['habits'],
    queryFn: habitService.getAll,
    select: (data) => data.data,
    retry: false,
  });
};
