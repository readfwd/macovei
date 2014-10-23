'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');


module.exports = window.postView = View.extend({
  template: templates.includes.linkPreview,
  render: function () {
    this.$el.addClass('item');
    this.$el.html(this.template({
      title: posts[this.model.attributes.slug].title,
      url: '/posts/' + this.model.attributes.slug,
    }));
    return this;
  }
});
