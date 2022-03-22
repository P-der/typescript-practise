type IndexOf<T, U, R extends any[] = []> = 
T extends [infer l, ...infer r]
? l extends U 
    ? R['length']:IndexOf<r,U,[...R, l]>
: -1
