define(function(require) {

    var po = require('po');

    var sinon = require('sinon');

    var addBookViewPageObject = require('modules/library/books/addBookViewPageObject');

    return po.create({
        addBookView: function() {
            return addBookViewPageObject(this.$el.find('.add-book-view'));
        },
        clickAddBook: function(done) {
            var server = sinon.fakeServer.create();

            var genresResponse = [
                { name: "Crime novel" },
                { name: "Picaresco" }
            ];

            this.$el.find(".add-book").click();

            server.respondWith([200, { "Content-Type": "application/json" }, JSON.stringify(genresResponse)]);
            server.respond();
            server.restore();

            done(this.addBookView());

            return this;
        },
        openAddBook: function(done) {
            this.$el.find(".add-book").click();

            done(this.addBookView());

            return this;
        },
        expectToHaveNumberOfBooks: function(expectedNumberOfBooks) {
            expect(this.$el.find(".books li").size()).toBe(expectedNumberOfBooks);
            return this;
        }
    });
});
