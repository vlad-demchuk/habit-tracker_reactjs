export interface Habit {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  createdAt: string;
  streak: number;
  lastCompletedDate: string | null; // ISO date string
  // TODO: Migrate to HabitRecord[] instead of lastCompletedDate for analytic purposes (e.g. calendar implementation)
  // records?: HabitRecord[]; // tracking per day
  // schedule?: HabitSchedule; // e.g., daily, weekdays, custom
}

// export interface HabitRecord {
//   date: string; // ISO date string: '2025-06-07'
//   completed: boolean;
// }

// TODO: Implement Scheduled habits (by days, weeks, months or custom )
// export type HabitSchedule =
//   | { type: 'daily' }
//   | { type: 'weekly'; daysOfWeek: Weekday[] }
//   | { type: 'custom'; days: Date[] }; // user-specified dates

export type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
