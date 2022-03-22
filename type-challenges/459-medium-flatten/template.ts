type Flatten<T extends any[]> = 
    T extends [infer L, ...infer R]? 
        L extends any[] ? 
            [...Flatten<L>,...Flatten<R>]
            :[L, ...Flatten<R>]
    : []