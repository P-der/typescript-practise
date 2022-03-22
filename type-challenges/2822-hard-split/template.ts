type Split<S extends string, SEP extends string> = 
string extends S?
string[]:
S extends ''? 
SEP extends ''?[]:['']
:S extends `${infer l}${SEP}${infer r}`
?[l, ...Split<r, SEP>]
:[S]
