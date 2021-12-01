import { CountType, CountUseCase } from '@app/core/Counter/CountUseCase'

export const CounterViewModel = (countUseCase: CountUseCase = new CountUseCase()) => ({
  increment(): void {
    countUseCase.execute(CountType.INC)
  },

  decrement(): void {
    countUseCase.execute(CountType.DEC)
  },

  total(): number {
    return countUseCase.state().total
  }
})
