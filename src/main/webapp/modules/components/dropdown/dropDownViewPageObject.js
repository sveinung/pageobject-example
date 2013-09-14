define(function(require) {

    var dropDownViewPageObject = function($view) {
        return {
            openMenu: function() {
                $view.find(".dropdown-trigger").click();
                return this;
            },

            chooseOption: function(option) {
                $view.find(".dropdown-menu a[data-value='" + option + "']").click();
                return this;
            },

            expectToHaveChosen: function(option) {
                expect($view.find(".dropdown-trigger .chosen-value")).toHaveText(option);
                return this;
            },

            expectToBeHidden: function() {
                expect($view.find(".dropdown-menu")).toHaveClass("hide");
                return this;
            },

            expectToBeVisible: function() {
                expect($view.find(".dropdown-menu")).not.toHaveClass("hide");
                return this;
            }
        };
    };

    return dropDownViewPageObject;
});
