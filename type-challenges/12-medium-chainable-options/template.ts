type Chainable<options = {} > = {
  option<K extends string, V extends any>(key: Exclude<K, keyof options>, value: V): 
  Chainable<options & Record<K, V>>
  get(): options
}
