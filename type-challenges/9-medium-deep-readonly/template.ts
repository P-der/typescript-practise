type DeepReadonly<T> = {
    readonly [key in keyof T]: T[key] extends Record<string, unknown> ? DeepReadonly<T[key]>: T[key]
}
