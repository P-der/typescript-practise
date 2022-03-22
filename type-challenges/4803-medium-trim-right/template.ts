type TrimRight<S extends string> = 
S extends `${infer l}${' '|'\n'|'\t' }`?TrimRight<l>
:S
