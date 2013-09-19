describe('Default settings, innerWindow: 2, outerWindow: 0, left: 0, right: 0', function() {
    var list,
        itemHTML,
        pagination;

    before(function() {
        itemHTML = fixture.list(['name'])
        list = new List('list', {
            valueNames: ['name'],
            item: itemHTML,
            page: 2,
            plugins: [
                ListPagination({})
            ]
        }, fixture.all);

        pagination = $('.pagination');
    });

    after(function() {
        fixture.removeList();
    });

    it('should have default settings', function() {
        expect(pagination.find('a').size()).to.equal(4);
        expect(pagination.find('a').get(0).innerHTML).to.equal("1");
        expect(pagination.find('a').get(1).innerHTML).to.equal("2");
        expect(pagination.find('a').get(2).innerHTML).to.equal("3");
        expect(pagination.find('a').get(3).innerHTML).to.equal("...");
        expect(pagination.find('a').get(4)).to.equal(undefined);
    });

    it('should show same pages for show(7,2) and show(8,2)', function() {
        list.show(7, 2);
        expect(pagination.find('a').size()).to.equal(7);
        expect(pagination.find('a').get(0).innerHTML).to.equal("...");
        expect(pagination.find('a').get(1).innerHTML).to.equal("2");
        expect(pagination.find('a').get(2).innerHTML).to.equal("3");
        expect(pagination.find('a').get(3).innerHTML).to.equal("4");
        expect(pagination.find('a').get(4).innerHTML).to.equal("5");
        expect(pagination.find('a').get(5).innerHTML).to.equal("6");
        expect(pagination.find('a').get(6).innerHTML).to.equal("...");
        expect(pagination.find('a').get(7)).to.equal(undefined);
        expect($(pagination.find('li').get(2)).hasClass('active')).to.equal(false);
        expect($(pagination.find('li').get(3)).hasClass('active')).to.equal(true);
        expect($(pagination.find('li').get(4)).hasClass('active')).to.equal(false);
    });

    it('should show same pages for show(7,2) and show(8,2)', function() {
        list.show(8, 2);
        expect(pagination.find('a').size()).to.equal(7);
        expect(pagination.find('a').get(0).innerHTML).to.equal("...");
        expect(pagination.find('a').get(1).innerHTML).to.equal("2");
        expect(pagination.find('a').get(2).innerHTML).to.equal("3");
        expect(pagination.find('a').get(3).innerHTML).to.equal("4");
        expect(pagination.find('a').get(4).innerHTML).to.equal("5");
        expect(pagination.find('a').get(5).innerHTML).to.equal("6");
        expect(pagination.find('a').get(6).innerHTML).to.equal("...");
        expect(pagination.find('a').get(7)).to.equal(undefined);
        expect($(pagination.find('li').get(2)).hasClass('active')).to.equal(false);
        expect($(pagination.find('li').get(3)).hasClass('active')).to.equal(true);
        expect($(pagination.find('li').get(4)).hasClass('active')).to.equal(false);
    });

    it('should test show(14,2)', function() {
        list.show(14, 2);
        expect(pagination.find('a').size()).to.equal(6);
        expect(pagination.find('a').get(0).innerHTML).to.equal("...");
        expect(pagination.find('a').get(1).innerHTML).to.equal("5");
        expect(pagination.find('a').get(2).innerHTML).to.equal("6");
        expect(pagination.find('a').get(3).innerHTML).to.equal("7");
        expect(pagination.find('a').get(4).innerHTML).to.equal("8");
        expect(pagination.find('a').get(5).innerHTML).to.equal("9");
        expect(pagination.find('a').get(6)).to.equal(undefined);
        expect($(pagination.find('li').get(2)).hasClass('active')).to.equal(false);
        expect($(pagination.find('li').get(3)).hasClass('active')).to.equal(true);
        expect($(pagination.find('li').get(4)).hasClass('active')).to.equal(false);
    });

    it('should show last page with show(17,2)', function() {
        list.show(17, 2);
        expect(pagination.find('a').size()).to.equal(4);
        expect(pagination.find('a').get(0).innerHTML).to.equal("...");
        expect(pagination.find('a').get(1).innerHTML).to.equal("7");
        expect(pagination.find('a').get(2).innerHTML).to.equal("8");
        expect(pagination.find('a').get(3).innerHTML).to.equal("9");
        expect(pagination.find('a').get(4)).to.equal(undefined);
        expect($(pagination.find('li').get(1)).hasClass('active')).to.equal(false);
        expect($(pagination.find('li').get(2)).hasClass('active')).to.equal(false);
        expect($(pagination.find('li').get(3)).hasClass('active')).to.equal(true);
    });
});