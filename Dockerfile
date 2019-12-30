FROM centos:centos7
LABEL   MAINTAINER="sebferrer" \
         IMAGE_NAME="nodejs-mongoose-sample"

# ARG RPMS='nodejs mongodb-org'
ARG RPMS='nodejs'

WORKDIR /opt

# COPY mongodb-org.repo /etc/yum.repos.d/mongodb-org.repo

RUN mkdir nodejs-mongoose-sample &&\
    curl -sL https://rpm.nodesource.com/setup_10.x | bash - &&\
    rpm --rebuilddb &&\
    yum install -y --nogpgcheck ${RPMS} &&\
    yum -y clean all

WORKDIR /opt/nodejs-mongoose-sample

COPY package.json .
COPY package-lock.json .
COPY server.js .
COPY api api
# COPY import-test-users.sh .
# COPY json json

RUN chmod -R 755 /opt &&\
    npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]