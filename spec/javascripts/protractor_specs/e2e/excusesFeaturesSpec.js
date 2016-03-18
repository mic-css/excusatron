describe('Excuses page', function () {

  beforeEach(function(){
    browser.get('http://localhost:3000');
    element(by.linkText('RUNNING LATE')).click();
  });

  var excuses = element.all(by.css('.excuse'));

  it("has the relevant excuses to a given scenario", function() {
    expect(excuses.first().getText()).toContain('STUCK IN TRAFFIC');
    expect(excuses.count()).toBe(3);
  });



});
