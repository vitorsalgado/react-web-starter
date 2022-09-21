import Config from '../../config'

export const devURL = (): string => `http://${Config.devServer.host}:${Config.devServer.port}`
