var json = require('./url-replacements.json');

module.exports = function (url) {
  var repl;
  if ((repl = json[url])) {
    return repl;
  }
  return url;
};
