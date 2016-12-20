'use strict';

const Url = require('url');
const Path = require('path');

const express = require('express');
const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();
const app = express();

app.get('/', healthCheck);
app.get('/image/:bucketId/*', getResource);
app.get('/v1/image/:bucketId/*', getResource);

app.listen(80, () => console.log('started'));

//////////////

function healthCheck(appRequest, appResponse) {

  appResponse.json({
    status: 'OK'
  });

}

function getResource(appRequest, appResponse) {

  let getObject = s3.getObject({
    Bucket: appRequest.params.bucketId,
    Key: appRequest.params[0]
  });
  let objectStream = getObject.createReadStream();

  let resizeWidth = parseInt(appRequest.query.width, 10) || null;
  let resizeHeight = parseInt(appRequest.query.height, 10) || null;

  let imageManipulator = sharp();

  getObject.on('success', function(resp) {

    let data = resp.data;

    appResponse.set('Cache-Control', data.CacheControl || 'max-age=7776000');
    appResponse.set('Content-Type', data.ContentType);

  });

  if (resizeWidth || resizeHeight) {

    imageManipulator = imageManipulator
      .resize(resizeWidth, resizeHeight)

  }

  objectStream
    .pipe(imageManipulator)
    .pipe(appResponse);

}
