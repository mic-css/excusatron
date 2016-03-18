describe('Scenarios page', function () {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it("displays a welcome message", function () {
    expect(element(by.css('#main h1')).getText()).toContain("HI, I'M EXCUSATRON");
    expect(element(by.css('#main h2')).getText()).toBe("WHAT'S THE PROBLEM?");
  });

  var scenarios = element.all(by.css('.scenario'));

  it("displays scenarios", function () {
    expect(scenarios.first().getText()).toBe('RUNNING LATE');
  });

  it("can select a scenario", function () {
    element(by.linkText('RUNNING LATE')).click();
    expect(element(by.css('#excuses')).isPresent()).toBe(true);
    expect(element(by.css('#scenarios')).isPresent()).toBe(false);
  });
});
