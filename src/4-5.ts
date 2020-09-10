export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

type PartialRestForEach<
  T,
  K extends keyof T
> = /*union distribution*/ K extends keyof T
  ? PartiallyPartial<T, Exclude<keyof T, K>>
  : never;

export type AtLeastOne<T> = PartialRestForEach<T, keyof T>;

// 使用例
interface Options {
  foo: number;
  bar: string;
  baz: boolean;
}

function test(options: AtLeastOne<Options>) {
  const { foo, bar, baz } = options;
  // 省略
}

test({
  foo: 123,
  bar: "bar",
});
test({
  baz: true,
});

// エラー例
// @ts-expect-error
test({});
