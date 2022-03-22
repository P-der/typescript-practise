type MapDict = {
    s: string
    d: number
}
type Format<T extends string> = 
T extends `${string}%${infer l}${infer r}`
? l extends keyof MapDict 
    ?(arg:MapDict[l])=> Format<r>
    :string
:string