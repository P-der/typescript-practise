type Get<T, K> = 
K　extends `${infer l}.${infer r}`
? l extends keyof T? Get<T[l], r> :never
:K extends keyof T ? T[K] : never
