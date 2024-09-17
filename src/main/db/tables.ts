import { Database } from 'sqlite3'
// 创建表
const createTables = (db: Database) => {
  /**
   * 分组表
   * id，分组名称，创建时间，修改时间
   */
  db.run(
    `
    CREATE TABLE IF NOT EXISTS categoryGroups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `,
    function (e) {
      if (e) throw e
      db.get('SELECT * FROM categoryGroups', function (_err, row) {
        if (!row) {
          initCategoryGroup(db)
        }
      })
    }
  )

  /**
   * 内容表
   * id，片段名称，内容，所属分组，创建时间，修改时间
   */
  db.run(`
    CREATE TABLE IF NOT EXISTS contents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `)
}

// 初始化时自动新增'未分组'
const initCategoryGroup = (db: Database) => {
  db.run(`
    insert into categoryGroups (
      id,
      title,
      created_at,
      updated_at
    ) values (
      0,
      '未分组',
      datetime('now','localtime'),
      datetime()
    )
  `)
}

export default createTables
