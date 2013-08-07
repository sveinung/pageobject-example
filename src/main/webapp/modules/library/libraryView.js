define(function(require) {

    var _ = require('underscore'),
        BaseView = require('base/view'),

        template = require('text!./libraryView.mustache'),

        AddBookView = require('./books/addBookView'),
        Genres = require('./books/genres');

    var LibraryView = BaseView.extend({
        events: {
            'click .add-book': 'addBookClicked'
        },

        initialize: function(options) {
            this.library = options.library;

            this.genres = new Genres();
            this.addBookView = new AddBookView({
                genres: this.genres
            });
            this.listenTo(this.addBookView, "book:added", this.bookAdded);
            this.listenTo(this.library, "add", this.render);
        },

        render: function() {
            this.renderTemplate(template, {
                books: this.library.toJSON()
            });
            return this;
        },

        addBookClicked: function(event) {
            event.preventDefault();

            this.addBookView.setElement(this.$('.add-book-view'));

            this.genres.fetch().done(_.bind(this.genresReceived, this));
        },

        genresReceived: function() {
            this.addBookView.render();
            this.addBookView.show();
        },

        bookAdded: function(book) {
            this.library.add(book);
        }
    });

    return LibraryView;
});
