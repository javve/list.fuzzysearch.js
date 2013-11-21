function fireKeyup(el) {
    if (document.createEvent) {
        var evObj;
        if (window.KeyEvent) {
            evObj = document.createEvent('KeyEvents');
            evObj.initKeyEvent('keyup', true, true, window, false, false, false, false, 13, 0);
        } else {
            evObj = document.createEvent('UIEvents');
            evObj.initUIEvent('keyup', true, true, window, 1);
        }
        el.dispatchEvent(evObj);
    } else if( document.createEventObject ) {
        el.fireEvent('onkeyup');
    } else {
        // IE 5.0, seriously? :)
    }
}


describe('Default settings', function() {
    var list,
        itemHTML,
        pagination;

    beforeEach(function() {
        itemHTML = fixture.list(['name', 'born'])
        list = new List('list', {
            valueNames: ['name', 'born'],
            item: itemHTML,
            plugins: [
                ListFuzzySearch()
            ]
        }, fixture.all);
    });

    afterEach(function() {
        fixture.removeList();
    });

    it('should have default attribute', function() {
        expect(list.fuzzySearch).to.be.a('object');
        expect(list.fuzzySearch.search).to.be.a('function');
    });

    it('should find result', function() {
        list.fuzzySearch.search('guybrush');
        expect(list.matchingItems.length).to.be(1);
    });

    it('should find result', function() {
        list.fuzzySearch.search('g thre');
        expect(list.matchingItems.length).to.be(1);
    });

    it('should find result', function() {
        list.fuzzySearch.search('thre');
        expect(list.matchingItems.length).to.be(4);
    });

    describe('Search field', function() {

        it('should trigger searchStart', function(done) {
            list.on('searchStart', function() {
                done();
            });
            $('#list .fuzzy-search').val('angelica');
            fireKeyup($('#list .fuzzy-search')[0]);
        });

        it('should trigger searchComplete', function(done) {
            list.on('searchComplete', function() {
                done();
            });
            $('#list .fuzzy-search').val('angelica');
            fireKeyup($('#list .fuzzy-search')[0]);
        });

    });
});
