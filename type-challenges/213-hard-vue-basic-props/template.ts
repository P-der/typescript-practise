type ComputedType<C> = {
    [K in keyof C]: C[K] extends (...args: any[]) => any
      ? ReturnType<C[K]>
      : never
  }
  
  type Type<T> =
    | {
        new (...args: any[]): T & object
      }
    | {
        (): T
      }
  
  type InferType<T> = T extends Type<infer R> ? R : never
  
  type MapTypeArray<T> = T extends [...infer R]
    ? {
        [K in keyof R]: InferType<R[K]>
      }[number]
    : never
  
  type MapType<T> = T extends Type<any>
    ? InferType<T>
    : T extends {
        type: Type<any>
      }
    ? InferType<T['type']>
    : T extends {
        type: Type<any>[]
      }
    ? MapTypeArray<T['type']>
    : any
  
  type PropsType<P> = {
    [K in keyof P]: MapType<P[K]>
  }
  
  declare function VueBasicProps<Props, Data, Computed, Methods>(
    options: {
      props: Props
      data: (this: PropsType<Props>) => Data
      computed: Computed
      methods: Methods
    } & ThisType<PropsType<Props> & Data & ComputedType<Computed> & Methods>,
  ): any