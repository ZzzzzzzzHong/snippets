import { shell, BrowserWindow, IpcMainEvent } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import winConfig from './windowConfig'

function createWindow(winType: WindowNameType): BrowserWindow {
  const config = winConfig[winType]
  // Create the browser window.
  const win = new BrowserWindow(
    Object.assign(
      {
        width: 500,
        height: 600,
        show: false,
        autoHideMenuBar: true, // 隐藏菜单栏
        transparent: true,
        alwaysOnTop: false, // 置于顶层
        frame: false, // 去掉应用栏
        ...(process.platform === 'linux' ? { icon } : {}),
        webPreferences: {
          preload: join(__dirname, '../preload/index.js'),
          sandbox: false
        }
      },
      config
    )
  )

  if (is.dev && config.openDevTools) {
    win.webContents.openDevTools() // 调试工具
  }

  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(join(process.env['ELECTRON_RENDERER_URL'], `#${config.hash}`))
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return win
}

function getSenderWindow(event: IpcMainEvent): BrowserWindow {
  return BrowserWindow.fromWebContents(event.sender)!
}

export { createWindow, getSenderWindow }
