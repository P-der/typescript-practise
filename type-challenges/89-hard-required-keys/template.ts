type RequiredKeys<T, key extends keyof T = keyof T> =  key extends keyof T
? T[key] extends Required<T>[key]? key :never
:never
