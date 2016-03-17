describe('scenariosController', function(){
  var ctrl;

  beforeEach(module('alibot'));

  beforeEach(inject(function($controller){
    ctrl = $controller('scenariosController');
  }));

  it('loads and displays the buttons', function(){
    console.log(ctrl.buttons);
    expect(ctrl.buttons).toContain("Can't go");
  });
});
