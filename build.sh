#!/bin/bash

echo "Run git pull -rebase, get the last source code."
git pull -r

echo "Run gulp build, build the front-end code."
gulp build
