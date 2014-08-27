'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = window.postView = View.extend({
  template: templates.includes.postPreview,
  render: function () {
    var tmpl = templates.posts[this.model.attributes.slug];
    var locals = {
      url: '/posts/' + this.model.attributes.slug
    };
    tmpl(locals);
    this.$el.html(this.template(locals));
    return this;
  }
});
