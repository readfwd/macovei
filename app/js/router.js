'use strict';

var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var LoremPage = require('./pages/lorem');


module.exports = Router.extend({
  routes: {
    '': 'home',
    'lorem': 'lorem'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  // ------- ROUTE HANDLERS ---------
  lorem: function () {
    this.trigger('newPage', new LoremPage({}));
  },
});
