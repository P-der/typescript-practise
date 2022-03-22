type TupleKeys<T> = T extends readonly[ infer f,...infer r] ? TupleKeys<r> | r['length'] : never
type Enum<T extends readonly string[], N extends boolean = false> = {
    readonly [key in TupleKeys<T> as Capitalize<T[key]>]:N extends true? key : T[key]
}
