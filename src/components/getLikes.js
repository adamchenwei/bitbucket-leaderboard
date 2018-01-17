const axios = require('axios');
const baseUrl = 'https://bitbucket.corp.com/';
const requestUrl = 'rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes';

const credential =  require('./credential');
const username = credential.username;
const pw = credential.password;

axios({
  url: requestUrl,
  method: 'get',
  baseURL: baseUrl,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  withCredentials: true,
  auth: {
    username,
    password: pw,
  },
}).then((response) => {
  console.log('SUCCESS');
  console.log(response.data);
})
.catch((error) => {
  console.log('ERROR');
  console.log(error.request);
  console.log('ERROR END-2----');
});
