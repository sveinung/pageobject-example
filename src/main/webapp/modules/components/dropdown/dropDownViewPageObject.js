define(function(require) {

    var _ = require('underscore');

    var DropDownViewPageObject = function($dropDownView) {
        this.$view = $dropDownView;
    };

    _.extend(DropDownViewPageObject.prototype, {
        openMenu: function() {
            this.$view.find(".dropdown-trigger").click();
            return this;
        },

        chooseOption: function(option) {
            this.$view.find(".dropdown-menu a[data-value='" + option + "']").click();
            return this;
        },

        expectToHaveChosen: function(option) {
            expect(this.$view.find(".dropdown-trigger .chosen-value")).toHaveText(option);
            return this;
        },

        expectToBeHidden: function() {
            expect(this.$view.find(".dropdown-menu")).toHaveClass("hide");
            return this;
        },

        expectToBeVisible: function() {
            expect(this.$view.find(".dropdown-menu")).not.toHaveClass("hide");
            return this;
        }
    });

    return DropDownViewPageObject;
});
