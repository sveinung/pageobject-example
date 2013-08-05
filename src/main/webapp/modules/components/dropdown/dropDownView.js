define(function(require) {

    var BaseView = require('base/view'),

        template = require('text!./dropDownView.mustache');

    var DropDownView = BaseView.extend({
        initialize: function(options) {
            this.defaultOption = options.defaultOption;
        },

        render: function() {
            this.renderTemplate(template, {
                defaultOption: this.defaultOption
            });
            return this;
        }
    });

    return DropDownView;
});
