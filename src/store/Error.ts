export interface Error {
  code: string
  message: string
  extensions: Record<string, unknown>
}
