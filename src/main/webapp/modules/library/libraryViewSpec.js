define(function(require) {

    var $ = require('jquery'),

        LibraryView = require('modules/library/libraryView')
        Library = require('modules/library/library'),

        LibraryViewPageObject = require('modules/library/libraryViewPageObject');

    describe('LibraryView', function() {
        it('has books', function() {
            var library = new Library([
                {"title":"Of Mice and Men","uri":"/book/1"},
                {"title":"Sult","uri":"/book/2"}
            ]);

            var libraryView = new LibraryView({
                library: library
            });

            libraryView.render();

            expect(libraryView.$(".books li").size()).toBe(2);
        });

        it('shows the AddBookView', function() {
            var library = new Library([
                {"title":"Of Mice and Men","uri":"/book/1"},
                {"title":"Sult","uri":"/book/2"}
            ]);
            var libraryView = new LibraryView({
                library: library
            });
            libraryView.render();

            var pageObject = new LibraryViewPageObject(libraryView);

            pageObject.
                clickAddBook();

            expect(libraryView.$(".add-book-view")).not.toHaveClass("hide");
        });
    });
});
