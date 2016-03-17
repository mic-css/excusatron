describe('Scenarios page', function () {

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it("displays a welcome message", function () {
    expect(element(by.css('#main h1')).getText()).toBe("Hi, I'm Alibot");
    expect(element(by.css('#main h2')).getText()).toBe("What's the problem?");
  });

  var scenarios = element.all(by.css('.scenario'));

  it("displays scenarios", function () {
    expect(scenarios.first().getText()).toBe('Running late');
    expect(scenarios.count()).toBe(3);
  });

  it("can select a scenario", function () {
    element(by.linkText('Running late')).click();
    expect(element(by.css('#excuses')).isPresent()).toBe(true);
    expect(element(by.css('#scenarios')).isPresent()).toBe(false);
  });
});
