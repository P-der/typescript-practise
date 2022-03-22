type GetReadonlyKeys<
T,  
U extends Readonly<T> = Readonly<T>,
K extends keyof T = keyof T 
> = K extends K? MyEqual<Pick<T, K> , Pick<U, K>> extends true?K:never:never
