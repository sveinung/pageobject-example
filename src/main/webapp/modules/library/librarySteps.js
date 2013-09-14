var Browser = require('zombie');
var assert = require('assert');

browser = new Browser();

var loadPage = function(callback) {
    browser.visit('http://localhost:8080').
        then(function() {
            var $library;
            browser.wait(function(window) {
                $library = window.$(".library");
                return $library.length > 0;
            }, function() {
                callback($library);
            });
        });
};

module.exports = {
    'shows the page': function(done) {
        loadPage(function($library) {
            done();
        });
    }
};
