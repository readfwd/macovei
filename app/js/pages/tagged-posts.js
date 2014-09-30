'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var posts = require('../lib/posts-json.json');
var _ = require('lodash');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Postări',
  template: templates.pages.postsTags,

  initialize: function () {
    var tags = [];
    _.each(posts, function (post) {
      _.each(post.tags, function (tag) {
        tags.push(tag);
      });
    });
    this.tags = _.uniq(tags);
  },

  render: function () {
    this.$el.html(this.template({
      tags: this.tags
    }));
    return this;
  }
});
