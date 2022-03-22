type GetOptional<T> = {
    [key in keyof T as T[key] extends Required<T>[key]?never:key]: T[key]
}
