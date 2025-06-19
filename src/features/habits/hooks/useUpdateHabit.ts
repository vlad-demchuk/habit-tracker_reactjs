import { useMutation, useQueryClient } from '@tanstack/react-query';

import { habitService } from '@/features/habits/services';
import { Habit } from '@/features/habits/types';

export const useUpdateHabit = (id: string, habit: Partial<Habit>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => habitService.update(id, habit),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
      queryClient.invalidateQueries({ queryKey: ['habit', id] });
    },
  });
};
