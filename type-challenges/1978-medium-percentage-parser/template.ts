type PercentageParser<A extends string> = 
    A extends `${infer X}${infer Y}`?
        A extends `${infer X}%`?
            X extends `-${infer Y}`?
                ['-',Y,'%']
            : X extends `+${infer Y}` ?
                ['+', Y, '%']
            :['',X,'%']
        : [X,Y,'']
    :[A,'','']
