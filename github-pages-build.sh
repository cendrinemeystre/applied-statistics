#!/bin/bash

ng build --base-href ./
cd docs
mv browser/* .
cp index.html 404.html
echo 'www.appliedstatistics.ch' > CNAME
