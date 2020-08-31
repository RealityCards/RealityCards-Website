#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add
  npm run build
  rsync -rq --delete --rsync-path="mkdir -p website && rsync" \
  $TRAVIS_BUILD_DIR/public travis@134.122.107.221:website
else
  echo "Not deploying, since this branch isn't master."
fi