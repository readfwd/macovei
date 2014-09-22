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
    "click .chevron": "scroll",
    "scroll": "handleScrolling"
  },

  initialize: function () {
    $(window).scroll(this.handleScrolling);
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


    this.$('body').attr('data-page', 'home').css("padding-top", 0);
    return this;
  },

  scroll: function () {
    // $("body").animate({ scrollTop: $('.newsStripe').offset().top }, 1000);
    $("body").animate({
      scrollTop: this.$('.newsStripe').offset().top - 50
    }, 200);
  },

  handleScrolling: function () {
    $(window).scroll(function() {
      var scrollPos = this.$(this).scrollTop();
      if(scrollPos > 300) {
          this.$(".navbar").addClass('navbar-dimmed');
          this.$(".logo").html(
            "<img src=\"/assets/img/logo-nou-macovei-white-lung.png\"></img>")
            .addClass('macovei-logo').removeClass('logo');
      } else {
          this.$(".navbar").removeClass('navbar-dimmed');
          this.$(".macovei-logo").html("<img src=\"/assets/img/logo-nou-macovei-white.png\"></img>")
            .removeClass('macovei-logo').addClass('logo');
      }
    });
  }
});
