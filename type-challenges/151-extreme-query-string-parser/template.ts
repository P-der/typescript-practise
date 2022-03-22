type havedeng<S extends string, U extends object = {}> = 
S extends `${infer l}=${infer r}`
?{
    [key in (keyof U) | l]: 
    key extends keyof U
    ? key extends l
        ? MyEqual<U[key], r> extends true
        ? U[key]
        :[U[key], r]
    :U[key]:r
}
:{
    [key in keyof U | S]:
        key extends keyof U
        ? U[key]
        :true 
}

type ParseQueryString<S extends string, R extends object = {}> = 
S extends ''? R :
S extends `${infer l}&${infer r}`?
ParseQueryString<r, havedeng<l & string, R>>
: havedeng<S,R>
