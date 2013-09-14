define(function(require) {

    var _ = require('underscore');

    var merge = function(args) {
        var argsArray = [{}].concat(_.toArray(args));
        return _.extend.apply(null, argsArray);
    };

    var PageObject = function(options) {
        this.$el = options.$el;
        _.extend(this, options.attrs || {});
    };

    PageObject.mixin = function(attrs) {
        _.extend(PageObject.prototype, attrs || {});
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

    return {
        create: function() {
            var attrs = merge(arguments);
            return function ($el) {
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

});
