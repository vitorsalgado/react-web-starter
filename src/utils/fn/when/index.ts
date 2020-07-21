export const when =
	(cond: boolean) => ({
		and: (a: boolean) => when(cond && a),
		or: (a: boolean) => when(cond || a),
		use: <T>(value: T) => ({
			otherwise: (other: T) => cond ? value : other
		})
	})
