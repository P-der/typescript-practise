type joinString<T extends string, U extends readonly string[]> = 
U extends []
? ''
:U extends [infer f]?f:
    U extends [infer f, ...infer r]
    ? `${f extends string? f : ''}${T}${joinString<T,r extends readonly string[]?r: readonly []>}`: '';
declare function join<T extends string>(delimiter: T): < U extends readonly string[]>(...parts: U) => joinString<T, U>
type test = joinString<'-', ['a','b']>