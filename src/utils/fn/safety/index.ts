import { handleException } from '../../errorhandler'

export const runCatching = <T>(action: () => T): T => {
  try {
    return action()
  } catch (e) {
    handleException('Error in runCatching')(e)
    return null
  }
}
