'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var dubi = require('../lib/dubi.json');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Dubi și Monica',
  template: templates.pages.dubi,
  render: function () {
    this.$el.html(this.template({
      dubi: dubi
    }));
    return this;
  }
});
