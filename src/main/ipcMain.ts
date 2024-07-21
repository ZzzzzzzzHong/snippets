import { BrowserWindow, ipcMain } from 'electron'

ipcMain.on('hideWindow', (event: Electron.IpcMainEvent) => {
  const win = BrowserWindow.fromWebContents(event.sender)!
  win.hide()
})
