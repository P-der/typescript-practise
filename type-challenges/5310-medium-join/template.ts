type Join<T extends any[], U extends string|number, A extends string = '' > = 
T extends [infer l, ...infer r]
? r['length'] extends 0 
?`${A}${A extends ''?'': U}${l & string}`
:Join<r, U, `${A}${A extends ''?'': U}${l & string}`>
:A
