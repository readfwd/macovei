'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');
var _ = require('lodash');

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

    var markers = [{
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro<br>Adresa: Str. C.A. Rosetti nr. 17</p>'
      }
    },
    {
      lat: 46.783442,
      lng: 23.616512,
      title: 'Cluj-Napoca',
      infoWindow: {
        content: '<p>Coordonator: Andreea Rusu<br>0757.065.197<br>Andreea.rusu.cj@gmail.com<br> Punct depunere semnaturi: Calea Turzii nr.18-Cafeneaua "La Perne"</p>'
      }
    },
    {
      lat: 44.181357,
      lng: 28.629339,
      title: 'Constanta',
      infoWindow: {
        content: '<p>Coordonator: Mihai Petre<br>0744.340.918<br>mihaipetre77@yahoo.com</p>'
      }
    }, 
    {
      lat: 45.437678,
      lng: 28.047494,
      title: 'Galati',
      infoWindow: {
        content: '<p>Coordonator: George Schin<br>0744.613.117<br>schingeorge@yahoo.com</p>'
      }
    }, 
    {
      lat: 46.582,
      lng: 26.912,
      title: 'Bacau',
      infoWindow: {
        content: '<p>Coordonator: Petrica Danila<br>0745.542.626<br>petricadanila@gmail.com<br><br>Coordonator: Platon Mihai<br> 0740.042.611<br> plutonserv@yahoo.com<br>Punct depunere semnaturi: Calea Moldovei, nr. 35</p>'
      }
    }, 
    {
      lat: 47.7375721,
      lng: 26.6594085,
      title: 'Botosani',
      infoWindow: {
        content: '<p>Coordonator: Lucian Buium<br>0751.401.127<br>luciabuium700@yahoo.com<br></p>'
      }
    }, 
    {
      lat: 45.694594,
      lng: 27.189102,
      title: 'Focsani',
      infoWindow: {
        content: '<p>Coordonator: Mariana Bondila<br>0723.531.486<br>marianabondila@yahoo.com<br> Punct depunere semnaturi: Str. Revolutiei, nr. 19 (Sud, magazinul alimentar)</p>'
      }
    }, 
    {
      lat: 46.061722,
      lng: 23.584213,
      title: 'Alba Iulia',
      infoWindow: {
        content: '<p>Coordonator:  Ciprian Cucu<br>0722.733.831<br>cucu.ciprian@gmail.com</p>'
      }
    }, 
    // {
    //   lat: 47.067297,
    //   lng: 26.665534,
    //   title: 'Oradea',
    //   infoWindow: {
    //     content: '<p>Coordonator: Radu Popovici<br>0744.570.848<br>maiaduc@gmail.com<br> Punct depunere semnaturi: str.Calea Aradului, nr. 59</p>'
    //   }
    // }, 
    {
       lat: 47.154667,
       lng: 27.590446,
       title: 'Iasi',
       infoWindow: {
         content: '<p>Coordonator: Viorel Paraschiv<br>0748.997.793<br>paraschiv03@gmail.com</p>'
       }
     }, {
       lat: 45.754809,
       lng: 21.228160,
       title: 'Timisoara',
       infoWindow: {
         content: '<p>Coordonator: <br>Piroska Bogdan<br>0727 214 432<br> piribogdan@gmail.com <br/>Avem doua corturi amplasate unde puteti semna intre orele 10:00-18:00: <br />(1) langa magazinul Bega in fata ceasului floral <br />(2) piata 700, vis-a-vis de statia de troleu.</p>'
       }
     }, {
      lat: 45.871769,
      lng: 22.916793,
      title: 'Deva',
      infoWindow: {
        content: '<p>Coordonator: Mirela Cristea<br>0769.684.820<br>mircristea@yahoo.fr<br> Punct depunere semnaturi: Str, Dorobantilor, nr. 30 (Patiseria Paticof, langa Foricon)</p>'
      }
    }, {
      lat: 46.543967,
      lng: 24.561481,
      title: 'Târgu Mureș',
      infoWindow: {
        content: '<p>Coordonator: Dan Masca<br>0745.992.463<br>dan@reea.net<br> Punct depunere semnaturi: Piata Republicii, nr. 43</p>'
      }
    }, {
      lat: 47.047522,
      lng: 21.919097,
      title: 'Oradea',
      infoWindow: {
        content: '<p>Coordonator: Radu Popovici<br>0744.570.848<br>maiaduc@gmail.com<br> Punct depunere semnaturi: str.Calea Aradului, nr. 59</p>'
      }
    }, {
      lat: 44.318858,
      lng: 23.806686,
      title: 'Craiova',
      infoWindow: {
        content: '<p>Coordonator:  Tiberiu Alexandru Brindusoiu<br>0728.253.102<br>tialexius@yahoo.com</p>'
      }
    },
    {
      lat: 45.264700,
      lng: 27.961235,
      title: 'Braila',
      infoWindow: {
        content: '<p>Coordonator: Dragan Florin<br>0744.470.578 <br>draganbr75@gmail.com<br></p>'
      }
    },
    {
      lat: 44.268727,
      lng: 28.558273,
      title: 'Ovidiu',
      infoWindow: {
        content: '<p>Coordonator:  Corina Corneanu<br>0734.750.619<br>corinaianusi@yahoo.com</p>'
      }
    },
    {
      lat: 43.810213,
      lng: 28.581962,
      title: 'Mangalia',
      infoWindow: {
        content: '<p>Coordonator:  Alexandru Blaj<br>0745.687.794<br>bljandrei@gmail.com</p>'
      }
    }

// aici se inchide array-ul de puncte nationale
    ];
    var tabel = this.$('#volunteers tbody');

    markers = _.sortBy(markers, 'title');

    for (var i in markers) {
      if (markers.hasOwnProperty(i)) {
        map.addMarker(markers[i]);
        var contact = '<tr><td>' + markers[i].title + '</td><td>' + markers[i].infoWindow.content + '</td></tr>';
        tabel.append(contact);
      }
    }
    //map.addMarker({
     // lat: 46.164287,
    //  lng: 24.354286,
    //  title: 'Medias',
    //  infoWindow: {
    //    content: '<p>Coordonator: Tudor Dinca<br><br>tcdinca@gmail.com</p>'
    //  }
    //});
  },

  addMarkersWW: function () {
    var map = this.map;
    map.setCenter(this.wwCoords.latitude, this.wwCoords.longitude);
    map.setZoom(2);
    var markers = [{
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    }];
    var tabel = this.$('#volunteers tbody');
    for (var i in markers) {
      if (markers.hasOwnProperty(i)) {
        map.addMarker(markers[i]);
        var contact = '<tr><td>' + markers[i].title + '</td><td>' + markers[i].infoWindow.content + '</td></tr>';
        tabel.append(contact);
      }
    }
  }



});
