module.exports = {
  '@tags': ['feature'],
  '登录': function (browser) {
    browser.maximizeWindow();
    var Login = browser.page.Login();
    Login.navigate()
      // .waitForElementVisible('body', 1000)
      .setValue('@username', 'canny.huang')
      .setValue('@password', 'canny@123')
      // .waitForElementVisible('@submit', 1000)
      .click('@submit')
  },
  '查询数据' : function (browser) {
    var ViewReport = browser.page.ViewReport();

    ViewReport.navigate();
    ViewReport.clearValue('@datePicker');
    ViewReport.setValue('@datePicker', '2010-09-01 ~ 2018-09-30');
    ViewReport.expect.element('@submit').to.be.visible;
    ViewReport.click('@submit');
    ViewReport.expect.element('@filterSelect').to.be.present.before(10000);

    browser.end();
  }
};
