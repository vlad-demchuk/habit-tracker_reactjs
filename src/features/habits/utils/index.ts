export const getProgressBarValue = (streakDaysCount: number) => {
  return (streakDaysCount / 30) * 100;
};
