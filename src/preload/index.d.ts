import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideHomeWindow: () => void
      setIgnoreMouseEvents: (isIgnore: boolean) => void
      openWindow: (winType: WindowNameType) => void
      sql: (queryType: SQLType, sql: string) => Promise
    }
  }
}
