'use strict';

var Backbone = require('../shims/backbone');
var Collection = Backbone.Collection;
var Post = require('./post');
var config = require('../_config');

module.exports = Collection.extend({
  model: Post,
  url: config.fbPosts,
  parse: function (response) {
    return response.entries;
  }
});
