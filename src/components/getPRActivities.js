const axios = require('axios');
const baseUrl = 'https://bitbucket.corp.com/';
const {prettyJson} = require('./utility');
const credential =  require('./credential');
const username = credential.username;
const pw = credential.password;

module.exports = function getPRActivities(prId) {
  const requestUrl = `rest/api/latest/projects/AIR/repos/flight-details/pull-requests/${prId}/activities`;

  return axios({
    url: `${baseUrl || ''}${requestUrl || ''}`,
    method: 'get',
    //headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true,
    auth: {
      username,
      password: pw,
    },
  });
}
// .then((response) => {
//   console.log('SUCCESS');
//   console.log(prettyJson(response.data.values[0]));
// })
// .catch((error) => {
//   console.log('ERROR');
//   console.log(prettyJson(error));
//   console.log('ERROR END-2----');
// });
