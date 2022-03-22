type Zip<T extends any[], U extends any[], L extends any[] = []> =
L['length'] extends T['length']|U['length'] ? L 
: Zip<T,U,[...L, [T[L['length']], U[L['length']]]]>