import Path from 'path'
import Fs from 'fs'

const AppDirectory = Fs.realpathSync(process.cwd())

export function resolvePath(relativePath: string) {
  return Path.resolve(AppDirectory, relativePath)
}

export function sanitizePublicUrl(url: string) {
  return url.endsWith('/') ? url.substring(0, url.length - 1) : url
}
