import { useQuery } from '@tanstack/react-query';

import { habitService } from '@/features/habits/services';

export const useHabit = (id: string) => {
  return useQuery({
    queryKey: ['habit', id],
    queryFn: () => habitService.getById(id),
    enabled: !!id,
  });
};
