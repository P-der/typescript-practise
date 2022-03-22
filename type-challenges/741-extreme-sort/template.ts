type FilterLessThanOrEqual<value extends number, xs extends number[], output extends any[] = []> = 
xs extends [infer head, ...infer tail]
    ? Comparator<value, head extends number? head: 0 > extends Comparison.Lower 
      ? [...output, head, ...FilterLessThanOrEqual<value, tail extends number[]?tail:[], output>]
      : [...output, ...FilterLessThanOrEqual<value, tail extends number[]?tail:[], output>]
    : []
type FilterGreaterThan<value extends number, xs extends number[], output extends any[] = []> = 
  xs extends [infer head, ...infer tail]
    ? Comparator<value, head extends number? head: 0  > extends Comparison.Greater | Comparison.Equal
      ? [...output, head, ...FilterGreaterThan<value, tail extends number[]?tail:[] , output>]
      : [...output, ...FilterGreaterThan<value, tail extends number[]?tail:[] , output>]
    : []
type Sort<xs extends number[], reversed extends boolean = false> = 
    xs extends [infer head, ...infer tail]
      ? reversed extends true
        ? [...Sort<FilterLessThanOrEqual<head extends number? head: 0 , tail extends number[]?tail:[] >, reversed>, head, ...Sort<FilterGreaterThan<head, tail>, reversed>]
        : [...Sort<FilterGreaterThan<head extends number? head: 0 , tail extends number[]?tail:[] >, reversed>, head, ...Sort<FilterLessThanOrEqual<head, tail>, reversed>]
      : []