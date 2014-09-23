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
  template: templates.pages.postsHome,
  render: function () {
    this.$el.html(this.template());

    this.postsView = new PostsView({
      collection: app.posts,
      el: this.$('[role="posts-collection"]')
    });
    // $(window).scroll(function() {
    //   var scrollPos = $(this).scrollTop();
    //   if(scrollPos > 350) {
    //       $(".navbar").addClass('navbar-dimmed');// ->> css('background-color', '#232A50');
    //       $(".navbar .logo").html("Macovei 2014");
    //   } else {
    //       $(".navbar").removeClass('navbar-dimmed'); // ->> css('background-color', '#232A50');
    //       $(".navbar .logo").html("<img src=\"/assets/img/logo-macovei-albastru.jpg\">");
    //   }
    // });

    var container = this.$('#posts')[0];

      var x = new window.Masonry( container, {
        itemSelector: '.item',
        columnWidth: 20,
      });

      if ($(window).width() > 768) {
        x.gutter = 20;
      }
      else {
        x.gutter = 10;
        }
      x.bindResize();
      setTimeout(function () {
        x.layout();
      }, 10);

    return this;
  }
});
