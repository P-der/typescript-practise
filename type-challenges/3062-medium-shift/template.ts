type Shift<T> = T extends [infer f, ...infer R]?R:[]
