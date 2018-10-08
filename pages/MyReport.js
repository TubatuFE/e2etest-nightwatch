module.exports = {
  url: 'http://localhost/Makereport/Report/action/my/t/0/pid/4364', // 项目统计(预下线)
  elements: {
    // 报表名称
    nameInput: {
      selector: 'input[type=text][name=name]'
    },
    // TAB名称
    tabInput: {
      selector: 'input[type=text][name=tab]'
    },
    // 状态
    statusSelect: {
      selector: 'select[name=status]'
    },
    // 开发者
    authorInput: {
      selector: 'input[type=text][name=author]'
    },
    // 需求者
    noteInput: {
      selector: 'input[type=text][name=note]'
    },
    searchSubmit: {
      selector: 'input[type=submit]#search_btn'
    },
    createLink: {
      selector: 'input[type=submit]#search_btn+a'
    }
  }
};