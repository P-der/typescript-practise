type KebabCase<S extends string> = S extends `${infer l}${infer r}`?
 r extends Uncapitalize<r> ?
 `${Uncapitalize<l>}${KebabCase<r>}`   
 :`${Uncapitalize<l>}-${KebabCase<r>}`   
:S
