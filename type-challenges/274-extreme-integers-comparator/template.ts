enum Comparison {
  Greater,
  Equal,
  Lower,
}

type StringToNumber<N extends String, I extends any[] = []> = 
`${I['length']}` extends N ? I['length']: StringToNumber<N,[...I, 0]>

type ToLower<A, B, I extends any[] = []> =
A extends I['length']
? Comparison.Lower
: B extends I['length']
? Comparison.Greater: ToLower<A, B, [...I, 0]>

type Comparator<A extends number, B extends number> = 
A extends B ?Comparison.Equal
: `${A}` extends `-${infer a}`
  ? `${B}` extends `-${infer b}`
    ? ToLower<StringToNumber<b>,StringToNumber<a>>
    : Comparison.Lower
  : `${B}` extends `-${string}`
    ? Comparison.Greater
    : ToLower<A, B>

