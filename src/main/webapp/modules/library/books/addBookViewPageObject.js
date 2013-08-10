define(function(require) {

    var _ = require('underscore');

    var DropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

    var AddBookViewPageObject = function($addBookView) {
        this.$view = $addBookView;
        this.genreDropDown = new DropDownViewPageObject(this.$view.find(".genres-dropdown"));
    };

    _.extend(AddBookViewPageObject.prototype, {
        author: function(author) {
            this.$view.find(".author-input").
                val(author).
                change();
            return this;
        },
        title: function(title) {
            this.$view.find(".title-input").
                val(title).
                change();
            return this;
        },
        genre: function(genre) {
            this.genreDropDown.
                openMenu().
                chooseOption(genre);
            return this;
        }
    });

    return AddBookViewPageObject;
});
