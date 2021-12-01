import { Counter } from '@app/core/Counter/Counter'
import { decrementAction, incrementAction } from '@app/core/Counter/counterActions'
import { UseCase } from '@app/shared/base/UseCase'
import { AppState } from '@app/store'

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
