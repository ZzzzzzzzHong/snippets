import { IpcMainInvokeEvent, ipcMain } from 'electron'
import * as query from './query'

ipcMain.handle(
  'sql',
  async (event: IpcMainInvokeEvent, queryType: SQLType, sql: string) => {
    return await query[queryType](sql)
  }
)
