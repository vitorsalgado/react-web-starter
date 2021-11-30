import Config from '../../configs'

export const devURL = (): string => `http://${Config.devServer.host}:${Config.devServer.port}`
