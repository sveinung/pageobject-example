define(function(require) {

    var _ = require('underscore');
    var responseFaker = require('responseFaker');

    var AddBookViewPageObject = require('modules/library/books/addBookViewPageObject');

    var LibraryViewPageObject = function(libraryView) {
        this.view = libraryView;
    };

    _.extend(LibraryViewPageObject.prototype, {
        clickAddBook: function() {
            var self = this;
            var genresResponse = [{"name":"Crime novel"},{"name":"Picaresco"}];
            responseFaker.fakeResponse(genresResponse, {}, function() {
                self.view.$(".add-book").click();
            });

            return new AddBookViewPageObject(this.view.addBookView);
        }
    });

    return LibraryViewPageObject;
});
