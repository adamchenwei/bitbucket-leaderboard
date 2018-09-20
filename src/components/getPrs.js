const axios = require('axios');
const baseUrl = 'https://bitbucket.com/';
const {prettyJson} = require('./utility');
const credential =  require('./credential');
const username = credential.username;
const pw = credential.password;

module.exports = function getPrs(startIndex = 0, prSlug = '', projectKey = '') {
  console.log('getPRs...');
  const requestUrl = `rest/api/latest/projects/${projectKey}/repos/${prSlug}/pull-requests?state=MERGED&start=${startIndex}`;
  console.log(`${baseUrl || ''}${requestUrl || ''}`);
  return axios({
    url: `${baseUrl || ''}${requestUrl || ''}`,
    method: 'get',
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: true,
    auth: {
      username,
      password: pw,
    },
  });
}
