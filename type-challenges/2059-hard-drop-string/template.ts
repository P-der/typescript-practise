type DropOne<S extends string,R extends string> = S extends `${infer A}${R}${infer B}`?
  DropOne<`${A}${B}`,R>
  :S
type DropString<S extends string, R> =
 R extends `${infer f}${infer r}`
 ? DropString<DropOne<S, f>, r>
:S
