define(function(require) {

    var BaseView = require('base/view'),

        template = require('text!./dropDownView.mustache');

    require('css!./dropDownView.css');

    var DropDownView = BaseView.extend({
        events: {
            "click .dropdown-trigger": "triggerClicked",
        },

        initialize: function(options) {
            this.defaultOption = options.defaultOption;
        },

        renderWith: function(options) {
            this.options = options.options;
            return this.render();
        },

        render: function() {
            this.$el.addClass('dropdown');

            this.renderTemplate(template, {
                defaultOption: this.defaultOption,
                options: this.options
            });

            return this;
        },

        triggerClicked: function(event) {
            event.preventDefault();
            this.$(".dropdown-menu").toggleClass("hide");
        }
    });

    return DropDownView;
});
