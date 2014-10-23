'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Testimoniale Online',
  template: templates.pages.testimonialeOnline,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
