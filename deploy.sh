#!/bin/bash
set -xe

eval "$(ssh-agent -s)"
ssh-add
CI=false npm run build
rsync -rq --delete --rsync-path="mkdir -p website && rsync" \
$TRAVIS_BUILD_DIR/build travis@104.248.166.92:../../var/www/sites/website
ssh travis@104.248.166.92 "pm2 restart" /var/www/configs/website.config.js
