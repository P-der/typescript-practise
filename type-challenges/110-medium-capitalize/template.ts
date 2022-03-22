type MyCapitalize<S extends string> = S extends `${infer f}${infer l}`? `${Uppercase<f>}${l}`: S 
