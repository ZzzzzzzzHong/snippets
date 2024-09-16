import { BrowserWindowConstructorOptions } from 'electron'

export interface OptionsType extends BrowserWindowConstructorOptions {
  hash: string
  openDevTools?: boolean
}
const winConfig = {
  home: <OptionsType>{
    width: 500,
    height: 460,
    resizable: false,
    alwaysOnTop: true,
    hash: 'home',
    openDevTools: false
  },
  config: <OptionsType>{
    width: 960,
    height: 660,
    minWidth: 880,
    minHeight: 600,
    alwaysOnTop: false,
    hash: 'config',
    openDevTools: true
  }
}

export default winConfig
