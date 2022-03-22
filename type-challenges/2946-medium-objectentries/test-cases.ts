import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'
type test = ObjectEntries<Partial<Model>>
interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];



type cases = [
  Expect<Equal<ObjectEntries<Model>,ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>,ModelEntries>>,
]
