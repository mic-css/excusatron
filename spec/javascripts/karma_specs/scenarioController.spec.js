describe('scenariosController', function(){
  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('scenariosController');
  }));

  it('loads and displays the buttons', function(){
    expect(ctrl.buttons).toContain("Can't go");
  });
});
