define(function(require) {

    var LibraryView = require('modules/library/libraryView');
    var Library = require('modules/library/library');

    var libraryViewPageObject = require('modules/library/libraryViewPageObject');

    describe('LibraryView', function() {
        it('displays books', function() {
            var books = [
                "Of Mice and Men",
                "Sult"
            ];

            var libraryView = createLibraryView({ books: books });
            libraryView.render();

            libraryViewPageObject(libraryView).
                expectToHaveNumberOfBooks(2);
        });

        it('can show view for adding books', function() {
            var libraryView = createLibraryView();
            libraryView.render();

            libraryViewPageObject(libraryView).
                clickAddBook(function(addBookViewPageObject) {
                    addBookViewPageObject.expectToBeVisible();
                });
        });

        it('defaults to showing an empty book list', function() {
            var libraryView = createLibraryView();
            libraryView.render();

            libraryViewPageObject(libraryView).
                expectToHaveNumberOfBooks(0);
        });

        it('adds a book to the list', function() {
            var libraryView = createLibraryView();
            libraryView.render();

            libraryViewPageObject(libraryView).
                clickAddBook(function(addBookViewPageObject) {
                    addBookViewPageObject.createBook();
                }).
                expectToHaveNumberOfBooks(1);
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
