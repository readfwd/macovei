#!/usr/bin/env node

var newrelic = require('newrelic');
var express = require('express');
var compression = require('compression');
var seo = require('mean-seo');
var routes = require('./app/js/lib/routes');
var posts = require('./app/js/lib/posts-json');
var _ = require('lodash');

var validRoutes = [];

function normalizeRoute(route) {
  return route.replace(/^\//, '').replace(/\/$/, '');
}
_.each(routes, function (route, path) {
  if (route.posts) {
    _.each(posts, function (post) {
      validRoutes.push(normalizeRoute('post/' + post.slug));
    });
  } else {
    validRoutes.push(normalizeRoute(path));
  }
});

var app = express();

// Enable gzip compression.
app.use(compression());

// Enable PhantomJS SEO.
if (process.env.REDISCLOUD_URL) {
  // If we've got Redis available, use that.
  app.use(seo({ cacheClient: 'rediscloud' }));
} else {
  // Otherwise, use regular disk-based cache.
  app.use(seo());
}

app.use(express.static(__dirname + '/dist'));

app.get('/sitemap.xml', function(request, response) {
  response.sendFile(__dirname + '/dist/sitemap.xml');
});

app.get('*', function(request, response) {
  var path = request.url.replace(/\?.*$/, '').replace(/\/$/, '').replace(/^\//, '');
  var found = false;
  for (var i = 0, n = validRoutes.length; i < n; i++) {
    if (validRoutes[i] === path) {
      found = true;
      return;
    }
  }
  response.status(found ? 200 : 404).sendFile(__dirname + '/dist/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Listening on port: ' + port + '.');
});
