type MapGetters<G> = { 
    readonly [K in keyof G]: G[K] extends (...args: any[]) => infer R ? R : never 
}
declare function defineStore<S, G, A>(store:{
    id: string,
    state: () => S,
    getters: G & ThisType<Readonly<S> & MapGetters<G>>,
    actions: A & ThisType<S & MapGetters<G> & A>,
  }): S & MapGetters<G> & A & {init: () => void }
