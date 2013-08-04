define(function(require) {

    var BaseModel = require('base/model');

    var Book = BaseModel.extend({
        urlRoot: 'http://localhost:8080/rest/book',

        defaults: {
            title: "hei",
            author: "Hei"
        }
    });

    return Book;
});
