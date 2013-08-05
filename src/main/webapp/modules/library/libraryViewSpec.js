define(function(require) {

    var $ = require('jquery'),
        responseFaker = require('responseFaker'),

        LibraryView = require('modules/library/libraryView')
        Library = require('modules/library/library');

    describe('LibraryView', function() {
        it('has books', function() {
            var library = new Library();

            var response = {"books":[{"title":"Of Mice and Men","uri":"/book/1"},{"title":"Sult","uri":"/book/2"}]};
            responseFaker.fakeResponse(response, {}, function() {
                library.fetch();
            });

            var libraryView = new LibraryView({
                library: library
            });

            libraryView.render();

            expect(libraryView.$(".books li").size()).toBe(2);
        });

        it('shows the AddBookView', function() {
            var library = new Library();

            var response = {"books":[{"title":"Of Mice and Men","uri":"/book/1"},{"title":"Sult","uri":"/book/2"}]};
            responseFaker.fakeResponse(response, {}, function() {
                library.fetch();
            });

            var libraryView = new LibraryView({
                library: library
            });

            libraryView.render();

            var genresResponse = [{"name":"Crime novel"},{"name":"Picaresco"}];
            responseFaker.fakeResponse(genresResponse, {}, function() {
                libraryView.$(".add-book").click();
            });

            expect(libraryView.$(".add-book-view")).toBe("form");
            expect(libraryView.$(".add-book-view")).not.toHaveClass("hide");
        });
    });
});
