import {
  app,
  globalShortcut,
  BrowserWindow,
  dialog,
  IpcMainEvent,
  ipcMain
} from 'electron'
import { getSenderWindow } from './window'

// 注册全局快捷键来动态对搜索栏进行显隐
const registerShortcut = (shortcut: string, win: BrowserWindow) => {
  if (!shortcut) {
    shortcut = 'CommandOrControl+H' // 默认快捷键
  }
  if (globalShortcut.isRegistered(shortcut)) {
    dialog.showErrorBox('温馨提示', '快捷键注册失败，该快捷键已被占用')
    return false
  }
  globalShortcut.unregisterAll() // 注销之前的快捷键
  // 重新注册快捷键监听器
  return globalShortcut.register(shortcut, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

ipcMain.on('setShortcut', (event: IpcMainEvent, shortcut: string) => {
  registerShortcut(shortcut, getSenderWindow(event))
})

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

export default registerShortcut

// todo:动态注册全局快捷键
export const registerAppGlobShortcut = () => {}
