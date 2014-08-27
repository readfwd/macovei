'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = window.postView = View.extend({
  initialize: function () {
    this.template = templates.posts[this.model.attributes.slug];
  },

  render: function () {
    var locals = {};
    var html = this.template(locals);
    this.$el.html(html);
    return this;
  }
});
