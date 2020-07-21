import { def } from '../def'

export const undef = <T>(x: T) => !def(x)
