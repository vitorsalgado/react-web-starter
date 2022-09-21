import { UseCase } from '../../libs/base/UseCase'
import { AppState } from '../../libs/store'
import { Counter } from './Counter'
import { incrementAction } from './counterActions'
import { decrementAction } from './counterActions'

export enum CountType {
  INC,
  DEC,
}

export class CountUseCase extends UseCase<Counter, CountType> {
  public constructor() {
    super()
  }

  protected getState(): (state: AppState) => Counter {
    return function (state: AppState) {
      return state.counter
    }
  }

  execute(args: CountType): void {
    if (args === CountType.INC) {
      this._dispatch(incrementAction())
    } else {
      this._dispatch(decrementAction())
    }
  }
}
