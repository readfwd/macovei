'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Susținere financiară',
  template: templates.pages.donatii,
  events: {
    'click .paypal .btn': 'loadBtn'
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  loadBtn: function (e) {
    var t = $(e.target);
    t.addClass('active');
    t.html('<i class="fa fa-fw fa-spin fa-spinner"></i>');
  }
});
