type MapTypes<T, R extends {
    mapFrom: any;
    mapTo:any;
}, U extends R = R> = {
    [key in keyof T]: U extends R
        ?T[key] extends R['mapFrom'] 
            ? T[key] extends U['mapFrom']
                ?U['mapTo']
                :never
            :T[key]
        : never
}
