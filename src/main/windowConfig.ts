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
    openDevTools: true
  },
  config: <OptionsType>{
    width: 800,
    height: 660,
    minWidth: 800,
    minHeight: 600,
    alwaysOnTop: false,
    hash: 'config',
    openDevTools: false
  }
}

export default winConfig
