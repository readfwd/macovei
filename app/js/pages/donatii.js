'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');
var donations = require('../lib/donations.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Susținere financiară',
  template: templates.pages.donatii,
  events: {
    'click .paypal .btn': 'loadBtn'
  },

  render: function () {
    var self = this;
    self.$el.html(self.template({
      donations: donations
    }));
    self.$('.progress .progress-bar').attr('data-transitiongoal', self.$('.progress .progress-bar').attr('data-transitiongoal-backup'));
    self.$('.progress .progress-bar').progressbar({
      display_text: 'center',
      use_percentage: false,
      amount_format: function (p) {
        self.amount = p + 5;
        return self.amount;
      },
      update: function(raised) {
        raised = self.amount;
        if (raised >= 20000) {
          self.$('.mile-1').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-1').addClass('passed');
        }

        if (raised >= 50000) {
          self.$('.mile-2').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-2').addClass('passed');
        }

        if(raised >= 100000) {
          self.$('.mile-3').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-3').addClass('passed');
        }

        if (raised >= 200000) {
          self.$('.mile-4').addClass('passed');
          self.$('.value').removeClass('passed');
          self.$('.value-4').addClass('passed');
        }

        if (raised === 300000) {
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
  }
});
