'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  template: templates.includes.post,
  render: function () {
    var content = this.model.attributes.content;
    var url = this.model.attributes.alternate;

    // content = content.replace(/<(?:.|\n)*?>/gm, ' ');
    content = content.replace(/http(\S+)\s/gm, '');

    var MAXLEN = 280;
    if (content.length > MAXLEN) {
      content = content.substr(0, MAXLEN);
      content += '...';
    }

    this.$el.html(this.template({
      content: content,
      url: url
    }));
    return this;
  }
});
