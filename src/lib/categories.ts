export const categories = ["AI", "cat", "rock"] as const;

export type Category = typeof categories[number];