'use strict';

var Router = require('ampersand-router');
var $ = require('./shims/jquery');
var _ = require('lodash');

var HomePage = require('./pages/home');
var ViziunePage = require('./pages/viziune');
var CandidaturaPage = require('./pages/candidatura');
var TestimonialeVideoPage = require('./pages/testimoniale-video');
var ImplicarePage = require('./pages/implicare');
var MediaPage = require('./pages/media');
var ContactPage = require('./pages/contact');
var DonatiiPage = require('./pages/donatii');
var DonatiiThankYouPage = require('./pages/donatii-thankyou');
var VoluntariatPage = require('./pages/voluntariat');
var Eroare404 = require('./pages/eroare404');
var PostPage = require('./pages/post');
var PostsPage = require('./pages/posts-home');

var CineSuntPage = require('./pages/cine-sunt');
var CeAmFacutPage = require('./pages/ce-am-facut');
var CeilaltiDespreMinePage = require('./pages/ceilalti-despre-mine');
var MinciuniDespreMinePage = require('./pages/minciuni-despre-mine');
var DeCeSaMaVotatiPage = require('./pages/de-ce-sa-ma-votati');
var DepunereaCandidaturiiPage = require('./pages/depunerea-candidaturii');
var PersonalitatiPage = require('./pages/personalitati');
var TestimonialeOnlinePage = require('./pages/testimoniale-online');
var AparitiiMediaPage = require('./pages/aparitii-media');
var EvenimentePage = require('./pages/evenimente');
var KitDePresaPage = require('./pages/kit-de-presa');


var routes = require('./lib/routes.json');

module.exports = Router.extend({
  routes: _.mapValues(routes, function(route) {
    return route.prefix;
  }),

  initialize: function() {
    console.log(this.routes);
  },
  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
    $('body').attr('data-page', 'home');
  },

  viziune: function () {
    this.trigger('newPage', new ViziunePage({}));
  },

  deCeCandidez: function () {
    this.trigger('newPage', new CandidaturaPage({}));
  },

  testimonialeVideo: function () {
    this.trigger('newPage', new TestimonialeVideoPage({}));
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

  eroare404: function () {
    this.trigger('newPage', new Eroare404({}));
    $('body').attr('data-page', 'eroare404');
  },

  post: function (slug) {
    this.trigger('newPage', new PostPage({
      slug: slug
    }));
  },

  posts: function () {
    this.trigger('newPage', new PostsPage({}));
  },

  cineSunt: function () {
    this.trigger('newPage', new CineSuntPage({}));
  },

  ceAmFacut: function () {
    this.trigger('newPage', new CeAmFacutPage({}));
  },

  ceilaltiDespreMine: function () {
    this.trigger('newPage', new CeilaltiDespreMinePage({}));
  },

  minciuniDespreMine: function () {
    this.trigger('newPage', new MinciuniDespreMinePage({}));
  },

  deCeSaMaVotati: function () {
    this.trigger('newPage', new DeCeSaMaVotatiPage({}));
  },

  depunereaCandidaturii: function () {
    this.trigger('newPage', new DepunereaCandidaturiiPage({}));
  },

  personalitati: function () {
    this.trigger('newPage', new PersonalitatiPage({}));
  },

  testimonialeOnline: function () {
    this.trigger('newPage', new TestimonialeOnlinePage({}));
  },

  aparitiiMedia: function () {
    this.trigger('newPage', new AparitiiMediaPage({}));
  },

  evenimente: function () {
    this.trigger('newPage', new EvenimentePage({}));
  },

  kitDePresa: function () {
    this.trigger('newPage', new KitDePresaPage({}));
  }
});
