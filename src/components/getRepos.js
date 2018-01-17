const axios = require('axios');
const baseUrl = 'https://bitbucket.corp.com/';

const {prettyJson} = require('./utility');
const credential =  require('./credential');
const username = credential.username;
const pw = credential.password;

module.exports = function getRepos (startIndex = 0) {
  const requestUrl = `rest/api/latest/repos?start=${startIndex}`;
  // console.log(`inside getRepos -> ${startIndex}`);
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
