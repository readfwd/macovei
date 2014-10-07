'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var videos = require('../lib/monica-in-dialog.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Monica în dialog',
  template: templates.pages.monicaInDialog,
  render: function () {
    this.$el.html(this.template({
      videos: videos
    }));
    return this;
  }
});
