'use strict';

/* global app */
var View = require('ampersand-view');
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.body,
  initialize: function () {
    console.log(app);
  }
});
