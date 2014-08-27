'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var Post = require('../models/post');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Asdf',
  template: templates.includes.postShow,
  initialize: function (options) {
    this.model = new Post({
      slug: options.slug
    });
  },
  render: function () {
    var locals = {};
    var html = templates.posts[this.model.attributes.slug](locals);
    this.$el.html(this.template({
      content: html,
      date: locals.date
    }));
    return this;
  }
});
