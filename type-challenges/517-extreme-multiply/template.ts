type MultiplyBy2<A> = A extends Tuple ? SumOfTuple<A, A> : [];
type MultiplyBy3<A> = A extends Tuple ? SumOfTuple<A, MultiplyBy2<A>> : [];
type MultiplyBy4<A> = A extends Tuple ? MultiplyBy2<MultiplyBy2<A>> : [];
type MultiplyBy5<A> = A extends Tuple ? SumOfTuple<A, MultiplyBy4<A>> : [];
type MultiplyBy6<A> = A extends Tuple ? MultiplyBy2<MultiplyBy3<A>> : [];
type MultiplyBy7<A> = A extends Tuple ? SumOfTuple<A, MultiplyBy6<A>> : [];
type MultiplyBy8<A> = A extends Tuple ? MultiplyBy2<MultiplyBy4<A>> : [];
type MultiplyBy9<A> = A extends Tuple ? MultiplyBy3<MultiplyBy3<A>> : [];
type MultiplyBy10<A> = A extends Tuple ? MultiplyBy2<MultiplyBy5<A>> : [];

type SumOf10AandB<A extends Tuple, B extends Tuple> = SumOfTuple<MultiplyBy10<A>, B>;
type MultiplyOfTuple<
    A extends Tuple,
    B extends Tuple,
    LastA extends Digit = SumLast<A>,
    PopA extends Tuple = SumPop<A>
> = A extends []
    ? ['0']
    : LastA extends '0'
    ? MultiplyBy10<MultiplyOfTuple<PopA, B>>
    : LastA extends '1'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, B>
    : LastA extends '2'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy2<B>>
    : LastA extends '3'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy3<B>>
    : LastA extends '4'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy4<B>>
    : LastA extends '5'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy5<B>>
    : LastA extends '6'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy6<B>>
    : LastA extends '7'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy7<B>>
    : LastA extends '8'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy8<B>>
    : LastA extends '9'
    ? SumOf10AandB<MultiplyOfTuple<PopA, B>, MultiplyBy9<B>>
    : [];

/**
 * Multiply<2, 3> = '6'.
 */
 type Multiply<A extends NumberLike, B extends NumberLike> = SumJoin<
 MultiplyOfTuple<SumSplit<ToString<A>>, SumSplit<ToString<B>>>
>;