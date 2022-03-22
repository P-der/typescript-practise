type Unique<T, U extends any[] = []> = T extends [infer l, ...infer r]
?l extends U[number]
    ?Unique<r, U>
    :Unique<r,[...U,l]>
:U
