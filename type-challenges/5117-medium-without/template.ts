type Without<
  T extends any[],
  U extends T[number] | T[number][],
  A extends any[] = []
> = T extends [infer L, ...infer R]
  ? L extends (U extends any[] ? U : [U])[number]
    ? Without<R, U, A>
    : Without<R, U, [...A, L]>
  : A;
