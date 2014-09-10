'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');
var moment = require('moment/min/moment-with-locales');
moment.locale('ro');

module.exports = window.postView = View.extend({
  template: templates.includes.postPreview,

  render: function () {
    // console.log(posts[this.model.attributes.slug].date),
    this.$el.html(this.template({
      title: posts[this.model.attributes.slug].title,
      preview: posts[this.model.attributes.slug].preview,
      url: '/posts/' + this.model.attributes.slug,
      thumb: posts[this.model.attributes.slug].thumb,
      author: posts[this.model.attributes.slug].author,
      source: posts[this.model.attributes.slug].source,
      date: moment(posts[this.model.attributes.slug].date, 'YYYY-MM-DD').fromNow(),
    }));
    return this;
  }
});
