'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var PostsView = require('../views/posts');
var $ = require('../shims/jquery');
var _ = require('lodash');
var videos = require('../lib/testimoniale-video.json');
var dubi = require('../lib/dubi.json');
// var QuoteBoxView = require('../views/quote-box');
var urlrepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Home',
  template: templates.pages.home,
  homePage: true,
  events: {
    "click .chevron": "scroll"
  },

  render: function () {
    _.forEach(dubi, function (comic, key) {
      dubi[key] = urlrepl(comic);
    });
    this.$el.html(this.template({
      videos: videos,
      dubi: dubi
    }));

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]'),
      homePage: this.homePage
    });


    this.$('body').attr('data-page', 'home').css("padding-top", 0);
    return this;
  },

  scroll: function () {
    // $("body").animate({ scrollTop: $('.newsStripe').offset().top }, 1000);
    $("body").animate({
      scrollTop: this.$('.liveStripe').offset().top - 50
    }, 200);
  }

});
