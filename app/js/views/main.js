/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  initialize: function () {
    console.log(app);
  }
});
