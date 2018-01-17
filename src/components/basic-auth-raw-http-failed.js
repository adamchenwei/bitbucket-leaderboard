const http = require('http');
//const request = require('request');

const querystring = require('querystring');

const postData = querystring.stringify({
  'msg': 'Hello World!'
});

// const options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': Buffer.byteLength(postData)
//   }
// };

const options = {
  hostname: 'bitbucket.corp.com',
  port: 80,
  path: '/rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes',
  method: 'POST',
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   //'Content-Length': Buffer.byteLength(postData)
  // },
  auth: 'achenwei:88417338Allah365!!!!!!!!!',
  // auth: {
  //   user: 'achenwei',
  //   password: '88417338Allah365!!!!!!!!!',
  // }
};

const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();