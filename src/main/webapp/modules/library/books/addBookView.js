define(function(require) {

    require('css!./addBookView.css');
    var template = require('text!./addBookView.mustache'),
        BaseView = require('base/view');

    var AddBookView = BaseView.extend({
        events: {
            'click .cancel-button': 'cancelButtonClicked',
            'click .submit-button': 'submitButtonClicked'
        },
        render: function() {
            this.renderTemplate(template);

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
