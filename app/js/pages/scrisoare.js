'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Scrisoare',
  template: templates.pages.scrisoare,

  events: {
    'click .sendIt': 'sendLetter'
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  sendLetter: function () {
    var emailRegxp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var letterData = {
      title: 1,
      destination: 1,
      sendTo: "add@a.cp"
    };

    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/send',
      data: JSON.stringify(letterData),
      contentType: 'Application/json',
      success: function() {
        console.log("sent");
      },
      error: function () {
        console.log('error');
      }
    })
  }
});
