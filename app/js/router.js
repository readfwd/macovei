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
var EvenimentePage = require('./pages/evenimente');
var KitDePresaPage = require('./pages/kit-de-presa');
var DubiPage = require('./pages/dubi');
var DiscursuriPage = require('./pages/discursuri');
var BriefinguriPage = require('./pages/briefinguri');
var DeclaratiiComunicatePage = require('./pages/declaratii-comunicate');
var GaleriePage = require('./pages/galerie');
var PrincipiiPage = require('./pages/principii');
var ScrisoareDeschisaPage = require('./pages/scrisoare-deschisa');
var TagsPage = require('./pages/tagged-posts');
var TagPostsPage = require('./pages/tagged-post');
var MacoveiCvPage = require('./pages/macovei-cv');
var MotiveSaVoteziMacoveiPage = require('./pages/motive-sa-votezi-macovei');
var DarNuAreSansePage = require('./pages/dar-nu-are-sanse');
var MonicaInDialogPage = require('./pages/monica-in-dialog');

var routes = require('./lib/routes.json');

module.exports = Router.extend({
  routes: _.mapValues(routes, function(route) {
    return route.prefix;
  }),

  // initialize: function () {
  //   console.log(this.routes);
  // },
  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('newPage', new HomePage({}));
    $('body').attr('data-page', 'home');
  },

  viziune: function () {
    this.trigger('newPage', new ViziunePage({}));
    $('body').attr('data-page', 'viziune');
  },

  deCeCandidez: function () {
    this.trigger('newPage', new CandidaturaPage({}));
    $('body').attr('data-page', 'deCeCandidez');
  },

  testimonialeVideo: function () {
    this.trigger('newPage', new TestimonialeVideoPage({}));
    $('body').attr('data-page', 'testimonialeVideo');
  },

  implicare: function () {
    this.trigger('newPage', new ImplicarePage({}));
    $('body').attr('data-page', 'implicare');
  },

  media: function () {
    this.trigger('newPage', new MediaPage({}));
    $('body').attr('data-page', 'media');
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
    $('body').attr('data-page', 'contact');
  },

  donatii: function () {
    this.trigger('newPage', new DonatiiPage({}));
    $('body').attr('data-page', 'donatii');
  },

  donatiiThankyou: function () {
    this.trigger('newPage', new DonatiiThankYouPage({}));
    $('body').attr('data-page', 'donatiiThankYou');
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
    $('body').attr('data-page', 'post');
  },

  posts: function () {
    this.trigger('newPage', new PostsPage({}));
    $('body').attr('data-page', 'posts');
  },

  cineSunt: function () {
    this.trigger('newPage', new CineSuntPage({}));
    $('body').attr('data-page', 'cineSunt');
  },

  ceAmFacut: function () {
    this.trigger('newPage', new CeAmFacutPage({}));
    $('body').attr('data-page', 'ceAmFacut');
  },

  ceilaltiDespreMine: function () {
    this.trigger('newPage', new CeilaltiDespreMinePage({}));
    $('body').attr('data-page', 'ceilaltiDespreMine');
  },

  minciuniDespreMine: function () {
    this.trigger('newPage', new MinciuniDespreMinePage({}));
    $('body').attr('data-page', 'minciuniDespreMine');
  },

  deCeSaMaVotati: function () {
    this.trigger('newPage', new DeCeSaMaVotatiPage({}));
    $('body').attr('data-page', 'deCeSaMaVotati');
  },

  depunereaCandidaturii: function () {
    this.trigger('newPage', new DepunereaCandidaturiiPage({}));
    $('body').attr('data-page', 'depunereaCandidaturii');
  },

  personalitati: function () {
    this.trigger('newPage', new PersonalitatiPage({}));
    $('body').attr('data-page', 'personalitati');
  },

  testimonialeOnline: function () {
    this.trigger('newPage', new TestimonialeOnlinePage({}));
    $('body').attr('data-page', 'testimonialeOnline');
  },

  discursuri: function () {
    this.trigger('newPage', new DiscursuriPage({}));
    $('body').attr('data-page', 'discursuri');
  },

  declaratiiComunicate: function () {
    this.trigger('newPage', new DeclaratiiComunicatePage({}));
    $('body').attr('data-page', 'declaratiiComunicate');
  },

  briefinguri: function () {
    this.trigger('newPage', new BriefinguriPage({}));
    $('body').attr('data-page', 'briefinguri');
  },

  galerie: function () {
    this.trigger('newPage', new GaleriePage({}));
    $('body').attr('data-page', 'galerie');
  },

  evenimente: function () {
    this.trigger('newPage', new EvenimentePage({}));
    $('body').attr('data-page', 'evenimente');
  },

  kitDePresa: function () {
    this.trigger('newPage', new KitDePresaPage({}));
    $('body').attr('data-page', 'kitDePresa');
  },
  dubi: function () {
    this.trigger('newPage', new DubiPage({}));
    $('body').attr('data-page', 'dubi');
  },
  macoveiCV: function () {
    this.trigger('newPage', new MacoveiCvPage({}));
    $('body').attr('data-page', 'macoveiCV');
  },
  scrisoareDeschisa: function () {
    this.trigger('newPage', new ScrisoareDeschisaPage({}));
    $('body').attr('data-page', 'scrisoareDeschisa');
  },
  motiveSaVoteziMacovei: function () {
    this.trigger('newPage', new MotiveSaVoteziMacoveiPage({}));
    $('body').attr('data-page', 'motiveSaVoteziMacovei');
  },
  principii: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 1
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog1: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 1
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog2: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 2
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog3: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 3
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog4: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 4
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog5: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 5
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog6: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 6
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog7: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 7
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog8: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 8
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog9: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 9
    }));
    $('body').attr('data-page', 'principii');
  },
  decalog10: function () {
    this.trigger('newPage', new PrincipiiPage({
      principle: 10
    }));
    $('body').attr('data-page', 'principii');
  },
  tags: function () {
    this.trigger('newPage', new TagsPage({}));
    $('body').attr('data-page', 'taggedPosts');
  },
  tag: function (tag) {
    this.trigger('newPage', new TagPostsPage({
      tag: tag
    }));
    $('body').attr('data-page', 'taggedPost');
  },
  nuAreSanse: function () {
    this.trigger('newPage', new DarNuAreSansePage());
    $('body').attr('data-page', 'nuAreSanse');
  },
  inDialog: function () {
    this.trigger('newPage', new MonicaInDialogPage());
    $('body').attr('data-page', 'monicaInDialog');
  }
});
