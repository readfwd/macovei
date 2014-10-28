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
    'click #destination-list li a': 'getDestination'
  },

  render: function () {
    var self = this;
    this.$el.html(this.template());
    $(document).ready(function () {
      $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
      $('.letter-overlay').click (function () {
        self.render();
      });
    })
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
    var self = this;
    var emailRegxp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.sendTo = $('.letter-destination input').val();
    this.source = $('.letter-source input').val();

    if (!emailRegxp.test(this.sendTo)) {
      return;
    }

    if (!emailRegxp.test(this.source)) {
      return;
    }

    if (!this.titleId) {
      this.titleId = 0;
    }

    if (!this.destinationId) {
      this.destinationId = 4;
    }
    var letterData = {
      title: this.titleId,
      destination: this.destinationId,
      sendTo: this.sendTo,
      source: this.source
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/send',
      data: JSON.stringify(letterData),
      contentType: 'Application/json',
      crossDomain: true,
      success: function() {
        $('.letter-overlay').removeClass('hidden');
        $('.letter-send').addClass('unclickable');
      },
      error: function () {
        $('#positive').removeClass('visible').addClass('hidden');
        $('#negative').removeClass('visible').addClass('hidden');
        $('#negative').removeClass('hidden').addClass('visible');
      }
    })
  }
});
