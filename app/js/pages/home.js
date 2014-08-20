'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var QuoteBoxView = require('../views/quote-box');
// var quotes = require('../lib/quotes');

module.exports = View.extend({
  pageTitle: 'Monica Macovei | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());

    this.quoteBoxView = new QuoteBoxView({
      model: new Backbone.Model({
        content: 'Monica Macovei, apărătoarea iconică a libertăților românilor.',
        author: 'Le Monde',
        authorLogo: 'assets/img/logo-le-monde.png'
      }),
      el: this.$('[role="quote-box"]')
    });

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    return this;
  }
});
