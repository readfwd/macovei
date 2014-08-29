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
var SemnaturiPage = require('./pages/semnaturi');
var DonatiiPage = require('./pages/donatii');
var DonatiiThankYouPage = require('./pages/donatii-thankyou');
var VoluntariatPage = require('./pages/voluntariat');
var PostPage = require('./pages/post');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'despre/': 'despre',
    'viziune/': 'viziune',
    'candidatura/': 'candidatura',
    'sustinatori/': 'sustinatori',
    'implicare/': 'implicare',
    'media/': 'media',
    'contact/': 'contact',
    'fii-alaturi-de-mine/': 'semnaturi',
    'voluntariat/': 'voluntariat',
    'strange-semnaturi/': 'voluntariat',
    'donatii/': 'donatii',
    'sustinere-financiara/': 'donatii',
    'donatii_thankyou/': 'donatiiThankyou',
    'donatii-thankyou/': 'donatiiThankyou',
    'sustinere-financiara-multumiri/': 'donatiiThankyou',
    'posts/:slug': 'post'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
    $('body').attr('data-page', 'home');
  },

  despre: function () {
    this.trigger('newPage', new DesprePage({}));
  },

  viziune: function () {
    this.trigger('newPage', new ViziunePage({}));
  },

  candidatura: function () {
    this.trigger('newPage', new CandidaturaPage({}));
  },

  sustinatori: function () {
    this.trigger('newPage', new SustinatoriPage({}));
  },

  implicare: function () {
    this.trigger('newPage', new ImplicarePage({}));
  },

  media: function () {
    this.trigger('newPage', new MediaPage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
  },

  semnaturi: function () {
    this.trigger('newPage', new SemnaturiPage({}));
    $('body').attr('data-page', 'semnaturi');
  },

  donatii: function () {
    this.trigger('newPage', new DonatiiPage({}));
    $('body').attr('data-page', 'donatii');
  },

  donatiiThankyou: function () {
    this.trigger('newPage', new DonatiiThankYouPage({}));
  },

  voluntariat: function () {
    this.trigger('newPage', new VoluntariatPage({}));
    $('body').attr('data-page', 'voluntariat');
  },

  post: function (slug) {
    this.trigger('newPage', new PostPage({
      slug: slug
    }));
    $('body').attr('data-page', 'semnaturi');
  }
});
