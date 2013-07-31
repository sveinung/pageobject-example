define(function(require) {

    require('css!./addBookView.css');
    var template = require('text!./addBookView.mustache'),
        renderTemplate = require('base/renderTemplate'),
        Backbone = require('backbone');

    var AddBookView = Backbone.View.extend({
        events: {
            'click .cancel-button': 'cancelButtonClicked',
            'click .submit-button': 'submitButtonClicked'
        },
        render: function() {
            this.$el.html(renderTemplate(template));

            return this;
        },
        cancelButtonClicked: function(event) {
            event.preventDefault();
            this.$el.addClass('hide');
        },
        submitButtonClicked: function(event) {
            event.preventDefault();
        }
    });

    return AddBookView;
});
