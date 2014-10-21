'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');

var donations = require('../lib/donations.json');
var donationsGallery = require('../lib/donationsGallery.json');

var urlrepl = require('../lib/url-replace');
var _ = require('lodash');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Susținere financiară',
  template: templates.pages.donatii,
  events: {
    'click .paypal .btn': 'loadBtn',
    'click #doneaza': 'doneaza',
    'click #gallery .text-center': 'showGallery'
  },

  render: function () {
    var self = this;
    _.forEach(donations, function (entry) {
      if (entry.image) {
        entry.image = urlrepl(entry.image);
      }
    });

    _.forEach(donationsGallery, function (image, key) {
      donationsGallery[key] = urlrepl(image);
    });

    self.$el.html(self.template({
      donations: donations,
      gallery: donationsGallery
    }));
    self.$('.progress .progress-bar').attr('data-transitiongoal', self.$('.progress .progress-bar').attr('data-transitiongoal-backup'));
    self.$('.progress .progress-bar').progressbar({
      display_text: 'center',
      use_percentage: false,
      amount_format: function (p) {
        self.amount = p + 5;
        var value = self.amount + ' / 300000 ' + donations.currency;
        return value;
      },
      update: function(raised) {
        raised = self.amount;
        if (raised >= 20000) {
          self.$('.mile').removeClass('passed');
          self.$('.mile-1').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-1').addClass('passed');
        }

        if (raised >= 50000) {
          self.$('.mile').removeClass('passed');
          self.$('.mile-2').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-2').addClass('passed');
        }

        if(raised >= 100000) {
          self.$('.mile').removeClass('passed');
          self.$('.mile-3').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-3').addClass('passed');
        }

        if (raised >= 200000) {
          self.$('.mile').removeClass('passed');
          self.$('.mile-4').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-4').addClass('passed');
        }

        if (raised === 300000) {
          self.$('.mile').removeClass('passed');
          self.$('.mile-5').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-5').addClass('passed');
        }
      }
    });


    self.$('.progressbar-back-text').detach();
    self.$('#raised').html(self.$('.progressbar-front-text'));
    return this;
  },

  loadBtn: function (e) {
    var t = $(e.target);
    t.addClass('active');
    t.html('<i class="fa fa-fw fa-spin fa-spinner"></i>');
  },

  doneaza: function () {
    $("body").animate({
      scrollTop: this.$('.payment-methods').offset().top - 60
    }, 200);
  },

  showGallery: function () {
    $('.images').toggleClass('hidden');
  }
});
