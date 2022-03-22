type MutableKeys<T> = keyof {
    [Key in keyof T as MyEqual<Pick<T, Key>, Readonly<Pick<T, Key>>> extends true ? never : Key ]: any
  }
