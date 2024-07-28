import { IpcMainInvokeEvent, ipcMain } from 'electron'
import * as query from './query'

ipcMain.handle(
  'sql',
  (event: IpcMainInvokeEvent, queryType: string, sql: string) => {
    return query[queryType](sql)
  }
)
