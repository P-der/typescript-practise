type Normalize<A extends unknown[], I extends number, N extends 1[] = []> =
  `${I}` extends `${N['length']}`
    ? N['length']
    : `${I}` extends `-${N['length']}`
      ? A['length']
      : A extends [unknown, ...infer T] ? Normalize<T, I, [...N, 1]> : `${I}` extends `-${string}` ? 0 : N['length']

type sliceReal<
Arr extends any[], 
Start extends number = 0, End extends number = Arr['length'], 
I extends any[]= [], 
R extends any[] = [],
F extends boolean = false
> = I['length'] extends End ? R 
:I['length'] extends Start
    ? Slice<Arr, Start,End,[...I,0], [Arr[I['length']]] ,true>
    :F extends true 
        ? Slice<Arr, Start,End,[...I,0], [...R, Arr[I['length']]] ,true>
        : Slice<Arr, Start,End,[...I,0], R ,false>
 
type Slice<
Arr extends any[], 
Start extends number = 0, End extends number = Arr['length'], 
I extends any[]= [], 
R extends any[] = [],
F extends boolean = false
> = sliceReal<Arr, Normalize<Arr,Start>, Normalize<Arr, End>, I, R, F>