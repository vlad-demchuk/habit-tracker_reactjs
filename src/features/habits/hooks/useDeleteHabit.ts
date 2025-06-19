import { useMutation, useQueryClient } from '@tanstack/react-query';

import { habitService } from '@/features/habits/services';

export const useDeleteHabit = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => habitService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['habits'] });
    },
  });
};
