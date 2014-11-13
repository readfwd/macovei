'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
var reasons = require('../lib/reasons-to-vote');
var _ = require('lodash');
var urlrepl = require('../lib/url-replace');

module.exports = View.extend({
  pageTitle: 'Monica Macovei Presedinte | Voteaza Macovei',
  template: templates.pages.voteazaMacovei,
  render: function () {
    _.forEach(reasons, function (reason) {
      // console.log(reason);
      reason.image = urlrepl(reason.image);
      console.log(reason.image);
    });
    this.$el.html(this.template({
      reasons: reasons
    }));
    return this;
  }
});
