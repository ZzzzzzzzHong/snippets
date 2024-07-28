import { resolve } from 'path'
import { verbose } from 'sqlite3'
import { app } from 'electron'

// const dbFile = resolve(app.getPath('userData'), './hong.db') // 存储数据文件
const dbFile = resolve(app.getPath('home'), 'Desktop', './hong.db') // 存储数据文件

const sqlite3 = verbose()
const db = new sqlite3.Database(dbFile, (err: Error | null) => {
  if (err) {
    console.log('Database connection failure...', err)
  }
})

export { db }
// db.serialize(() => {
//   db.run('CREATE TABLE lorem (info TEXT)')

//   const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
//   for (let i = 0; i < 10; i++) {
//     stmt.run('Ipsum ' + i)
//   }
//   stmt.finalize()

//   db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
//     console.log(row.id + ': ' + row.info)
//   })
// })

// db.close()
