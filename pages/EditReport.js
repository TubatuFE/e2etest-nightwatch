module.exports = {
  url: 'http://localhost/Makereport/EditTab/4024/19963', // 项目统计(预下线)
  elements: {
    // 报表名称
    nameInput: {
      selector: 'input[type=text][name=name]'
    },
    // 日期类型 day week month year actual
    tabRadio: {
      selector: 'input[type=radio][name=datetype]'
    },
    // 特性 1:合计 2:均值 5:时间框 6:对比 3:下载
    featuresCheckbox: {
      selector: 'input[type=checkbox][name="features[]"]'
    },
    // 开发者
    authorInput: {
      selector: 'input[type=text][name=author]'
    },
    // 需求者
    noteInput: {
      selector: 'input[type=text][name=note]'
    },
    // 执行按钮
    execButton: {
      selector: 'input[type=button][value=执行]'
    },
    // 表格显示:添加字段
    addTd: {
      selector: 'a.addTd'
    },
    // 表格显示:移除字段
    removeTd: {
      selector: 'a.removeTd'
    },
  }
};