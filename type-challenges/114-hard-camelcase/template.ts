type CamelCaseHardTrans<T> = T extends `${infer f}${infer r}`
? f extends `_`
    ?CamelCaseHardTrans<Capitalize<r>>
    :`${f}${CamelCaseHardTrans<r>}`
:T
type CamelCaseHard<S extends string> = CamelCaseHardTrans<Lowercase<S>>
