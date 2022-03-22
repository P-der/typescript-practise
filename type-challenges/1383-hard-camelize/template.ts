type Camelize<T> = T extends any[]?{
    [key in keyof T]:  T[key] extends object
    ? Camelize<T[key]>: T[key]
}: {
    [key in keyof T as CamelCaseHard<key & string>]: 
    T[key] extends object
    ? Camelize<T[key]>
    : T[key] extends any[]
    ?Camelize<T[key]>
    :T[key]
}
