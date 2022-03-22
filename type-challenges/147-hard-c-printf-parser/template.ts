type ControlsMap = {
  c: 'char',
  s: 'string',
  d: 'dec',
  o: 'oct',
  h: 'hex',
  f: 'float',
  p: 'pointer',
}

type ParsePrintFormat<S> =S extends `${infer Start}%${infer Letter}${infer Rest}`
? (Letter extends keyof ControlsMap
    ? [ControlsMap[Letter], ...ParsePrintFormat<Rest>]
    : ParsePrintFormat<Rest>)
: []
