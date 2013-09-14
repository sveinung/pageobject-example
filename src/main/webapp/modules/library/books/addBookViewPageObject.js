define(function(require) {

    var _ = require('underscore');
    var sinon = require('sinon');

    var dropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    var PageObject = function(options) {
        this.$el = options.$el;
        _.extend(this, options.attrs || {});
    };

    _.extend(PageObject.prototype, {
        expectToBeVisible: function() {
            expect(this.$el).not.toBeEmpty();
            expect(this.$el).not.toHaveClass('hide');
            return this;
        },
        expectToBeHidden: function() {
            expect(this.$el).toHaveClass('hide');
            return this;
        }
    });

    var po = {
        create: function(attrs) {
            return function($el) {
                return new PageObject({
                    $el: $el,
                    attrs: attrs
                });
            }
        },
        input: function(selector) {
            return function(val) {
                this.$el.find(selector).val(val).change();
                return this;
            }
        },
        button: function(selector) {
            return function() {
                this.$el.find(selector).click();
                return this;
            }
        }
    };

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
