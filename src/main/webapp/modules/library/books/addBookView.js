define(function(require) {

    require('css!./addBookView.css');
    var template = require('text!./addBookView.mustache'),
        BaseView = require('base/view'),

        Book = require('./book');

    var AddBookView = BaseView.extend({
        events: {
            'click .cancel-button': 'cancelButtonClicked',
            'click .submit-button': 'submitButtonClicked'
        },

        initialize: function(options) {
            this.book = new Book();
        },

        render: function() {
            this.renderTemplate(template);

            return this;
        },

        cancelButtonClicked: function(event) {
            event.preventDefault();
            this.hide();
        },

        submitButtonClicked: function(event) {
            event.preventDefault();
            this.book.save();
            this.hide();
        },

        hide: function() {
            this.$el.addClass('hide');
        }
    });

    return AddBookView;
});
