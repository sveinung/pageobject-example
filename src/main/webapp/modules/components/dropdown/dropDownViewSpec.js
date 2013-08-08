define(function(require) {

    var DropDownView = require('modules/components/dropdown/dropDownView');

    describe('DropDownView', function() {
        it('opens the dropdown', function() {
            var view = new DropDownView({
                defaultOption: "Choose!",
                options: [{
                    value: "Picaresco"
                }, {
                    value: "Satire"
                }]
            });
            view.render();

            expect(view.$(".dropdown-menu")).toHaveClass("hide");

            view.$(".dropdown-trigger").click();

            expect(view.$(".dropdown-menu")).not.toHaveClass("hide");
        });

        it('chooses an option', function() {
            var view = new DropDownView({
                defaultOption: "Choose!",
                options: [{
                    value: "Picaresco"
                }, {
                    value: "Satire"
                }]
            });
            view.render();

            expect(view.$(".dropdown-trigger .chosen-value")).toHaveText("Choose!");

            view.$(".dropdown-trigger").click();
            view.$(".dropdown-menu a[data-value='Satire']").click();

            expect(view.$(".dropdown-trigger .chosen-value")).toHaveText("Satire");
        });
    });
});
