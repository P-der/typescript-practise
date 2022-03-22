type DropChar<S extends string, C extends string> =
S extends `${infer l}${C}${infer r}`? `${l}${DropChar<r,C>}` :S
