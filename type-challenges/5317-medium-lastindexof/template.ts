type LastIndexOf<T, U> = T extends [...infer l, infer r]
? r extends U 
    ? l['length']
    :LastIndexOf<l, U>
:-1
