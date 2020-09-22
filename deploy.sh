#!/bin/bash
set -xe

eval "$(ssh-agent -s)"
ssh-add
CI=false npm run build
rsync -rq --delete --rsync-path="mkdir -p website && rsync" \
$TRAVIS_BUILD_DIR/build travis@165.232.46.140:../../var/www/sites/website
ssh travis@165.232.46.140 "pm2 restart" /var/www/configs/website.config.js
