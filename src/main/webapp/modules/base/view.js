define(function(require) {

    var Backbone = require('backbone'),
        renderTemplate = require('./renderTemplate');

    var BaseView = Backbone.View.extend({
        renderTemplate: function(template) {
            this.$el.html(renderTemplate(template));
        }
    });

    return BaseView;
});
