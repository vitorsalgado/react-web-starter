import { Dispatch } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store'

export abstract class UseCase<S, A = void, R = void> {
  protected readonly _dispatch: Dispatch

  protected constructor() {
    this._dispatch = useDispatch()
  }

  state(): S {
    return useSelector(this.getState())
  }

  abstract execute(args: A): R

  protected abstract getState(): (state: AppState) => S
}
