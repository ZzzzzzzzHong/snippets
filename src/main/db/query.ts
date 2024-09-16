import { RunResult } from 'sqlite3'
import { db } from './connect'

export const returnFindAll = (sql: string) => {
  return new Promise((resolve, reject) => {
    db.prepare(sql).all(function (err: Error | null, rows: []) {
      if (err) {
        reject(err)
      }
      resolve(rows)
    })
  })
}

export const returnFindOne = (sql: string) => {
  db.prepare(sql).get(function (err: Error | null, rows) {
    if (err) {
      throw err
    }
    console.log(rows)
  })
}

export const returnInsert = (sql: string) => {
  db.prepare(sql).run(function (this: RunResult, err: Error | null) {
    if (err) {
      throw err
    }
    console.log(this.lastID)
  })
}

export const returnUpdate = (sql: string) => {
  db.prepare(sql).run(function (this: RunResult, err: Error | null) {
    if (err) {
      throw err
    }
    console.log(this.changes)
  })
}

export const returnDelete = (sql: string) => {
  db.prepare(sql).run(function (this: RunResult, err: Error | null) {
    if (err) {
      throw err
    }
    console.log(this.changes)
  })
}
