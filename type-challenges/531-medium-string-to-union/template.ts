type StringToUnion<T extends string> = T extends `${infer l}${infer r}`? l|StringToUnion<r>: never
