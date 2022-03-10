// type First<T extends any[]> = T extends [] ? never : T[0]
type First<T extends any[]> = T extends [infer one, ...infer rest ] ? one : never
