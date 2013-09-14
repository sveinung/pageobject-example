define(function(require) {

    var po = require('po');
    var poVisibility = require('modules/components/po-visibility');

    return po.create({
        openMenu: po.button(".dropdown-trigger"),

        chooseOption: function(option) {
            this.$el.find(".dropdown-menu a[data-value='" + option + "']").click();
            return this;
        },

        expectToHaveChosen: function(option) {
            expect(this.$el.find(".dropdown-trigger .chosen-value")).toHaveText(option);
            return this;
        },

        expectToBeHidden: function() {
            expect(this.$el.find(".dropdown-menu")).toHaveClass("hide");
            return this;
        },

        expectToBeVisible: function() {
            expect(this.$el.find(".dropdown-menu")).not.toHaveClass("hide");
            return this;
        }
    });
})
