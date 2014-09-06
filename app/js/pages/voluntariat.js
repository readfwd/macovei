'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var $ = require('../shims/jquery');
var _ = require('lodash');

var markers = [
    {
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro<br>Adresa: Str. C.A. Rosetti nr. 17 <br> la "Lokal", Str M. Eminescu, nr. 57A.</p>',
        coordinators: 'Alina Daniela Bogdan & Mircea Șerdin',
        phone: '031.860.11.30',
        email: 'team@macoveipresedinte.ro',
        address: '(1)Sediul de campanie: Str. C.A. Rosetti nr. 17 & (2) la "Lokal", Str M. Eminescu, nr. 57A.'
      },
    },
    {
      lat: 46.783442,
      lng: 23.616512,
      title: 'Cluj-Napoca',
      infoWindow: {
        content: '<p>Coordonator: Andreea Rusu<br>0757.065.197<br>Andreea.rusu.cj@gmail.com<br> Punct depunere semnaturi: Calea Turzii nr.18-Cafeneaua "La Perne"</p>',
        coordinators: 'Andreea Rusu',
        phone: '0757.065.197',
        email: 'andreea.rusu.cj@gmail.com',
        address: 'Calea Turzii nr.18-Cafeneaua "La Perne"'
      }
    },
    {
      lat: 44.181357,
      lng: 28.629339,
      title: 'Constanta',
      infoWindow: {
        content: '<p>Coordonator: Mihai Petre<br>0744.340.918<br>mihaipetre77@yahoo.com</p>',
        coordinators: 'Mihai Petre',
        phone: '0744.340.918',
        email: 'mihaipetre77@yahoo.com',
        address: ''
      }
    }, 
    {
      lat: 45.437678,
      lng: 28.047494,
      title: 'Galati',
      infoWindow: {
        content: '<p>Coordonator: George Schin<br>0744.613.117<br>schingeorge@yahoo.com<br>Punct strângere semnături : birou mediator Anca Simona Cinepa Str  N Bălcescu nr 56 ( in curte la demisol)</p>',
        coordinators: 'George Schin',
        phone: '0744.613.117',
        email: 'schingeorge@yahoo.com',
        address: 'Birou mediator "Anca Simona Cinepa" Str  N Bălcescu nr 56 ( in curte la demisol)'
      }
    }, 
    {
      lat: 46.582,
      lng: 26.912,
      title: 'Bacau',
      infoWindow: {
        content: '<p>Coordonator: Petrica Danila<br>0745.542.626<br>petricadanila@gmail.com<br><br>Coordonator: Platon Mihai<br> 0740.042.611<br> plutonserv@yahoo.com<br>Punct depunere semnaturi: Calea Moldovei, nr. 35</p>',
        coordinators: 'Petrica Danila & Platon Mihai',
        phone: '0745.542.626 / 0740.042.611',
        email: 'petricadanila@gmail.com / plutonserv@yahoo.com',
        address: 'Calea Moldovei, nr. 35'

      }
    }, 
    {
      lat: 47.7375721,
      lng: 26.6594085,
      title: 'Botosani',
      infoWindow: {
        content: '<p>Coordonator: Lucian Buium<br>0751.401.127<br>luciabuium700@yahoo.com<br></p>',
        coordinators: 'Lucian Buium',
        phone: '0751.401.127',
        email: 'luciabuium700@yahoo.com',
        address: ''
      }
    }, 
    {
      lat: 45.694594,
      lng: 27.189102,
      title: 'Focsani',
      infoWindow: {
        content: '<p>Coordonator: Raluca Soare<br>0745.197.183<br>soare.raluca2009@gmail.com<br> Punct depunere semnaturi: Str. Revolutiei, nr. 19 (Sud, magazinul alimentar)</p>',
        coordinators: 'Raluca Soare',
        phone: '0745.197.183',
        email: 'soare.raluca2009@gmail.com',
        address: 'Str. Revolutiei, nr. 19 (Sud, magazinul alimentar)'

      }
    }, 
    {
      lat: 46.061722,
      lng: 23.584213,
      title: 'Alba Iulia',
      infoWindow: {
        content: '<p>Coordonator:  Ciprian Cucu<br />0722.733.831<br>cucu.ciprian@gmail.com</p>',
        coordinators: 'Ciprian Cucu',
        phone: '0722.733.831',
        email: 'cucu.ciprian@gmail.com',
        address: ''
      }
    },
    {
       lat: 47.154667,
       lng: 27.590446,
       title: 'Iasi',
       infoWindow: {
         content: '<p>Coordonator: Viorel Paraschiv<br>0748.997.793<br>paraschiv03@gmail.com</p>',
         coordinators: 'Viorel Paraschiv & Ambroz Octav Constantin',
         phone: '0748.997.793',
         email: 'paraschiv03@gmail.com',
         address: '(1)Strada "Stefan Cel Mare si Sfânt" la Tineret 2000 (popcorn vis-a-vis sediul PDL si PSD) sau (2) strada Bacinshi nr 2, bl C16-vis-a-vis de stația de tramvai de la Billa Gara sau lângă cofetăria Teiul. '
       }
     }, 
     {
       lat: 45.754809,
       lng: 21.228160,
       title: 'Timisoara',
       infoWindow: {
         content: '<p>Coordonator: <br>Piroska Bogdan<br>0727 214 432<br> piribogdan@gmail.com <br/>Avem doua corturi amplasate unde puteti semna intre orele 10:00-18:00: <br />(1) langa magazinul Bega in fata ceasului floral <br />(2) piata 700, vis-a-vis de statia de troleu.</p>',
         coordinators: 'Piroska Bogdan',
         phone: '0727 214 432',
         email: 'piribogdan@gmail.com',
         address: 'Avem două corturi amplasate unde puteți semna între orele 10:00-18:00: \n (1) lângă magazinul Bega în fața ceasului floral și \n (2) piața 700, vis-a-vis de stația de troleu.'

       }
     }, 
     {
      lat: 45.871769,
      lng: 22.916793,
      title: 'Deva',
      infoWindow: {
        content: '<p>Coordonator: Mirela Cristea<br>0769.684.820<br>mircristea@yahoo.fr<br> Punct depunere semnaturi: Str, Dorobantilor, nr. 30 (Patiseria Paticof, langa Foricon)</p>',
        coordinators: 'Mirela Cristea',
        phone: '0769.684.820',
        email: 'mircristea@yahoo.fr',
        address: 'Str, Dorobantilor, nr. 30 (Patiseria Paticof, langa Foricon)'
      }
    }, 
    {
      lat: 46.543967,
      lng: 24.561481,
      title: 'Târgu Mureș',
      infoWindow: {
        content: '<p>Coordonator: Dan Masca<br>0745.992.463<br>dan@reea.net<br> Punct depunere semnaturi: Piata Republicii, nr. 43</p>',
        coordinators: 'Dan Masca',
        phone: '0745.992.463',
        email: 'dan@reea.net',
        address: 'Piata Republicii, nr. 43'
      }
    }, 
    {
      lat: 47.047522,
      lng: 21.919097,
      title: 'Oradea',
      infoWindow: {
        content: '<p>Coordonator: Radu Popovici<br>0744.570.848<br>maiaduc@gmail.com<br> Punct depunere semnaturi: str.Calea Aradului, nr. 59</p>',
        coordinators: 'Radu Popovici',
        phone: '0744.570.848',
        email: 'maiaduc@gmail.com',
        address: 'str.Calea Aradului, nr. 59'
      }
    }, 
    {
      lat: 44.318858,
      lng: 23.806686,
      title: 'Craiova',
      infoWindow: {
        content: '<p>Coordonator:  Tiberiu Alexandru Brindusoiu<br>0728.253.102<br>tialexius@yahoo.com</p>',
        coordinators: 'Tiberiu Alexandru Brindusoiu',
        phone: '0728.253.102',
        email: 'tialexius@yahoo.com',
        address: ''
      }
    },
    {
      lat: 45.264700,
      lng: 27.961235,
      title: 'Braila',
      infoWindow: {
        content: '<p>Coordonator: Dragan Florin<br>0744.470.578 <br>draganbr75@gmail.com<br></p>',
        coordinators: 'Dragan Florin',
        phone: '0744.470.578',
        email: 'draganbr75@gmail.com',
        address: ''
      }
    },
    {
      lat: 44.268727,
      lng: 28.558273,
      title: 'Ovidiu',
      infoWindow: {
        content: '<p>Coordonator:  Corina Corneanu<br>0734.750.619<br>corinaianusi@yahoo.com</p>',
        coordinators: 'Corina Corneanu',
        phone: '0734.750.619',
        email: 'corinaianusi@yahoo.com',
        address: ''
      }
    },
    {
      lat: 43.810213,
      lng: 28.581962,
      title: 'Mangalia',
      infoWindow: {
        content: '<p>Coordonator:  Alexandru Blaj<br>0745.687.794<br>bljandrei@gmail.com</p>',
        coordinators: 'Alexandru Blaj',
        phone: '0745.687.794',
        email: 'bljandrei@gmail.com',
        address: ''
      }
    }
    // aici se inchide array-ul de puncte nationale
  ];
