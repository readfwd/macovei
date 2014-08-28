'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');


module.exports = View.extend({
  pageTitle: 'Monica Macovei | Voluntariat',
  template: templates.pages.voluntariat,

  render: function () {
    this.$el.html(this.template());
    this.romaniaCoords = {
      latitude: 45.94,
      longitude: 25.00
    };
    this.wwCoords = {
      latitude: 35.7466317,
      longitude: -39.5317294
    };
    this.generateMap();
    console.log('aa');
    return this;
  },

  events: {
    'click #romaniaCenters': 'addMarkersRomania',
    'click #worldWideCenters': 'addMarkersWW'
  },

  generateMap: function () {
    var lat = this.romaniaCoords.latitude;
    var long = this.romaniaCoords.longitude;
    this.map = new window.GMaps({
      el: this.$('#map')[0],
      lat: lat,
      lng: long,
      width: '100%',
      height: '25em',
      zoom: 6
    });
    this.addMarkersRomania();

    var self = this;
    // #yolo
    setTimeout(function () {
      self.map.refresh();
      self.map.setCenter(self.romaniaCoords.latitude, self.romaniaCoords.longitude);
    }, 1);

  },
  addMarkersRomania: function () {
    this.map.setZoom(6);
    this.map.addMarker({
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    });
    this.map.addMarker({
      lat: 46.783442,
      lng: 23.616512,
      title: 'Cluj-Napoca',
      infoWindow: {
        content: '<p>Coordonator: Claudiu Campean<br>0757.152.921<br>claudiu.campean@gmail.com</p>'
      }
    });
    this.map.addMarker({
      lat: 44.181357,
      lng: 28.629339,
      title: 'Constanta',
      infoWindow: {
        content: '<p>Coordonator: Mihai Petre<br>0744.340.918<br>mihaipetre77@yahoo.com</p>'
      }
    });
    this.map.addMarker({
      lat: 45.437678,
      lng: 28.047494,
      title: 'Galati',
      infoWindow: {
        content: '<p>Coordonator: George Schin<br>0744.613.117<br>schingeorge@yahoo.com</p>'
      }
    });
    // map.addMarker({
    //   lat: 47.156185,
    //   lng: 27.586970,
    //   title: 'Iasi',
    //   infoWindow: {
    //     content: '<p>Coordonator: 0745.345.100<br>0757.152.921<br></p>'
    //   }
    // });
    this.map.addMarker({
      lat: 46.164287,
      lng: 24.354286,
      title: 'Medias',
      infoWindow: {
        content: '<p>Coordonator: Tudor Dinca<br>tcdinca@gmail.com</p>'
      }
    });
    // map.setZoom(9);
    // map.panTo(new window.google.maps.LatLng(40.7056308,-73.9780035));
    // setTimeout( function() {
    //   map.setZoom(14);
    // }, 2000);
  },

  addMarkersWW: function () {
    this.map.setCenter(this.wwCoords.latitude, this.wwCoords.longitude);
    this.map.setZoom(2);
    this.map.addMarker({
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    });
  }

});
