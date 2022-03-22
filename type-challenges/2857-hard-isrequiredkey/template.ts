type IsRequiredKey<T, K extends keyof T> = T extends Required<Pick<T, K>> ? true : false   
