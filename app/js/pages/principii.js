'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var decalogul = require('../lib/decalogul.json');
var principle = 0;

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Principii',
  template: templates.pages.decalogul,
  initialize: function (options) {
    principle = options.principle - 1 || principle;
  },
  render: function () {
    this.$el.html(this.template({
      principii: decalogul,
      care: principle
    }));
    return this;
  }
});
