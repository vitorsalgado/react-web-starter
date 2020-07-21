import { allOf } from '../allOf'
import { anyOf } from '../anyOf'
import { fromNullable } from '../maybe'

export const take =
	<T>(val: T) => ({
		on: (pred: (x: T) => boolean) => ({
			and: (a: (x: T) => boolean) => take(val).on(allOf(pred, a)),
			or: (a: (x: T) => boolean) => take(val).on(anyOf(pred, a)),
			use: <T>(value: T) => ({
				otherwise: (other: T) => pred(val) ? take(value) : take(other)
			})
		}),
		map: <R>(fn: (x: T) => R) => take(fn(val)),
		toMaybe: () => fromNullable(val),
		get: <T>() => val
	})
