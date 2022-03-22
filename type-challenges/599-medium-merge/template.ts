type Merge<F extends Record<string, any> , S extends Record<string, any>> = {
    [key in keyof (F & S)]: key extends keyof S? S[key]:
        key extends keyof F? F[key]: never;
}