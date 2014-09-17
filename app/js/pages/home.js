'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var $ = require('../shims/jquery');
// var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());

    // this.quoteBoxView = new QuoteBoxView({
    //   model: new Backbone.Model({
    //     content: 'Monica Macovei, apărătoarea iconică a libertăților românilor.',
    //     author: 'Le Monde',
        // authorLogo: 'assets/img/logo-le-monde.png'
    //   }),
    //   el: this.$('[role="quote-box"]')
    // });

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]'),
      homePage: true
    });
    
    $(window).scroll(function() {
      var scrollPos = $(this).scrollTop();
      if(scrollPos > 350) {
          $(".navbar").addClass('navbar-dimmed');
      } else {
          $(".navbar").removeClass('navbar-dimmed');
      }
    });
    return this;
  }
});
