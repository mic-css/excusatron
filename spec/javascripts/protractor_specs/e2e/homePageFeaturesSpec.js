describe('Alibot', function(){
  it('Displays a list of scenarios', function(){
    browser.get('http://localhost:8080');
    expect(element(by.model('alibotCtrl.scenarios')).toEqual('Feeling Flakey'));
  });
});
