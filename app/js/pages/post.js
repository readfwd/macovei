'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');
var Post = require('../models/post');
var moment = require('moment/min/moment-with-locales');
moment.locale("ro");

module.exports = View.extend({
  pageTitle: 'Monica Macovei',
  template: templates.includes.postShow,
  initialize: function (options) {
    this.model = new Post({
      slug: options.slug
    });
    this.locals = posts[this.model.attributes.slug];
    if (this.locals.title) {
      this.pageTitle = this.pageTitle + " | " + this.locals.title;
    }
  },

  render: function () {
    this.$el.html(this.template({
      content: this.locals.content,
      date: moment(this.locals.date).fromNow(),
      slug: this.locals.slug,
      preview: this.locals.preview,
      thumb: this.locals.thumb,
      title: this.locals.title,
      author: this.locals.author,
      source: this.locals.source,
      url: "//macoveipresedinte.ro/posts/" + this.locals.slug
    }));
    return this;
  },


});
