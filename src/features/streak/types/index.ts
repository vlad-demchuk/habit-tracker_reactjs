export interface Streak {
  daysCount: number;
  weekDays: StreakWeekDay[];
  isCompletedToday: boolean;
}

export interface StreakWeekDay {
  label: string;
  completed: boolean;
}
