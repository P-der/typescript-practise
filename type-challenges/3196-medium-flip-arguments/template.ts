type FlipArguments<T> = T extends (...arg:infer A)=> infer r 
? ((...arg:Reverse<A>)=> r)
:never
