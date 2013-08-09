define(function(require) {

    var DropDownView = require('modules/components/dropdown/dropDownView');
    var DropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

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
            var pageObject = new DropDownViewPageObject(view);

            pageObject.
                expectToBeHidden().
                openMenu().
                expectToBeVisible();
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
