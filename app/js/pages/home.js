'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var $ = require('../shims/jquery');
var videos = require('../lib/testimoniale-video.json');
var dubi = require('../lib/dubi.json');
// var QuoteBoxView = require('../views/quote-box');
// var urepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.home,
  events: {
    "click .chevron": "scroll"
  },

  render: function () {
    this.$el.html(this.template({
      videos: videos,
      dubi: dubi
    }));

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
  },

  scroll: function () {
    // $("body").animate({ scrollTop: $('.newsStripe').offset().top }, 1000);
    $("body").animate({
      scrollTop: this.$('.newsStripe').offset().top
    }, 200);
  }
});
