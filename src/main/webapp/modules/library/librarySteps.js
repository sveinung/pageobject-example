var Browser = require('zombie');

require('expectations');

var requirejs = require('requirejs');
requirejs.config({
    baseUrl: __dirname + '/../..',
    paths: {
        'components': 'bower_components',
        'jquery': 'bower_components/jquery/jquery',
        'underscore': 'bower_components/underscore/underscore',
        'text': 'bower_components/requirejs-text/text',
        'mustache': 'bower_components/mustache/mustache',
        'backbone': 'bower_components/backbone/backbone',
        'base': 'modules/base',

        'sinon': 'bower_components/sinonjs/sinon',
        'jasmine-sinon': 'bower_components/jasmine-sinon/lib/jasmine-sinon',
        'responseFaker': 'modules/components/responseFaker'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        'sinon': {
            exports: 'sinon'
        },
        'jasmine-sinon': ['sinon']
    },
    map: {
        '*': {
            'css': 'components/require-css/css'
        }
    }
});

var libraryViewPageObject = requirejs('modules/library/libraryViewPageObject');

browser = new Browser();

var loadPage = function(callback) {
    browser.visit('http://localhost:8080').
        then(function() {
            var $library;
            browser.wait(function(window) {
                $library = window.$(".library");
                return $library.find(".books").length > 0;
            }, function() {
                callback($library);
            });
        });
};

module.exports = {
    'shows the page': function(done) {
        loadPage(function($library) {
            expect(browser.success).toBe(true);
            done();
        });
    }
};
