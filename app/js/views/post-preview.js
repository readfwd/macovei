'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json');

module.exports = window.postView = View.extend({
  template: templates.includes.postPreview,

  render: function () {
    this.$el.html(this.template({
      preview: posts[this.model.attributes.slug].preview,
      url: '/posts/' + this.model.attributes.slug,
      thumb: posts[this.model.attributes.slug].thumb
    }));
    console.log(posts[this.model.attributes.slug].thumb);
    return this;
  }
});
