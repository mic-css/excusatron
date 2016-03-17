describe('Excuses page', function () {

  beforeEach(function(){
    browser.get('http://localhost:3000');
    element(by.linkText('Running late')).click();
  });

  var excuses = element.all(by.css('.excuse'));

  it("has the relevant excuses to a given scenario", function() {
    expect(excuses.first().getText()).toBe('Stuck in traffic');
    expect(excuses.count()).toBe(3);
  });



});
