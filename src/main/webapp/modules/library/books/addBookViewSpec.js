define(function(require) {
    var sinon = require('sinon');

    var AddBookView = require('modules/library/books/addBookView');
    var Genres = require('modules/library/books/genres');
    var Book = require('modules/library/books/book');

    var AddBookViewPageObject = require('modules/library/books/addBookViewPageObject');

    describe('AddBookView', function() {
        it('hides the view when cancelling', function() {
            var genres = new Genres([
                {"name":"Crime novel"},
                {"name":"Picaresco"}
            ]);

            var book = new Book();

            var view = new AddBookView({
                genres: genres,
                book: book
            });
            view.render();

            var addBookViewPageObject = new AddBookViewPageObject(view);

            addBookViewPageObject.
                expectToBeVisible().
                cancel().
                expectToBeHidden();
        });

        it('saves the book', function() {
            var genres = new Genres([
                {"name":"Crime novel"},
                {"name":"Picaresco"}
            ]);

            var book = new Book();

            var view = new AddBookView({
                genres: genres,
                book: book
            });
            view.render();

            var addBookViewPageObject = new AddBookViewPageObject(view);

            addBookViewPageObject.
                author("Miguel de Cervantes Saavedra").
                title("Don Quixote").
                genre("Picaresco").
                save().
                expectToHaveSaved({
                    author: "Miguel de Cervantes Saavedra",
                    title: "Don Quixote",
                    genre: "Picaresco"
                });
        });
    });
});
