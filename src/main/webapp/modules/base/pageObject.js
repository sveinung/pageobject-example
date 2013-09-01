define(function() {
    var PageObject = {
        expectToBeVisible: function() {
            expect(this.view.$el).not.toBeEmpty();
            expect(this.view.$el).not.toHaveClass('hide');
            return this;
        },
        expectToBeHidden: function() {
            expect(this.view.$el).toHaveClass('hide');
            return this;
        }
    };

    return PageObject;
});
