describe('Scenarios page', function(){

  beforeEach(function(){
    browser.get('http://localhost:3000');
  });

  it("displays a welcome message", function(){
    expect(element(by.css('#main h1')).getText()).toContain("Hi, I'm Alibot");
    expect(element(by.css('#main h2')).getText()).toContain("What is the problem?");
  });

  // it("has a scenarion button", function(){
  //   expect(element(by.id('application')).getText()).toContain('Running Late');
  // });
  //
  // it("can select the scenario 'Running late'", function(){
  //   element(by.id('runningLate')).click();
  //   expect(element(by.id('application')).getText()).toContain('Running Late Excuse:');
  // });
  //
  // it("can return to the scenario page", function(){
  //   element(by.id('runningLate')).click();
  //   element(by.id('return')).click();
  //   expect(element(by.id('application')).getText()).not.toContain('Running late Excuse:');
  // });
  //
  // it("can select the scenario 'Can\'t Go'", function(){
  //   element(by.id('cantGo')).click();
  //   expect(element(by.id('application')).getText()).toContain('Can\'t Go');
  // });

});
