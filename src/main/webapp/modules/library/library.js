define(function(require) {

    var Backbone = require('backbone');

    var Library = Backbone.Collection.extend({
        url: 'http://localhost:8080/rest/library',

        parse: function(response) {
            return response.books;
        }
    });

    return Library;
});
