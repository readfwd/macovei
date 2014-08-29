'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var Snap = require('../shims/snap');
var mina = require('../shims/mina');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Media',
  template: templates.pages.media,
  render: function () {
    this.$el.html(this.template());

    var speed = 300, easing = mina.backout;

    // Attach fancy ShapeHoverEffect listeners.
    this.$('.grid > a').each(function (index, el) {
      var s = Snap( el.querySelector('svg') ), path = s.select('path'),
        pathConfig = {
          from : path.attr('d'),
          to : el.getAttribute('data-path-hover')
        };

      el.addEventListener('mouseenter', function() {
        path.animate( { 'path' : pathConfig.to }, speed, easing );
      } );

      el.addEventListener( 'mouseleave', function() {
        path.animate( { 'path' : pathConfig.from }, speed, easing );
      } );
    });

    return this;
  }
});
