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
  '我的报表' : function (browser) {
    var ViewReport = browser.page.MyReport();

    ViewReport.navigate();
    ViewReport.expect.element('@nameInput').to.be.visible;
    ViewReport.expect.element('@tabInput').to.be.visible;
    ViewReport.expect.element('@statusSelect').to.be.visible;
    ViewReport.expect.element('@authorInput').to.be.visible;
    ViewReport.expect.element('@noteInput').to.be.visible;
    ViewReport.expect.element('@searchSubmit').to.be.visible;
    ViewReport.expect.element('@createLink').to.be.visible;

    browser.end();
  }
};
