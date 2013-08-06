define(function(require) {

    var BaseView = require('base/view'),

        template = require('text!./dropDownView.mustache');

    require('css!./dropDownView.css');

    var DropDownView = BaseView.extend({
        initialize: function(options) {
            this.defaultOption = options.defaultOption;
        },

        render: function() {
            this.$el.addClass('dropdown');

            this.renderTemplate(template, {
                defaultOption: this.defaultOption
            });

            return this;
        }
    });

    return DropDownView;
});
