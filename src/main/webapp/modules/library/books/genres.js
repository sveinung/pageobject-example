define(function(require) {
    
    var BaseCollection = require('base/collection');

    var Genres = BaseCollection.extend({
        url: 'http://localhost:8080/rest/genre'
    });

    return Genres;
});
