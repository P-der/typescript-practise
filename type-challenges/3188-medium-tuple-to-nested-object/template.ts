type TupleToNestedObject<T, U> = T extends [infer f, ...infer r]?
{
   [key in f & string]: TupleToNestedObject<r, U>
}
: U
