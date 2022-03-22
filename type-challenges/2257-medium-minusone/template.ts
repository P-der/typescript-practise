// type TPop<T extends any[]> = T extends [...infer head, any] ? head : never; 

// type MinusOne<T extends number, A extends any[] = []> = A['length'] extends T
//   ? TPop<A>['length']
//   : MinusOne<T, [...A, 0]>

  type DigitToArray = {
    "0": [],
    "1": [unknown],
    "2": [unknown, unknown],
    "3": [unknown, unknown, unknown],
    "4": [unknown, unknown, unknown, unknown],
    "5": [unknown, unknown, unknown, unknown, unknown],
    "6": [unknown, unknown, unknown, unknown, unknown, unknown],
    "7": [unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    "8": [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown],
    "9": [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  };
  type CreateArrayByLength<N extends string, R extends unknown[] = []> = N extends `${infer First}${infer Rest}`
  ? First extends keyof DigitToArray
    ? CreateArrayByLength<Rest, [...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...DigitToArray[First]]>
    : never
  : R;
  type MinusOne<T extends number> = CreateArrayByLength<`${T}`> extends [infer First, ...infer Rest]
  ? Rest["length"]
  : never;