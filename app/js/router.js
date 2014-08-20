'use strict';

var Router = require('ampersand-router');
var smoothScroll = require('./lib/smooth-scroll');

var HomePage = require('./pages/home');
var DesprePage = require('./pages/despre');
var ViziunePage = require('./pages/viziune');
var CandidaturaPage = require('./pages/candidatura');
var SustinatoriPage = require('./pages/sustinatori');
var ImplicarePage = require('./pages/implicare');
var MediaPage = require('./pages/media');
var ContactPage = require('./pages/contact');
var SemnaturiPage = require('./pages/semnaturi');
var DonatiiPage = require('./pages/donatii');
var VoluntariatPage = require('./pages/voluntariat');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'despre/:section': 'despre',
    'viziune/:section': 'viziune',
    'candidatura/:section': 'candidatura',
    'sustinatori/:section': 'sustinatori',
    'implicare/:section': 'implicare',
    'media/': 'media',
    'contact/:section': 'contact',
    'fii-alaturi-de-mine/': 'semnaturi',
    'donatii/': 'donatii',
    'voluntariat/': 'voluntariat'
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
    smoothScroll(section);
  },

  candidatura: function (section) {
    this.trigger('newPage', new CandidaturaPage({}));
    smoothScroll(section);
  },

  sustinatori: function (section) {
    this.trigger('newPage', new SustinatoriPage({}));
    smoothScroll(section);
  },

  implicare: function (section) {
    this.trigger('newPage', new ImplicarePage({}));
    smoothScroll(section);
  },

  media: function () {
    this.trigger('newPage', new MediaPage({}));
  },

  contact: function (section) {
    this.trigger('newPage', new ContactPage({}));
    smoothScroll(section);
  },

  semnaturi: function () {
    this.trigger('newPage', new SemnaturiPage({}));
  },

  donatii: function () {
    this.trigger('newPage', new DonatiiPage({}));
  },

  voluntariat: function () {
    this.trigger('newPage', new VoluntariatPage({}));
  }
});
