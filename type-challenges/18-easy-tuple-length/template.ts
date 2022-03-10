type Length<T extends readonly any[]> = T extends {
    length: infer L
}? L : never
