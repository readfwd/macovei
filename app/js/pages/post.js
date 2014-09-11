'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');
var Post = require('../models/post');
var moment = require('moment/min/moment-with-locales');
moment.locale("ro");

module.exports = View.extend({
  template: templates.includes.postShow,
  initialize: function (options) {
    this.model = new Post({
      slug: options.slug
    });
    this.locals = posts[this.model.attributes.slug];
    this.pageDescription = this.locals.preview || 'Articole de susținere pentru Monica Macovei.';
    this.pageImage = this.locals.thumb;
    this.pageType = 'article';
    if (this.locals.title) {
      this.pageTitle = this.locals.title;
    }
  },

  render: function () {
    this.$el.html(this.template({
      content: this.locals.content,
      date: moment(this.locals.date, 'YYYY-MM-DD HH:mm').from(moment().format('YYYY-MM-DD HH:mm')),
      slug: this.locals.slug,
      preview: this.locals.preview,
      thumb: this.locals.thumb,
      title: this.locals.title,
      author: this.locals.author,
      source: this.locals.source,
      url: "http%3A%2F%2Fmacoveipresedinte.ro%2Fposts%2F" + this.locals.slug + '?_escaped_fragment_=""'
    }));
    return this;
  }
});
