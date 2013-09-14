define(function(require) {

    var $ = require('jquery');

    var LibraryView = require('modules/library/libraryView');
    var Library = require('modules/library/library');

    var libraryViewPageObject = require('modules/library/libraryViewPageObject');

    describe('LibraryView', function() {
        it('has books', function() {
            var books = [
                "Of Mice and Men",
                "Sult"
            ];

            var libraryView = createLibraryView({ books: books });
            libraryView.render();

            libraryViewPageObject(libraryView).
                expectToHaveNumberOfBooks(2);
        });

        it('shows the AddBookView', function() {
            var libraryView = createLibraryView();
            libraryView.render();

            libraryViewPageObject(libraryView).
                clickAddBook(function(addBookViewPageObject) {
                    addBookViewPageObject.expectToBeVisible();
                });
        });
    });

    function createLibraryView(options) {
        options = options || {};

        var books = [];
        if (options.books) {
            books = _.map(options.books, function(book, i) {
                return { title: book, url: '/books/' + i };
            });
        }

        return new LibraryView({
            library: new Library(books)
        });
    }
});
