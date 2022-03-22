type InclusiveRange<Lower extends number,Higher extends number, A extends number[] = [], I extends any[] = []> = 
MyEqual<Comparator<Lower, Higher>, Comparison.Lower> extends true
? I['length'] extends Higher
    ?[...A, Higher]
    : I['length'] extends Lower?
        InclusiveRange<Lower, Higher, [I['length']],[...I,0]>
        : InclusiveRange<Lower, Higher, [...A, I['length']], [...I, 0] >
: MyEqual<Comparator<Lower, Higher>, Comparison.Equal> extends true?[Lower]:[] 
