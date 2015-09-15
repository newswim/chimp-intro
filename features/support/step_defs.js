// Must wrap the tests in module.exports for Cucumber to see them...
module.exports = function() {

  this.Given(/^I have visited Google$/, function () {
    client.url('http://google.com');
  });

  this.When(/^I search for "([^"]*)"$/, function (searchTerm) {
    client.setValue('input[name="q"]', searchTerm);
    client.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)"$/, function (link) {
    client.waitForExist('a=' + link);
  });

}
