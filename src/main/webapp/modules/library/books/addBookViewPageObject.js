define(function(require) {

    var _ = require('underscore');
    var sinon = require('sinon');

    var dropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    return function addBookViewPageObject(addBookView) {
        return {
            author: function(author) {
                addBookView.$(".author-input").
                    val(author).
                    change();
                return this;
            },
            title: function(title) {
                addBookView.$(".title-input").
                    val(title).
                    change();
                return this;
            },
            genre: function(genre) {
                dropDownViewPageObject(addBookView.$(".genres-dropdown")).
                    openMenu().
                    chooseOption(genre);
                return this;
            },
            save: function() {
                var saveCallback = sinon.spy();
                addBookView.book.on('sync', saveCallback);

                var server = sinon.fakeServer.create();

                addBookView.$(".submit-button").click();

                // Responding with what was sent in
                var response = server.queue[0].requestBody;
                server.respondWith([200, { "Content-Type": "application/json" }, response]);
                server.respond();
                server.restore();

                return {
                    expectToHaveSaved: function(attributes) {
                        expect(saveCallback).toHaveBeenCalledWith(sinon.match({
                            attributes: attributes
                        }));
                    }
                };
            },
            cancel: function() {
                addBookView.$(".cancel-button").click();
                return this;
            },
            expectToBeVisible: function() {
                expect(addBookView.$el).not.toBeEmpty();
                expect(addBookView.$el).not.toHaveClass('hide');
                return this;
            },
            expectToBeHidden: function() {
                expect(addBookView.$el).toHaveClass('hide');
                return this;
            }
        };
    };
});
