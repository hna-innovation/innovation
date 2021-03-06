#!/bin/bash

docker run --rm -v /var/lib/jenkins/workspace/innovation_mobile/:/var/lib/jenkins/workspace/innovation_mobile \
-v /usr/local/innovative-ci/:/usr/local/innovative-ci/  -v /root/.ssh/id_rsa:/root/.ssh/id_rsa  \
-e ANSIBLE_HOST_KEY_CHECKING=False \
--workdir /var/lib/jenkins/workspace/innovation_mobile/bin/ansible \
dockerhub.hnair.cloud/baselibrary/ansible:1 ansible-playbook -i environments/$1/inventory \
-e "VERSION=$2" -e "ENV=$1" -e "NEXUS_URL=http://42.159.134.110:8081/repository/innovation-mobile/" innovation-mobile.yml
