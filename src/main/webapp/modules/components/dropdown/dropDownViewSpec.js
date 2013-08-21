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
            var dropDownViewPageObject = new DropDownViewPageObject(view.$el);

            dropDownViewPageObject.
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
            var dropDownViewPageObject = new DropDownViewPageObject(view.$el);

            dropDownViewPageObject.
                expectToHaveChosen("Choose!").
                openMenu().
                chooseOption("Satire").
                expectToHaveChosen("Satire");
        });
    });
});
