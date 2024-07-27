import { IpcMainEvent, ipcMain } from 'electron'
import { createWindow, getSenderWindow } from './window'

ipcMain.on('hideWindow', (event: IpcMainEvent) => {
  const win = getSenderWindow(event)
  win.hide()
})

ipcMain.on('setIgnoreMouseEvents', (event: IpcMainEvent, ignore: boolean) => {
  const win = getSenderWindow(event)
  const options = { forward: true }
  win.setIgnoreMouseEvents(ignore, options)
})

ipcMain.on('createWindow', (_event: IpcMainEvent, winType: WindowNameType) => {
  createWindow(winType)
})
