'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
// var QuoteBoxView = require('../views/quote-box');
// var urepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());

    // this.quoteBoxView = new QuoteBoxView({
    //   model: new Backbone.Model({
    //     content: 'Monica Macovei, apărătoarea iconică a libertăților românilor.',
    //     author: 'Le Monde',
    //     authorLogo: urepl('/assets/img/logo-le-monde.png')
    //   }),
    //   el: this.$('[role="quote-box"]')
    // });


    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    this.postsView.render();
    return this;
  }
});
