class SqlSnippets {
  // constructor() {}
  // 获取分组
  selectGroups = () => {
    return 'SELECT * FROM categoryGroups;'
  }
  selectGroupsBySearchKey = (searchKey?: string) => {
    return `
      SELECT
        cg.id,
        cg.title 
      FROM
        categoryGroups AS cg 
      WHERE
        EXISTS ( SELECT * FROM contents AS c WHERE cg.id = c.group_id AND c.title LIKE '%${searchKey}%' );
    `
  }
  // 添加分组
  insertGroup = (title: string) => {
    return `
      INSERT INTO categoryGroups ( title, created_at, updated_at )
      VALUES
        ( '${title}', datetime( 'now', 'localtime' ), datetime( 'now', 'localtime' ) );
    `
  }
  // 删除分组
  deleteGroup = (groupId: number) => {
    return `
      DELETE 
      FROM
        categoryGroups 
      WHERE
        id = ${groupId};
    `
  }

  // 获取内容
  selectContentsByGroupId = (groupId?: number) => {
    return `
      SELECT
        c.id,
        c.content,
        c.title,
        c.updated_at,
        cg.title AS group_name
      FROM
        contents AS c
        JOIN categoryGroups AS cg ON c.group_id = cg.id 
      WHERE
        group_id = ${groupId};
      `
  }
}

export default new SqlSnippets()
