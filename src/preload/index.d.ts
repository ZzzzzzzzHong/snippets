import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      setIgnoreMouseEvents: (isIgnore: boolean) => void
      openWindow: (winType: WindowNameType) => void
      sql: (queryType: string, sql: string) => Promise
    }
  }
}
