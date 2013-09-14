define(function(require) {

    var DropDownView = require('modules/components/dropdown/dropDownView');
    var dropDownViewPageObject = require('modules/components/dropdown/dropDownViewPageObject');

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

            dropDownViewPageObject(view.$el).
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
            dropDownViewPageObject(view.$el).
                expectToHaveChosen("Choose!").
                openMenu().
                chooseOption("Satire").
                expectToHaveChosen("Satire");
        });
    });
});
