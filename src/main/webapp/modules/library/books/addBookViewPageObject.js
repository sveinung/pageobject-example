define(function(require) {

    var po = require('modules/components/po');
    var sinon = require('sinon');

    var dropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    return po.create({
        author: po.input(".author-input"),
        title: po.input(".title-input"),
        cancel: po.button(".cancel-button"),
        submit: po.button(".submit-button"),
        genre: function(genre) {
            dropDownViewPageObject(this.$el.find(".genres-dropdown")).
                openMenu().
                chooseOption(genre);
            return this;
        },
        save: function() {
            var server = sinon.fakeServer.create();

            this.submit();

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
        }
    });
});
