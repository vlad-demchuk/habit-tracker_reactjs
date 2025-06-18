import { api } from '@/lib/api';
import { ApiResponse } from '@/types/api.types.ts';

import { Habit } from '@/features/habits/types';

class HabitService {
  private readonly baseUrl = '/habits';

  async getAll(): Promise<ApiResponse<Habit[]>> {
    return api.get<Habit[]>(this.baseUrl);
  }

  async getById(id: string): Promise<ApiResponse<Habit>> {
    return api.get<Habit>(`${this.baseUrl}/${id}`);
  }

  async create(habit: Omit<Habit, 'id'>): Promise<ApiResponse<Habit>> {
    return api.post<Habit>(this.baseUrl, habit);
  }

  async update(id: string, habit: Partial<Habit>): Promise<ApiResponse<Habit>> {
    return api.patch<Habit>(`${this.baseUrl}/${id}`, habit);
  }

  async delete(id: string): Promise<ApiResponse<void>> {
    return api.delete<void>(`${this.baseUrl}/${id}`);
  }
}

export const habitService = new HabitService();
