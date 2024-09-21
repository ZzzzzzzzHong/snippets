type WindowNameType = 'home' | 'config' // electron窗口
// 数据库执行方法
type SQLType =
  | 'returnFindAll'
  | 'returnFindOne'
  | 'returnInsert'
  | 'returnUpdate'
  | 'returnDelete'

// 分组
type CategoryType = {
  id: number
  title: string
  create_at: string
  update_at: string
}

// 片段内容
type ContentType = {
  id: number
  group_id: number
  group_name: string
  title: string
  content: string
  created_at: string
  updated_at: string
}
