type Reverse<T> = T extends [...infer f, infer r]?
[r, ...Reverse<f>]
: []
