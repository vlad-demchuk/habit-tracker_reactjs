import { useState } from 'react';
import { useSearchParams } from 'react-router';

import { searchParamsKeys, searchParamsValues } from '@/routes/paths.ts';

interface UseAddFormProps<T> {
  onAdd?: (data: T) => Promise<void> | void;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface UseAddFormReturn<T> {
  isAdding: boolean;
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: (data: T) => Promise<void>;
}

export function useAddForm<T>({
  onAdd,
  onSuccess,
  onError,
}: UseAddFormProps<T>): UseAddFormReturn<T> {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isAdding, setIsAdding] = useState(false);

  const isOpen =
    searchParams.get(searchParamsKeys.modal) === searchParamsValues.newHabit;

  const handleOpen = () => {
    setSearchParams({
      [searchParamsKeys.modal]: searchParamsValues.newHabit,
    });
  };

  const handleClose = () => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(searchParamsKeys.modal);
    setSearchParams(newSearchParams.toString());
  };

  const handleSubmit = async (data: T) => {
    try {
      setIsAdding(true);
      await onAdd?.(data);
      onSuccess?.();
      handleClose();
    } catch (error) {
      onError?.(error as Error);
    } finally {
      setIsAdding(false);
    }
  };

  return { isOpen, isAdding, handleOpen, handleClose, handleSubmit };
}
