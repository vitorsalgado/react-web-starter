export const peek = <T>(fn: (value: T) => void) => (x: T): T => {
	fn(x)
	return x
}
