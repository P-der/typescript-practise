type AllCombinations<
  S extends string,
  PRE extends string = ''
> = S extends `${infer C}${infer POST}`
  ?
    `${C}${AllCombinations<`${PRE}${POST}`>}`| AllCombinations<POST, `${PRE}${C}`>
  : '';