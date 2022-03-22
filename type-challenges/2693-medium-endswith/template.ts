type EndsWith<T extends string, U extends string> = T extends `${infer l}${U}` ? true: false
