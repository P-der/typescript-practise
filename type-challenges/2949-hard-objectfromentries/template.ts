type ObjectFromEntries<T extends any[]> = {
    [K in T[0]]: T extends [ K, any ] ? T[1] : never
}
