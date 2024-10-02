export const Paths = {
  DASHBOARD: "/dashboard",
  PAYMENT: "/payment",
  EXPENSES: "/expenses",
  GOALS: "/goals",
  INCOME: "/income",
  IRREGULAR_EXPENSES: "/irregular-expenses-fund",
  SAVINGS: "/savings",
  SETTINGS: "/settings",
  NOT_FOUND: "/404",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
};

export type PathType = (typeof Paths)[keyof typeof Paths];
