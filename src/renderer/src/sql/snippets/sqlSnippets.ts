class SqlSnippets {
  // constructor() {}
  selectGroups = () => {
    return 'select * from categoryGroups;'
  }
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
