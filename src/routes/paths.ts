/**
 * Application route paths
 *
 * Centralized location for all application route paths.
 * Use this instead of hardcoding path strings throughout the application.
 */

export const routePaths = {
  // Main routes
  home: '/',
  addHabitModal: '/new',
  history: '/history',
  settings: '/settings',

  // Fallback routes
  notFound: '*',
} as const;

export const searchParamsKeys = {
  modal: 'modal',
};

export const searchParamsValues = {
  newHabit: 'new-habit',
};

// Type for route keys - useful for type safety
export type RoutePathsKeys = keyof typeof routePaths;
