'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json');
var Post = require('../models/post');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Asdff',
  template: templates.includes.postShow,
  initialize: function (options) {
    this.model = new Post({
      slug: options.slug
    });
  },
  render: function () {
    this.$el.html(this.template({
      content: posts[this.model.attributes.slug].content,
      date: posts[this.model.attributes.slug].date,
      slug: posts[this.model.attributes.slug].slug,
      preview: posts[this.model.attributes.slug].preview
    }));
    return this;
  }
});
