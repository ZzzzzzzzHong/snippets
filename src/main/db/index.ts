import './ipc'
import { db } from './connect'
import createTables from './tables'

createTables(db)
