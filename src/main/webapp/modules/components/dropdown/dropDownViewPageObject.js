define(function(require) {

    var _ = require('underscore');

    var DropDownViewPageObject = function(dropDownView) {
        this.view = dropDownView;
    };

    _.extend(DropDownViewPageObject.prototype, {
        openMenu: function() {
            this.view.$(".dropdown-trigger").click();
            return this;
        },

        expectToBeHidden: function() {
            expect(this.view.$(".dropdown-menu")).toHaveClass("hide");
            return this;
        },

        expectToBeVisible: function() {
            expect(this.view.$(".dropdown-menu")).not.toHaveClass("hide");
            return this;
        }
    });

    return DropDownViewPageObject;
});
