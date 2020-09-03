function sumOfPos(arr: number[]): number {
  return arr.filter((num) => num >= 0).reduce((acc, num) => acc + num, 0);
}

const sum: number = sumOfPos([1, 3, -2, 0]);

// @ts-expect-error
sumOfPos(123, 456);
// @ts-expect-error
sumOfPos([123, "foobar"]);
