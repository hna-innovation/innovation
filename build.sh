#!/bin/bash
clear

echo "Run git pull -rebase, get the last source code."
git pull -rebase

echo "Run gulp build, build the front-end code."
gulp build