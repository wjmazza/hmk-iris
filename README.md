# hmk-iris
Iris

# Basic Intro

To run in local development using PM2 with one instance and watching (runs on port 8080):

    npm start

To run as a Docker container using PM2 without watching but max instances (based on CPU cores, runs on port 80):

    npm run docker

If you want to run locally, see node console output, and/or not use PM2, simply run:

    node app.js
    
# More Info

* Sharp - https://github.com/lovell/sharp
* PM2 - http://pm2.keymetrics.io/
* Docker - https://www.docker.com/