// sorteaza markers pe Romania dupa titlu
markers = _.sortBy(markers, 'title');


module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Voluntariat',
  template: templates.pages.voluntariat,

  render: function () {
    this.$el.html(this.template({
      markers: markers
    }));
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
    // var tabel = this.$('#volunteers tbody');
    for (var i in markers) {
      if (markers.hasOwnProperty(i)) {
        map.addMarker(markers[i]);
        // var contact = '<tr><td>' + markers[i].title + '</td><td>' + markers[i].infoWindow.content + '</td></tr>';
        // tabel.append(contact);
      }
    }
  },

  addMarkersWW: function () {
    var map = this.map;
    map.setCenter(this.wwCoords.latitude, this.wwCoords.longitude);
    map.setZoom(2);
    var markersWW = [{
      lat: 44.437917,
      lng: 26.094637,
      title: 'Bucuresti',
      infoWindow: {
        content: '<p>Coordonatori: Alina Daniela Bogdan &amp; Mircea Serdin<br>031.860.11.30<br>team@macoveipresedinte.ro</p>'
      }
    }];
    // var tabel = this.$('#volunteers tbody');
    // for (var i in markersWW) {
    //   if (markersWW.hasOwnProperty(i)) {
    //     map.addMarker(markersWW[i]);
    //     var contact = '<tr><td>' + markersWW[i].title + '</td><td>' + markersWW[i].infoWindow.content + '</td></tr>';
    //     tabel.append(contact);
    //   }
    // }
  }

});
