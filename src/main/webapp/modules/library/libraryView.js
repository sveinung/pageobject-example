define(function(require) {

    var _ = require('underscore'),
        BaseView = require('base/view'),
        template = require('text!./libraryView.mustache'),
        AddBookView = require('./books/addBookView');

    var LibraryView = BaseView.extend({
        events: {
            'click .add-book': 'addBookClicked'
        },

        initialize: function(options) {
            this.library = options.library;

            this.addBookView = new AddBookView();
        },

        render: function() {
            this.renderTemplate(template, {
                books: this.library.toJSON()
            });
            return this;
        },

        addBookClicked: function(event) {
            event.preventDefault();

            this.$('.add-book-view').removeClass('hide');
            this.addBookView.setElement(this.$('.add-book-view'));

            this.addBookView.render();
        }
    });

    return LibraryView;
});
