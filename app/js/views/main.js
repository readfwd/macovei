'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var $ = require('../shims/jquery');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');
var urlrepl = require('../lib/url-replace');
var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]:not([rel="download"])': 'handleLinkClick',
    'scroll': 'handleScrolling'
  },

  render: function () {
    var self = this;
    this.$el.append(this.template());

    $(window).scroll(this.handleScrolling.bind(this));

    // Init and configure the page switcher.
    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = newView.pageTitle || 'Monica Macovei Presedinte';
        var description = newView.pageDescription || 'Candidez independent, pentru că sunt convinsă că românii merită un Președinte al lor, nu al partidelor.'
        var keywords = newView.pageKeywords || 'alegeri, prezidentiale, candidat, independent, romania, romani, anti-coruptie';
        var image = urlrepl(newView.pageImage || '/assets/img/logo-macovei.png');
        if (!/^http/.test(image)) {
          image = window.location.origin + image;
        }
        var type = newView.pageType || 'website';
        if (document.location.hostname == "localhost") {
          // check if localhost, output another url
          var url = newView.pageUrl || window.location.origin+"/"+window.location.hash;window.location.origin+"/"+window.location.hash;
        } else {
          // if live, output real url
          var url = newView.pageUrl || window.location.origin+window.location.pathname;
        }
        // point url to html rendered version
        url += '?_escaped_fragment_=""';

        $("meta[property='og:type']").attr('content', type);
        $("meta[property='og:image'], meta[name='twitter:image']").attr('content', image);
        $("meta[property='og:title'], meta[name='twitter:title']").attr('content', document.title);
        $("meta[property='og:description'], meta[name='twitter:description'], meta[name='description']").attr('content', description);
        $("meta[property='og:url'], meta[name='twitter:url']").attr('content', url);
        $("link[rel='canonical']").attr('href', url);
        window.scrollTo(0, 0);
        app.currentPage = newView;
      }
    });

    this.$('.navbar-toggle').on('click', function () {
      if ($(window).width() < 992){
        console.log('fara');
        self.$('.navbar-brand')
          .removeClass('logo')
          .addClass('macovei-logo')
          .html("<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-white.png") + "\"></img>");
        self.$('.navbar-collapse').removeClass('navbar-right');

      }
    });
    return this;
  },

  setPage: function (view) {
    this.currentView = view;
    this.pageSwitcher.set(view);
    this.renderLogo();
    this.renderQuote();
    if ($(window).width() < 992) {
      return this.$('.navbar-collapse').removeClass('in')

    }
  },

  handleLinkClick: function (e) {

      var t = $(e.target);
      var aEl = t.is('a') ? t[0] : t.closest('a')[0];
      var local = window.location.host === aEl.host;
      var path = aEl.pathname.slice(1);
      if (!path) {
        return;
      }

      // If the window location host and target host are the
      // same it's local, else, leave it alone.
      if (local) {
        e.preventDefault();
        app.navigate(path);
      }
  },

  handleScrolling: function () {
    var view = this.currentView;
    var scrollPos = $(window).scrollTop();
    if(scrollPos > 20) {
        this.$(".navbar").addClass('navbar-dimmed');
        this.$(".logo")
          .addClass('macovei-logo')
          .html(
            "<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-white-lung.png") + "\"></img>")
          .removeClass('logo');
        this.$(".head-quote").addClass('hidden');
    } else {
      this.renderLogo();
      this.$(".navbar").removeClass('navbar-dimmed');
      var html = "<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-black.png") + "\"></img>";
      if (view.homePage === true || view.dubiPage === true) {
        html = "<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-white.png") + "\"></img>";
      }
      this.$(".macovei-logo")
        .addClass('logo')
        .html(html)
        .removeClass('macovei-logo');
      this.$(".head-quote").removeClass('hidden');
    }
  },

  renderLogo: function () {
    if ($(window).scrollTop() === 0) {
      if (this.currentView.homePage || this.currentView.dubiPage) {
        this.$('.logo')
          .html( "<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-white.png") + "\"></img>");
      }
      else {
        this.$('.logo')
          .html(
            "<img src=\"" + urlrepl("/assets/img/logo-nou-macovei-black.png") + "\"></img>");
      }
    }
  },

  renderQuote: function () {
    this.quoteBoxView = new QuoteBoxView({
      el: this.$('.quote')
    });
  }
});
