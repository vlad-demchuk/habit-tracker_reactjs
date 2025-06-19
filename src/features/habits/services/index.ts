import { api } from '@/lib/api';
import { ApiResponse } from '@/types/api.types.ts';

import habitsMock from '@/data/mocks/habit.json';

import { Habit } from '@/features/habits/types';

class HabitService {
  private readonly baseUrl = '/habits';

  getAll(): Promise<ApiResponse<Habit[]>> {
    // temporary mock
    return new Promise((res) => {
      setTimeout(() => {
        res({ data: habitsMock, status: 200, statusText: 'OK' });
      }, 2000);
    });

    // return api.get<Habit[]>(this.baseUrl);
  }

  getById(id: string): Promise<ApiResponse<Habit>> {
    return api.get<Habit>(`${this.baseUrl}/${id}`);
  }

  create(habit: Omit<Habit, 'id'>): Promise<ApiResponse<Habit>> {
    return api.post<Habit>(this.baseUrl, habit);
  }

  update(id: string, habit: Partial<Habit>): Promise<ApiResponse<Habit>> {
    return api.patch<Habit>(`${this.baseUrl}/${id}`, habit);
  }

  delete(id: string): Promise<ApiResponse<void>> {
    return api.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export const habitService = new HabitService();
