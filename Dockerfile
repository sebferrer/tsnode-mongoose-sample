FROM centos:centos7
LABEL   MAINTAINER="sebferrer" \
         IMAGE_NAME="tsnode-mongoose-sample"

ARG RPMS='nodejs'

WORKDIR /opt

RUN mkdir nodejs-mongoose-sample &&\
    curl -sL https://rpm.nodesource.com/setup_10.x | bash - &&\
    rpm --rebuilddb &&\
    yum install -y --nogpgcheck ${RPMS} &&\
    yum -y clean all

WORKDIR /opt/nodejs-mongoose-sample

COPY package.json .
COPY package-lock.json .
COPY server.ts .
COPY api api

RUN chmod -R 755 /opt &&\
    npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]