define(function(require) {

    var _ = require('underscore');
    var sinon = require('sinon');

    var DropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    var AddBookViewPageObject = function($addBookView) {
        this.$view = $addBookView;
        this.genreDropDown = new DropDownViewPageObject(this.$view.find(".genres-dropdown"));
    };

    _.extend(AddBookViewPageObject.prototype, {
        author: function(author) {
            this.$view.find(".author-input").
                val(author).
                change();
            return this;
        },
        title: function(title) {
            this.$view.find(".title-input").
                val(title).
                change();
            return this;
        },
        genre: function(genre) {
            this.genreDropDown.
                openMenu().
                chooseOption(genre);
            return this;
        },
        save: function() {
            var server = sinon.fakeServer.create();

            this.$view.find(".submit-button").click();

            // Responding with what was sent in
            var response = server.queue[0].requestBody;
            server.respondWith([200, { "Content-Type": "application/json" }, response]);
            server.respond();
            server.restore();

            return this;
        },
        expectToHaveSaved: function(saveCallback, book) {
            expect(saveCallback).toHaveBeenCalledWith(sinon.match({
                attributes: book
            }));
        }
    });

    return AddBookViewPageObject;
});
