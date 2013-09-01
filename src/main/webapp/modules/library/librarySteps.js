module.exports = function() {
    var Given = When = Then = this.defineStep;

    Given(/^I have opened the library$/, function(callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });

    Then(/^I should have (\d+) books in my library$/, function(arg1, callback) {
        // express the regexp above with the code you wish you had
        callback.pending();
    });
};
