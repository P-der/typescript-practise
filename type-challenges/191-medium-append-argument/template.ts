type AppendArgument<Fn, A> = 
Fn extends (...arg :infer T) => infer res
 ? (...arg: [...T, A]) => res 
 : Fn
