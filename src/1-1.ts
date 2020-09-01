const isPositive = (num: number): boolean => num >= 0;

isPositive(3);
// @ts-expect-error
isPositive("123");
// @ts-expect-error
const numVar: number = isPositive(-5);
