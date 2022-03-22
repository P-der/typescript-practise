type FilterOut<T extends any[], F> = 
T extends [infer f, ...infer r]
?[f] extends [F]
    ?[...FilterOut<r, F>]
    :[f, ...FilterOut<r, F>]
:[]
