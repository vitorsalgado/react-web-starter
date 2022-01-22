import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../store'

export abstract class UseCase<S, A = void, R = void> {
  protected readonly dispatch: Dispatch

  protected constructor() {
    this.dispatch = useDispatch()
  }

  state(): S {
    return useSelector(this.stateSelector())
  }

  abstract execute(args: A): R

  protected abstract stateSelector(): (state: AppState) => S
}
