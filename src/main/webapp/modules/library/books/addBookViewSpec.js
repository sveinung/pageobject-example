define(function(require) {
    var sinon = require('sinon');

    var AddBookView = require('modules/library/books/addBookView');
    var Genres = require('modules/library/books/genres');

    var AddBookViewPageObject = require('modules/library/books/addBookViewPageObject');

    describe('AddBookView', function() {
        it('hides the view when cancelling', function() {
            var genres = new Genres([
                {"name":"Crime novel"},
                {"name":"Picaresco"}
            ]);

            var view = new AddBookView({
                genres: genres
            });
            view.render();

            expect(view.$el).not.toHaveClass('hide');

            view.$(".cancel-button").click();

            expect(view.$el).toHaveClass('hide');
        });

        it('saves the book', function() {
            var genres = new Genres([
                {"name":"Crime novel"},
                {"name":"Picaresco"}
            ]);

            var view = new AddBookView({
                genres: genres
            });
            view.render();

            var pageObject = new AddBookViewPageObject(view.$el);

            var callback = sinon.spy();
            view.book.on('sync', callback);

            pageObject.
                author("Miguel de Cervantes Saavedra").
                title("Don Quixote").
                genre("Picaresco").
                save().

                expectToHaveSaved(callback, {
                    author: "Miguel de Cervantes Saavedra",
                    title: "Don Quixote",
                    genre: "Picaresco"
                });
        });
    });
});
