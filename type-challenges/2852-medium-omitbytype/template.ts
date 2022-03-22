type OmitByType<T, U> = {
    [key in keyof T as T[key] extends U?never:key]: T[key]
}
