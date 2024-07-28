import { Database } from 'sqlite3'

// 创建表
const createTables = (db: Database) => {
  /**
   * 分组表
   * id，分组名称，创建时间，修改时间
   */
  db.exec(`
  CREATE TABLE IF NOT EXISTS category (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
  )
  `)

  /**
   * 内容表
   * id，片段名称，内容，所属分组，创建时间，修改时间
   */
  db.exec(`
    CREATE TABLE IF NOT EXISTS content (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_id INTEGER,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `)
}

export default createTables
