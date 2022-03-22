
    // type NumberLike = string | number | bigint;

/**
 * ToString<3> = '3'.
 */
// type ToString<N extends NumberLike> = `${N}`;

/**
 * SumSplit<'foo'> = ['f', 'o', 'o'].
 */
type SumSplit<S extends string> = S extends `${infer Letter}${infer Rest}`
  ? [Letter, ...SumSplit<Rest>]
  : [];

/**
 * SumMod10[2][3] = 5.
 * SumMod10[7][4] = 1.
 */
type SumMod10 = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  [2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  [3, 4, 5, 6, 7, 8, 9, 0, 1, 2],
  [4, 5, 6, 7, 8, 9, 0, 1, 2, 3],
  [5, 6, 7, 8, 9, 0, 1, 2, 3, 4],
  [6, 7, 8, 9, 0, 1, 2, 3, 4, 5],
  [7, 8, 9, 0, 1, 2, 3, 4, 5, 6],
  [8, 9, 0, 1, 2, 3, 4, 5, 6, 7],
  [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
];

/**
 * TenOfSumOfTwoDigits[2][3] = 0.
 * TenOfSumOfTwoDigits[4][8] = 1.
 */
type TenOfSumOfTwoDigits = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

type Digit = ToString<SumMod10[0][number]>;

type Tuple = readonly Digit[];

/**
 * SumLast<['2', '3']> = '3'.
 */
type SumLast<T extends Tuple> = T extends []
  ? 0
  : T extends [...infer Head, infer Element]
  ? Element extends Digit
    ? Element
    : "0"
  : "0";

/**
 * SumPop<['2', '3', '4']> = ['2', '3'].
 */
type SumPop<T extends Tuple> = T extends []
  ? []
  : T extends [...infer Head, infer SumLast]
  ? Head
  : [];

/**
 * SumJoin<['1', '2']> = '12'.
 */
type SumJoin<T extends Tuple> = T extends [] ? "" : `${SumJoin<SumPop<T>>}${SumLast<T>}`;

/**
 * TenOfSum<T, A, B> = (T + A + B) > 9 ? 1 : 0.
 */
type TenOfSum<
  Ten extends 0 | 1,
  A extends Digit,
  B extends Digit
> = TenOfSumOfTwoDigits[A][B] extends 1
  ? 1
  : [SumMod10[A][B], Ten] extends [9, 1]
  ? 1
  : 0;

/**
 * TuplesAreEmpty<[], []> = true.
 * TuplesAreEmpty<[], ['1']> = false.
 */
type TuplesAreEmpty<A extends Tuple, B extends Tuple> = A extends []
  ? B extends []
    ? true
    : false
  : false;

/**
 * SumOfTuple<['2', '3'], ['9']> = ['3', '2'].
 */
type SumOfTuple<
  A extends Tuple,
  B extends Tuple,
  Ten extends 0 | 1 = 0,
  Result extends Tuple = []
> = TuplesAreEmpty<A, B> extends true
  ? Ten extends 1
    ? ["1", ...Result]
    : Result
  : SumOfTuple<
      SumPop<A>,
      SumPop<B>,
      TenOfSum<Ten, SumLast<A>, SumLast<B>>,
      [ToString<SumMod10[Ten][SumMod10[SumLast<A>][SumLast<B>]]>, ...Result]
    >;

/**
 * Sum<112, 82> = '194'.
 */
type Sum<A extends NumberLike, B extends NumberLike> = SumJoin<
  SumOfTuple<SumSplit<ToString<A>>, SumSplit<ToString<B>>>
>;
