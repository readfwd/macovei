'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');


module.exports = View.extend({
  pageTitle: 'Monica Macovei | Voluntariat',
  template: templates.pages.voluntariat,

  render: function () {
    this.$el.html(this.template());
    this.generateMap();
    return this;
  },

  generateMap: function () {
    console.log('mama');
    var map = new window.GMaps({
      el: this.$('#map')[0],
      lat: -12.043333,
      lng: -77.028333,
      width: '100%',
      height: '20em'
    });
    map.addMarker({
      lat: -12.042,
      lng: -77.028333,
      title: 'Marker with InfoWindow',
      infoWindow: {
        content: '<p>HTML Content</p>'
      }
    });



    console.log('ddd');
  }
});
