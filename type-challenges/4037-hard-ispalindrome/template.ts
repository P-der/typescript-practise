type IsPalindrome<T extends number|string> = 
`${T}` extends `${infer l}${infer r}`
? r extends ''?true:
`${T}` extends `${l}${infer c}${l}`? IsPalindrome<c>:false
:true 
