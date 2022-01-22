import { UseCase } from '../../utils/base/UseCase'
import { AppState } from '../../infrastructure/store'
import { Counter } from './Counter'
import { incrementAction } from './counterActions'
import { decrementAction } from './counterActions'

export enum CountType {
  INC,
  DEC
}

export class CountUseCase extends UseCase<Counter, CountType> {
  public constructor() {
    super()
  }

  protected stateSelector(): (state: AppState) => Counter {
    return function (state: AppState) {
      return state.counter
    }
  }

  execute(args: CountType): void {
    if (args === CountType.INC) {
      this.dispatch(incrementAction())
    } else {
      this.dispatch(decrementAction())
    }
  }
}
