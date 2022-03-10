type Last<T extends any[]> = T extends [...infer L, infer R] ? R : never
