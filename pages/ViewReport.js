module.exports = {
  url: 'http://localhost/Business/ViewReport/pid/4022', // 3888
  elements: {
    datePicker: {
      selector: 'input[type=text]#datepicker' 
    },
    filterSelect: {
      selector: '.bootstrap-select select#sel_1'
    },
    filterSelectOptions: {
      selector: '.bootstrap-select select option'
    },
    dropdownMenu: {
      selector: '.dropdown-menu'
    },
    submit: {
      selector: 'input[type=submit]'
    },
    table: {
      selector: 'table.table'
    }
  }
};