describe('service: apiService', function(){
  var srv, scope, httpBackend;

  beforeEach(module('alibot'));

  beforeEach(inject(function(_$httpBackend_, $rootScope, apiService){
    httpBackend = _$httpBackend_;
    var excuse1 = { title: 'Can\'t go'};
    httpBackend.expectGET('http://localhost:3000/scenarios').
      respond(excuse1);
    scope = $rootScope;
    srv = apiService;
    }));


  it('should get an array of two excuses', function(){
  srv.getExcuses().then(function(response){
      expect(response.data.title).toEqual("Can't go");
    });
    httpBackend.flush();
  });
});
