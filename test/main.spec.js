describe('App object', function () {
  it('should be available on window', function () {
    window.app.should.be.type('object');
  });
  it('should have the `launch` method', function () {
    window.app.launch.should.be.type('function');
  });
});
