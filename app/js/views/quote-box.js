'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var quotes = require('../lib/quotes.json');

module.exports = View.extend({
  template: templates.includes.quoteBox,

  initialize: function () {
    this.render();
  },
  render: function () {
    // console.log(this.$el);
    var number = Math.floor(Math.random() * (quotes.length - 1) + 1);
    // console.log(quotes[number].quote);
    var author = quotes[number].author;
    var quote =  quotes[number].quote;
    this.$el.html(this.template({
      author: author,
      quote: quote
    }));
    return this;
  }
});
