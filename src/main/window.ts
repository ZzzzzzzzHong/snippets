import { shell, BrowserWindow, IpcMainEvent } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): BrowserWindow {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 500,
    height: 460,
    minWidth: 500,
    minHeight: 460,
    maxWidth: 500,
    maxHeight: 460,
    show: false,
    autoHideMenuBar: true, // 隐藏菜单栏
    transparent: true,
    alwaysOnTop: true, // 置于顶层
    frame: false, // 去掉应用栏
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  win.webContents.openDevTools() // 调试工具

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
    win.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return win
}

function getSenderWindow(event: IpcMainEvent): BrowserWindow {
  return BrowserWindow.fromWebContents(event.sender)!
}

export { createWindow, getSenderWindow }
