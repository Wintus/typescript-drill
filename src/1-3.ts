// use ES module to avoid redeclaration
export const isPositive: IsPositiveFunc = (num) => num >= 0;

type IsPositiveFunc = (num: number) => boolean;

isPositive(5);
// @ts-expect-error
isPositive("foo");
// @ts-expect-error
const res: number = isPositive(123);
