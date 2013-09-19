describe('Pagination', function() {
    var list,
        itemHTML;

    before(function() {
        itemHTML = fixture.list(['name']);
    });

    after(function() {
        fixture.removeList();
    });

    it('should have all default attributes', function() {
        list = new List('list', {
            valueNames: ['name'],
            item: itemHTML,
            page: 2,
            plugins: [
                ListPagination({})
            ]
        }, fixture.all);
    });
});