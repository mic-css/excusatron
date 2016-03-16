describe('Alibot', function(){

  beforeEach(function(){
    browser.get('http://localhost:3000');
    
  });

  it('should have a title', function() {
   expect(browser.getTitle()).toEqual('Alibot');
 });

  it("Displays a heading", function(){
    element(by.id('application')).getText('Alibot');

    // expect(element(by.id('alibot')).getTitle()).toEqual('Alibot');
  });

  // it('Displays a list of scenarios', function(){
  //   expect(element(by.model('alibotCtrl.scenarios'))).toEqual('Feeling Flakey');
  // });
});
