define(function(require) {

    var _ = require('underscore'),
        BaseView = require('base/view'),
        template = require('text!./libraryView.mustache'),
        AddBookView = require('./books/addBookView'),
        rivets = require('rivets');

    /*
    var LibraryView = function(options) {
        var el = options.el;
        var libraryRepository = options.libraryRepository;

        var getLibrary = function() {
            libraryRepository.getLibrary(options.libraryId).done(libraryReceived);
        };

        var libraryReceived = function(response) {
            rivets.bind(el.find('.books'), { books: response.books });
        };

        var addBookClicked = function(event) {
            event.preventDefault();

            el.find('.book-input-form').removeClass('hide');
            var addBookView = new AddBookView({
                el: el.find('.book-input-form')
            });
            addBookView.render();
        };

        var render = function() {
            el.html(renderTemplate(template));

            el.find('.add-book').click(addBookClicked);

            getLibrary();
        };

        return {
            render: render
        }
    };
   */

    var LibraryView = BaseView.extend({
        events: {
            'click .add-book': 'addBookClicked'
        },

        initialize: function(options) {
            this.library = options.library;
        },

        render: function() {
            this.renderTemplate(template, {
                books: this.library.toJSON()
            });
            return this;
        },

        addBookClicked: function(event) {
            event.preventDefault();

            this.$('.book-input-form').removeClass('hide');
            var addBookView = new AddBookView({
                el: this.$('.book-input-form')
            });
            addBookView.render();
        }
    });

    return LibraryView;
});
