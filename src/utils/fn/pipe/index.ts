export const pipe = <T>(...fns: Array<(...a: T[]) => T>) =>
	fns.reduce((f, g) => (...args: T[]) => g(f(...args)))
