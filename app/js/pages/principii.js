'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var principii = require('http://readfwd.com/principii.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Principii',
  template: templates.pages.principii,
  render: function () {
    this.$el.html(this.template({
      principii: principii
    }));
    return this;
  }
});
