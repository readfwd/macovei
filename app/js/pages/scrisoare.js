'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');
var urlrepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Scrisoare',
  template: templates.pages.scrisoare,

  events: {
    'click .letter-send': 'sendLetter',
    'click #title-list li a': 'getTitle',
    'click #destination-list li a': 'getDestination',
    'click #sendTo-btn': 'getSendTo'
  },

  render: function () {
    var self = this;
    this.$el.html(this.template());
    if ($(window).width > 991) {
      $('.letter').css('background', urlrepl('/assets/img/letters/background.png'))
    } else {
      $('.letter')
        .css('background', urlrepl('/assets/img/letters/background-small.jpg'))
        .css('height', '1000px');

    }
    return this;
  },

  getTitle: function (elem) {
    this.titleId = $(elem.currentTarget).data('value');
    $('#title-btn').text($(elem.currentTarget).text())
  },

  getDestination: function (elem) {
    this.destinationId = $(elem.currentTarget).data('value');
    $('#destination-btn').text($(elem.currentTarget).text())
  },

  sendLetter: function () {
    var emailRegxp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRegxp.test($('.letter-destination input').val())) {
      $('#warning').removeClass('visible').addClass('hidden');
      this.sendTo = $('.letter-destination input').val();
    } else {
      $('#warning').removeClass('hidden').addClass('visible');
    }

    var letterData = {
      title: this.titleId,
      destination: this.destinationId,
      sendTo: this.sendTo
    };

    $.ajax({
      type: 'POST',
      url: process.env.MAIL_SERVER,
      data: JSON.stringify(letterData),
      contentType: 'Application/json',
      crossDomain: true,
      success: function() {
        $('#negative').removeClass('visible').addClass('hidden');
        $('#positive').removeClass('visible').addClass('hidden');
        $('#positive').removeClass('hidden').addClass('visible');
      },
      error: function () {
        $('#positive').removeClass('visible').addClass('hidden');
        $('#negative').removeClass('visible').addClass('hidden');
        $('#negative').removeClass('hidden').addClass('visible');
      }
    })
  }
});
