FROM node:boron
MAINTAINER Walter Mazza <walter.mazza@spiritclips.com>

# This will cache NPM installs
# Docker will only rebuild if package.json changed
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --quiet
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

EXPOSE 80 9615

CMD ["./node_modules/.bin/pm2-docker", "start", "pm2.config.js", "--web"]
