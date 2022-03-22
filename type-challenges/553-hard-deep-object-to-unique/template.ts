type DeepObjectToUniq<O extends object> = {
    [key in keyof O]: O[key] extends object ? DeepObjectToUniq<O[key]> 
    & {
        _s?:[O, key]
    }
     : O[key] 
}
