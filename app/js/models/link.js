'use strict';

var Backbone = require('../shims/backbone');
var Link = require('./link');
var Model = Backbone.Model;

module.exports = Model.extend({
  model: Link
});
