export class Maybe<T> {
  constructor(public value?: T) {
  }

  getOrElse(defaultValue: T): T {
    return this.value === null ? defaultValue : this.value
  }

  getOr(fn: (value: T) => T): T {
    return fn(this.value)
  }

  get(): T {
    return this.value
  }

  map<R>(fn: (value: T) => R): Maybe<R> {
    return this.hasValue()
      ? new Maybe<R>(fn(this.value))
      : Maybe.empty()
  }

  ifPresent(fn: (value: T) => void) {
    if (this.hasValue())
      fn(this.value)
  }

  hasValue(): boolean {
    return !!this.value
  }

  isEmpty(): boolean {
    return !this.value
  }

  static empty<T>() {
    return new Maybe<T>(null)
  }

  static of<T>(value: T) {
    if (!value) {
      throw Error('Parameter value must not be null or empty')
    }

    return new Maybe(value)
  }

  static ofNullable<T>(value: T) {
    return value ? Maybe.of(value) : Maybe.empty<T>()
  }
}

export const empty = <T>(): Maybe<T> => new Maybe()

export const fromNullable = <T>(value: T): Maybe<T> => new Maybe<T>(value)

export const fromValue = <T>(value: T): Maybe<T> => {
  if (!value)
    throw Error('Parameter value must not be null or empty')
  return new Maybe(value)
}
