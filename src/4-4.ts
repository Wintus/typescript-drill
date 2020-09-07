export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
  Omit<T, K>;

// 使用例

// 元のデータ
interface Data {
  foo: number;
  bar: string;
  baz: string;
}

/*
 * T1は { foo?: number; bar?: string; baz: string } 型
 */
type T1 = PartiallyPartial<Data, "foo" | "bar">;
