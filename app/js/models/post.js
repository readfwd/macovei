'use strict';

var Backbone = require('../shims/backbone');
var Post = require('./post');
var Model = Backbone.Model;

module.exports = Model.extend({
  model: Post
});
