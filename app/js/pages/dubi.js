'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var dubi = require('../lib/dubi.json');
var _ = require('lodash');
var urlrepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Dubi și Monica',
  template: templates.pages.dubi,
  render: function () {
    _.forEach(dubi, function (comic, key) {
      dubi[key] = urlrepl(comic);
    });
    this.$el.html(this.template({
      dubi: dubi
    }));
    return this;
  }
});
