type CamelCase<S> = S extends `${infer l}-${infer r}`?
    r extends Capitalize<r> ? `${l}-${CamelCase<r>}`: `${l}${CamelCase<Capitalize<r>>}`
:S
