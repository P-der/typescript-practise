type transObj2946<T> = {
    [key in keyof T]-?: T[key]
}
type ObjectEntries<T, K = keyof T> = K extends keyof T?
[K, transObj2946<T>[K]]
:never
