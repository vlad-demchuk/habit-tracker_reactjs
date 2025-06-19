import { useMutation, useQueryClient } from '@tanstack/react-query';

import { habitService } from '@/features/habits/services';
import { Habit } from '@/features/habits/types';

export const useCreateHabit = (habit: Omit<Habit, 'id'>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => habitService.create(habit),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
    },
  });
};
