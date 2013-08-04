define(function(require) {
    var sinon = require('sinon'),

        responseFaker = require('responseFaker'),

        AddBookView = require('modules/library/books/addBookView');

    describe('AddBookView', function() {
        it('hides the view when cancelling', function() {
            var view = new AddBookView();
            view.render();

            expect(view.$el).not.toHaveClass('hide');

            view.$(".cancel-button").click();

            expect(view.$el).toHaveClass('hide');
        });

        it('saves the book', function() {
            var view = new AddBookView();
            view.render();

            var callback = sinon.spy();
            view.book.on('sync', callback);

            view.$(".author-input")
                .val("Miguel de Cervantes Saavedra")
                .change();

            responseFaker.fakeResponse(view.book.toJSON(), {}, function() {
                view.$(".submit-button").click();
            });

            expect(callback).toHaveBeenCalledWith(sinon.match({
                attributes: {
                    author: "Miguel de Cervantes Saavedra",
                }
            }));
        });
    });
});
