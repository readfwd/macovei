var express = require('express');
var compression = require('compression');
var seo = require('mean-seo');

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

app.get('*', function(request, response){
  response.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT);
