type Pop<T extends any[]> = T extends [...infer l, infer r]? l: never
