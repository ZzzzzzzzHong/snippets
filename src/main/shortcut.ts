import { app, globalShortcut, BrowserWindow, dialog } from 'electron'

// 注册全局快捷键
const registerShortcut = (win: BrowserWindow) => {
  // 注册一个'CommandOrControl+H' 快捷键监听器
  const ret = globalShortcut.register('CommandOrControl+H', () => {
    win.isVisible() ? win.hide() : win.show()
  })

  // 注册失败，全局快捷键冲突
  if (!ret) {
    console.log('registration failed')
    dialog.showErrorBox('温馨提示', '快捷键注册失败，请检查快捷键是否已被占用')
  }

  // 检查快捷键是否注册成功
  console.log(globalShortcut.isRegistered('CommandOrControl+H'))
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

export default registerShortcut
