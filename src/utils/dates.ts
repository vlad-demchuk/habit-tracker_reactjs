interface WeekDay {
  label: string;
  completed: boolean;
}

export const formatWeekDays = (week: WeekDay[]) => {
  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  const formattedWeekDays = week.map((day, index) => ({
    ...day,
    isPast: adjustedTodayIndex >= index,
  }));

  return formattedWeekDays;
};
