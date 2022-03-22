type ToNumber<S extends string, A extends any[] = []> = S extends `${A['length']}`? A['length']: ToNumber<S, [1,...A]>
