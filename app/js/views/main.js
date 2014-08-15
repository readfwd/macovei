'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var _ = require('lodash');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  render: function () {
    this.$el.html(this.template());

    // Init and configure the page switcher.
    this.pageSwitcher = new ViewSwitcher(this.$('[role="page-container"]')[0], {
      show: function (newView) {
        document.title = _.result(newView.pageTitle) || 'Monica Macovei';
        document.scrollTop = 0;

        app.currentPage = newView;
      }
    });

    return this;
  },
  setPage: function (view) {
    this.pageSwitcher.set(view);
  }
});
