define(function(require) {
    var AddBookView = require('modules/library/books/addBookView');

    describe('AddBookView', function() {
        it('hides the view when cancelling', function() {
            var view = new AddBookView();
            view.render();

            expect(view.$el).not.toHaveClass('hide');

            view.$(".cancel-button").click();

            expect(view.$el).toHaveClass('hide');
        });
    });
});
