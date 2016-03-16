describe('Alibot', function(){

  beforeEach(function(){
    browser.get('http://localhost:3000');

  });


  it("Displays a heading", function(){
    expect(element(by.id('application')).getText('Alibot')).toContain('Alibot');

    // expect(element(by.id('alibot')).getTitle()).toEqual('Alibot');
  });

  // it('Displays a list of scenarios', function(){
  //   expect(element(by.model('alibotCtrl.scenarios'))).toEqual('Feeling Flakey');
  // });
});
