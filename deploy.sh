#!/usr/bin/env sh
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
# git push -f git@github.com:penspulse326/F2E2023-2.git main:test
# git push -f https://github.com/name/example-vite-react master:gh-pages
git push -f https://github.com/penspulse326/F2E2023-2 master:test

cd -
