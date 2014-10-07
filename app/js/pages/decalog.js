'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var decalogul = require('../lib/decalogul.json');
var urlrepl = require('../lib/url-replace');
var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Decalog',
  template: templates.pages.decalogul,
  initialize: function () {
    this.imageLink = urlrepl( $("meta[property='og:image']").attr('content'));
  },

  render: function () {
    console.log(decalogul.length);
    this.$el.html(this.template({
      principii: decalogul,
      care: -1,
      image: this.imageLink,
      total: decalogul.length
    }));
    return this;
  }
});
