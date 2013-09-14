define(function(require) {

    var sinon = require('sinon');

    var addBookViewPageObject = require('modules/library/books/addBookViewPageObject');

    return function libraryViewPageObject(libraryView) {
        return {
            clickAddBook: function(done) {
                var server = sinon.fakeServer.create();

                var genresResponse = [
                    { name: "Crime novel" },
                    { name: "Picaresco" }
                ];

                libraryView.$(".add-book").click();

                server.respondWith([200, { "Content-Type": "application/json" }, JSON.stringify(genresResponse)]);
                server.respond();
                server.restore();

                done(addBookViewPageObject(libraryView.addBookView));

                return this;
            },
            expectToHaveNumberOfBooks: function(expectedNumberOfBooks) {
                expect(libraryView.$(".books li").size()).toBe(expectedNumberOfBooks);
                return this;
            }
        };
    };
});
