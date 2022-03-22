type Chunk<
    T, 
    N extends number, 
    current extends unknown[] = [], 
    res extends unknown[] = []
> = 
T extends [infer F, ...infer arg] ? 
        current['length'] extends N ? 
            Chunk<arg, N, [F], [...res, current]> :
            Chunk<arg, N, [...current, F], res> :
        current['length'] extends 0 ? res : [...res, current]
