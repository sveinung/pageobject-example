define(function(require) {

    var sinon = require('sinon');

    var dropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    return function addBookViewPageObject($el) {
        return {
            author: function(author) {
                $el.find(".author-input").
                    val(author).
                    change();
                return this;
            },
            title: function(title) {
                $el.find(".title-input").
                    val(title).
                    change();
                return this;
            },
            genre: function(genre) {
                dropDownViewPageObject($el.find(".genres-dropdown")).
                    openMenu().
                    chooseOption(genre);
                return this;
            },
            save: function() {
                var server = sinon.fakeServer.create();

                $el.find(".submit-button").click();

                var requestBody = server.queue[0].requestBody;

                server.respond();
                server.restore();

                return {
                    expectToHaveSaved: function(attributes) {
                        expect(JSON.parse(requestBody)).toEqual(attributes);
                    }
                };
            },
            fillIn: function() {
                return this.author("George R.R. Martin").
                    title("A Game of Thrones").
                    genre("Epic fantasy");
            },
            cancel: function() {
                $el.find(".cancel-button").click();
                return this;
            },
            expectToBeVisible: function() {
                expect($el).not.toBeEmpty();
                expect($el).not.toHaveClass('hide');
                return this;
            },
            expectToBeHidden: function() {
                expect($el).toHaveClass('hide');
                return this;
            }
        };
    };
});
