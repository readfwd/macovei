'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var decalogul = require('../lib/decalogul.json');
var urlrepl = require('../lib/url-replace');
var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Principii',
  template: templates.pages.decalogul,
  initialize: function (options) {
    this.principle = options.principle - 1;
    this.imageLink = urlrepl( $("meta[property='og:image']").attr('content'));
  },
  render: function () {
    this.$el.html(this.template({
      principii: decalogul,
      care: this.principle,
      image: this.imageLink
    }));
    return this;
  }
});
