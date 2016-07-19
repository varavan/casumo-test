describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual("Book store");
  });

  it('should have <main>', function () {
    expect(element(by.css('my-app main')).isPresent()).toEqual(true);
  });

  it('should have a main title', function () {
    expect(element(by.css('main .title')).getText()).toEqual('Book store');
  });

  it('should have <footer>', function () {
    expect(element(by.css('my-app footer')).getText()).toEqual("Ivan Ruiz <ivan.ruiz.delatorre@gmail.com>");
  });

});
