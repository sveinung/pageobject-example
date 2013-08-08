define(function(require) {
    var sinon = require('sinon'),

        responseFaker = require('responseFaker'),

        AddBookView = require('modules/library/books/addBookView'),
        Genres = require('modules/library/books/genres');

    describe('AddBookView', function() {
        it('hides the view when cancelling', function() {
            var genresResponse = [{"name":"Crime novel"},{"name":"Picaresco"}];
            var genres = new Genres();
            responseFaker.fakeResponse(genresResponse, {}, function() {
                genres.fetch();
            });

            var view = new AddBookView({
                genres: genres
            });
            view.render();

            expect(view.$el).not.toHaveClass('hide');

            view.$(".cancel-button").click();

            expect(view.$el).toHaveClass('hide');
        });

        it('saves the book', function() {
            var genresResponse = [{"name":"Crime novel"},{"name":"Picaresco"}];
            var genres = new Genres();
            responseFaker.fakeResponse(genresResponse, {}, function() {
                genres.fetch();
            });

            var view = new AddBookView({
                genres: genres
            });
            view.render();

            var callback = sinon.spy();
            view.book.on('sync', callback);

            view.$(".author-input")
                .val("Miguel de Cervantes Saavedra")
                .change();

            view.$(".title-input")
                .val("Don Quixote")
                .change();

            var dropdown = view.$(".genres-dropdown");
            dropdown.find(".dropdown-trigger").click();
            dropdown.find("a[data-value='Picaresco']").click();

            responseFaker.fakeResponse(view.book.toJSON(), {}, function() {
                view.$(".submit-button").click();
            });

            expect(callback).toHaveBeenCalledWith(sinon.match({
                attributes: {
                    author: "Miguel de Cervantes Saavedra",
                    title: "Don Quixote",
                    genre: "Picaresco"
                }
            }));
        });
    });
});
