type Trunc<T extends string|number> = `${T }` extends `${infer l}.${infer r}`? l : `${T}`
