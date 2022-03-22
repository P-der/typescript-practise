type UnionToIntercetion<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => any) ? I : never

type DeepPick<T, key> =UnionToIntercetion< 
key extends ''
?unknown
:key extends `${infer l}.${infer r}`
? l extends keyof T? {
   [x in l]: DeepPick<T[l], r>
}:DeepPick<T, r>
:key extends keyof T? {[x in key]: T[x]} : unknown>
