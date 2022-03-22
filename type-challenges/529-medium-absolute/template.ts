type NumberLike = number | string | bigint;
type ToString<N extends NumberLike> = `${N}`;
type Absolute<
  N extends NumberLike,
  Str extends string = ToString<N>
> = Str extends `-${infer Abs}` ? Abs : Str;