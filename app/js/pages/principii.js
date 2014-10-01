'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var decalogul = require('../lib/decalogul.json');
var urlrepl = require('../lib/url-replace');
var $ = require('../shims/jquery');
var principle = 0;

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Principii',
  template: templates.pages.decalogul,
  initialize: function (options) {
    principle = options.principle - 1 || principle;
    this.imageLink = urlrepl(window.location.origin + $("meta[property='og:image']").attr('content'));
  },
  render: function () {
    this.$el.html(this.template({
      principii: decalogul,
      care: principle,
      image: this.imageLink
    }));
    console.log(this.imageLink)
    return this;
  }
});
