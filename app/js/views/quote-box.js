'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.includes.quoteBox,
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
