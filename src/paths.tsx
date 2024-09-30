export const Paths = {
  DASHBOARD: "/dashboard",
  EXPENSES: "/expenses",
  INCOME: "/income",
  IRREGULAR_EXPENSES: "/irregular-expenses-fund",
  SAVINGS: "/savings",
  SETTINGS: "/settings",
  NOT_FOUND: "/404",
};

export type PathType = (typeof Paths)[keyof typeof Paths];
