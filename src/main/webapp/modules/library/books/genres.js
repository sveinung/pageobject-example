define(function(require) {

    var BaseCollection = require('base/collection');

    var Genres = BaseCollection.extend({
        url: 'http://localhost:8080/rest/genre',

        toOptions: function() {
            return this.map(function(genreModel) {
                var genre = genreModel.toJSON();
                return {
                    value: genre.name
                };
            });
        }
    });

    return Genres;
});
