'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var decalogul = require('../lib/decalogul.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Principii',
  template: templates.pages.decalogul,
  render: function () {
    this.$el.html(this.template({
      principii: decalogul
    }));
    return this;
  }
});
