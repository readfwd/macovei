'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.includes.post,
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
