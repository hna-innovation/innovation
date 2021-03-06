#!/bin/bash
set -e

VERSION="1.0"
NEXUS_URL="http://42.159.134.110:8081/repository/innovation-mobile/"
NEXUS_USER="admin:admin123"

docker run --rm -v /var/lib/jenkins/workspace/innovation_mobile:/var/lib/jenkins/workspace/innovation_mobile -v /root/.npm/:/root/.npm/ -v /root/.npmrc/:/root/.npmrc/ -v /root/.bowerrc/:/root/.bowerrc/ --workdir /var/lib/jenkins/workspace/innovation_mobile node:7.0-gulp \
npm run pact && \
curl -v -X PUT -H 'Content-Type: application/json' -d@test/pacts/mobile-site-innovation-api.json http://172.16.2.87:8000/pacts/provider/innovation-api/consumer/mobile-site/version/${1} &&\
gulp build

tar zcf innovation-mobile-${VERSION}.$1.tar.gz build/

curl --upload-file innovation-mobile-${VERSION}.$1.tar.gz  -u ${NEXUS_USER} -v ${NEXUS_URL}

