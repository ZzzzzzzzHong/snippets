import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  hideHomeWindow: () => ipcRenderer.send('hideWindow'),
  setIgnoreMouseEvents: (ignore: boolean) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore)
  },
  openWindow: (winType: WindowNameType) => {
    ipcRenderer.send('createWindow', winType)
  },
  sql: async (queryType: SQLType, sql: string) => {
    return await ipcRenderer.invoke('sql', queryType, sql)
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
