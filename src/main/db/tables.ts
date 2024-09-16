import { Database } from 'sqlite3'
// import Mock from 'mockjs'
// const Random = Mock.Random

// 创建表
const createTables = (db: Database) => {
  /**
   * 分组表
   * id，分组名称，创建时间，修改时间
   */
  db.exec(`
    CREATE TABLE IF NOT EXISTS categoryGroups (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `)

  // todo:首次应该自动创建未分组
  // db.exec(`
  //   insert into category (
  //     id,
  //     title,
  //     created_at,
  //     updated_at
  //   ) values (
  //     0,
  //     '未分组',
  //     datetime('now','localtime'),
  //     datetime()
  //   )
  // `)

  /**
   * 内容表
   * id，片段名称，内容，所属分组，创建时间，修改时间
   */
  db.exec(`
    CREATE TABLE IF NOT EXISTS contents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      group_id INTEGER,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `)

  // for (let index = 0; index < 10; index++) {
  //   db.exec(`
  //   INSERT INTO categoryGroups (
  //     title,
  //     created_at,
  //     updated_at
  //   ) VALUES (
  //     '${Random.ctitle(3, 5)}',
  //     datetime('now','localtime'),
  //     datetime()
  //   )
  // `)
  //   db.exec(`
  //   INSERT INTO contents (
  //     title,
  //     content,
  //     created_at,
  //     updated_at
  //   ) VALUES (
  //     '${Random.ctitle(3, 5)}',
  //     '${Random.cparagraph(1, 2)}',
  //     datetime('now','localtime'),
  //     datetime()
  //   )
  // `)
  // }
}

export default createTables
