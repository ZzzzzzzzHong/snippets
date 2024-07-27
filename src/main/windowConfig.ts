import { BrowserWindowConstructorOptions } from 'electron'

const winConfig = {
  home: <BrowserWindowConstructorOptions>{
    width: 500,
    height: 460,
    minWidth: 500,
    minHeight: 460,
    maxWidth: 500,
    maxHeight: 460
  },
  config: <BrowserWindowConstructorOptions>{
    width: 800,
    height: 660,
    minWidth: 800,
    minHeight: 600
  }
}

export default winConfig
