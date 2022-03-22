type ReplaceKeys<U, T, Y> = 
    U extends U ? 
        {
            [I in keyof U]: I extends T ? (I extends keyof Y ? Y[I] : never) : U[I];   
        }
    :never
