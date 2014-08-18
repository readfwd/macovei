'use strict';

var Router = require('ampersand-router');
var $ = require('./shims/jquery');

var HomePage = require('./pages/home');
var DesprePage = require('./pages/despre');
var ViziunePage = require('./pages/viziune');
var CandidaturaPage = require('./pages/candidatura');
var SustinatoriPage = require('./pages/sustinatori');
var ImplicarePage = require('./pages/implicare');
var MediaPage = require('./pages/media');
var ContactPage = require('./pages/contact');

var smoothScroll = function (section) {
  var target = $('#' + section);
  if (target.length) {
    $('body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
};

module.exports = Router.extend({
  routes: {
    '': 'home',
    'despre': 'despre',
    'despre/:section': 'despre',
    'viziune/:section': 'viziune',
    'candidatura/:section': 'candidatura',
    'sustinatori/:section': 'sustinatori',
    'implicare/:section': 'implicare',
    'media/:section': 'media',
    'contact/:section': 'contact'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  despre: function (section) {
    this.trigger('newPage', new DesprePage({}));
    smoothScroll(section);
  },

  viziune: function (section) {
    this.trigger('newPage', new ViziunePage({}));
  },

  candidatura: function (section) {
    this.trigger('newPage', new CandidaturaPage({}));
  },

  sustinatori: function (section) {
    this.trigger('newPage', new SustinatoriPage({}));
  },

  implicare: function (section) {
    this.trigger('newPage', new ImplicarePage({}));
  },

  media: function (section) {
    this.trigger('newPage', new MediaPage({}));
  },

  contact: function (section) {
    this.trigger('newPage', new ContactPage({}));
  }
});
