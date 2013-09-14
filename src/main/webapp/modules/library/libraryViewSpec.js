define(function(require) {

    var $ = require('jquery');

    var LibraryView = require('modules/library/libraryView');
    var Library = require('modules/library/library');

    var libraryViewPageObject = require('modules/library/libraryViewPageObject');

    describe('LibraryView', function() {
        it('has books', function() {
            var library = new Library([
                { title: "Of Mice and Men", uri: "/book/1" },
                { title: "Sult", uri: "/book/2" }
            ]);

            var libraryView = new LibraryView({
                library: library
            });
            libraryView.render();

            libraryViewPageObject(libraryView).
                expectToHaveNumberOfBooks(2);
        });

        it('shows the AddBookView', function() {
            var library = new Library([
                { title: "Of Mice and Men", uri: "/book/1" },
                { title: "Sult", uri: "/book/2" }
            ]);
            var libraryView = new LibraryView({
                library: library
            });
            libraryView.render();

            libraryViewPageObject(libraryView).
                clickAddBook(function(addBookViewPageObject) {
                    addBookViewPageObject.expectToBeVisible();
                });
        });
    });
});
