const createRules = (formItems: FormItemType[]) => {
  const newFormItems = formItems.map((item: FormItemType) => {
    // 没有rules,自动生成必填项的校验规则
    const rules: Array<object> = []
    if (item.required && !item.rules) {
      rules.push({
        required: true,
        message: `${item.label}不能为空`
      })
    }
    return { ...item, rules }
  })
  return newFormItems
}

export default createRules
