describe('scenarioController', function(){
  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('scenarioController');
  }));

  it('loads and displays the buttons', function(){
    expect(ctrl.buttons).toContain("Can't go");
  });
});
