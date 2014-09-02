'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');


module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Voluntariat',
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
    setTimeout(function () {
      self.map.refresh();
      self.map.setCenter(self.romaniaCoords.latitude, self.romaniaCoords.longitude);
    }, 1);

  },
  addMarkersRomania: function () {
    var map = this.map;
    map.setCenter(this.romaniaCoords.latitude, this.romaniaCoords.longitude);
    map.setZoom(6);
    map.addMarker({
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    });
    map.addMarker({
      lat: 46.783442,
      lng: 23.616512,
      title: 'Cluj-Napoca',
      infoWindow: {
        content: '<p>Coordonator: Andreea Rusu<br>0757.065.197<br>Andreea.rusu.cj@gmail.com<br> Punct depunere semnaturi: Calea Turzii nr.18-Cafeneaua "La Perne"</p>'
      }
    });
    map.addMarker({
      lat: 44.181357,
      lng: 28.629339,
      title: 'Constanta',
      infoWindow: {
        content: '<p>Coordonator: Mihai Petre<br>0744.340.918<br>mihaipetre77@yahoo.com</p>'
      }
    });
    map.addMarker({
      lat: 45.437678,
      lng: 28.047494,
      title: 'Galati',
      infoWindow: {
        content: '<p>Coordonator: George Schin<br>0744.613.117<br>schingeorge@yahoo.com</p>'
      }
    });
    map.addMarker({
      lat: 46.582,
      lng: 26.912,
      title: 'Bacau',
      infoWindow: {
        content: '<p>Coordonator: Petrica Danila<br>0745.542.626<br>petricadanila@gmail.com<br><br>Coordonator: Platon Mihai<br> 0740.042.611<br> plutonserv@yahoo.com<br>Punct depunere semnaturi: Calea Moldovei, nr. 35</p>'
      }
    });
  map.addMarker({
      lat: 47.7375721,
      lng: 26.6594085,
      title: 'Botosani',
      infoWindow: {
        content: '<p>Coordonator: Lucian Buium<br>0751.401.127<br>luciabuium700@yahoo.com<br></p>'
      }
    });
  map.addMarker({
      lat: 45.694594,
      lng: 27.189102,
      title: 'Focsani',
      infoWindow: {
        content: '<p>Coordonator: Mariana Bondila<br>0723.531.486<br>marianabondila@yahoo.com<br> Punct depunere semnaturi: Str. Revolutiei, nr. 19 (Sud, magazinul alimentar)</p>'
      }
    });
  map.addMarker({
      lat: 46.061722,
      lng: 23.584213,
      title: 'Alba Iulia',
      infoWindow: {
        content: '<p>Coordonator:  Ciprian Cucu<br>0722.733.831<br>cucu.ciprian@gmail.com</p>'
      }
    });
  map.addMarker({
      lat: 47.067297,
      lng: 26.665534,
      title: 'Oradea',
      infoWindow: {
        content: '<p>Coordonator: Radu Popovici<br>0744.570.848<br>maiaduc@gmail.com<br> Punct depunere semnaturi: str.Calea Aradului, nr. 59</p>'
      }
    });
     map.addMarker({
       lat: 47.154667,
       lng: 27.590446,
       title: 'Iasi',
       infoWindow: {
         content: '<p>Coordonator: 0745.345.100<br>Dan Radu<br></p>'
       }
     });
    map.addMarker({
       lat: 45.754809,
       lng: 21.228160,
       title: 'Timisoara',
       infoWindow: {
         content: '<p>Coordonator: <br>Piroska Bogdan<br>0727 214 432<br> piribogdan@gmail.com </p>'
       }
     });
    //map.addMarker({
     // lat: 46.164287,
    //  lng: 24.354286,
    //  title: 'Medias',
    //  infoWindow: {
    //    content: '<p>Coordonator: Tudor Dinca<br><br>tcdinca@gmail.com</p>'
    //  }
    //});
    // map.setZoom(9);
    // map.panTo(new window.google.maps.LatLng(40.7056308,-73.9780035));
    // setTimeout( function() {
    //   map.setZoom(14);
    // }, 2000);
  },

  addMarkersWW: function () {
    var map = this.map;
    map.setCenter(this.wwCoords.latitude, this.wwCoords.longitude);
    map.setZoom(2);
    map.addMarker({
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    });
  }

});
