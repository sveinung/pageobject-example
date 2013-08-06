define(function(require) {

    require('css!./addBookView.css');
    var template = require('text!./addBookView.mustache'),
        BaseView = require('base/view'),
        DropDownView = require('modules/components/dropdown/dropDownView'),

        Book = require('./book');

    var AddBookView = BaseView.extend({
        events: {
            'change .title-input': 'titleChanged',
            'change .author-input': 'authorChanged',
            'click .cancel-button': 'cancelButtonClicked',
            'click .submit-button': 'submitButtonClicked'
        },

        initialize: function(options) {
            this.genres = options.genres;
            this.book = new Book();
            this.genresDropDown = new DropDownView({
                defaultOption: "Choose a genre"
            });
        },

        render: function() {
            this.renderTemplate(template);

            this.genresDropDown.setElement(this.$(".genres-dropdown"));
            this.genresDropDown.renderWith({
                options: this.genres.toOptions()
            });

            return this;
        },

        titleChanged: function(event) {
            var title = this.$(event.currentTarget).val();
            this.book.set('title', title);
        },

        authorChanged: function(event) {
            var author = this.$(event.currentTarget).val();
            this.book.set('author', author);
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

        show: function() {
            this.$el.removeClass('hide');
        },

        hide: function() {
            this.$el.addClass('hide');
        }
    });

    return AddBookView;
});
