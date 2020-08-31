#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add
  CI=false npm run build
  rsync -rq --delete --rsync-path="mkdir -p website && rsync" \
  $TRAVIS_BUILD_DIR/build travis@134.122.107.221:../../var/www/sites/website
  ssh travis@134.122.107.221 "sh" /var/www/configs/
else
  echo "Not deploying, since this branch isn't master."
fi