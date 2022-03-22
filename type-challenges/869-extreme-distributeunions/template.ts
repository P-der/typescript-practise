
type Merge869<T> = {[P in keyof T]: T[P]}

type DistributeObject<T, U = UnionToTuple<keyof T>>
    = U extends [infer L, ...infer R]
        ? DistributeUnions<T[keyof T & L]> extends infer V
            ? V extends any ? Merge869<{[P in keyof T & L]: V} & DistributeObject<T, R>>: never
        : never
    : {}
 /**
   * DistributeArray<[1 | 2, 3]> = [2, 3] | [1, 3]
   */
type DistributeArray<T> 
    = T extends [infer L, ...infer R]
        ? DistributeUnions<L> extends infer U
            ? U extends any ? [U, ...DistributeArray<R>] : never
        : never
    : []

type DistributeUnions<T> 
    = T extends any
        ? T extends any[] ? DistributeArray<T>
        : T extends object ? DistributeObject<T>
        : T
    : never