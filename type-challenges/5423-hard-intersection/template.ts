type ToUnion<T> = T extends any[]? T[number]:T;
type Intersection<T extends any[],R = ToUnion<T[0]>> = 
T extends [infer F,...infer L]
? Intersection<L,R & ToUnion<F>>
:R
