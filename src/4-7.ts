type FilterKeyByValue<Obj, Key, Val> = Key extends keyof Obj
  ? Obj[Key] extends Val
    ? Key
    : never
  : never;
export type KeysOfType<Obj, Val> = FilterKeyByValue<Obj, keyof Obj, Val>;

// 使用例
type Data = {
  foo: string;
  bar: number;
  baz: boolean;

  hoge?: string;
  fuga: string;
  piyo?: number;
};

// "foo" | "fuga"
// ※ "hoge" は string | undefined なので含まない
type StringKeys = KeysOfType<Data, string>;

function useNumber<Obj>(obj: Obj, key: KeysOfType<Obj, number>) {
  // ヒント: ここはanyを使わざるを得ない
  const num: number = (obj as any)[key];
  return num * 10;
}

declare const data: Data;

// これはOK
useNumber(data, "bar");
// これは型エラー
// @ts-expect-error
useNumber(data, "baz");
