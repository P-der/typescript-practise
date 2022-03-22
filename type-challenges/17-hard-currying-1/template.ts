type Curried<T, R> = T extends [infer l, ...infer r]
    ?(arg: T[0])=> Curried<r,R>
    :R
declare function Currying<T extends unknown[], R>(fn: (...args: T) => R): Curried<T, R>