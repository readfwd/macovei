'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var $ = require('../shims/jquery');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  events: {
    'click a[href]:not([rel="download"])': 'handleLinkClick'
  },
  render: function () {
    var self = this;
    this.$el.html(this.template());

    // Init and configure the page switcher.
    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = newView.pageTitle || 'Monica Macovei Presedinte';
        window.scrollTo(0, 0);
        app.currentPage = newView;
      }
    });

    this.$('.nav a').on('click', function () {
      if ($(window).width() < 768){
        return self.$('.navbar-toggle').click();
      }
    });

    return this;
  },
  setPage: function (view) {
    this.pageSwitcher.set(view);
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
  }
});
