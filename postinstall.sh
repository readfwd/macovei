#!/bin/bash

set -e

unset GIT_DIR

./node_modules/bower/bin/bower install
if [ "$NODE_ENV" == "production" ]; then
    ./node_modules/gulp/bin/gulp.js clean
    ./node_modules/gulp/bin/gulp.js build:dist
    mv ./app/js/lib/routes.json out-routes.json
    mv ./app/js/lib/posts-json.json out-posts-json.json
    rm -rf ./app ./test ./gulp
    mkdir -p ./app/js/lib
    mv out-routes.json ./app/js/lib/routes.json
    mv out-posts-json.json ./app/js/lib/posts-json.json
fi
