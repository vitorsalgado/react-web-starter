export const anyOf = <T>(...fns: Array<(...a: T[]) => boolean>) => (...args: T[]) => fns.some(f => f(...args))
