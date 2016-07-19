describe('Home', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('should have <my-home>', function () {
    var filtersComponent = element(by.css('filters-component'));
    var bookComponent = element(by.css('books-component'));
    var paginationComponent = element(by.css('pagination-component'));
    expect(filtersComponent.isPresent()).toEqual(true);
    expect(bookComponent.isPresent()).toEqual(true);
    expect(paginationComponent.isPresent()).toEqual(true);
  });

});
